import { createReducer } from "@reduxjs/toolkit";
import { editPlayer, clearEditPlayer } from "../action/playerDetailsActions";
import { 
  signupPlayer, 
  signinPlayer, 
  logoutPlayer, 
  fetchPlayerWithToken, 
  dontFetchPlayerWithToken, 
  finishDelay, 
  clearLog 
} from "../action/PlayerLogActions";
import { fetchHasFinished, fetchIsPending, saveToken, deleteToken } from '../../lib/util';

const initalState = {
  player: {},

  error: false,
  errorMsg: '',
  success: false,
  loading: false,

  errorEditPlayer: false,
  successEditPlayer: false,
  loadingEditPlayer: false,

  loadingFetchWithToken: true,
  delay: true,
};

const reducer = createReducer(initalState, builder => {

  builder

    .addCase(signupPlayer.pending, state => {
      state.loading = true;
    })
    .addCase(signupPlayer.fulfilled, (state, action) => {
      state.success = true;
      state.player = action.payload;
      saveToken(action.payload.player.id, action.payload.token);
    })
    .addCase(signupPlayer.rejected, (state, action) => {
      state.error = true;
      state.errorMsg = action.payload;
    })

    .addCase(signinPlayer.pending, state => {
      state.loading = true;
    })
    .addCase(signinPlayer.fulfilled, (state, action) => {
      state.success = true;
      state.player = action.payload;
      saveToken(action.payload.player.id, action.payload.token);
    })
    .addCase(signinPlayer.rejected, (state, action) => {
      state.error = true;
      state.errorMsg = action.payload;
    })

    .addCase(clearLog, state => {
      state.error = false;
      state.errorMsg = '';
      state.success = false;
      state.loading = false;
    })

    .addCase(logoutPlayer.pending, state => {
      state.loading = true;
    })
    .addCase(logoutPlayer.fulfilled, state => {
      state.success = true;
      state.player = {};
      deleteToken();
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

    .addCase(dontFetchPlayerWithToken, state => {
      state.loadingFetchWithToken = false;
    })

    .addCase(fetchPlayerWithToken.fulfilled, (state, action) => {
      state.loadingFetchWithToken = false;
      state.player = { player: action.payload };
    })
    .addCase(fetchPlayerWithToken.rejected, state => {
      state.loadingFetchWithToken = false;
    })

    .addCase(finishDelay, state => {
      state.delay = false;
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