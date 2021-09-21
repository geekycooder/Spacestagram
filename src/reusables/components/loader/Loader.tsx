import React from 'react';
import styles from './Loader.module.css';

const Loader = () => {
  return (
    <div className='h-5/6'>
      <div className={styles.orbit}>
        <img src='/images/earth.svg' alt='E' className={styles.orbitPlanet} />
      </div>
      <div className={styles.central}></div>
    </div>
  );
};

export default Loader;
