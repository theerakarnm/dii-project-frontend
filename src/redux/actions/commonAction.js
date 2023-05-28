import { createAction } from '@reduxjs/toolkit';

export const setCardModalData = createAction('UPDATE_CARD_MODAL_DATA');
export const setIsCardLoading = createAction('UPDATE_CARD_LOADING');
export const setIsModelOpen = createAction('UPDATE_IS_MODEL_OPEN');
export const setEditOpen = createAction('UPDATE_EDIT_OPEN');
export const setVisible = createAction('UPDATE_VISIBLE');
export const setHasChange = createAction('UPDATE_HAS_CHANGE');
export const setPageLoading = createAction('UPDATE_PAGE_LOADING');
export const setUserData = createAction('UPDATE_USER_DATA');
export const setOpenModal = createAction('UPDATE_OPEN_MODAL');
