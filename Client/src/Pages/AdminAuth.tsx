import { Link } from "react-router-dom"
import {useState} from "react"
interface AdminAuthProps{
    Img1Url : string;
    Img2Url : string;
}
interface AdminLoginInfo{
    Email : string;
    Password : string;
}
function AdminAuth(props : AdminAuthProps) {
    const [adminInfo , setAdminInfo] = useState<AdminLoginInfo>({    
        Email: '',
        Password: '',
    });
    function updateInputPassword(event: React.ChangeEvent<HTMLInputElement>): void {
        setAdminInfo({
            ...adminInfo,
            Password : event.target.value
        })
    }
    function updateInputEmail(event: React.ChangeEvent<HTMLInputElement>): void {
        setAdminInfo({
            ...adminInfo,
            Email : event.target.value
        })
    }
    function handleOnSubmit() : void {
        console.log(adminInfo);
    }
    return(
        <div className="flex justify-between items-center h-screen bg-Gray33">
            <div className="w-[302px] h-[340px]">{/*Image 1*/}
                <img src={props.Img1Url}/>
            </div>
            <div className="w-[630px] h-[593px]  flex flex-col justify-between items-center">{/*Connexion*/}
                <div className="w-[366px] h-[80px] text-center font-semibold text-BlueDark text-[72px]">
                    Connexion
                </div>
                <div className="w-[429px] h-[28px] text-center font-semibold text-BlueDark text-[20px]">
                    Remplissez le formulaire pour continuer
                </div>
                <div className="w-[630px] h-[90px] bg-white rounded-md flex items-center pl-10 text-[24px]">
                    <input type="text" id="AdminEmail" required={true} value={adminInfo.Email} placeholder="Email" className="w-[550px] outline-none font-semibold" onChange={updateInputEmail}></input>
                </div>
                <div className="w-[630px] h-[90px] bg-white rounded-md flex items-center pl-10 text-[24px] shadow-none">
                    <input type="password" id="AdminPass" required={true} value={adminInfo.Password} placeholder="Mot de passe" className="w-[500px] outline-none" onChange={updateInputPassword}></input>
                </div>
                <div className="self-end w-[162px] h-[19px]">
                    <Link to="/AdminEnterResetMail" className="text-[16px] text-Gray66 font-medium">Mot de passe oublié ?</Link>
                </div>
                <div>
                    <button className="w-[357px] h-[90px] bg-Red rounded-sm text-center text-[28px] text-white font-semibold" onClick={handleOnSubmit}>Se connecter</button>
                </div>
            </div>
            <div className="w-[409px] h-[460px] self-start">{/*Image 2*/}
                <img src={props.Img2Url}/>
            </div>
        </div>
    )
}

export default AdminAuth