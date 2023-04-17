import Navbar from "../Components/Layout/Navbar"
import Footer from "../Components/Layout/Footer"


function SuggestionAttente(){
    return (    
    <div>
            <Navbar language="Français"/>
            <div className="bg-[#F0EFF2]">
                <div className="h-screen w-full flex flex-col justify-center items-center gap-[10vh]">
                    <h1 className="max-w-[83vw] font-bold text-BlueDark text-[4.5rem] text-center">Entrain de chercher une banque Veuillez patienter....</h1>
                    <img src="setting.png"></img>
                </div>
            </div>
            <Footer />
    </div>
    )
}

export default SuggestionAttente