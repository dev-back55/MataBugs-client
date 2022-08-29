import { configureStore } from "@reduxjs/toolkit";
import detailsReducer from '../reducer/playerDetailsReducer';
import playerReducer from '../reducer/playerCreateReducer';
//import commonReducer from '../reducer/commonReducer';

export const store = configureStore({
  reducer: { details: detailsReducer, player: playerReducer },
  devTools: process.env.NODE_ENV !== "production"
});

export default store;