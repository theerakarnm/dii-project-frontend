import * as POST from '../actions/postAction';
import { createReducer } from '@reduxjs/toolkit';

const userReducer = createReducer([], {
  [POST.fetchPosts]: (state) => {
    state.isLoading = true;
  },
  [POST.addPost]: (state, action) => {
    state.posts = action.payload;
    state.isLoading = false;
  },
  [POST.updatePost]: (state, action) => {
    state.posts = action.payload;
    state.isLoading = false;
  },
  [POST.deletePost]: (state, action) => {
    state.posts = action.payload;
    state.isLoading = false;
  },
});

export default userReducer;
