import { ActionTypes } from './index';
import axios from 'axios';
import { createAction, createAsyncThunk } from '@reduxjs/toolkit';

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
    await axios.post(`${API_ROUTE}/passwordtest`, passwordWithToken);
    return;
  }
);

export const clearPasswordModal = createAction(ActionTypes.PASSWORD_MODAL_CLEARED);