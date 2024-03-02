import React from 'react';
import Logo from '../../src/components/header/Logo';
import { SubmitHandler, useForm } from 'react-hook-form';
import '../../src/assets/css/login.css';
import Button from '../../src/components/Button';
import ErrorMessage from '../../src/components/ErrorMessage';
import { Link } from 'react-router-dom';

interface ILogInForm {
  user_id: string;
  password: string;
}

export default function Login() {
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<ILogInForm>({ mode: 'onBlur' });
  const onSubmit: SubmitHandler<ILogInForm> = (data) => console.log(data);

  return (
    <>
      <h1 className='sub_logo'>
        <Logo />
      </h1>
      <div className='login_wrap'>
        <h2 className='sub_title'>로그인</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='mb-4'>
            <label htmlFor='user_id'>아이디</label>
            <input
              className='login_input'
              id='user_id'
              type='text'
              placeholder='아이디'
              {...register('user_id', {
                required: '아이디는 필수 입력입니다.',
              })}
            />
            {errors.user_id && <ErrorMessage message={String(errors.user_id.message)} />}
          </div>
          <div>
            <label htmlFor='password'>비밀번호</label>
            <input
              className='login_input'
              id='password'
              type='password'
              placeholder='비밀번호'
              {...register('password', { required: '비밀번호는 필수 입력입니다.' })}
            />
            {errors.password && <ErrorMessage message={String(errors.password.message)} />}
          </div>
          <Button btn_name='로그인' btn_style='bg-orange-500 text-white my-4 hover:bg-orange-300' btn_type='submit' />
          <Button btn_name='구글 로그인' btn_style='bg-orange-700 text-white hover:bg-orange-300' btn_type='button' />
        </form>

        <ul className='login_tab'>
          <li>
            <Link to='/users/find-user'>아이디 찾기</Link>
          </li>
          <li>
            <Link to='/users/find-password'>비밀번호 찾기</Link>
          </li>
          <li>
            <Link to='/signup'>회원가입</Link>
          </li>
        </ul>
      </div>
    </>
  );
}
