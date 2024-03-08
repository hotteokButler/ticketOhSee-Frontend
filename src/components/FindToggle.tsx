import React, { Dispatch, SetStateAction } from 'react';

export interface IFindToggle {
  setToggleAction: Dispatch<SetStateAction<boolean>>;
}

export default function FindToggle(props: IFindToggle) {
  const { setToggleAction } = props;

  return (
    <>
      <div className='find_toggle_con'>
        
      </div>
    </>
  );
}
