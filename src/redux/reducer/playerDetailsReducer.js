import { createReducer } from "@reduxjs/toolkit";
import { clearPlayerDetails, getPlayerDetails } from "../action/playerDetailsActions";
import { fetchHasFinished, fetchIsPending } from '../../lib/util';

const initalState = {
  player: null,
  error: false,
  success: false,
  loading: false,
  noPlayerFound: false,
};

const reducer = createReducer(initalState, builder => {

  builder

    .addCase(clearPlayerDetails, state => {
      state.player = null;
      state.noPlayerFound = false;
    })

    .addCase(getPlayerDetails.pending, state => {
      state.loading = true;
    })
    .addCase(getPlayerDetails.fulfilled, (state, action) => {
      state.success = true;
      if (action.payload.results === 1) state.player = action.payload.players;
      else state.noPlayerFound = true;
    })
    .addCase(getPlayerDetails.rejected, state => {
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