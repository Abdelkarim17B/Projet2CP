import { useState } from "react"
import {NavLink, Link} from "react-router-dom"



function Navbar(){
  const [toggle , setToggle] = useState(false);

    return (
      <div className="w-full px-[9vw] py-[3vh] bg-white fixed shadow-md" style={{zIndex: 100}}>
        <div className="flex max-w-[82vw] justify-between align-center items-center">
            <Link to="/">
              <img className="sm:w-[25vw] md:w-[15vw] lg:w-[10vw]" src="/logo.png"></img>
            </Link>
            <ul className="md:flex hidden gap-[4vw] text-[1.7rem] lg:text-[1.4rem] md:text-[1.1rem] font-light text-Blue66">
                <li>
                  <NavLink to="/">Home</NavLink>
                </li>
                <li >
                  <NavLink to="/Catalogue">Catalogue</NavLink>
                </li>
                <li>
                  <NavLink to="/propos">À propos</NavLink>
                </li>
                <li>
                  <NavLink to="/Contactez">Contactez-nous</NavLink>
                </li>
            </ul>
            {(!toggle) ? <div className="flex flex-col gap-[1vh] md:hidden cursor-pointer" onClick={() => {setToggle(!toggle)}}>
                <div className="h-[3px] w-[7vw] bg-BlueDark rounded-[4px]"></div>
                <div className="h-[3px] w-[7vw] bg-BlueDark rounded-[4px]"></div>
                <div className="h-[3px] w-[7vw] bg-BlueDark rounded-[4px]"></div>
            </div> : <div className="flex flex-col items-center justify-center md:hidden cursor-pointer bg-BlueDark" onClick={() => {setToggle(!toggle)}}>
            <div className="h-[3px] w-[7vw] bg-BlueDark rounded-[4px] rotate-45 absolute"></div>
                <div className="h-[3px] w-[7vw] bg-BlueDark rounded-[4px] -rotate-45 absolute"></div>
              </div>
            }
        </div>
        {toggle && 
            <div>
              <ul className="flex flex-col gap-[4vw] text-[1.1rem] font-light pt-[3vh] text-Blue66 items-center ">
                <li>
                  <NavLink to="/">Home</NavLink>
                </li>
                <li >
                  <NavLink to="/Catalogue">Catalogue</NavLink>
                </li>
                <li>
                  <NavLink to="/propos">À propos</NavLink>
                </li>
                <li >
                  <NavLink to="/Contactez">Contactez-nous</NavLink>
                </li>
              </ul>
            </div>}
      </div>
    )
  }
  
  export default Navbar
  