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
  background: var(--clock);
  margin: 2rem auto;
  box-shadow: 9px 1px 47px -2px rgba(213, 69, 215, 0.2);
  border-radius: 50%;
  display: grid;
  place-items: center;
  @media (max-width: 768px) {
    width: 26rem;
    height: 26rem;
  }
  @media (max-width: 567px) {
    width: 18rem;
    height: 18rem;
    margin-top: 5rem;
  }
`;
