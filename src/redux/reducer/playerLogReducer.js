import { createReducer } from "@reduxjs/toolkit";
import { signupPlayer, signinPlayer } from "../action/playerDetailsActions";
// import { fetchHasFinished, fetchIsPending } from '../../lib/util';

const initalState = {
  player: {},
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
    .addCase(signupPlayer.rejected, (state, action) => {
      state.error = action.error;
    })
    .addCase(signinPlayer.pending, state => {
      state.loading = true;
    })
    .addCase(signinPlayer.fulfilled, (state, action) => {
      state.success = true;
      state.player = action.payload;
    })
    .addCase(signinPlayer.rejected, (state, action) => {
      state.error = action.error;
    })
});

export default reducer;