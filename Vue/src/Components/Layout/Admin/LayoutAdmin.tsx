import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import NavbarAdmin from './NavbarAdmin'


function LayoutAdmin() {
  console.log(window.location.pathname);
  const [location , setLocation] = useState(window.location.pathname)
  return (
    <div>
      {(location == "/admin" || location == "/Admin" || location == "/admin/" || location == "/Admin/") ? <></> : <NavbarAdmin/>}
      <div className="bg-[#F0EFF2]">
        <Outlet />
      </div>
    </div>
  )
}

export default LayoutAdmin