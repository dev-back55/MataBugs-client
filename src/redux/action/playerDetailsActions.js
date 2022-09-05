import { ActionTypes } from './index';
import axios from 'axios';
import { createAsyncThunk, createAction } from '@reduxjs/toolkit';
import { API_ROUTE } from '../../lib/constants';

export const clearPlayerDetails = createAction(ActionTypes.PLAYER_DETAILS_CLEARED);

export const getPlayerDetails = createAsyncThunk(
  ActionTypes.PLAYER_FOUND,
  async (playerId) => {
    const playerFound = await axios.get(`${API_ROUTE}/search?text=${playerId}`);
    return playerFound.data;
  }
);

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
  ActionTypes.LOGOUT_PLAYER,
  async () => {
    const logoutPlayer = await axios.get(`${API_ROUTE}/logout`)
    return logoutPlayer.data;
  }
);

export const editPlayer = createAsyncThunk(
  ActionTypes.EDIT_PLAYER,
  async (data) => {
    const playerEdited = await axios.put(`${API_ROUTE}/${data.idEditer}`, data)
    return playerEdited.data;
  }
);


export const clearEditPlayer = createAction(ActionTypes.CLEAR_EDIT_PLAYER);
