import React from 'react'
import { Link } from 'react-router-dom'

export default function HeaderMenu() {
  return (
    <nav className='header_tab'>
      <ul>
        <li>
          <Link to='/login'>로그인</Link>
        </li>
        <li>
          <Link to='/signup'>회원가입</Link>
        </li>
        <li>
          <Link to='/'>마이페이지</Link>
        </li>
      </ul>
    </nav>
  )
}
