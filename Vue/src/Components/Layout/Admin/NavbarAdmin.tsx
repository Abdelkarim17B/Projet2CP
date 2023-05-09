import { useEffect, useState } from "react"
import {Link, NavLink} from "react-router-dom"
import {  FaChevronUp, FaChevronDown, } from "react-icons/fa";
import jwtDecode from 'jwt-decode';
export interface JwtPayload {
  id: number;
  nom: string;
  prenom: string;
  email: string;
  role: string;
}
function NavbarAdmin() {
    const [isOpen, setIsOpen] = useState(false);
    
    const [nom, setNom] = useState("");
    const [prenom, setPrenom] = useState("");
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const decodedToken = jwtDecode(token) as JwtPayload;
      setNom(decodedToken.nom);
      setPrenom(decodedToken.prenom);

    }
  }, []);
    return (
    <div className="h-[56px] md:h-[64px] xl:h-[100px] w-full px-[9vw] py-[3vh] bg-white fixed z-1000 shadow-md mb-[5vh]">
        <div className="">

        </div>
        <div className="flex justify-between align-center items-start">
            <div className="flex justify-between items-center w-[50vw]">
              <Link to="/admin">
              <img className="" src="/logo.png"></img>
              </Link>
              <ul className="flex gap-[4vw] text-[1.5rem]">
                <li className="NavInactive">
                  <NavLink to="/admin/dashboard">Accueil</NavLink>
                </li>
                <li className="NavInactive">
                  <NavLink to="/admin/banques">Banques</NavLink>
                </li>
                <li className="NavInactive">
                  <NavLink to="/admin/annonces">Annonces</NavLink>
                </li>
                
              </ul>
            </div>
            <div className="flex flex-col gap-[2vh] items-end">
              <div className="flex flex-row items-center gap-[1rem]">
              <NavLink to="/Admin/profile" className="flex flex-row items-center gap-[1rem]">
                <img src={"/profile.svg"} alt="profile" />
                <span><p className="font-semibold text-[1.5rem]">{nom+" "+prenom}</p></span>
                
                </NavLink>
                
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
  