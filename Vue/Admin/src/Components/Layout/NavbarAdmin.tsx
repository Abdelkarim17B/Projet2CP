import { useState } from "react"
import {Link, NavLink} from "react-router-dom"
import {  FaChevronUp, FaChevronDown, } from "react-icons/fa";

function NavbarAdmin() {
    const [isOpen, setIsOpen] = useState(false);
    return (
    <div className="h-[56px] md:h-[64px] xl:h-[100px] w-full px-[9vw] py-[3vh] bg-white fixed z-1000 shadow-md mb-[5vh]">
        <div className="">

        </div>
        <div className="flex justify-between align-center items-start">
            <div className="flex justify-between items-center w-[50vw]">
              <Link to="/">
              <img className="" src="/logo.png"></img>
              </Link>
              <ul className="flex gap-[4vw] text-[1.5rem]">
                <li className="NavInactive">
                  <NavLink to="/dashboard">Accueil</NavLink>
                </li>
                <li className="NavInactive">
                  <NavLink to="/banques">Banques</NavLink>
                </li>
                <li className="NavInactive">
                  <NavLink to="/annonces">Annonces</NavLink>
                </li>
                
              </ul>
            </div>
            <div className="flex flex-col gap-[2vh] items-end">
              <div className="flex flex-row items-center gap-[1rem]">
                <img src={"/profile.svg"} alt="profile" />
                <p className="font-semibold text-[1.5rem]">Tarek Benameur</p>
                <button onClick={()=>setIsOpen(!isOpen)}>
                  {isOpen ? <FaChevronUp /> : <FaChevronDown />}
                </button>
              </div>
              <div>
                {isOpen && <div className="bg-white flex items-center justify-center gap-[1vw] py-[2vh] px-[2vw] shadow-xl">
                    <h3 className="text-Red font-medium">Logout</h3>
                    <img src="/Logout.svg"/>
                  </div>}
              </div>
            </div>
            </div>
    </div>
    )
}


  export default NavbarAdmin
  