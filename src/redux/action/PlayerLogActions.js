import { ActionTypes } from './index';
import axios from 'axios';
import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { API_ROUTE } from '../../lib/constants';
import { getHeaderWithToken, getToken } from '../../lib/util';

export const signupPlayer = createAsyncThunk(
  ActionTypes.SIGNUP_PLAYER,
  async (player, {rejectWithValue}) => {
    try {
      const newPlayer = await axios.post(`${API_ROUTE}/signup`, player)
      return newPlayer.data;
    }
    catch (error) {
      throw rejectWithValue(error?.response?.data);
    }
  }
);

export const signinPlayer = createAsyncThunk(
  ActionTypes.SIGNIN_PLAYER,
  async (player, {rejectWithValue}) => {
  try {
      const getPlayer = await axios.post(`${API_ROUTE}/login`, player)
      return getPlayer.data;
  } 
  catch (error) {
    throw rejectWithValue(error?.response?.data);
  }
});

export const logoutPlayer = createAsyncThunk(
  ActionTypes.PLAYER_HAS_LOGGED_OUT,
  async () => {
    await axios.get(`${API_ROUTE}/logout`);
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

export const clearLog = createAction(ActionTypes.CLEAR_LOG);
export const dontFetchPlayerWithToken = createAction(ActionTypes.NO_PLAYER_FETCHED_WITH_TOKEN);
export const finishDelay = createAction(ActionTypes.DELAY_FINISHED);