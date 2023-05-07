import { useState, useEffect } from "react";
import {  FaChevronRight, FaChevronLeft, } from "react-icons/fa";
import { Link, useLoaderData, ScrollRestoration } from "react-router-dom";
import ReactSimplyCarousel from 'react-simply-carousel';
import Annonce from "../../Components/Pages/Client/Accueil/Annonce";
import FAQ from "../../Components/Pages/Client/Accueil/FAQ";
import Selector from "../../Components/Pages/Client/Accueil/Selector";
import {AnnonceModel} from "../../Model/Announce";
import {Bank} from "../../Model/Bank";

function Accueil() {
  const banks = useLoaderData() as Bank[];
  const [first, setFirst] = useState("");
  const chooseFirst = (first) => {
    setFirst(first);
  };
  const [second, setSecond] = useState("");
  const chooseSecond = (second) => {
    setSecond(second);
  };
  const [announces , setAnnounces] = useState<AnnonceModel[]>([]);
  useEffect(() => {
    const AnnounceFetching = async () => {
      const data = await (
        await fetch('http://localhost:3000/home')
      ).json();
        setAnnounces(data);
    };
    AnnounceFetching();
  }, []);

  


  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [activebanqueIndex, setActivebanqueIndex] = useState(0);

    return (
      <div className="w-full">
        <ScrollRestoration />
        <div className="flex flex-col bg-[#F0EFF2]">
            {/* hero section*/}
            <div>
              <div className="bg-[url('/bgHero.png')] h-screen bg-bottom bg-cover w-full bg-no-repeat flex flex-col justify-center items-center gap-[10vh]">       
                    <h1 className="max-w-[82vw] font-bold max-w-[82vw] text-white lg:text-[4.5rem] md:text-[3.5rem] text-[2.5rem] text-center">Trouvez la meilleure offre pour votre business</h1>
                    <div className="flex flex-col gap-[3vh] justify-center align-center items-center ">
                      <div className="flex flex-col lg:flex-row items-center lg:gap-[1vw] gap-[5vw]">
                        <div className="flex flex-col lg:flex-row items-center lg:gap-[1vw] gap-[2vh]">
                          <div style={{zIndex:80}}>
                            <Selector chooseMessage={chooseFirst} banks={banks}/>
                          </div>
                          <div style={{zIndex:70}}>
                            <Selector chooseMessage={chooseSecond} banks={banks}/>
                          </div>
                        </div>
                        <Link to={`/Resultat?firstBanque=${first}&secondBanque=${second}`}>
                          <h3 className="bg-Red max-w-[35vw h-[7vh] lg:h-[10vh] font-bold px-[4vw] rounded-[4px] lg:text-[1.5rem] md:text-[1.3rem] text-[1rem] text-white flex items-center judtify-center ">Comparer</h3>
                        </Link>
                      </div>
                    </div>
              </div>
              <ReactSimplyCarousel
                    activeSlideIndex={activebanqueIndex}
                    onRequestChange={setActivebanqueIndex}
                    itemsToShow={6}
                    itemsToScroll={1}
                    autoplay={true}
                    responsiveProps={[
                      {
                        itemsToShow: 6,
                        itemsToScroll: 1,
                      },]}
                    speed={3500}
                    easing="linear"
                    >
                  {banks && 
                    banks.map(banque => <Link to={"/catalogue/"+banque.id_banque}><div className="bg-white flex w-[20vw] h-[15vh] justify-center items-center">
                    <img src={banque.logo} className="max-h-[10vh] max-w-[15vw]"/>
                  </div></Link>)
                  }

              </ReactSimplyCarousel>
            </div>

              
            {/* Espace des annonces*/}
            <div className="h-[80vh] w-full flex flex-col justify-center items-center text-center gap-[5vh]">
              <h2 className="font-medium max-w-[82vw] lg:text-[4.5rem] md:text-[3.3rem] text-[1.7rem] text-center text-BlueDark">Espace Announces</h2>
                <ReactSimplyCarousel
                  activeSlideIndex={activeSlideIndex}
                  onRequestChange={setActiveSlideIndex}
                  itemsToShow={3}
                  itemsToScroll={1}
                  forwardBtnProps={{ className:"self-center hidden lg:flex bg-white rounded-full cursor-pointer h-[96px] w-[96px] justify-center items-center m-[3vw]",
                  children: <FaChevronRight className="w-[18px] h-[23px] text-RedDark"/>,
                  }}
                  backwardBtnProps={{
                  className:"self-center hidden lg:flex bg-white rounded-full cursor-pointer h-[96px] w-[96px] justify-center items-center m-[3vw]",
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
                {announces && 
                  announces.map(ad => <Annonce Bank={ad.subtitle} imageUrl={ad.image} Title={ad.title} />)
                }
                
                </ReactSimplyCarousel>
            </div>

            {/* How it works section*/}
            <div className="flex flex-col gap-[9vh] py-[12.5vh]">
                <h2 className="lg:text-[4.5rem] md:text-[3.3rem] text-[1.7rem] text-center font-medium text-BlueDark">Comment ça fonctionne</h2>
                <div className="flex md:flex-row flex-col px-[9vw] md:justify-between gap-[5vh]">
                    <div className="flex flex-col justify-center items-center md:gap-[6vh] gap-[2vh]">
                        <div className="border-2 rounded-full lg:h-[5vw] md:h-[8vw] lg:w-[5vw] md:w-[8vw] h-[15vw] w-[15vw] flex items-center justify-center"><p className="text-[4vh] font-medium text-BlueDark ">1</p></div>
                        <div className="md:max-w-[22vw] max-w-[50vw] font-medium text-BlueDark lg:text-[2rem] md:text-[1.5rem] text-[1.2rem] text-center">Entrer le nom de la premiere banque</div>
                    </div>
                    <div className="flex flex-col justify-center items-center md:gap-[6vh] gap-[2vh]">
                    <div className="border-2 rounded-full lg:h-[5vw] md:h-[8vw] lg:w-[5vw] md:w-[8vw] h-[15vw] w-[15vw] flex items-center justify-center"><p className="text-[4vh] font-medium text-BlueDark ">2</p></div>
                        <div className="md:max-w-[22vw] max-w-[50vw] font-medium text-BlueDark lg:text-[2rem] md:text-[1.5rem] text-[1.2rem] text-center">Entrer le nom de la premiere banque</div>
                    </div>
                    <div className="flex flex-col justify-center items-center md:gap-[6vh] gap-[2vh]">
                    <div className="border-2 rounded-full lg:h-[5vw] md:h-[8vw] lg:w-[5vw] md:w-[8vw] h-[15vw] w-[15vw] flex items-center justify-center"><p className="text-[4vh] font-medium text-BlueDark ">3</p></div>
                        <div className="md:max-w-[22vw] max-w-[50vw] font-medium text-BlueDark lg:text-[2rem] md:text-[1.5rem] text-[1.2rem] text-center">Entrer le nom de la premiere banque</div>
                    </div>
                </div>
            </div>

            {/* Frequently asked Questions section*/}
            <div className="flex flex-col gap-[9vh] py-[12.5vh]">
                <h2 className="font-medium lg:text-[4.5rem] md:text-[3.3rem] text-[1.7rem] text-center text-BlueDark">Questions fréquemment posées</h2>
                <FAQ />
            </div>

            {/* Statistiques section*/}
            <div className="flex flex-col gap-[9vh] py-[12.5vh] text-Light bg-BlueDark mb-[24vh]">
                <h2 className="text-white lg:text-[4.5rem] md:text-[3.3rem] text-[2.5rem] text-center font-medium ">Statistiques</h2>
                <div className="flex lg:flex-row flex-col px-[9vw] lg:justify-between items-center">
                    <div className="flex flex-col justify-center items-center align-center text-[2rem] px-[4vw]">
                        <h3 className="font-medium lg:text-[4.4rem] md:text-[3rem] text-[2rem]">520</h3>
                        <p>Banques</p> 
                    </div>
                    <div className="h-[13vh] w-[1px] bg-Light lg:rotate-0 rotate-90"></div> 
                    <div className="flex flex-col justify-center items-center align-center text-[2rem] px-[4vw]">
                        <h3 className="font-medium lg:text-[4.4rem] md:text-[3rem] text-[2rem]">30K</h3>
                        <p>Utilisateurs</p> 
                    </div> 
                    <div className="h-[13vh] w-[1px] bg-Light lg:rotate-0 rotate-90"></div> 
                    <div className="flex flex-col justify-center items-center align-center text-[2rem] px-[4vw]">
                        <h3 className="font-medium lg:text-[4.4rem] md:text-[3rem] text-[2rem]">8K</h3>
                        <p>Comparaisons</p> 
                    </div> 
                    <div className="h-[13vh] w-[1px] bg-Light lg:rotate-0 rotate-90"></div> 
                    <div className="flex flex-col justify-center items-center align-center text-[2rem] px-[4vw]">
                        <h3 className="font-medium lg:text-[4.4rem] md:text-[3rem] text-[2rem]">22K</h3>
                        <p>Offres</p> 
                    </div>
                </div>
            </div>
        </div>
      </div>
    )
  }
  
  export default Accueil

