import { configureStore } from '@reduxjs/toolkit';
import * as reducers from './reducers';

export default configureStore({
  reducer: {
    user: reducers.userReducer,
    post: reducers.postReducer,
    common: reducers.commonReducer.commonSlicer.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
