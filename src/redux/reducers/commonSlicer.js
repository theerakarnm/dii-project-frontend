import * as COMMON_ACTION from '../actions/commonAction';
import { createReducer, createSlice } from '@reduxjs/toolkit';

const initialState = {
  hasChange: false,
  cardModalData: {},
  isCardLoading: false,
  isModelOpen: false,
  editOpen: false,
  visible: false,
  pageLoading: false,
  userData: {
    name: '',
    username: '',
    profileUrl: '',
    bio: '',
    postCount: 0,
    diaryCount: 0,
    email: '',
    post: [],
  },
  openModal: () => {},
  closeHandler: () => {},
};

export const commonSlicer = createSlice({
  name: 'common',
  initialState,
  reducers: {
    TEST: (state, action) => {},
    setCardModalData: (state, action) => {},
    setIsCardLoading: (state, action) => {},
    setIsModelOpen: (state, action) => {},
    setEditOpen: (state, action) => {},
    setVisible: (state, action) => {},
    setHasChange: (state, action) => {},
    setPageLoading: (state, action) => {},
    setUserData: (state, action) => {
      console.log(action.payload);
      state.userData = action.payload;
    },
    setOpenModal: (state, action) => {},
  },
});

export const selectCommon = state => {
  console.log(state.common);
  return state.common;
};

export const action = commonSlicer.actions;
