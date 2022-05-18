import styled from 'styled-components';

export const TagsContainer = styled.div`
  background-color: inherit;
  height: 3rem;
  margin: 0 auto;
  width: 32rem;
  border-radius: 2rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  @media (max-width: 567px) {
    width: 90%;
    gap: 10px;
  }
`;
interface IPropsTAg {
  active: boolean;
}

export const Tag = styled.button<IPropsTAg>`
  transition: all 0.3s ease 0s;
  all: unset;
  flex: 1;
  height: 2.5rem;
  text-align: center;
  background-color: ${props => (props.active ? 'var(--main)' : 'var(--linear)')};
  border-radius: 2rem;
  font-size: 1rem;
  cursor: pointer;
`;
