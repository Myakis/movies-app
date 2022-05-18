import styled from 'styled-components';
import { useAppSelector } from '../../types/hooks';
import { InnerCircle, OuterCircle } from '../../UI/CircularProgress';
import Clock from './Clock/Clock';

const CircularProgress = () => {
  const startTime = useAppSelector(state => state.timer.initialTime);
  const currentTime = useAppSelector(state => state.timer.currentTime);

  const progress = currentTime! / (startTime! / 100);

  return (
    <OuterCircle progress={progress}>
      <InnerCircle>
        <Clock startTime={startTime!}></Clock>
      </InnerCircle>
    </OuterCircle>
  );
};

export default CircularProgress;
