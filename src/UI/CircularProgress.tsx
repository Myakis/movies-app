import styled from 'styled-components';

interface IPropsOuterC {
  progress: number;
}
export const OuterCircle = styled.div<IPropsOuterC>`
  width: 99%;
  height: 99%;
  background: var(--main);
  border-radius: 50%;
  display: grid;
  place-items: center;
  background: conic-gradient(
    var(--main) ${({ progress }) => progress}%,
    transparent ${({ progress }) => progress}%
  );
`;

export const InnerCircle = styled.div`
  width: 98%;
  height: 98%;
  background: var(--clock);
  border-radius: 50%;
  display: grid;
  place-items: center;
`;
