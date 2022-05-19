import styled from 'styled-components';

export const Button = styled.button`
  padding: 1rem;
  border: none;
  border-radius: 5px;
  color: #4e4a4a;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease 0s;
  &:hover {
    background: #8b808092;
  }
  @media (max-width: 567px) {
    padding: 0.5rem;
    font-size: 0.9rem;
  }
`;

export const Framer = styled.div`
  position: absolute;
  top: 0;
  left: -100%;
  bottom: 0;
`;
export const CloseSetting = styled.div`
  position: absolute;
  top: 50px;
  right: 100px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  width: 30px;
  transition: all 0.3s ease 0s;
  &:hover {
    transform: rotate(-360deg);
  }
  * {
    width: 100%;
    height: 100%;
  }
  @media (max-width: 768px) {
    top: 26px;
    right: 30px;
  }
`;

export const SettingWrapper = styled.div`
  background: wheat;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  z-index: 5;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FieldInput = styled.div`
  display: flex;
  flex-direction: column;
  color: #4e4a4a;
  &:not(:last-child) {
    margin-bottom: 1.5rem;
  }
  input {
    border-radius: 5px;
    outline: none;
    border: none;
    padding: 1rem;
    @media (max-width: 567px) {
      padding: 0.5rem;
    }
  }
  label {
    margin-bottom: 0.3rem;
    font-size: 0.8rem;
  }
`;

// //////////////////////////Setting Button
export const SettingContainer = styled.div`
  position: absolute;
  top: 50px;
  left: 100px;

  @media (max-width: 567px) {
    top: 36px;
    left: 30px;
  }
`;
export const SettingIcon = styled.div`
  width: 40px;
  height: 40px;
  cursor: pointer;
  transition: all 0.3s ease 0s;
  &:hover {
    transform: rotate(360deg);
  }
  @media (max-width: 567px) {
    width: 30px;
    height: 30px;
  }
  * {
    width: 100%;
    height: 100%;
  }
`;
