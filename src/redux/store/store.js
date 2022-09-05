import { configureStore } from "@reduxjs/toolkit";
import hallOfFameReducer from '../reducer/hallOfFameReducer';
import searchReducer from '../reducer/searchPlayersReducer';
import detailsReducer from '../reducer/playerDetailsReducer';
import playerLogPlayer from '../reducer/playerLogReducer';
import passwordReducer from '../reducer/passwordReducer';

export const store = configureStore({
  reducer: { 
    details: detailsReducer,
    player: playerLogPlayer,
    search: searchReducer,
    hallOfFame: hallOfFameReducer,
    password: passwordReducer
  },
  devTools: process.env.NODE_ENV !== "production"
});

export default store;