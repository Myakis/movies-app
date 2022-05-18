import { configureStore } from '@reduxjs/toolkit';
import timerSlice from './slice/timerSlice';

const store = configureStore({
  reducer: {
    timer: timerSlice,
  },
});

export default store;

export type StoreType = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
