import React, { Dispatch, SetStateAction } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import { ChangeHandler, RegisterOptions, SubmitHandler, useForm } from 'react-hook-form';

interface IFindToggleForm {
  user_id?: string;
  user_name?: string;
  email?: string;
  phone?: number | string;
}

interface IFindInputObj {
  name: keyof IFindToggleForm;
  required?: boolean;
  key?: number;
  type?: string;
  placeholder?: string | undefined;
}

interface IFindToggle {
  toggle_title: string;
  find_input_data?: Array<IFindInputObj>;
  setToggleAction?: Dispatch<SetStateAction<boolean>>;
}

const findTestObj: Array<IFindInputObj> = [
  {
    type: 'text',
    name: 'user_name',
    placeholder: '이름',
  },
  {
    type: 'email',
    name: 'email',
    placeholder: '이메일',
  },
];

export default function FindToggle(props: IFindToggle) {
  const { toggle_title, setToggleAction, find_input_data } = props;
  const {
    register: find_register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IFindToggleForm>({ mode: 'onChange' });

  const onSubmit: SubmitHandler<IFindToggleForm> = () => {};
  return (
    <>
      <div className='find_toggle_con'>
        <h4 className='toggle_title'>
          {toggle_title}
          <button type='button'>
            <IoIosArrowDown />
          </button>
        </h4>
        <form onSubmit={handleSubmit(onSubmit)}>
          {findTestObj &&
            findTestObj.map((elem, idx) => (
              <input
                key={idx}
                type={elem.type || 'text'}
                placeholder={elem.placeholder || ''}
                {...find_register(`${elem.name}`, { validate: (val) => (val ? true : '필수입력값입니다') })}
              ></input>
            ))}
          <button type='submit'>확인</button>
        </form>
      </div>
    </>
  );
}
