import { createReducer } from "@reduxjs/toolkit";
import { signupPlayer } from "../action/playerDetailsActions";
// import { fetchHasFinished, fetchIsPending } from '../../lib/util';

const initalState = {
  player: null,
  error: false,
  success: false,
  loading: false
};

const reducer = createReducer(initalState, builder => {

  builder
    .addCase(signupPlayer.pending, state => {
      state.loading = true;
    })
    .addCase(signupPlayer.fulfilled, (state, action) => {
      state.success = true;
      state.player = action.payload;
    })
    .addCase(signupPlayer.rejected, state => {
      state.error = true;
    })
});

export default reducer;