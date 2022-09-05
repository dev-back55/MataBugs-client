import { createReducer } from "@reduxjs/toolkit";
import { signupPlayer, signinPlayer, editPlayer, clearEditPlayer, logoutPlayer } from "../action/playerDetailsActions";
// import { fetchHasFinished, fetchIsPending } from '../../lib/util';

const initalState = {
  player: {},
  error: false,
  success: false,
  loading: false,
  errorEditPlayer: false,
  successEditPlayer: false,
  loadingEditPlayer: false
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
      console.log(action.error)
      state.error = action.error;
    })
    .addCase(editPlayer.pending, state => {
      state.loadingEditPlayer = true;
    })
    .addCase(editPlayer.fulfilled, (state, action) => {
      state.success = true;
      state.successEditPlayer = action.payload;
    })
    .addCase(editPlayer.rejected, (state, action) => {
      state.errorEditPlayer = action.error;
    })
    .addCase(clearEditPlayer, (state) => {
      state.errorEditPlayer = false;
      state.successEditPlayer = false;
      state.loadingEditPlayer = false;
    })
    .addCase(logoutPlayer.fulfilled, (state, action) => {
      state.player = {};
      state.error = false;
      state.success = false;
      state.loading = false;
    })
});

export default reducer;