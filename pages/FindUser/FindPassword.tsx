import React from 'react';
import FindToggle from '../../src/components/FindToggle';

export default function FindPassword() {
  return (
    <>
      <p className='find_info'>* 비밀번호를 찾을 방법을 선택해 주세요.</p>
      <FindToggle
        toggle_title='등록된 이메일로 찾기'
        field_name='find_pw_by_email'
        find_input_data={[
          { type: 'text', name: 'user_id', placeholder: '아이디' },
          { type: 'text', name: 'user_name', placeholder: '이름' },
          { type: 'email', name: 'email', placeholder: '이메일' },
        ]}
      />
      <FindToggle
        toggle_title='등록된 휴대폰번호로 찾기'
        field_name='find_pw_by_email'
        find_input_data={[
          { type: 'text', name: 'user_id', placeholder: '아이디' },
          { type: 'text', name: 'user_name', placeholder: '이름' },
          { type: 'text', name: 'phone', placeholder: '전화번호' },
        ]}
      />
    </>
  );
}
