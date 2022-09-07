import { ActionTypes } from './index';
import axios from 'axios';
import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { API_ROUTE } from '../../lib/constants';

export const createPlayerByAdmin = createAsyncThunk(
  ActionTypes.CREATE_PLAYER_BY_ADMIN,
  async (player) => {
    const newPlayer = await axios.post(`${API_ROUTE}/signup`, player)
    return newPlayer.data;
  }
);

export const enableCreatebyAdmin = createAction(ActionTypes.ENABLE_CREATE_BY_ADMIN);
export const clearStoreNewPlayer = createAction(ActionTypes.CLEAR_STORE_PLAYER_CREATED);

