import React from 'react';
import { useEffect, useContext } from 'react';
import { BsMoon, BsSun } from 'react-icons/bs';

import { ThemeContext } from '../../../context';
import styles from './Toggle.module.css';

const Toggle = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const changeTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
    localStorage.setItem('theme', theme === 'light' ? 'dark' : 'light');
  };

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  return (
    <div className='flex items-center'>
      <BsSun
        className={`${
          theme === 'light' ? 'text-yellow-400' : 'text-gray-500'
        } text-xs sm:text-base mr-1 sm:mr-2`}
      />
      <div
        className={`${styles.toggle} ${
          theme === 'light' ? 'bg-blue-200' : 'bg-gray-700'
        }`}
        onClick={changeTheme}
      >
        <div
          className={`${styles.notch} ${
            theme === 'light'
              ? 'bg-blue-500 ' + styles.trLeft
              : 'bg-gray-400 ' + styles.trRight
          }`}
        />
      </div>
      <BsMoon
        className={`${
          theme === 'light' ? 'text-blue-300' : 'text-gray-100'
        } text-xs sm:text-base ml-1 sm:ml-2`}
      />
    </div>
  );
};

export default Toggle;
