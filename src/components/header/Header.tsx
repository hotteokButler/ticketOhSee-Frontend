import React from 'react';
import Logo from './Logo';
import Search from './Search';
import HeaderMenu from './HeaderMenu';

export default function Header() {
  return (
    <>
      <header className='header'>
        <Logo/>
        <Search/>
        <HeaderMenu/>
      </header>
    </>
  );
}
