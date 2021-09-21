import React from 'react';
import { useLazyLoad } from '../hooks';
import { Story } from '../reusables';
import { Story as StoryType } from '../types';

interface Props {
  stories: StoryType[];
}

const Stories: React.FC<Props> = ({ stories }) => {
  useLazyLoad('loadLazy');

  return (
    <div className='py-0 sm:py-3 px-5 lg:px-0 w-full flex flex-wrap mt-5'>
      {stories.map((story, i) => (
        <Story story={story} key={i} index={i} />
      ))}
    </div>
  );
};

export default Stories;
