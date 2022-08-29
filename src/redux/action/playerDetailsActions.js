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


export const createPlayer = createAsyncThunk(
  ActionTypes.CREATE_PLAYER,
  async (player) => {
    console.log(player)
    const mensajePlayer = await axios.post('http://localhost:3003/player/createPlayer', player)
    return mensajePlayer.data;
  }
);