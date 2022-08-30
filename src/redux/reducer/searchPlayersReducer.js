import { createReducer, current } from "@reduxjs/toolkit";
import { searchPlayers, updateFilter, updateFilterResetPage } from "../action/searchPlayersActions";
import { fetchHasFinished, fetchIsPending } from '../../lib/util';

const initalState = {
  players: null,
  error: false,
  success: false,
  loading: false,

  search: "",
  order: "descending",
  orderBy: "ranking",
  status: "all",
  currentPage: 1,
  pages: 1,
  results: 0,
};

const reducer = createReducer(initalState, builder => {

  builder

    .addCase(updateFilterResetPage, (state, action) => {
      state[action.payload.field] = action.payload.newValue;
      state.currentPage = 1;
    })

    .addCase(updateFilter, (state, action) => {
      state[action.payload.field] = action.payload.newValue;
    })

    .addCase(searchPlayers.pending, state => {
      state.loading = true;
    })
    .addCase(searchPlayers.fulfilled, (state, action) => {
      state.success = true;
      
      state.players = action.payload.players;
      state.pages = action.payload.totalPages;
      state.results = action.payload.results 
    })
    .addCase(searchPlayers.rejected, state => {
      state.error = true;
    })

    .addMatcher(fetchIsPending, state => {
      state.error = false;
      state.success = false;
    })

    .addMatcher(fetchHasFinished, state => {
      state.loading = false;
    })
});

export default reducer;