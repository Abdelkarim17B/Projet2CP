import { ToastContainer , toast } from "react-toastify";
import { useState } from "react";
import "react-toastify/dist/ReactToastify.css";

interface AdminResetPassword{
    NewPassword : string;
    ConfirmedPassword : string;
}

function AdminPasswordReset() {
    const [resetInfo , setResetInfo] = useState<AdminResetPassword>({    
        NewPassword: '',
        ConfirmedPassword: '',
    });
    function updateInputNewPassword(event: React.ChangeEvent<HTMLInputElement>): void {
        setResetInfo({
            ...resetInfo,
            NewPassword : event.target.value
        })
    }
    function updateInputConfirmedPassword(event: React.ChangeEvent<HTMLInputElement>): void {
        setResetInfo({
            ...resetInfo,
            ConfirmedPassword : event.target.value
        })
    }
    function handleOnSubmit() : void {
        console.log(resetInfo);
        if(resetInfo.NewPassword === resetInfo.ConfirmedPassword){
            toast.success('All good to go!', {
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
            toast.error('Passwords do not Match', {
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
    return(
        <div className="flex justify-center items-center h-screen bg-Gray33">
            <div className="w-[630px] h-[593px]  flex flex-col justify-between items-center">{/*Reset Form*/}
                <div className="w-[1081px] h-[85px] text-center font-semibold text-BlueDark text-[72px]">
                    Créer un mot de passe sécurisé
                </div>
                <div className="w-[630px] h-[90px] bg-white rounded-md flex items-center pl-10 text-[24px] shadow-none">
                    <input type="password" id="NewPass" required={true} placeholder="Nouveau mot de passe" className="w-[500px] outline-none" onChange={updateInputNewPassword}></input>
                </div>
                <div className="w-[630px] h-[90px] bg-white rounded-md flex items-center pl-10 text-[24px] shadow-none">
                    <input type="password" id="ConfPass" required={true} placeholder="Confirmer mot de passe" className="w-[550px] outline-none" onChange={updateInputConfirmedPassword}></input>
                </div>
                <div>
                    <button className="w-[357px] h-[90px] bg-Red rounded-sm text-center text-[28px] text-white font-semibold"  onClick={handleOnSubmit}>Enregistrer</button>
                </div>
            </div>
            <ToastContainer />
        </div>
    )
}

export default AdminPasswordReset