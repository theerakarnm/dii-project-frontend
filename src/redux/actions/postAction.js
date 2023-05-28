import { createAction } from '@reduxjs/toolkit';

export const fetchPosts = createAction('FETCH_POSTS');
export const addPost = createAction('ADD_POST');
export const updatePost = createAction('UPDATE_POST');
export const deletePost = createAction('DELETE_POST');
