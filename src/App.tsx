import { createContext, useEffect, useState } from 'react';
import styled from 'styled-components';

import Preloader from './components/common/Preloader/Preloader';
import Setting from './components/Setting/Setting';
import SettingButton from './components/Setting/SettingButton';
import Sound from './components/Sound/Sound';
import Tags from './components/Tags/Tags';
import Timer from './components/Timer/Timer';
import { initialApp } from './store/slice/timerSlice';
import { useAppDispatch, useAppSelector } from './types/hooks';
import { Error } from './UI/Error';

interface ButtonProps {
  isOpen: boolean;
  setOpen: (isOpen: boolean) => void;
}

export const ButtonProps = createContext<Partial<ButtonProps>>({});

function App() {
  const isReady = useAppSelector(state => state.timer.initialProject);
  const error = useAppSelector(state => state.timer.error);
  const [isOpen, setOpen] = useState(false);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(initialApp());
  }, []);

  if (error)
    return (
      <Error>
        <div>Произошла ошибка {error}</div>
      </Error>
    );
  if (!isReady) return <Preloader />;

  return (
    <ButtonProps.Provider value={{ isOpen, setOpen }}>
      <div>
        <Title>Pomodoro </Title>
        <Tags />
        <Timer />
        <Sound />
        <SettingButton />
        <Setting />
      </div>
    </ButtonProps.Provider>
  );
}

export default App;

const Title = styled.h1`
  padding: 2rem 0;
  font-size: 3rem;
  text-align: center;
  @media (max-width: 567px) {
    font-size: 2rem;
  }
`;
