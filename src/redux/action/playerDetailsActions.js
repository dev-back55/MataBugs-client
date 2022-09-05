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

export const editPlayer = createAsyncThunk(
  ActionTypes.EDIT_PLAYER,
  async (data) => {
    const playerEdited = await axios.put(`${API_ROUTE}/${data.idEditer}`, data)
    return playerEdited.data;
  }
);

export const clearEditPlayer = createAction(ActionTypes.CLEAR_EDIT_PLAYER);
