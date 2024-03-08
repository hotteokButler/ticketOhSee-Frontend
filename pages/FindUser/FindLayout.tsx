import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import FindUser from './FindUser';
import FindPassword from './FindPassword';
import '../../src/assets/css/findlayout.css';

enum IFindLayoutPath {
  FindUser = '/users/find-user',
  FindPassword = '/users/find-password',
}

export default function FindLayout() {
  const location = useLocation();
  const { pathname } = location;

  return (
    <div id='user_findwrap'>
      <div className='find_tab_btn_wrap'>
        <Link
          className={`common_btn text-center bg-orange-600 text-white w-[48%] hover:bg-orange-300 
          ${pathname !== IFindLayoutPath.FindUser && 'opacity-50'}
          `}
          to='/users/find-user'
        >
          아이디 찾기
        </Link>
        <Link
          className={`common_btn text-center bg-orange-600 text-white w-[48%] hover:bg-orange-300
          ${pathname !== IFindLayoutPath.FindPassword && 'opacity-50'}
          `}
          to='/users/find-password'
        >
          비밀번호 찾기
        </Link>
      </div>

      <div className='find_con'>
        {pathname === IFindLayoutPath.FindUser && <FindUser />}
        {pathname === IFindLayoutPath.FindPassword && <FindPassword />}
      </div>
    </div>
  );
}
