import { createReducer } from "@reduxjs/toolkit";
import { clearHallOfFame, getHallOfFame } from "../action/hallOfFameActions";
import { fetchHasFinished, fetchIsPending } from '../../lib/util';

const initalState = {
  hallOfFame: [],
  error: false,
  success: false,
  loading: false
};

const reducer = createReducer(initalState, builder => {

  builder

    .addCase(clearHallOfFame, state => {
      state.hallOfFame = [];
    })

    .addCase(getHallOfFame.pending, state => {
      state.loading = true;
    })
    .addCase(getHallOfFame.fulfilled, (state, action) => {
      state.success = true;
      state.hallOfFame = action.payload;
    })
    .addCase(getHallOfFame.rejected, state => {
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