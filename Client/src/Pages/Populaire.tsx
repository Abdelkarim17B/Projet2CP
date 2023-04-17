import Footer from "../Components/Layout/Footer"
import Navbar from "../Components/Layout/Navbar"
import ComparisonPolpulaire from "../Components/Pages/Populaire/ComparisonPopulaire"
import ReactSimplyCarousel from 'react-simply-carousel';
import { useState } from "react";
import { FaChevronRight, FaChevronLeft  } from "react-icons/fa";

function Populaire() {
    const [activeSlideIndex, setActiveSlideIndex] = useState(0);

    return(
        <div>
            <Navbar language="Français"/>
            <div className="bg-[#F0EFF2]">
                <div className="h-screen w-full flex flex-col justify-center items-center gap-[10vh]">
                    <h1 className="max-w-[83vw] font-bold text-BlueDark text-[4.5rem] text-center">Voici une collection de comparaisons courantes</h1>
                    <div>
                    <ReactSimplyCarousel
                  activeSlideIndex={activeSlideIndex}
                  onRequestChange={setActiveSlideIndex}
                  itemsToShow={1}
                  itemsToScroll={1}
                  forwardBtnProps={{ className:"self-center flex bg-white rounded-full cursor-pointer h-[96px] w-[96px]     justify-center items-center m-[3vw]",
                  children: <FaChevronRight className="w-[18px] h-[23px] text-RedDark"/>,
                  }}
                  backwardBtnProps={{
                  className:"self-center flex bg-white rounded-full cursor-pointer h-[96px] w-[96px] justify-center items-center m-[3vw]",
                  children: <FaChevronLeft className="w-[18px] h-[23px] text-RedDark"/>,
                  }}
                  responsiveProps={[
                    {
                      itemsToShow: 1,
                      itemsToScroll: 1,
                      minWidth: 2000,
                    },]}
                  speed={400}
                  easing="linear"
                  >
                  <ComparisonPolpulaire imageUrl1="BNP.png" imageUrl2="/SocieteGenerale.png"/>
                  <ComparisonPolpulaire imageUrl1="BNP.png" imageUrl2="/SocieteGenerale.png"/>
                  <ComparisonPolpulaire imageUrl1="BNP.png" imageUrl2="/SocieteGenerale.png"/>
                  <ComparisonPolpulaire imageUrl1="BNP.png" imageUrl2="/SocieteGenerale.png"/>
                  
                </ReactSimplyCarousel>
                    
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Populaire