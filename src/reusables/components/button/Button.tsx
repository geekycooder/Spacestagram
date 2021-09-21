import React from 'react';
import { useState } from 'react';
import { BsFillHeartFill } from 'react-icons/bs';
import { Story } from '../../../types';

import styles from './Button.module.css';

const LikeButton = ({ index, story }: { index: number; story: Story }) => {
  const [liked, setLiked] = useState(
    story.liked || (localStorage.getItem(story.title) ? true : false) || false
  );

  const handleChange = () => {
    if (liked) {
      localStorage.removeItem(story.title);
    } else {
      localStorage.setItem(story.title, 'liked');
    }
    setLiked((prev) => !prev);
  };

  return (
    <>
      <input
        type='checkbox'
        id={'like' + index}
        className={`hidden ${styles.like}`}
        checked={liked}
        onChange={handleChange}
      />
      <label
        htmlFor={'like' + index}
        className={`flex ml-auto text-xs items-center cursor-pointer font-semibold ${styles.likeLabel} dark:text-gray-200`}
      >
        <div className={styles.heart}>
          <BsFillHeartFill size={16} className={`mr-2`} />
        </div>
        {liked ? 'Liked' : 'Like'}
      </label>
    </>
  );
};

export default LikeButton;
