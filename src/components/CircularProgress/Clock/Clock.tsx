import React, { FC, useEffect, useState } from 'react';
import useSound from 'use-sound';

import { restartTimer, startTimer } from '../../../store/slice/timerSlice';
import { useAppDispatch, useAppSelector } from '../../../types/hooks';
import finish from '../../../assets/sound/end.mp3';
import tick from '../../../assets/sound/tik.mp3';
import { ClockContainer, StartPauseButton, TimerText } from '../../../UI/Clock';
import { getTime } from '../../../utils/converterTime';

interface IProps {
  startTime: number;
}

const Clock: FC<IProps> = ({ startTime }) => {
  const currentTime = useAppSelector(state => state.timer.currentTime);
  const time = useAppSelector(state => state.timer.currentTime);
  const volume = useAppSelector(state => state.sound.soundVolume);
  const [isFirstStart, setFirstStart] = useState(true);
  const [isActive, setActive] = useState(false);
  const dispatch = useAppDispatch();

  const [playFinish] = useSound(finish);
  const [playTick] = useSound(tick, {
    volume,
  });

  useEffect(() => {
    setFirstStart(true);
    setActive(false);
  }, [startTime]);

  useEffect(() => {
    if (isActive && time && time > 0) {
      const interval = setInterval(() => {
        dispatch(startTimer());
        playTick();
      }, 1000);
      return () => clearInterval(interval);
    }
    if (time === 0) {
      playFinish();
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
      <TimerText>{getTime(time)}</TimerText>
      {currentTime ? (
        <StartPauseButton onClick={toggleClock}>{buttonText}</StartPauseButton>
      ) : (
        <StartPauseButton onClick={restart}>Рестарт</StartPauseButton>
      )}
    </ClockContainer>
  );
};

export default Clock;
