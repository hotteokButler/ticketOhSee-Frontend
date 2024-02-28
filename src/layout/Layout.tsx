import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/header/Header'


export default function Layout() {
  return (
    <>
    {/* header */}
    <Header/>
    <div id="wrapper">
      <Outlet/>
    </div>
    </>

  )
}
