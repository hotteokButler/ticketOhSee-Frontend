import React, { useEffect, useState } from 'react';
import { IoIosAlert } from 'react-icons/io';

interface IError {
  message: string;
  state: boolean;
}

export default function ErrorPop(props: IError) {
  const { message, state } = props;
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (state) {
      setActive(true);
    }
  });

  return (
    <div className={`error_pop ${active ? 'active animate-fadeInOut' : 'none'}`}>
      <IoIosAlert /> <span>{message}</span>
    </div>
  );
}
