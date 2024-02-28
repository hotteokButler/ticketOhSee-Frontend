import React from 'react'
import { IoSearch } from "react-icons/io5";

export default function Search() {
  return (
    <div className='input_search'>
      <label htmlFor="search">검색</label>
      <input type="text" id='search'/>
      <button><IoSearch /></button>
    </div>
  )
}
