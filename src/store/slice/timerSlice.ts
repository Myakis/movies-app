import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IDataTime } from './../../components/Setting/Setting';
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
  numberSelectTag: 0,
};

export const initialApp = createAsyncThunk<boolean, undefined, { rejectValue: string }>(
  'timer/initialApp',
  async (_, { rejectWithValue }) => {
    //Эмуляция подключения (В приложении не используюется данные с APi)
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
      state.numberSelectTag = action.payload;
    },
    startTimer(state) {
      state.currentTime = state.currentTime! - 1;
    },
    restartTimer(state) {
      state.currentTime = state.initialTime;
    },
    changeDataTime(state, action: PayloadAction<IDataTime>) {
      state.timeData = state.timeData.map(item => ({
        ...item,
        time: action.payload[item.title] < 60 ? action.payload[item.title] * 60 : 60 * 60,
      }));
      state.currentTime = state.timeData[state.numberSelectTag].time;
      state.initialTime = state.timeData[state.numberSelectTag].time;
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

export const { selectTag, startTimer, restartTimer, changeDataTime } = timerSlice.actions;
export default timerSlice.reducer;
