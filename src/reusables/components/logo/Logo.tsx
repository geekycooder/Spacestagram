import React from 'react';
import { IoMdRocket } from 'react-icons/io';

import styles from './Logo.module.css';

const Logo = () => {
  return (
    <div className='text-lg flex text-blue-600 dark:text-blue-400 sm:text-2xl font-semibold items-center'>
      Spaces
      <div className={styles.container}>
        <IoMdRocket size={22} className={styles.rocket} />
      </div>
      agram
    </div>
  );
};

export default Logo;
