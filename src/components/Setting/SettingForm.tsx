import { Field, Form, Formik, FormikHelpers } from 'formik';
import { useContext } from 'react';
import styled from 'styled-components';

import { ButtonProps } from '../../App';
import { changeDataTime } from '../../store/slice/timerSlice';
import { useAppDispatch, useAppSelector } from '../../types/hooks';
import { Button, FieldInput } from '../../UI/Settings';
import { formValidate } from '../../utils/Form/ValidateDataTime';
import { IDataTime } from './Setting';

const FormSetting = () => {
  const valueTag = useAppSelector(state => state.timer.timeData.map(item => item.time / 60));
  const { setOpen } = useContext(ButtonProps);
  const dispatch = useAppDispatch();

  const initialValues: IDataTime = {
    Работа: valueTag[0],
    ['Короткий перерыв']: valueTag[1],
    ['Длинный перерыв']: valueTag[2],
  };

  const onSubmitHandler = (values: IDataTime, actions: FormikHelpers<IDataTime>) => {
    dispatch(changeDataTime(values));
    actions.setSubmitting(false);
    if (setOpen) {
      setOpen(false);
    }
  };

  return (
    <FormWrapper>
      <H2>Настройки</H2>
      <Formik initialValues={initialValues} validate={formValidate} onSubmit={onSubmitHandler}>
        {({ errors }) => (
          <Form>
            <FieldInput>
              <label htmlFor='work'>Работа (мин)</label>
              <Field
                id='work'
                className={errors.work && 'error'}
                autoComplete={'off'}
                max={60}
                min={1}
                name='Работа'
                type={'number'}
              />
            </FieldInput>
            <FieldInput>
              <label htmlFor='shortBreak'>Короткий перерыв (мин)</label>
              <Field
                id='shortBreak'
                className={errors.shortBreak && 'error'}
                autoComplete={'off'}
                max={60}
                min={1}
                name='Короткий перерыв'
                type={'number'}
              />
            </FieldInput>
            <FieldInput>
              <label htmlFor='longBreak'>Длинный перерыв (мин)</label>
              <Field
                id='longBreak'
                className={errors.longBreak && 'error'}
                autoComplete={'off'}
                max={60}
                min={1}
                name='Длинный перерыв'
                type={'number'}
              />
            </FieldInput>
            <FieldInput>
              <Button type='submit'>Сохранить</Button>{' '}
            </FieldInput>
          </Form>
        )}
      </Formik>
    </FormWrapper>
  );
};
export default FormSetting;

const FormWrapper = styled.div`
  max-width: 800px;
  width: 100%;

  @media (max-width: 850px) {
    width: 95%;
  }
`;
const H2 = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  text-align: center;
  @media (max-width: 567px) {
    font-size: 1.7rem;
  }
`;
