import { useState,useEffect} from 'react';
import {Admin} from "../Model/Admin"
const ADMIN_PROFILE_URL : string = "/profile";
const ADMIN_AJOUT_URL : string = "/admin/profile/Create";
const ADMIN_SUPPRESSION_URL : string = "/admin/profile/Delete/";
const ADMIN_MODIFIER_URL : string = "/admin/profile/Update/";
function AdminModifierProfile() {
    const [Admin, setAdmin] = useState<Admin>()
    useEffect(() => {
        const AdminFetching = async () => {
          const data = await (
            await fetch('kach plaça mel backend')
          ).json();
          setAdmin(() => data);
          
        };
        AdminFetching();
      }, );
    const [nom ,setNom] = useState(Admin?.nom);
    const [prenom, setPrenom] = useState(Admin?.prenom);
    const [email, setEmail] = useState(Admin?.email);
    const [mot_de_passe, setMot_de_passe] = useState("");
    const [occupation, setOccupation] = useState(Admin?.occupation);
    const adminObject = {
        id_admin: 15,
        nom: 'brouthen',
        prenom: 'kamel',
        email: 'lk_brouthen@esi.dz',
        mot_de_passe: 'projet2cp',
        cle_speciale: '2020',
        occupation: 'alger'
    }
  function handleAnnuler(event: MouseEvent<HTMLButtonElement, MouseEvent>): void {
    throw new Error('Function not implemented.');
  }

  function handleOnSubmit(event: FormEvent<HTMLFormElement>): void {
    throw new Error('Function not implemented.');
  }

    return (
      <div className='h-full w-full flex justify-center'>
        <div className='flex flex-col gap-[4vw] mt-[10rem] '>
        
                <div className='flex '>
            
            <form className='flex flex-col gap-[3vh]' onSubmit={handleOnSubmit}>
            <div className="flex flex-row items-center gap-[28rem]">
                <div className="flex flex-row items-center gap-[2rem]">
                    <img className="scale-[210%] " src={"/profile.svg"} alt="profile" />
                    <h2 className='text-[4rem] font-semibold text-BlueDark'>Tarek Benameur</h2>
                </div>
               <div className="flex flex-row items-center gap-[2rem]">
                    <button type="button" className='border-4 border-BlueDark  text-BlueDark w-[14vw] py-[1.5vh] text-[1.5rem] font-bold rounded-[5px] flex items-center justify-center gap-[1vw]' onClick={handleAnnuler} >
                        
                        <p>Annuler</p>
                    </button>
                    <button type="submit" className='border-4 border-Red bg-Red text-white w-[14vw] py-[1.5vh] text-[1.5rem] font-bold rounded-[5px] flex items-center justify-center gap-[2vw]' >
                        
                        <p>Modifier</p>
                    </button>
                </div> 
                </div>
                  <div className="flex flex-row gap-[5vw]"> 
                    <div className='flex flex-col gap-[1vh]'>
                        <h3 className='text-[2rem] font-medium text-BlueDark'>Nom</h3>
                        <input placeholder='Nom' className='py-[2.5vh] w-[37vw] pl-[2vw] rounded-[4px] text-[2rem] ' value={Admin?.nom} onChange={(e)=> {setNom(e.target.value)}} />
                    </div>

                    <div className='flex flex-col gap-[1vh]'>
                        <h3 className='text-[2rem] font-medium text-BlueDark'>Prénom</h3>
                        <input placeholder="Prénom" className='py-[2.5vh] w-[37vw] pl-[2vw] rounded-[4px] text-[2rem]' value={Admin?.prenom} onChange={(e)=> {setPrenom(e.target.value)}}/>
                    </div>
                  </div> 

                    <div className='flex flex-col gap-[1vh]'>
                        <h3 className='text-[2rem] font-medium text-BlueDark'>Adresse email</h3>
                        <input placeholder="Adresse email" className='py-[2.5vh] w-[55vw] pl-[2vw] rounded-[4px] text-[2rem]' value={Admin?.email} onChange={(e)=> {setEmail(e.target.value)}}/>
                    </div>

                    <div className='flex flex-col gap-[1vh]'>
                        <h3 className='text-[2rem] font-medium text-BlueDark'>Mot de passe</h3>
                        <input type="password" placeholder="Mot de passe" className='py-[2.5vh] w-[55vw] pl-[2vw] rounded-[4px] text-[2rem]'value={Admin?.mot_de_passe} onChange={(e)=> {setMot_de_passe(e.target.value)}} />
                    </div>

                    <div className='flex flex-col gap-[1vh]'>
                        <h3 className='text-[2rem] font-medium text-BlueDark'>Occupation</h3>
                        <input placeholder="Occupation" className='py-[2.5vh] w-[55vw] pl-[2vw] rounded-[4px] text-[2rem]'value={Admin?.occupation} onChange={(e)=> {setOccupation(e.target.value)}} />
                    </div>

                    
                </form>


                
            
            
        </div>
                
        
        </div>
      </div>
    )
  }
  export default AdminModifierProfile