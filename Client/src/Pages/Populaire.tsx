import Footer from "../Components/Layout/Footer"
import Navbar from "../Components/Layout/Navbar"
import ComparisonPolpulaire from "../Components/Pages/Populaire/ComparisonPopulaire"


function Populaire() {
    return(
        <div>
            <Navbar language="Français"/>
            <div>
                <div className="h-screen w-full flex flex-col justify-center items-center gap-[10vh]">
                    <h1 className="max-w-[83vw] font-bold text-BlueDark text-[4.5rem] text-center">Voici une collection de comparaisons courantes</h1>
                    <div>
                        <ComparisonPolpulaire imageUrl1="BNP.png" imageUrl2="/SocieteGenerale.png"/>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Populaire