import { useState } from 'react';

import { selectTag } from '../../store/slice/timerSlice';
import { useAppDispatch, useAppSelector } from '../../types/hooks';
import { Tag, TagsContainer } from '../../UI/Tags';

const Tags = () => {
  const tagsList = useAppSelector(state => state.timer.timeData).map(item => item.title);
  const [active, setActive] = useState(0);
  const dispatch = useAppDispatch();

  const handlerClick = (i: number) => {
    setActive(i);
    dispatch(selectTag(i));
  };

  return (
    <TagsContainer>
      {tagsList.map((tag, i) => (
        <Tag active={active === i} key={i} onClick={() => handlerClick(i)}>
          {tag}
        </Tag>
      ))}
    </TagsContainer>
  );
};

export default Tags;
