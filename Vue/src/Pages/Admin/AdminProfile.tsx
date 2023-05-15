import {AiOutlineEdit,AiOutlinePlus} from "react-icons/ai"
import { NavLink } from "react-router-dom"
import { useEffect, useState } from "react";

import jwtDecode from "jwt-decode";
import NavbarAdmin, { JwtPayload } from "../../Components/Layout/Admin/NavbarAdmin";
import {Admin} from "../../Model/Admin";
import axios from "../../api/axios";


  

function AdminProfile() {
    const [adminInfo, setAdminInfo] = useState<Admin>();
    const [nom ,setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [email, setEmail] = useState("");
  const [mot_de_passe, setMot_de_passe] = useState("");
  const [occupation, setOccupation] = useState("");
  const [adminID,setAdminID]=useState(0);
  const [cle_speciale, setCle_speciale] = useState("")
  
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const decodedToken = jwtDecode(token) as JwtPayload;
     setAdminID(decodedToken.id);
     
     
    
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
          setEmail(response.data.email);
          setMot_de_passe(response.data.mot_de_passe);
          setOccupation(response.data.occupation);
          setCle_speciale(response.data.cle_speciale);
        }
      } catch (error) {
        console.log("Error fetching admin info", error);
      }
    };
  
    if (adminID) {
      fetchAdminInfo();
    }
  }, [adminID]);
  
  const [modif, setmodif] = useState(false);
  const [ajout, setAjout] = useState(false);
  function handlemodifier(event: React.MouseEvent<HTMLButtonElement>): void {
    event.preventDefault();
    setmodif(true);
  }

  function handlerAnnulerEdit(event: React.MouseEvent<HTMLButtonElement>): void {
    event.preventDefault();
    setmodif(false);
  }
  
  async function handlerConfirmEdit(event: React.MouseEvent<HTMLButtonElement>){
    event.preventDefault();
    const token = localStorage.getItem('token');
    const AdminInfoEdit : Admin = {
      id_admin: adminID,
      nom: nom,
      prenom: prenom,
      email: email,
      mot_de_passe: mot_de_passe,
      cle_speciale: cle_speciale,
      occupation: occupation
    }
    try {
      const response = await axios.put(
        `/admin/profil/${adminID}`,
          JSON.stringify(AdminInfoEdit),
          {
              headers: {
                  "Content-Type": "application/json" ,
                  'Authorization': 'Bearer ' + token,
              },
          }
      );
      
      setmodif(false);
  } catch (error) {
      console.log("Error modifying admin info");
  }
  finally{
    window.location.reload();
} 
  }

  function handlerAjouter(event: React.MouseEvent<HTMLButtonElement>): void {
    event.preventDefault();
    setAjout(true);
  }
  function handlerAnnulerAjout(event: React.MouseEvent<HTMLButtonElement>): void {
    event.preventDefault();
    setAjout(false);
  }
  const [newnom ,setNewNom] = useState("");
  const [newprenom, setNewPrenom] = useState("");
  const [newemail, setNewEmail] = useState("");
  const [newmot_de_passe, setNewMot_de_passe] = useState("");
  const [newoccupation, setNewOccupation] = useState("");
  async function handlerConfirmAjout(event: React.MouseEvent<HTMLButtonElement>){
    event.preventDefault();
   // const ids: number[] = listeAdmin.map((data: { id_admin: number; }) => data.id_admin); // liste des IDs
    function generateRandomID() : number {
        let rand : number;
        //do {
            rand = Math.floor(Math.random() * 1000) + 1;
          //} while (ids.includes(rand));
        return rand;
    }
    const AdminInfoAdd : Admin = {
      id_admin: generateRandomID(),
      nom: newnom,
      prenom: newprenom,
      email: newemail,
      mot_de_passe: newmot_de_passe,
      cle_speciale: "Blabla",//random somehow
      occupation: newoccupation
    }
    const token = localStorage.getItem('token');
    try {
      const response = await axios.post(
        `/admin//profilCreate`,
          JSON.stringify(AdminInfoAdd),
          {
            headers: {
                "Content-Type": "application/json" ,
                
            },
        }
      );
      console.log("Ajout Admin response : ",response);
      setNewNom("");
      setNewPrenom("");
      setNewEmail("");
      setNewMot_de_passe("");
      setNewOccupation("");
      setAjout(false);
  } catch (error) {
      console.log("Error Adding new admin ");
  }
    
  }
  
    return (
      <div className='h-full w-full flex justify-center'>
        <div className='flex flex-col gap-[4vw] mt-[10rem] mb-[4rem] '>
        
                <div className='flex '>
            
            <form className='flex flex-col gap-[3vh]'>
              {ajout? (<div className="flex flex-row items-center gap-[2rem] justify-end">
               
                
               <button type="button" className=' border-4 border-BlueDark  text-BlueDark w-[14vw] py-[1.5vh] text-[1.5rem] font-bold rounded-[5px] flex items-center justify-center gap-[1vw]' onClick={handlerAnnulerAjout} >
                   
                   <p>Annuler</p>
               </button>
               <button type="submit" className='border-4 border-Red bg-Red text-white w-[14vw] py-[1.5vh] text-[1.5rem] font-bold rounded-[5px] flex items-center justify-center gap-[2vw]' onClick={handlerConfirmAjout} >
                   
                   <p>Confirmer</p>
               </button>
           </div>):(
            <div className="flex flex-row items-center gap-[28rem]">
                <div className="flex flex-row items-center gap-[2rem]">
                    <img className="scale-[210%]" src={"/profile.svg"} alt="profile" />
                    <h2 className='text-[4rem] font-semibold text-BlueDark'>{nom+" "+prenom}</h2>
                    
                </div>
                {modif ? (<div className="flex flex-row items-center gap-[2rem]">
               
                
               <button type="button" className=' border-4 border-BlueDark  text-BlueDark w-[14vw] py-[1.5vh] text-[1.5rem] font-bold rounded-[5px] flex items-center justify-center gap-[1vw]' onClick={handlerAnnulerEdit} >
                   
                   <p>Annuler</p>
               </button>
               <button type="submit" className='border-4 border-Red bg-Red text-white w-[14vw] py-[1.5vh] text-[1.5rem] font-bold rounded-[5px] flex items-center justify-center gap-[2vw]' onClick={handlerConfirmEdit} >
                   
                   <p>Confirmer</p>
               </button>
           </div> ) : (<div className="flex flex-row items-center gap-[2rem]">
               
               <button className='border-4 border-BlueDark bg-BlueDark text-white w-[14vw] py-[1.5vh] text-[1.5rem] font-bold rounded-[5px] flex items-center justify-center gap-[1vw]' onClick={handlerAjouter} >
                   <AiOutlinePlus />
                   <p>Ajouter Admin</p>
               </button>
           
           
               <button type="button" className='border-4 border-Red bg-Red text-white w-[14vw] py-[1.5vh] text-[1.5rem] font-bold rounded-[5px] flex items-center justify-center gap-[2vw]' onClick={handlemodifier}  >
                   <AiOutlineEdit />
                   <p>Modifier</p>
               </button>
           
           </div> )}
                  </div>)}
                  <div className="flex flex-row gap-[5vw]"> 
                    <div className='flex flex-col gap-[1vh]'>
                        <h3 className='text-[2rem] font-medium text-BlueDark'>Nom</h3>
                        <input placeholder='Nom' className='py-[2.5vh] w-[37vw] pl-[2vw] rounded-[4px] text-[2rem] bg-white 'value={ajout? newnom:nom} onChange={ajout ? (e) => setNewNom(e.target.value):(e) => setNom(e.target.value)} disabled={!modif && !ajout} />
                    </div>
                    
                    <div className='flex flex-col gap-[1vh]'>
                        <h3 className='text-[2rem] font-medium text-BlueDark'>Prénom</h3>
                        <input placeholder="Prénom" className='py-[2.5vh] w-[37vw] pl-[2vw] rounded-[4px] text-[2rem] bg-white 'value={ajout? newprenom:prenom } onChange={ajout ? (e) => setNewPrenom(e.target.value):(e)=> {setPrenom(e.target.value)}} disabled={!modif && !ajout}/>
                    </div>
                  </div> 

                    <div className='flex flex-col gap-[1vh]'>
                        <h3 className='text-[2rem] font-medium text-BlueDark'>Adresse email</h3>
                        <input placeholder="Adresse email" className='py-[2.5vh] w-[55vw] pl-[2vw] rounded-[4px] text-[2rem] bg-white 'value={ajout? newemail:email } onChange={ajout ? (e) => setNewEmail(e.target.value):(e)=> {setEmail(e.target.value)}} disabled={!modif && !ajout}/>
                    </div>

                    <div className='flex flex-col gap-[1vh]'>
                        <h3 className='text-[2rem] font-medium text-BlueDark'>Mot de passe</h3>
                        <input type="password" placeholder="Mot de passe" className='py-[2.5vh] w-[55vw] pl-[2vw] rounded-[4px] text-[2rem] bg-white 'value={ajout? newmot_de_passe:mot_de_passe} onChange={ajout ? (e) => setNewMot_de_passe(e.target.value):(e)=> {setMot_de_passe(e.target.value)}} disabled={!modif && !ajout}/>
                    </div>

                    <div className='flex flex-col gap-[1vh]'>
                        <h3 className='text-[2rem] font-medium text-BlueDark'>Occupation</h3>
                        <input placeholder="Occupation" className='py-[2.5vh] w-[55vw] pl-[2vw] rounded-[4px] text-[2rem] bg-white ' value={ajout? newoccupation:occupation} onChange={ajout ? (e) => setNewOccupation(e.target.value):(e)=> {setOccupation(e.target.value)}} disabled={!modif && !ajout}/>
                    </div>

                    
                </form>
            
        </div>
        </div>
        
      </div>
    )
  }
  export default AdminProfile