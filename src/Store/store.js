import { configureStore } from '@reduxjs/toolkit'
import pageReducer from './pageSlice/pageSlice';

export const store = configureStore({
  reducer: {
    pageData:pageReducer,
  },
})