import { Outlet } from "react-router"
import Footer from "./Footer"
import Navbar from './Navbar';
import NavbarAdmin from './NavAdmin';
import Dashboard from "../../Pages/Dashboard";


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
  