import { Outlet } from "react-router"
import Footer from "./Footer"
import Navbar from "./Navbar"


function Layout(){
    return (
      <div>
        <Navbar />
        <Outlet />
        <Footer />    
      </div>

    )
  }
  
  export default Layout
  