import { ActionTypes } from './index';
import axios from 'axios';
import { createAsyncThunk, createAction } from '@reduxjs/toolkit';
import { promisifiedSetTimeOut } from '../../lib/util';

export const getPlayer = createAsyncThunk(
  ActionTypes.PLAYER_FOUND,
  async (player) => {
    await promisifiedSetTimeOut(1000);
    return player;
  }
);

export const clearPlayerDetails = createAction(ActionTypes.PLAYER_DETAILS_CLEARED);


export const signupPlayer = createAsyncThunk(
  ActionTypes.SIGNUP_PLAYER,
  async (player) => {
    const newPlayer = await axios.post('http://localhost:3003/signup', player)
    return newPlayer.data;
  }
);

export const signinPlayer = createAsyncThunk(
  ActionTypes.SIGNIN_PLAYER,
  async (player) => {
    const getPlayer = await axios.post('http://localhost:3003/login', player)
    return getPlayer.data;
  }
);
