import {AiOutlineEdit,AiOutlinePlus} from "react-icons/ai"
import { NavLink } from "react-router-dom"
function AdminProfile() {
    return (
      <div className='h-screen w-screen flex justify-center'>
        <div className='flex flex-col gap-[4vw] mt-[10rem] '>
        
                <div className='flex '>
            
            <form className='flex flex-col gap-[3vh]'>
            <div className="flex flex-row items-center gap-[28rem]">
                <div className="flex flex-row items-center gap-[2rem]">
                    <img className="scale-[210%]" src={"/profile.svg"} alt="profile" />
                    <h2 className='text-[4rem] font-semibold text-BlueDark'>Tarek Benameur</h2>
                </div>
               <div className="flex flex-row items-center gap-[2rem]">
               <NavLink to="/profile/ajouter">
                    <button className='border-4 border-BlueDark bg-BlueDark text-white w-[14vw] py-[1.5vh] text-[1.5rem] font-bold rounded-[5px] flex items-center justify-center gap-[1vw]'  >
                        <AiOutlinePlus />
                        <p>Ajouter Admin</p>
                    </button>
                </NavLink>
                <NavLink to="/profile/modifier">
                    <button className='border-4 border-Red bg-Red text-white w-[14vw] py-[1.5vh] text-[1.5rem] font-bold rounded-[5px] flex items-center justify-center gap-[2vw]' >
                        <AiOutlineEdit />
                        <p>Modifier</p>
                    </button>
                </NavLink>
                </div> </div>
                  <div className="flex flex-row gap-[5vw]"> 
                    <div className='flex flex-col gap-[1vh]'>
                        <h3 className='text-[2rem] font-medium text-BlueDark'>Nom</h3>
                        <input placeholder='Benameur' className='py-[2.5vh] w-[37vw] pl-[2vw] rounded-[4px] text-[2rem] bg-white ' disabled />
                    </div>

                    <div className='flex flex-col gap-[1vh]'>
                        <h3 className='text-[2rem] font-medium text-BlueDark'>Prénom</h3>
                        <input placeholder="Tarek" className='py-[2.5vh] w-[37vw] pl-[2vw] rounded-[4px] text-[2rem] bg-white ' disabled/>
                    </div>
                  </div> 

                    <div className='flex flex-col gap-[1vh]'>
                        <h3 className='text-[2rem] font-medium text-BlueDark'>Adresse email</h3>
                        <input placeholder="lt_benameur@esi.dz" className='py-[2.5vh] w-[55vw] pl-[2vw] rounded-[4px] text-[2rem] bg-white ' disabled/>
                    </div>

                    <div className='flex flex-col gap-[1vh]'>
                        <h3 className='text-[2rem] font-medium text-BlueDark'>Mot de passe</h3>
                        <input type="password" placeholder="password here" className='py-[4vh] w-[55vw] pl-[2vw] rounded-[4px] text-[2rem] bg-white ' disabled/>
                    </div>

                    <div className='flex flex-col gap-[1vh]'>
                        <h3 className='text-[2rem] font-medium text-BlueDark'>Occupation</h3>
                        <input placeholder="Alger" className='py-[2.5vh] w-[55vw] pl-[2vw] rounded-[4px] text-[2rem] bg-white ' disabled/>
                    </div>

                    
                </form>
            
        </div>
        </div>
        
      </div>
    )
  }
  export default AdminProfile