import { ActionTypes } from './index';
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