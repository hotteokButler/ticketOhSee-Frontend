import React from 'react';
import Logo from './Logo';
import Search from './Search';
import HeaderMenu from './HeaderMenu';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <>
      <header className='header'>
        <Link className='inline-block' to='/'><Logo/></Link>
        <Search/>
        <HeaderMenu/>
      </header>
    </>
  );
}
