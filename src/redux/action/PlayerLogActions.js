import { ActionTypes } from './index';
import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { API_ROUTE } from '../../lib/constants';

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