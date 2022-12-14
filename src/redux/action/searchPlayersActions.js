import { ActionTypes } from './index';
import axios from 'axios';
import { createAsyncThunk, createAction } from '@reduxjs/toolkit';

import { API_ROUTE } from '../../lib/constants';


export const searchPlayers = createAsyncThunk(
  ActionTypes.PLAYERS_FOUND,
  async (searchQuery) => {
    const players = await axios.get(`${API_ROUTE}/search?${searchQuery}`)
    return players.data;
  }
);

export const updateFilter = createAction(ActionTypes.FILTER_UPDATED);
export const updateFilterResetPage = createAction(ActionTypes.FILTER_UPDATED_RETURNED_TO_PAGE_ONE);
export const resetFilter = createAction(ActionTypes.FILTER_RESETED);

//export const clearPlayerDetails = createAction(ActionTypes.PLAYER_DETAILS_CLEARED);




