import { ActionTypes } from './index';
import axios from 'axios';
import { createAction, createAsyncThunk } from '@reduxjs/toolkit';

import { getHeaderWithToken, getToken } from '../../lib/util';
import { API_ROUTE } from '../../lib/constants';

export const sendEmailToRecoverPassword = createAsyncThunk(
  ActionTypes.EMAIL_SENT_TO_RECOVER_PASSWORD,
  async (emailToSend) => {
    await axios.post(`${API_ROUTE}/password`, { email: emailToSend });
    return;
  }
);

export const recoverPassword = createAsyncThunk(
  ActionTypes.PASSWORD_RECOVERED,
  async (passwordWithToken) => {
    await axios.put(`${API_ROUTE}/password`, passwordWithToken);
    return;
  }
);

export const changePassword = createAsyncThunk(
  ActionTypes.PASSWORD_CHANGED,
  async (bothPasswords, {dispatch, getState, rejectWithValue, fulfillWithValue}) => {
    let { token, id } = getToken();
    try {
      await axios.put(`${API_ROUTE}/password/${id}`, bothPasswords, getHeaderWithToken(token));
      fulfillWithValue(true);
    }
    catch(error) {
      throw rejectWithValue(error?.response?.data?.message);
    }
  }
);

export const clearPasswordModal = createAction(ActionTypes.PASSWORD_MODAL_CLEARED);