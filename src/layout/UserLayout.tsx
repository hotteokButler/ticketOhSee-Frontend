import React from 'react';
import { Outlet } from 'react-router-dom';
import Logo from '../components/header/Logo';

export default function UserLayout() {
  return (
    <>
      <h1 className='sub_logo'>
        <Logo />
      </h1>
      <div id='user_wrapper'>
        <Outlet />
      </div>
    </>
  );
}
