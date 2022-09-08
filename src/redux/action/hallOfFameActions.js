import { ActionTypes } from './index';
import axios from 'axios';
import { createAction, createAsyncThunk } from '@reduxjs/toolkit';

import { API_ROUTE } from '../../lib/constants';

export const clearHallOfFame = createAction(ActionTypes.HALL_OF_FAME_CLEARED);

export const getHallOfFame = createAsyncThunk(
  ActionTypes.HALL_OF_FAME_FOUND,
  async () => {
    const hallOfFameFound = await axios.get(`${API_ROUTE}/hallOfFame`);
    return hallOfFameFound.data;
  }
);