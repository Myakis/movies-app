import React, { FC, useEffect, useState } from 'react';

import { restartTimer, startTimer } from '../../../store/slice/timerSlice';
import { useAppDispatch, useAppSelector } from '../../../types/hooks';
import { ClockContainer, StartPauseButton, TimerText } from '../../../UI/Clock';
import { getTime } from '../../../utils/converterTime';

interface IProps {
  startTime: number;
}

const Clock: FC<IProps> = React.memo(({ startTime }) => {
  const currentTime = useAppSelector(state => state.timer.currentTime);
  const time = useAppSelector(state => state.timer.currentTime);
  const [isFirstStart, setFirstStart] = useState(true);
  const [isActive, setActive] = useState(false);
  const dispatch = useAppDispatch();

  useEffect(() => {
    setFirstStart(true);
    setActive(false);
  }, [startTime]);

  useEffect(() => {
    if (isActive && time && time > 0) {
      const interval = setInterval(() => {
        dispatch(startTimer());
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [time, isActive]);

  const toggleClock = () => {
    setActive(!isActive);
    setFirstStart(false);
  };

  const restart = () => {
    dispatch(restartTimer());
  };

  const buttonText =
    !isActive && isFirstStart ? 'Начать' : isActive && !isFirstStart ? 'Пауза' : 'Продолжить';

  return (
    <ClockContainer>
      <TimerText>{getTime(time!)}</TimerText>
      {currentTime ? (
        <StartPauseButton onClick={toggleClock}>{buttonText}</StartPauseButton>
      ) : (
        <StartPauseButton onClick={restart}>Рестарт</StartPauseButton>
      )}
    </ClockContainer>
  );
});

export default Clock;
