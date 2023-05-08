import { useState,useEffect} from 'react';

import axios from "../api/axios"
function AdminAjouterAdmin() {
  const [nom ,setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [email, setEmail] = useState("");
  const [mot_de_passe, setMot_de_passe] = useState("");
  const [occupation, setOccupation] = useState("");
  
  const [sent , setSent] = useState(false);

  function resetForm(){
      setNom("");
      setPrenom("");
      setEmail("");
      setMot_de_passe("");
      setOccupation("");
      
      setTimeout(()=>{setSent(false),3000});
  }

    function formSubmit(e){
      e.preventDefault();
      let data = {
        nom: nom,
        prenom: prenom,
        email: email,
        mot_de_passe:mot_de_passe,
        occupation:occupation,
        
      }
      axios.post("",data).then(res =>{
        setSent(true);
      }).then(resetForm).catch(() => console.log("message not sent"))
    }
    
  function handleAnnuler(event: MouseEvent<HTMLButtonElement, MouseEvent>): void {
    throw new Error('Function not implemented.');
  }

    return (
      <div className='h-full w-full flex justify-center'>
        <div className='flex flex-col gap-[4vw] mt-[10rem] '>
        
                <div className='flex '>
            
            <form className='flex flex-col gap-[3vh]'>
            <div className="flex flex-row items-center gap-[28rem]">
                <div className="flex flex-row items-center gap-[2rem]">
                    <img className="scale-[210%] " src={"/profile.svg"} alt="profile" />
                    <h2 className='text-[4rem] font-semibold text-BlueDark'>Tarek Benameur</h2>
                </div>
               <div className="flex flex-row items-center gap-[2rem]">
                    <button className='border-4 border-BlueDark  text-BlueDark w-[14vw] py-[1.5vh] text-[1.5rem] font-bold rounded-[5px] flex items-center justify-center gap-[1vw]' onClick={handleAnnuler} >
                        
                        <p>Annuler</p>
                    </button>
                    <button className='border-4 border-Red bg-Red text-white w-[14vw] py-[1.5vh] text-[1.5rem] font-bold rounded-[5px] flex items-center justify-center gap-[2vw]' >
                        
                        <p>Ajouter</p>
                    </button>
                </div> 
                </div>
                  <div className="flex flex-row gap-[5vw]"> 
                    <div className='flex flex-col gap-[1vh]'>
                        <h3 className='text-[2rem] font-medium text-BlueDark'>Nom</h3>
                        <input placeholder='Nom' className='py-[2.5vh] w-[37vw] pl-[2vw] rounded-[4px] text-[2rem] ' value={nom} onChange={(e)=> {setNom(e.target.value)}} />
                    </div>

                    <div className='flex flex-col gap-[1vh]'>
                        <h3 className='text-[2rem] font-medium text-BlueDark'>Prénom</h3>
                        <input placeholder="Prénom" className='py-[2.5vh] w-[37vw] pl-[2vw] rounded-[4px] text-[2rem]' value={prenom} onChange={(e)=> {setPrenom(e.target.value)}}/>
                    </div>
                  </div> 

                    <div className='flex flex-col gap-[1vh]'>
                        <h3 className='text-[2rem] font-medium text-BlueDark'>Adresse email</h3>
                        <input placeholder="Adresse email" className='py-[2.5vh] w-[55vw] pl-[2vw] rounded-[4px] text-[2rem]' value={email} onChange={(e)=> {setEmail(e.target.value)}}/>
                    </div>

                    <div className='flex flex-col gap-[1vh]'>
                        <h3 className='text-[2rem] font-medium text-BlueDark'>Mot de passe</h3>
                        <input type="password" placeholder="Mot de passe" className='py-[2.5vh] w-[55vw] pl-[2vw] rounded-[4px] text-[2rem]'value={mot_de_passe} onChange={(e)=> {setMot_de_passe(e.target.value)}} />
                    </div>

                    <div className='flex flex-col gap-[1vh]'>
                        <h3 className='text-[2rem] font-medium text-BlueDark'>Occupation</h3>
                        <input placeholder="Occupation" className='py-[2.5vh] w-[55vw] pl-[2vw] rounded-[4px] text-[2rem]'value={occupation} onChange={(e)=> {setOccupation(e.target.value)}} />
                    </div>

                    
                </form>


                
            
            
        </div>
                
        
        </div>
      </div>
    )
  }
  export default AdminAjouterAdmin