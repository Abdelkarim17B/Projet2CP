import { useState } from "react"; 
import axios from '../api/axios';
const LOGIN_URL = "/adresseRecup"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";


function AdminEnterResetMail() {
    const navigate = useNavigate();
    const [adminResetMail , setAdminResetMail] = useState<string>("");
    function updateInputMail(event: React.ChangeEvent<HTMLInputElement>): void {
        setAdminResetMail(event.target.value)
    }
    async function handleOnSubmit(event : React.FormEvent<HTMLFormElement>  )  {
        event.preventDefault();
        try {
            
            const response = await axios.post(
                LOGIN_URL,
                JSON.stringify(adminResetMail),
                {
                headers: { "Content-Type": "application/json" },
                }
            );
            setAdminResetMail("");
            navigate("/AdminRecupCompte")
        } catch (error) {
            if(!(error as any).response){
                toast.error('Connexion au serveur impossible', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
                
            }
            else if((error as any).response?.status === 400){
                toast.error('Il vous manque encore plus d\'information', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            }
            else if((error as any).response?.status === 401){
                toast.error('Votre adresse mail ou mot de passe est invalide', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            }
            else{
                toast.error('Connexion Impossible', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            }
        }
    }
    return(
        <>
            <div className="flex justify-center items-center h-screen bg-Gray33">
                <form className="w-[630px] h-[593px]  flex flex-col justify-between items-center" onSubmit={handleOnSubmit}>{/*Reset Form*/}
                    <div className="w-[1081px] h-[85px] text-center font-semibold text-BlueDark text-[64px]">
                        Saisissez un Mail de recuperation
                    </div>
                    <div className="w-[630px] h-[90px] bg-white rounded-md flex items-center pl-10 text-[24px]">
                        <input type="text" id="ResetMail" required={true} placeholder="Email de recuperation ..." className="w-[500px] outline-none" onChange={updateInputMail}></input>
                    </div>
                    <div>
                        <button className="w-[357px] h-[90px] bg-Red rounded-sm text-center text-[28px] text-white font-semibold" >Envoyer demende</button>
                    </div>
                </form>
            </div>
            <ToastContainer></ToastContainer>
        </>
    )
}

export default AdminEnterResetMail;