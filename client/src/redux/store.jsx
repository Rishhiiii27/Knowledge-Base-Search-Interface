import { configureStore } from '@reduxjs/toolkit';
import searchReducer from './redux/searchSlice';

export const store = configureStore({
  reducer: {
    search: searchReducer,
  },
});
