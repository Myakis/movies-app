import React, { FC, useContext } from 'react';
import { FiSettings } from 'react-icons/fi';

import { ButtonProps } from '../../App';
import { SettingContainer, SettingIcon } from '../../UI/Settings';

const SettingButton: FC = () => {
  const { setOpen } = useContext(ButtonProps);
  const clickHandlderOpen = () => {
    if (setOpen) {
      setOpen(true);
    }
  };
  return (
    <SettingContainer>
      <SettingIcon onClick={clickHandlderOpen}>
        <FiSettings />
      </SettingIcon>
    </SettingContainer>
  );
};

export default SettingButton;
