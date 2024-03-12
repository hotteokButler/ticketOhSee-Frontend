import React, { useState } from 'react';
import Logo from '../../src/components/header/Logo';
import '../../src/assets/css/signup.css';
import { SubmitHandler, useForm } from 'react-hook-form';
import Button from '../../src/components/Button';
import SearchPost from '../../src/components/SearchPost';
import ErrorMessage from '../../src/components/ErrorMessage';


interface ISignUpForm {
  user_id: string;
  password: string;
  password_check: string;
  user_name: string;
  email: string;
  phone: number | string;
  address: string;
  detail_address?: string;
}

type IdExistType = 'unChecked' | 'canUse' | 'alreadyExist';
type PhoneValificationType = 'unChecked' | 'checked' | 'denied';

export default function SignUp() {
  const {
    register,
    watch,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<ISignUpForm>({ mode: 'all' });

  //아이디 중복체크
  const [idExist, setIdExist] = useState<IdExistType>('unChecked');
  const checkIdExists = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setIdExist('canUse');
  };

  //전화번호 인증 확인체크
  const [phoneValid, setPhoneValid] = useState<PhoneValificationType>('unChecked');
  const checkValidPhone = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setPhoneValid('checked');
  };

  //주소
  const [userAddress, setUserAddress] = useState('');
  const [searchAddress, setSearchAddress] = useState(false);

  // handle submit
  const onSubmit: SubmitHandler<ISignUpForm> = async (data) => {
    const { user_id, password, password_check, user_name, email, phone, address, detail_address } = data;

    // 아이디 검증 체크 유무 확인
    if (idExist === 'unChecked') {
      setError('user_id', { message: '아이디 중복확인이 필요합니다.' });
      return false;
    } else if (idExist === 'alreadyExist') {
      setError('user_id', { message: '동일한 아이디가 존재합니다.' });
      return false;
    }
    //
    if (phoneValid === 'unChecked') {
      setError('phone', { message: '휴대폰인증이 필요합니다.' });
      return false;
    } else if (phoneValid === 'denied') {
      setError('phone', { message: '휴대폰 인증이 거부되었습니다.\n다시 시도 부탁 드립니다.' });
      return false;
    }

    //
    if (password !== password_check) {
      setError('password', { message: '유효하지 않은 비밀번호 입니다.' });
      return false;
    }

    const new_data = {
      user_id: user_id.trim(),
      password: password,
      user_name: user_name.trim(),
      email: email.trim(),
      phone: typeof phone === 'string' ? phone.trim() : phone,
      address: ` ${address.trim()}  ${detail_address !== undefined ? detail_address.trim() : ''}`,
    };

    console.log(new_data);
  };
  return (
    <>
      <h1 className='sub_logo'>
        <Logo />
      </h1>
      <div className='signup_wrap'>
        <h2 className='sub_title'>회원가입</h2>

        <form onSubmit={handleSubmit(onSubmit)}>
          {/* 아이디 */}
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
          {errors.user_id && <ErrorMessage message={String(errors.user_id.message)} />}

          {/* 비밀번호 */}
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
          {errors.password && <ErrorMessage message={String(errors.password.message)} />}
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
          {errors.password_check && <ErrorMessage message={String(errors.password_check.message)} />}

          {/* 이름 */}
          <div className='signup_input_con'>
            <label htmlFor='user_name'>이름</label>
            <input
              type='text'
              id='user_name'
              placeholder='이름'
              {...register('user_name', {
                required: '이름을 입력해주세요.',
                pattern: {
                  value: /^[ㄱ-ㅎ가-힣a-zA-Z]*$/,
                  message: '한글 또는 영문으로 입력해주세요',
                },
              })}
            />
          </div>
          {errors.user_name && <ErrorMessage message={String(errors.user_name.message)} />}

          {/* 주소 */}
          <div className='signup_input_con'>
            <label htmlFor='address'>주소</label>
            <input
              type='text'
              id='address'
              value={userAddress}
              {...register('address', {
                required: '주소 검색 후 입력해주세요.',
                value: userAddress && userAddress,
              })}
              onClick={() => setSearchAddress((prev) => !prev)}
            />
            <button type='button' className='valid_check_btn' onClick={() => setSearchAddress((prev) => !prev)}>
              주소 검색
            </button>
            {/* search post modal */}
          </div>
          {searchAddress && <SearchPost setUserAddress={setUserAddress} setSearchAddress={setSearchAddress} />}
          <div className='signup_input_con detail_address_con'>
            <input type='text' id='detail_address' placeholder='상세주소 입력' {...register('detail_address')} />
          </div>
          {errors.address && <ErrorMessage message={String(errors.address.message)} />}

          {/* 이메일 */}
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
          {errors.email && <ErrorMessage message={String(errors.email.message)} />}

          {/* 휴대폰 */}
          <div className='signup_input_con'>
            <label htmlFor='phone'>휴대폰</label>
            <input
              type='text'
              id='phone'
              placeholder='010-1234-5678'
              {...register('phone', {
                required: '휴대폰번호를 입력해주세요.',
                pattern: {
                  value: /^([0-9]{3})-?([0-9]{3,4})-?([0-9]{4})$/,
                  message: '하이픈(-)을 포함해 입력해주세요',
                },
              })}
            />
            <button type='button' className='valid_check_btn' onClick={checkValidPhone}>
              인증번호 받기
            </button>
          </div>
          {errors.phone && <ErrorMessage message={String(errors.phone.message)} />}

          <Button
            btn_name='가입 완료'
            btn_style='bg-orange-500 text-white my-7 hover:bg-orange-300 max-w-sm mx-auto mt-20'
            btn_type='submit'
          />
        </form>
      </div>
    </>
  );
}
