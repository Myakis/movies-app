import { configureStore } from '@reduxjs/toolkit';

import soundSlice from './slice/soundSlice';
import timerSlice from './slice/timerSlice';

const store = configureStore({
  reducer: {
    timer: timerSlice,
    sound: soundSlice,
  },
});

export default store;

export type StoreType = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
