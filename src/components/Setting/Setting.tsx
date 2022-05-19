import { FC, useContext } from 'react';
import { AiOutlineClose } from 'react-icons/ai';

import { motion } from 'framer-motion';
import { CloseSetting, SettingWrapper } from '../../UI/Settings';
import FormSetting from './SettingForm';
import { ButtonProps } from '../../App';

const variants = {
  open: { opacity: 1, x: 0, left: 0 },
  closed: { opacity: 0, x: '-100%', left: '-100%' },
};

const Setting: FC = () => {
  const { setOpen, isOpen } = useContext(ButtonProps);
  const closeHandler = () => {
    setOpen!(false);
  };
  return (
    <motion.div
      className={'setting'}
      animate={isOpen ? 'open' : 'closed'}
      initial={false}
      variants={variants}>
      <SettingWrapper>
        <FormSetting />
        <CloseSetting onClick={closeHandler}>
          <AiOutlineClose />
        </CloseSetting>{' '}
      </SettingWrapper>
    </motion.div>
  );
};

export interface IDataTime {
  [key: string]: number;
}

export default Setting;
