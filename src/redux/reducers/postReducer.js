import { fetchApi } from '../../helpers/fetchApi';
import * as POST from '../actions/postAction';
import { createAsyncThunk, createReducer, createSlice } from '@reduxjs/toolkit';

const initialState = {
  alertValue: {
    isShow: false,
    color: 'green',
    context: '',
  },
  data: [],
  comments: [],
  loading: false,
  CommentModalVisible: false,
  postId: '',
  isFirstPostLoading: false,
  editPostProps: {
    content: '',
    entireLoading: false,
    isAbleEdit: false,
  },
};

export const postSlicer = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setIsAbleEdit: (state, action) => {
      state.editPostProps.isAbleEdit = action.payload;
    },
    setContent: (state, action) => {
      state.editPostProps.content = action.payload;
    },
    setEntireLoading: (state, action) => {
      state.editPostProps.entireLoading = action.payload;
    },
    setAlertValue: (state, action) => {
      state.alertValue = action.payload;
    },
    setData: (state, action) => {
      state.data = action.payload;
    },
    unshiftData: (state, action) => {
      state.data = [action.payload, ...state.data];
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setCommentModalVisible: (state, action) => {
      state.CommentModalVisible = action.payload;
    },
    setComments: (state, action) => {
      state.comments = action.payload;
    },
    setPostId: (state, action) => {
      state.postId = action.payload;
    },
    setIsFirstPostLoading: (state, action) => {
      state.isFirstPostLoading = action.payload;
    },
  },
});

export const selectPost = state => state.post;
export const postAction = postSlicer.actions;
