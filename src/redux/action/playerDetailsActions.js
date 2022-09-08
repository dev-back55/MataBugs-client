import { ActionTypes } from './index';
import axios from 'axios';
import { createAsyncThunk, createAction } from '@reduxjs/toolkit';
import { getHeaderWithToken, getToken } from '../../lib/util';
import { API_ROUTE } from '../../lib/constants';
import { getHeaderWithToken, getToken } from '../../lib/util';

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
  async (data, { rejectWithValue, fulfillWithValue }) => {
    try {
      let { token, id } = getToken();
<<<<<<< HEAD
      let newdata = {...data, idEditer: null }
       await axios.put(`${API_ROUTE}/player`, newdata, getHeaderWithToken(token))
       fulfillWithValue(true);
=======
      const playerEdited = await axios.put(`${API_ROUTE}/player`, data, getHeaderWithToken(token))
      return playerEdited.data;
>>>>>>> 927efd3eedb89c735d8fd268c7d1d9e1f370221b
    }
    catch (error) {
      throw rejectWithValue(error?.response?.data);
    }
  }
);

export const clearEditPlayer = createAction(ActionTypes.CLEAR_EDIT_PLAYER);

export const enableCreatebyAdmin = createAction(ActionTypes.ENABLE_CREATE_BY_ADMIN);

