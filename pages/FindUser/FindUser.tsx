import React from 'react';
import FindToggle from './FindToggle';

export default function FindUser() {
  return (
    <>
      <p className='find_info'>* 아이디를 찾을 방법을 선택해 주세요.</p>
      <FindToggle
        toggle_title='등록된 이메일로 찾기'
        field_name='find_id_by_email'
        find_input_data={[
          { type: 'text', name: 'user_name', placeholder: '이름' },
          { type: 'email', name: 'email', placeholder: '이메일' },
        ]}
      />
      <FindToggle
        toggle_title='등록된 휴대폰번호로 찾기'
        field_name='find_id_by_phone'
        find_input_data={[
          { type: 'text', name: 'user_name', placeholder: '이름' },
          { type: 'text', name: 'phone', placeholder: '전화번호' },
        ]}
      />
    </>
  );
}
