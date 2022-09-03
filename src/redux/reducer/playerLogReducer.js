import { createReducer } from "@reduxjs/toolkit";
import { editPlayer, clearEditPlayer } from "../action/playerDetailsActions";
import { signupPlayer, signinPlayer, logoutPlayer } from "../action/PlayerLogActions";
import { fetchHasFinished, fetchIsPending } from '../../lib/util';

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
      state.error = action.error;
    })

    .addCase(logoutPlayer.pending, state => {
      state.loading = true;
    })
    .addCase(logoutPlayer.fulfilled, state => {
      state.success = true;
      state.player = {};
    })
    .addCase(logoutPlayer.rejected, state => {
      state.error = true;
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

    .addMatcher(fetchIsPending, state => {
      state.error = false;
      state.success = false;
    })

    .addMatcher(fetchHasFinished, state => {
      state.loading = false;
    })
});

export default reducer;