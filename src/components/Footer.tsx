import React from 'react';

const Footer = () => {
  return (
    <div className='pt-4 pb-7 text-center'>
      <p className='text-sm text-gray-500 dark:text-gray-400 font-medium'>
        Brought to you by NASA's{' '}
        <a
          href='https://api.nasa.gov/'
          className='text-blue-600 hover:text-blue-500 dark:text-blue-500 dark:hover:text-blue-400'
          target='_blank'
          rel='noreferrer'
        >
          Astronomy Photo of the Day (APOD) API
        </a>
      </p>
    </div>
  );
};

export default Footer;
