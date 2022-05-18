import { useEffect } from 'react';
import styled from 'styled-components';
import Preloader from './components/common/Preloader/Preloader';
import Tags from './components/Tags/Tags';
import Timer from './components/Timer/Timer';
import { initialApp } from './store/slice/timerSlice';
import { useAppDispatch, useAppSelector } from './types/hooks';
import { Error } from './UI/Error';

function App() {
  const isReady = useAppSelector(state => state.timer.initialProject);
  const error = useAppSelector(state => state.timer.error);
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
    <div>
      <Title>Pomodoro</Title>
      <Tags />
      <Timer />
    </div>
  );
}

export default App;

const Title = styled.h1`
  padding: 2rem 0;
  font-size: 3rem;
  text-align: center;
`;
