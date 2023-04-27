import { useState } from "react";
import {  FaChevronRight, FaChevronLeft, } from "react-icons/fa";
import { Link } from "react-router-dom";
import ReactSimplyCarousel from 'react-simply-carousel';
import Annonce from "../Components/Pages/Accueil/Annonce";
import FAQ from "../Components/Pages/Accueil/FAQ";
import Selector from "../Components/Pages/Accueil/Selector";


function Accueil() {

  const [first, setFirst] = useState("");
  const chooseFirst = (first) => {
    setFirst(first);
  };

  const [second, setSecond] = useState("");
  const chooseSecond = (second) => {
    setSecond(second);
  };



  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

    return (
      <div className="w-full">
        <div className="flex flex-col gap-[5vh] bg-[#F0EFF2]">
            {/* hero section*/}
            <div className="bg-[url('/bgHero.png')] h-screen bg-bottom bg-cover w-full bg-no-repeat flex flex-col justify-center items-center gap-[10vh]">       
                <h1 className="max-w-[52vw] font-bold text-white text-[4.5rem] text-center">Trouvez la meilleure offre pour votre business</h1>
                <div className="flex flex-col gap-[3vh] justify-center align-center items-center ">
                  <div className="flex gap-[1vw]">
                    <Selector chooseMessage={chooseFirst}/>
                    <Selector chooseMessage={chooseSecond}/>
                    <Link to={`/Resultat?firstBanque=${first}&secondBanque=${second}`}>
                      <h3 className="z-100 bg-Red max-w-[15vw] h-[10vh] font-bold px-[2vw] rounded-[4px] text-[1.5rem] text-white flex items-center">Comparer</h3>
                    </Link>
                  </div>
                </div>
            </div>

            {/* Espace des annonces*/}
            <div className="h-[80vh] w-full flex flex-col justify-center items-center text-center gap-[5vh]">
              <h2 className="text-center font-medium text-[4rem] text-BlueDark">Espace Announces</h2>
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
                      itemsToShow: 3,
                      itemsToScroll: 1,
                    },]}
                  speed={100}
                  easing="linear"
                  >
                <Annonce imageUrl="/An3.png" Title="Ramadan Offre" Bank="BNA"/>
                <Annonce imageUrl="/An3.png" Title="Ramadan Offre" Bank="BNA"/>
                <Annonce imageUrl="/An3.png" Title="Ramadan Offre" Bank="BNA"/>
                <Annonce imageUrl="/An3.png" Title="Ramadan Offre" Bank="BNA"/>
                </ReactSimplyCarousel>
            </div>

            {/* How it works section*/}
            <div className="flex flex-col gap-[9vh] py-[12.5vh]">
                <h2 className="text-center font-medium text-[4rem] text-BlueDark">Comment ça fonctionne</h2>
                <div className="flex px-[9vw] justify-between">
                    <div className="flex flex-col justify-center items-center gap-[6vh]">
                        <div className="text-[4rem] font-medium text-BlueDark">1</div>
                        <div className="max-w-[20vw] font-medium text-BlueDark text-[2rem] text-center">Entrer le nom de la premiere banque</div>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-[6vh]">
                        <div className="text-[4rem] font-medium text-BlueDark">2</div>
                        <div className="max-w-[20vw] font-medium text-BlueDark text-[2rem] text-center">Entrer le nom de la premiere banque</div>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-[6vh]">
                        <div className="text-[4rem] font-medium text-BlueDark">3</div>
                        <div className="max-w-[20vw] font-medium text-BlueDark text-[2rem] text-center">Entrer le nom de la premiere banque</div>
                    </div>
                </div>
            </div>

            {/* Frequently asked Questions section*/}
            <div className="flex flex-col gap-[9vh] py-[12.5vh]">
                <h2 className="text-center font-medium text-[4rem] text-BlueDark">Questions fréquemment posées</h2>
                <FAQ />
            </div>

            {/* Statistiques section*/}
            <div className="flex flex-col gap-[9vh] py-[12.5vh] text-Light bg-BlueDark mb-[24vh]">
                <h2 className="text-center font-medium text-[4rem]">Statistiques</h2>
                <div className="flex px-[9vw] justify-between">
                    <div className="flex flex-col justify-center items-center align-center text-[2rem] px-[4vw]">
                        <h3 className="font-medium text-[4.4rem]">520</h3>
                        <p>Banques</p> 
                    </div>
                    <div className="h-[13vh] w-[1px] bg-Light"></div> 
                    <div className="flex flex-col justify-center items-center align-center text-[2rem] px-[4vw]">
                        <h3 className="font-medium text-[4.4rem]">30K</h3>
                        <p>Utilisateurs</p> 
                    </div> 
                    <div className="h-[13vh] w-[1px] bg-Light"></div> 
                    <div className="flex flex-col justify-center items-center align-center text-[2rem] px-[4vw]">
                        <h3 className="font-medium text-[4.4rem]">8K</h3>
                        <p>Comparaisons</p> 
                    </div> 
                    <div className="h-[13vh] w-[1px] bg-Light"></div> 
                    <div className="flex flex-col justify-center items-center align-center text-[2rem] px-[4vw]">
                        <h3 className="font-medium text-[4.4rem]">22K</h3>
                        <p>Offres</p> 
                    </div>
                </div>
            </div>
        </div>
      </div>
    )
  }
  
  export default Accueil