import { useState } from "react";
import { Link } from "react-router-dom";

function AdminEnterResetMail() {
    const [adminResetMail , setAdminResetMail] = useState<string>("");
    function updateInputMail(event: React.ChangeEvent<HTMLInputElement>): void {
        setAdminResetMail(event.target.value)
    }
    function handleOnSubmit() : void {
        console.log(adminResetMail);
    }
    return(
        <div className="flex justify-center items-center h-screen bg-Gray33">
            <div className="w-[630px] h-[593px]  flex flex-col justify-between items-center">{/*Reset Form*/}
                <div className="w-[1081px] h-[85px] text-center font-semibold text-BlueDark text-[64px]">
                    Saisissez un Mail de recuperation
                </div>
                <div className="w-[630px] h-[90px] bg-white rounded-md flex items-center pl-10 text-[24px]">
                    <input type="text" id="ResetMail" required={true} placeholder="Email de recuperation ..." className="w-[500px] outline-none" onChange={updateInputMail}></input>
                </div>
                <div>
                    <Link to="/AdminRecupCompte"><button className="w-[357px] h-[90px] bg-Red rounded-sm text-center text-[28px] text-white font-semibold"  onClick={handleOnSubmit}>Envoyer demende</button></Link>
                </div>
            </div>
        </div>
    )
}

export default AdminEnterResetMail;