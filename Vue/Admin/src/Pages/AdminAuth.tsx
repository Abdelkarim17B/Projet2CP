import { Link, useNavigate } from "react-router-dom"
import {useState} from "react"
import axios from '../api/axios';
const LOGIN_URL = "/admin/login"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface AdminAuthProps{
    Img1Url : string;
    Img2Url : string;
}
interface AdminLoginInfo{
    email : string;
    mot_de_passe : string;
}
function AdminAuth(props : AdminAuthProps) {
    const navigate = useNavigate();
    const [adminInfo , setAdminInfo] = useState<AdminLoginInfo>({    
        email: '',
        mot_de_passe : '',
    });
    function updateInputPassword(event: React.ChangeEvent<HTMLInputElement>): void {
        setAdminInfo({
            ...adminInfo,
            mot_de_passe : event.target.value
        })
    }
    function updateInputEmail(event: React.ChangeEvent<HTMLInputElement>): void {
        setAdminInfo({
            ...adminInfo,
            email : event.target.value
        })
    }

    const handleLinkClick = (authToken : string | null) => {
        if (authToken) {
            axios.defaults.headers.common['x-access-token'] = authToken;
        }
    }

    
    async function handleOnSubmit(event : React.FormEvent<HTMLFormElement> ) {
        event.preventDefault();
        try {
            console.log(JSON.stringify(adminInfo))
            const response = await axios.post(
                LOGIN_URL,
                JSON.stringify(adminInfo),
                {
                headers: { "Content-Type": "application/json" },
                }
            );
            setAdminInfo({
                ...adminInfo,
                email : "",
                mot_de_passe : ""
            })
            toast.success('Vous etes desormais connecte', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            localStorage.setItem('token', response.data.JWTtoken);
            console.log(localStorage.getItem('token'));

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
            <div className="flex justify-between items-center h-screen bg-Gray33">
                {/*Image 1*/}
                <div className="w-[302px] h-[340px]">
                    <img src={props.Img1Url}/>
                </div>
                {/*Connexion*/}
                <form className="w-[630px] h-[593px]  flex flex-col justify-between items-center" onSubmit={handleOnSubmit}>
                    <div className="w-[366px] h-[80px] text-center font-semibold text-BlueDark text-[72px]">
                        Connexion
                    </div>
                    <div className="w-[429px] h-[28px] text-center font-semibold text-BlueDark text-[20px]">
                        Remplissez le formulaire pour continuer
                    </div>
                    <div className="w-[630px] h-[90px] bg-white rounded-md flex items-center pl-10 text-[24px]">
                        <input type="eamil" id="AdminEmail" required={true} value={adminInfo.email} placeholder="Email" className="w-[550px] outline-none font-semibold" onChange={updateInputEmail}></input>
                    </div>
                    <div className="w-[630px] h-[90px] bg-white rounded-md flex items-center pl-10 text-[24px] shadow-none">
                        <input type="password" id="AdminPass" required={true} value={adminInfo.mot_de_passe} placeholder="Mot de passe" className="w-[500px] outline-none" onChange={updateInputPassword}></input>
                    </div>
                    <div className="self-end w-[162px] h-[19px]">
                        <Link to="/AdminEnterResetMail" className="text-[16px] text-Gray66 font-medium">Mot de passe oublié ?</Link>
                    </div>
                    <div>
                        <button className="w-[357px] h-[90px] bg-Red rounded-sm text-center text-[28px] text-white font-semibold">Se connecter</button>
                    </div>
                </form>
                <div className="w-[409px] h-[460px] self-start">{/*Image 2*/}
                    <img src={props.Img2Url}/>
                </div>
                <Link to="/AdminListeDesAnnonces" onClick={(e)=>{handleLinkClick(localStorage.getItem('token'))}}>Dashboard</Link>
            </div>
            <ToastContainer />
        </>
    )
}

export default AdminAuth