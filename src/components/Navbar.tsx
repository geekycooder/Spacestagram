import React from 'react';
import { Logo, Toggle } from '../reusables';

const Navbar = () => {
  return (
    <div className='px-5 pt-3 flex justify-between lg:px-0 sm:py-3 w-full  items-center'>
      <Logo />
      <Toggle />
    </div>
  );
};

export default Navbar;
