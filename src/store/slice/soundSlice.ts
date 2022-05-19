import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IInitialState {
  soundVolume: 0 | 1;
}

const initialState: IInitialState = {
  soundVolume: 1,
};

const soundSlice = createSlice({
  name: 'sound',
  initialState,
  reducers: {
    toggleValue(state, action: PayloadAction<0 | 1>) {
      state.soundVolume = action.payload;
    },
  },
});

export const { toggleValue } = soundSlice.actions;
export default soundSlice.reducer;
