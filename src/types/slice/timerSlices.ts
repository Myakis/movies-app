export interface ITags {
  title: string;
  time: number;
}

export interface IInitialState {
  timeData: Array<ITags>;
  currentTime: number | null;
  initialTime: number | null;
  initialProject: boolean;
  error: null | string;
  numberSelectTag: number;
}
