import { selectTag } from '../../store/slice/timerSlice';
import { useAppDispatch, useAppSelector } from '../../types/hooks';
import { Tag, TagsContainer } from '../../UI/Tags';

const Tags = () => {
  const tagsList = useAppSelector(state => state.timer.timeData).map(item => item.title);
  const activeSelect = useAppSelector(state => state.timer.numberSelectTag);
  const dispatch = useAppDispatch();

  const handlerClick = (i: number) => {
    dispatch(selectTag(i));
  };

  return (
    <TagsContainer>
      {tagsList.map((tag, i) => (
        <Tag active={activeSelect === i} key={i} onClick={() => handlerClick(i)}>
          {tag}
        </Tag>
      ))}
    </TagsContainer>
  );
};

export default Tags;
