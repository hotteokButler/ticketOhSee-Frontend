import React from 'react';
import FindToggle from '../../src/components/FindToggle';

export default function FindUser() {
  return (
    <>
      <p className='find_info'>* 아이디를 찾을 방법을 선택해 주세요.</p>
      <FindToggle toggle_title='등록된 이메일로 찾기'/>
    </>
  );
}
