import { createReducer } from "@reduxjs/toolkit";
import { clearPasswordModal, sendEmailToRecoverPassword } from "../action/passwordActions";
import { fetchHasFinished, fetchIsPending } from '../../lib/util';

const initalState = {
  error: false,
  success: false,
  loading: false,
  playerNotFound: false
};

const reducer = createReducer(initalState, builder => {

  builder

    .addCase(clearPasswordModal, state => {
      state.error = false;
      state.success = false;
      state.loading = false;
      state.playerNotFound = false;
    })

    .addCase(sendEmailToRecoverPassword.pending, state => {
      state.loading = true;
    })
    .addCase(sendEmailToRecoverPassword.fulfilled, (state, action) => {
      state.success = true;
      console.log(action.payload);
    })
    .addCase(sendEmailToRecoverPassword.rejected, (state, action) => {
      state.error = true;
      if (action.error.message.includes("400")) state.playerNotFound = true;
    })

    .addMatcher(fetchIsPending, state => {
      state.error = false;
      state.success = false;
      state.playerNotFound = false;
    })

    .addMatcher(fetchHasFinished, state => {
      state.loading = false;
    })
});

export default reducer;