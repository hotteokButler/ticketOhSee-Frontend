import React from 'react';
import Postcode, { IAddress } from '../util/Postcode';
import { IoIosCloseCircle } from 'react-icons/io';

export default function SearchPost({ user_address, setUserAddress, setSearchAddress }: IAddress) {
  return (
    setSearchAddress && (
      <div id='post_search_modal' className='post_search_modal'>
        <h3>
          주소 검색
          <button type='button' onClick={() => setSearchAddress((prev) => !prev)}>
            <IoIosCloseCircle />
          </button>
        </h3>
        <Postcode setUserAddress={setUserAddress} setSearchAddress={setSearchAddress} />
      </div>
    )
  );
}
