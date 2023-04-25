import { Outlet } from "react-router"
import Footer from "./Footer"
import Navbar from "./Navbar"


function Layout(){
    return (
      <div>
        <Navbar language="Français"/>
        <Outlet />
        <Footer />    
      </div>

    )
  }
  
  export default Layout
  