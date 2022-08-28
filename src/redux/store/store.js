import { configureStore } from "@reduxjs/toolkit";
import detailsReducer from '../reducer/playerDetailsReducer';
//import commonReducer from '../reducer/commonReducer';

export const store = configureStore({
  reducer: { details: detailsReducer },
  devTools: process.env.NODE_ENV !== "production"
});

export default store;