import React from 'react'
import { Outlet } from 'react-router-dom'
import NavbarAdmin from './NavbarAdmin'

interface Auth {
  isAuth: boolean;
}

function Layout(props: Auth) {
  console.log(props.isAuth);
  return (
    <div>
      {props.isAuth ? <NavbarAdmin /> : <></>}
      <div className="bg-[#F0EFF2]">
        <Outlet />
      </div>
    </div>
  )
}

export default Layout