import { createReducer } from "@reduxjs/toolkit";
import { createPlayerByAdmin, enableCreatebyAdmin, clearStoreNewPlayer } from "../action/createPlayerByAdminActions";

const initalState = {
  playerCreated: {},

  error: false,
  success: false,
  loading: false,

  createbyAdmin: false  
};

const reducer = createReducer(initalState, builder => {

  builder

    .addCase(createPlayerByAdmin.pending, state => {
      state.loading = true;
    })
    .addCase(createPlayerByAdmin.fulfilled, (state, action) => {
      state.success = true;
      state.playerCreated = action.payload;
    })
    .addCase(createPlayerByAdmin.rejected, (state, action) => {
      state.error = action.error;
    })
    .addCase(enableCreatebyAdmin, state => {
      state.createbyAdmin = true;
    })
    .addCase(clearStoreNewPlayer, state => {
      state.playerCreated = {};
      state.error = false;
      state.success = false;
      state.loading = false;
      state.createbyAdmin = false;
    })
});

export default reducer;