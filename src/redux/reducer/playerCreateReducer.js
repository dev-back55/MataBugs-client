import { createReducer } from "@reduxjs/toolkit";
import { createPlayer } from "../action/playerDetailsActions";
// import { fetchHasFinished, fetchIsPending } from '../../lib/util';

const initalState = {
  player: null,
  error: false,
  success: false,
  loading: false
};

const reducer = createReducer(initalState, builder => {

  builder

    // .addCase(clearPlayerDetails, state => {
    //   state.player = null;
    // })

    .addCase(createPlayer.pending, state => {
      state.loading = true;
    })
    .addCase(createPlayer.fulfilled, (state, action) => {
      state.success = true;
      state.player = action.payload;
    })
    .addCase(createPlayer.rejected, state => {
      state.error = true;
    })

    // .addMatcher(fetchIsPending, state => {
    //   state.error = false;
    //   state.success = false;
    // })

    // .addMatcher(fetchHasFinished, state => {
    //   state.loading = false;
    // })
});

export default reducer;