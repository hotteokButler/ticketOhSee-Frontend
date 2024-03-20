import React, { useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import { SubmitHandler, useForm } from 'react-hook-form';
import ErrorMessage from '../../src/components/ErrorMessage';

interface IFindToggleForm {
  user_id?: string;
  user_name?: string;
  email?: string;
  phone?: number | string;
}

interface IFindInputObj<T> {
  name: keyof T;
  required?: boolean;
  key?: number;
  type?: string;
  placeholder?: string | undefined;
}

interface IFindToggle<T> {
  toggle_title: string;
  field_name?: string | undefined;
  find_input_data?: Array<T>;
}

export default function FindToggle(props: IFindToggle<IFindInputObj<IFindToggleForm>>) {
  const [toggleActive, setToggleActive] = useState(false);
  const { toggle_title, field_name, find_input_data } = props;
  const {
    register: find_register,
    handleSubmit,
    reset,
    formState: { errors: find_errors },
  } = useForm<IFindToggleForm>({ mode: 'onChange' });

  const handleToggleActive = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    setToggleActive((prev) => !prev);
  };
  const onSubmit: SubmitHandler<IFindToggleForm> = (data) => {
    console.log(data);
    reset();
  };
  return (
    <>
      <div className='find_toggle_con'>
        <h4
          className={`toggle_title ${toggleActive ? 'bg-gray-500 text-white' : 'bg-gray-300'}`}
          onClick={handleToggleActive}
        >
          {toggle_title}
          <button
            type='button'
            className={`${toggleActive ? 'rotate-0' : 'rotate-180'} find_btn
          `}
          >
            <IoIosArrowDown />
          </button>
        </h4>
        <div className={`find_form_con ${toggleActive ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
          <form onSubmit={handleSubmit(onSubmit)} className='overflow-hidden' name={field_name}>
            {find_input_data &&
              find_input_data.map((elem, idx) => {
                const elemKey = elem.name;
                return (
                  <div key={idx}>
                    <input
                      type={elem.type || 'text'}
                      placeholder={elem.placeholder || ''}
                      {...find_register(`${elemKey}`, {
                        validate: (val) => (val ? true : '필수입력값입니다'),
                      })}
                    />
                    {elemKey in find_errors && <ErrorMessage message={String(find_errors[elemKey]?.message)} />}
                  </div>
                );
              })}
            <button type='submit'>확인</button>
          </form>
          {toggleActive && <hr className='find_hr' />}
        </div>
      </div>
    </>
  );
}
