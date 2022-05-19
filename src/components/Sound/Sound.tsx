import React from 'react';
import { GiSoundOff, GiSoundOn } from 'react-icons/gi';

import { useAppDispatch, useAppSelector } from '../../types/hooks';
import { toggleValue } from '../../store/slice/soundSlice';
import { SoundContainer, SoundIcon } from '../../UI/Sound';

const Sound = () => {
  const volume = useAppSelector(state => state.sound.soundVolume);
  const dispatch = useAppDispatch();

  const handlerToggleVolume = () => {
    if (volume > 0) {
      dispatch(toggleValue(0));
    } else {
      dispatch(toggleValue(1));
    }
  };
  return (
    <SoundContainer>
      <SoundIcon onClick={handlerToggleVolume}>{volume ? <GiSoundOn /> : <GiSoundOff />}</SoundIcon>
    </SoundContainer>
  );
};

export default Sound;
