import * as USER_ACTION from '../actions/userAction';
import { createReducer } from '@reduxjs/toolkit';

const initialState = {
  user: {
    id: '',
    name: '',
    email: '',
    imageProfile: '',
    role: '',
    token: '',
  },
  isLoading: false,
  isError: false,
  errorMessage: '',
};

const userReducer = createReducer(initialState, {
  [USER_ACTION.fetchUser]: (state) => {
    state.isLoading = true;
  },
  [USER_ACTION.updateUser]: (state, action) => {
    state.user = action.payload;
    state.isLoading = false;
  },
});

export default userReducer;
