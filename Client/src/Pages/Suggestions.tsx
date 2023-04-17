import Footer from "../Components/Layout/Footer"
import Navbar from "../Components/Layout/Navbar"

function Suggestions(){
    return(
        <div>
            <Navbar language="Français"/>
                <div className="h-screen w-full flex flex-col justify-center items-center gap-[10vh] bg-[#F0EFF2]">
                    <h1 className="max-w-[83vw] font-bold text-BlueDark text-[4.5rem] text-center">Nous vous proposons la meilleure offre qui vous convient de la meilleure banque</h1>
                    <div>
                    <form className="w-[83vw] flex flex-col items-center gap-[4vh]">
                        <div className="flex flex-col gap-[3vh]">
                            <div className="flex justify-between w-[83vw]">
                                <input className="h-[8vh] w-[25vw] px-[2vw] rounded-[4px]" placeholder="Islamic" type="text" />
                                <input className="h-[8vh] w-[25vw] px-[2vw] rounded-[4px]" placeholder="Nationalité" type="text" />
                                <input className="h-[8vh] w-[25vw] px-[2vw] rounded-[4px]" placeholder="Service en ligne" type="text" />
                            </div>
                            <div className="flex justify-between w-[83vw]">
                                <input className="h-[8vh] w-[25vw] px-[2vw] rounded-[4px]" placeholder="Minimun Tarif du compte" type="text" />
                                <input className="h-[8vh] w-[25vw] px-[2vw] rounded-[4px]" placeholder="Maximun Tarif du compte" type="text" />
                                <input className="h-[8vh] w-[25vw] px-[2vw] rounded-[4px]" placeholder="Autre" type="text" />
                            </div>
                        </div>
                        <div className="flex justify-between w-[83vw]">
                            <div className="flex gap-[2vw]">
                                <input type="Checkbox"/>
                                <h4>Autre</h4>
                            </div>
                            <div className="flex gap-[2vw]">
                                <input type="Checkbox"/>
                                <h4>Autre</h4>
                            </div>
                            <div className="flex gap-[2vw]">
                                <input type="Checkbox"/>
                                <h4>Autre</h4>
                            </div>
                            <div className="flex gap-[2vw]">
                                <input type="Checkbox"/>
                                <h4>Autre</h4>
                            </div>
                            <div className="flex gap-[2vw]">
                                <input type="Checkbox"/>
                                <h4>Autre</h4>
                            </div>
                            <div className="flex gap-[2vw]">
                                <input type="Checkbox"/>
                                <h4>Autre</h4>
                            </div>
                        </div>
                        <input className="bg-Red max-w-[19vw] h-[7vh] font-bold px-[4vw] text-[1.5rem] text-white" type="button" value="Submit" />
                    </form>
                    </div>
                </div>
            <Footer />
        </div>
    )
}

export default Suggestions