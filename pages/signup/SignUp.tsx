import React, { useState } from 'react';
import Logo from '../../src/components/header/Logo';
import '../../src/assets/css/signup.css';
import { useForm } from 'react-hook-form';
import Button from '../../src/components/Button';

interface ISignUpForm {
  user_id: string;
  password: string;
  password_check: string;
  user_name: string;
  email: string;
  phone: number | string;
  address: string;
}

export default function SignUp() {
  const {
    register,
    setValue,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<ISignUpForm>({ mode: 'onChange' });
  const onSubmit = handleSubmit((data) => console.log(data));

  //아이디 중복체크
  const [idExist, setIdExist] = useState(false);
  const checkIdExists = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  //전화번호 인증 확인체크
  const [phoneValid, setPhoneValid] = useState(false);
  const checkValidPhone = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  return (
    <>
      <h1 className='sub_logo'>
        <Logo />
      </h1>
      <div className='signup_wrap'>
        <h2 className='sub_title'>회원가입</h2>

        <form onSubmit={onSubmit}>
          <div className='signup_input_con'>
            <label htmlFor='user_id'>아이디</label>
            <input
              type='text'
              id='user_id'
              placeholder='6~20자 영문 또는 숫자 포함'
              {...register('user_id', {
                required: '필수입력사항입니다.',
                pattern: {
                  value: /^[a-zA-Z0-9]{6,20}$/,
                  message: '6~20자 영문 또는 숫자가 포함되어야 합니다.',
                },
              })}
            />
            <button type='button' className='valid_check_btn' onClick={checkIdExists}>
              아이디 중복확인
            </button>
          </div>
          <div className='signup_input_con'>
            <label htmlFor='password'>비밀번호</label>
            <input
              type='password'
              id='password'
              placeholder='6자 이상 영문,숫자,특수문자 포함'
              {...register('password', {
                required: '필수입력사항입니다.',
                pattern: {
                  value: /^(?=.*[a-zA-Z])(?=.*[?!@#$%^*+=-])(?=.*[0-9]).{6,20}$/,
                  message: '숫자,영문,특수문자 조합으로 6자리 이상 입력해주세요',
                },
              })}
            />
          </div>
          <div className='signup_input_con'>
            <label htmlFor='password'>비밀번호 확인</label>
            <input
              type='password'
              id='password_check'
              placeholder='6자 영문,숫자,특수문자 포함'
              {...register('password_check', {
                required: '비밀번호 확인을 입력해주세요.',
                validate: (val) => (watch().password !== val ? '비밀번호가 일치하지 않습니다' : true),
              })}
            />
          </div>
          <div className='signup_input_con'>
            <label htmlFor='user_name'>이름</label>
            <input
              type='text'
              id='user_name'
              placeholder='이름'
              {...register('user_name', {
                required: '이름을 입력해주세요.',
                pattern: {
                  value: /^[가-힣a-zA-Z]$/,
                  message: '한글 또는 영문으로 입력해주세요',
                },
              })}
            />
          </div>
          <div className='signup_input_con'>
            <label htmlFor='address'>주소</label>
            <button type='button' className='valid_check_btn'>
              주소 검색
            </button>
            <div>
              <input type='text' name='detail_address' id='detail_address' placeholder='상세주소 입력' />
            </div>
          </div>
          <div className='signup_input_con'>
            <label htmlFor='email'>이메일</label>
            <input
              type='text'
              id='email'
              placeholder='이메일'
              {...register('email', {
                required: '이메일을 입력해주세요.',
                pattern: {
                  value: /^[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i,
                  message: '이메일이 형식에 맞지 않습니다',
                },
              })}
            />
          </div>
          <div className='signup_input_con'>
            <label htmlFor='phone'>휴대폰</label>
            <input
              type='text'
              id='phone'
              placeholder='010-1234-5678'
              {...register('phone', {
                required: '휴대폰번호를 입력해주세요.',
                pattern: {
                  value: /^\d{3}-\d{(3, 4)}-\d{4}$/,
                  message: '하이픈(-)을 포함해 입력해주세요',
                },
              })}
            />
            <button type='button' className='valid_check_btn' onClick={checkValidPhone}>
              인증번호 받기
            </button>
          </div>
          <Button
            btn_name='가입 완료'
            btn_style='bg-orange-500 text-white my-7 hover:bg-orange-300'
            btn_type='submit'
          />
        </form>
      </div>
    </>
  );
}
