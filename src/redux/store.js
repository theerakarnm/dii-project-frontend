import { configureStore } from '@reduxjs/toolkit';
import * as reducers from './reducers';

export default configureStore({
  reducer: {
    user: reducers.userReducer,
    post: reducers.postSlicer.reducer,
    common: reducers.commonSlicer.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
