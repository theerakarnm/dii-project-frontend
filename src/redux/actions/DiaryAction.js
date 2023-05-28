import { createAction } from '@reduxjs/toolkit';

export const fetchDiaries = createAction('FETCH_DIARIES');
export const addDiary = createAction('ADD_DIARY');
export const updateDiary = createAction('UPDATE_DIARY');
export const deleteDiary = createAction('DELETE_DIARY');
