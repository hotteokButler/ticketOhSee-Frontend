import React from 'react';
import { IoIosAlert } from 'react-icons/io';

interface IError {
  message: string;
}

export default function ErrorMessage(props: IError) {
  const { message } = props;

  return (
    <div className='error'>
      <IoIosAlert /> <span>{message}</span>
    </div>
  );
}
