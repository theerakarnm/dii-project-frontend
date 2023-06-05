import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchApi } from '../../helpers/fetchApi';

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
};

export const commonSlicer = createSlice({
  name: 'common',
  initialState,
  reducers: {
    setCardModalData: (state, action) => {
      state.cardModalData = action.payload;
    },
    setIsCardLoading: (state, action) => {
      state.isCardLoading = action.payload;
    },
    setIsModelOpen: (state, action) => {
      state.isModelOpen = action.payload;
    },
    setEditOpen: (state, action) => {
      state.editOpen = action.payload;
    },
    setVisible: (state, action) => {
      state.visible = action.payload;
    },
    setHasChange: (state, action) => {
      state.hasChange = action.payload;
    },
    setPageLoading: (state, action) => {
      state.pageLoading = action.payload;
    },
    setUserData: (state, action) => {
      console.log(action.payload);
      state.userData = action.payload;
    },
    setPostId: (state, action) => {
      state.postId = action.payload;
    },
  },
});

export const selectCommon = state => {
  return state.common;
};

export const commonAction = commonSlicer.actions;
