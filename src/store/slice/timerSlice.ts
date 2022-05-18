import { AnyAction, createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IInitialState } from '../../types/slice/timerSlices';

const initialState: IInitialState = {
  initialProject: false,
  timeData: [
    {
      title: 'Работа',
      time: 1500,
    },
    { title: 'Короткий перерыв', time: 900 },
    { title: 'Длинный перерыв', time: 1800 },
  ],
  currentTime: null,
  initialTime: null,
  error: null,
};

export const initialApp = createAsyncThunk<boolean, undefined, { rejectValue: string }>(
  'timer/initialApp',
  async (_, { rejectWithValue }) => {
    const response = await fetch(`https://reqres.in/api/users/1`);
    if (!response || !response.ok) {
      return rejectWithValue('Некорректные данные');
    }

    return true;
  },
);

const timerSlice = createSlice({
  name: 'timer',
  initialState,
  reducers: {
    selectTag(state, action: PayloadAction<number>) {
      state.currentTime = state.timeData[action.payload].time;
      state.initialTime = state.timeData[action.payload].time;
    },
    startTimer(state) {
      state.currentTime = state.currentTime! - 1;
    },
    restartTimer(state) {
      state.currentTime = state.initialTime;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(initialApp.pending, state => {
        state.error = null;
        state.initialProject = false;
      })
      .addCase(initialApp.fulfilled, (state, action) => {
        state.currentTime = state.timeData[0].time;
        state.initialTime = state.timeData[0].time;
        state.initialProject = true;
      })
      .addCase(initialApp.rejected, (state, action) => {
        if (action.payload) {
          state.error = action.payload;
        } else {
          state.error = action.error.message!;
        }
      });
  },
});

export const { selectTag, startTimer, restartTimer } = timerSlice.actions;
export default timerSlice.reducer;
