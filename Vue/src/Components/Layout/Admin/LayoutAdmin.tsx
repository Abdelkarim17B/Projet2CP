import React from 'react'
import { Outlet } from 'react-router-dom'
import NavbarAdmin from './NavbarAdmin'


function LayoutAdmin() {

  return (
    <div>
      <NavbarAdmin />
      <div className="bg-[#F0EFF2]">
        <Outlet />
      </div>
    </div>
  )
}

export default LayoutAdmin