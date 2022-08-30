import { configureStore } from "@reduxjs/toolkit";
import detailsReducer from '../reducer/playerDetailsReducer';
import playerLogPlayer from '../reducer/playerLogReducer';
//import commonReducer from '../reducer/commonReducer';

export const store = configureStore({
  reducer: { details: detailsReducer, player: playerLogPlayer },
  devTools: process.env.NODE_ENV !== "production"
});

export default store;