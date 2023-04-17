import Navbar from "../Components/Layout/Navbar"
import Footer from "../Components/Layout/Footer"
import InfoBank from "../Components/Pages/ResultatComparison/InfoBank"

function ProfileBank(){
    return (    
    <div>
            <div className="flex items-center justify-center bg-[#F0EFF2]">
                <InfoBank imageUrl="/SocieteGenerale.svg" BankName="Societe Generale" nationalite="Française"  BankLocation="17, Bd Colonel Amirouche, B.P 484, Alger" BankPhone="213 (0)21 989 323" BankFix="021 39 54 40" BankMail="contact@badr.dz" BankWebsite="https://badrbanque.dz/#" Profile={true}/>
            </div>
    </div>
    )
}

export default ProfileBank