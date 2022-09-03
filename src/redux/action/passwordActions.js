import { ActionTypes } from './index';
import axios from 'axios';
import { createAction, createAsyncThunk } from '@reduxjs/toolkit';

import { API_ROUTE } from '../../lib/constants';

export const sendEmailToRecoverPassword = createAsyncThunk(
  ActionTypes.EMAIL_SENT_TO_RECOVER_PASSWORD,
  async (emailToSend) => {
    const result = await axios.post(`${API_ROUTE}/password`, { email: emailToSend });
    return result.data;
  }
);

export const clearPasswordModal = createAction(ActionTypes.PASSWORD_MODAL_CLEARED);