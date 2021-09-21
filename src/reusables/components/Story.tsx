import React, { useContext } from 'react';
import { BsCalendarFill, BsCardImage } from 'react-icons/bs';
import { DataContext, ThemeContext } from '../../context';

import { Story as StoryType } from '../../types';
import LikeButton from './button/Button';

interface Props {
  story: StoryType;
  index: number;
}

const Story: React.FC<Props> = ({ story, index }) => {
  const { setSelectedStory } = useContext(DataContext);
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={`w-full md:w-1/2 py-3 ${index % 2 && 'md:pl-3'} ${
        index % 2 === 0 && 'md:pr-3'
      } dark:bg-darkCard `}
    >
      <div
        className={`rounded-md overflow-hidden`}
        style={{ boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px' }}
      >
        {story.media_type === 'image' ? (
          <img
            data-src={story.url}
            alt={story.title}
            className='h-80 w-full max-w-full object-cover loadLazy'
          />
        ) : (
          <div className='h-80 w-full grid place-items-center'>
            <BsCardImage
              size={80}
              className='text-gray-400 dark:text-gray-100'
            />
          </div>
        )}
        <div className='px-4 py-4 pb-6'>
          <h2 className='font-semibold text-blue-600 dark:text-blue-500'>
            {story.title}
          </h2>
          <p
            className={`text-sm mt-2  transition-all text-gray-700 h-36 explaination dark:text-gray-300 hover:${
              theme === 'light' ? 'bg-gray-100' : 'bg-gray-800'
            } cursor-pointer`}
            onClick={() => setSelectedStory(index)}
          >
            {story.explanation}
          </p>
          <div className=' text-gray-500 flex mt-3 justify-between'>
            <div className='flex text-xs dark:text-gray-300'>
              <BsCalendarFill
                size={14}
                className='text-gray-400 mr-2 dark:text-gray-300'
              />
              {story.date}
            </div>
            <div>
              <LikeButton story={story} index={index} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Story;
