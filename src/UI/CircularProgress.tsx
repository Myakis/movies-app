import styled from 'styled-components';

interface IPropsOuterC {
  progress: number;
}
export const OuterCircle = styled.div<IPropsOuterC>`
  width: 29.5rem;
  height: 29.5rem;
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
  width: 28rem;
  height: 28rem;
  background: var(--lightPrimary);
  border-radius: 50%;
  display: grid;
  place-items: center;
`;
