import { useContext } from 'react';
import Modal from 'react-modal';
import { BsCalendarFill, BsCardImage } from 'react-icons/bs';
import { IoClose } from 'react-icons/io5';

import { DataContext } from '../context';
import LikeButton from '../reusables/components/button/Button';
const StoryModal = () => {
  const { selectedStory, data, setSelectedStory } = useContext(DataContext);

  const story = selectedStory !== null && data && data[selectedStory];

  const closeModal = () => {
    setSelectedStory(null);
  };

  return story ? (
    <Modal
      isOpen={selectedStory !== null}
      onRequestClose={closeModal}
      className='Modal'
      overlayClassName='Overlay'
    >
      <div className='bg-white dark:bg-darkCard h-full rounded-md overflow-hidden relative'>
        <button
          className='absolute text-gray-100 top-2 right-2'
          onClick={closeModal}
        >
          <IoClose size={22} className='text' />
        </button>
        {story.media_type === 'image' ? (
          <img
            src={story.hdurl}
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
        <div className='px-8 py-4 pb-6'>
          <h2 className='font-semibold text-blue-600 dark:text-blue-500'>
            {story.title}
          </h2>
          <p className='text-sm mt-2 text-gray-700 dark:text-gray-300'>
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
              <LikeButton story={story} index={selectedStory!} />
            </div>
          </div>
        </div>
      </div>
    </Modal>
  ) : null;
};

export default StoryModal;
