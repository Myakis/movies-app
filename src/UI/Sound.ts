import styled from 'styled-components';

export const SoundContainer = styled.div`
  position: absolute;
  top: 50px;
  right: 100px;

  @media (max-width: 567px) {
    top: 36px;
    right: 30px;
  }
`;
export const SoundIcon = styled.div`
  width: 40px;
  height: 40px;
  cursor: pointer;
  @media (max-width: 567px) {
    width: 30px;
    height: 30px;
  }
  * {
    width: 100%;
    height: 100%;
  }
`;
