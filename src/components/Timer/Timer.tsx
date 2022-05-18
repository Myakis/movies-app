import styled from 'styled-components';
import CircularProgress from '../CircularProgress/CircularProgress';

const Timer = () => {
  return (
    <TimerContainer>
      <CircularProgress />
    </TimerContainer>
  );
};

export default Timer;

const TimerContainer = styled.div`
  width: 30rem;
  height: 30rem;
  background: var(--lightPrimary);
  margin: 2rem auto;
  border-radius: 50%;
  display: grid;
  place-items: center;
`;
