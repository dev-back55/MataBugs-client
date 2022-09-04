import { ActionTypes } from './index';
import axios from 'axios';
import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { API_ROUTE } from '../../lib/constants';
import { getHeaderWithToken, getToken } from '../../lib/util';

export const signupPlayer = createAsyncThunk(
  ActionTypes.SIGNUP_PLAYER,
  async (player) => {
    const newPlayer = await axios.post(`${API_ROUTE}/signup`, player)
    return newPlayer.data;
  }
);

export const signinPlayer = createAsyncThunk(
  ActionTypes.SIGNIN_PLAYER,
  async (player) => {
    const getPlayer = await axios.post(`${API_ROUTE}/login`, player)
    return getPlayer.data;
  }
);

export const logoutPlayer = createAsyncThunk(
  ActionTypes.PLAYER_HAS_LOGGED_OUT,
  async () => {
    await axios.post(`${API_ROUTE}/logout`);
  }
);

export const fetchPlayerWithToken = createAsyncThunk(
  ActionTypes.PLAYER_FETCHED_WITH_TOKEN,
  async () => {
    let { token, id } = getToken();
    const playerFetched = await axios.post(`${API_ROUTE}/reload`, { id }, getHeaderWithToken(token));
    return playerFetched.data;
  }
);

export const dontFetchPlayerWithToken = createAction(ActionTypes.NO_PLAYER_FETCHED_WITH_TOKEN);
export const finishDelay = createAction(ActionTypes.DELAY_FINISHED);