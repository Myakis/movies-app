import styled from 'styled-components';

export const StartPauseButton = styled.div`
  display: grid;
  place-items: center;
  color: black;
  cursor: pointer;
`;
export const TimerText = styled.h2`
  all: unset;
  font-size: 7rem;
  @media (max-width: 567px) {
    font-size: 4rem;
  }
`;

export const ClockContainer = styled.button`
  all: unset;
  text-align: center;
  font-size: 2.5rem;
  color: black;
  @media (max-width: 567px) {
    font-size: 2rem;
  }
`;
