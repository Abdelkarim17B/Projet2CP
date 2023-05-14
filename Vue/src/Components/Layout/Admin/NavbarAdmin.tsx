import { useEffect, useState } from "react"
import {Link, NavLink} from "react-router-dom"
import {  FaChevronUp, FaChevronDown, } from "react-icons/fa";
import jwtDecode from 'jwt-decode';
import axios from "../../../api/axios";
import { Admin } from "../../../Model/Admin";
export interface JwtPayload {
  id: number;
  nom: string;
  prenom: string;
  email: string;
  role: string;
}


function NavbarAdmin() {
    const [isOpen, setIsOpen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [adminInfo, setAdminInfo] = useState<Admin>();
    const [nom ,setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  
  const [adminID,setAdminID]=useState(0);
  
  
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const decodedToken = jwtDecode(token) as JwtPayload;
     setAdminID(decodedToken.id);
     setIsLoggedIn(true);
     
    
    }
  }, []);
  useEffect(() => {
    const fetchAdminInfo = async () => {
      try {
        const response = await axios.get(`/admin/profil/${adminID}`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        });
        console.log(response.data);
        setAdminInfo(response.data);
        if (response.data) {
          setNom(response.data.nom);
          setPrenom(response.data.prenom);
          
        }
      } catch (error) {
        console.log("Error fetching admin info", error);
      }
    };
  
    if (adminID) {
      fetchAdminInfo();
    }
  }, [adminID]);
  function handleLogout() {
    setNom("");
    setPrenom("");
    setAdminID(0);
    localStorage.clear();
    window.location.href = "/admin";
  }
  if (!isLoggedIn) {
    return null; 
  }  
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
              <NavLink to="/admin/profil/${ID}" className="flex flex-row items-center gap-[1rem]">
                <img src={"/profile.svg"} alt="profile" />
                <span><p className="font-semibold text-[1.5rem]">{nom+" "+prenom}</p></span>
                
                </NavLink>
                
                <button onClick={()=>setIsOpen(!isOpen)}>
                  {isOpen ? <FaChevronUp /> : <FaChevronDown />}
                </button>
              </div>
              <div>
                {isOpen && <button className="bg-white flex items-center justify-center gap-[1vw] py-[2vh] px-[2vw] shadow-xl" onClick={handleLogout}>
                    <h3 className="text-Red font-medium">Logout</h3>
                    <img src="/Logout.svg"/>
                  </button>}
              </div>
            </div>
            </div>
    </div>
    )
}


  export default NavbarAdmin
  