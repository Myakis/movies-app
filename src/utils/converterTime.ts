export const getTime = (time: number | null) => {
  if (time == null) return 'ошибка';
  const minutes = Math.floor(time / 60);
  const second = Math.floor(time % 60);
  return `${minutes < 10 ? '0' + minutes : minutes}:${second < 10 ? '0' + second : second}`;
};
