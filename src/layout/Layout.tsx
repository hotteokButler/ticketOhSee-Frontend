import React from 'react'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <>
    {/* header */}
    <h1>layout</h1>
    <div id="wrapper">
      <Outlet/>
    </div>
    </>

  )
}
