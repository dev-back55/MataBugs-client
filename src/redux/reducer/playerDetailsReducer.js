import { createReducer } from "@reduxjs/toolkit";
import { getPlayer } from "../action/playerDetailsActions";
import { fetchHasFinished, fetchIsPending } from '../../lib/util';

const initalState = {
  player: {},
  error: false,
  success: false,
  loading: false
};

const reducer = createReducer(initalState, builder => {

  builder

    .addCase(getPlayer.pending, state => {
      state.loading = true;
    })
    .addCase(getPlayer.fulfilled, (state, action) => {
      state.success = true;
      state.player = action.payload;
    })
    .addCase(getPlayer.rejected, state => {
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