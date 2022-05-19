import { IDataTime } from '../../components/Setting/Setting';

interface IValidateForm {
  work: string;
  shortBreak: string;
  longBreak: string;
}
type TKey = 'work' | 'longBreak' | 'shortBreak';
export const formValidate = (values: IDataTime) => {
  const errors = {} as IValidateForm;
  const valuesTitle = Object.keys(values);

  valuesTitle.forEach(item => {
    let key: TKey = 'work';
    if (item === 'Короткий перерыв') {
      key = 'shortBreak';
    } else if (item === 'Длинный перерыв') {
      key = 'longBreak';
    }
    if (!values[item]) {
      errors[key] = 'Обязательно поле';
    } else if (values[item] < 1 || values[item] > 60) {
      errors[key] = 'Число должно находиться в промежутке от 1 до 60';
    } else if (typeof values[item] !== 'number') {
      errors[key] = 'Должно быть числом';
    }
  });

  return errors;
};
