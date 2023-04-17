import React, { useState } from "react";
import Footer from "../Components/Layout/Footer"
import Navbar from "../Components/Layout/Navbar"
import { FaChevronDown ,FaChevronRight, FaChevronLeft, FaChevronUp } from "react-icons/fa";
import ReactSimplyCarousel from 'react-simply-carousel';
import Annonce from "../Components/Pages/Accueil/Annonce";

interface FAQProps {
    question: string;
    answer: string;
}
  
const FAQ: React.FC<FAQProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`${!isOpen ? 'px-[2vw] border-2 py-[4vh] border-Blue66 rounded-[8px] flex flex-col gap-[2vh] transition duration-700' : 'px-[2vw] border-2 py-[4vh] border-Blue66 rounded-[8px] flex flex-col gap-[2vh] bg-BlueDark text-white shadow-[0_35px_60px_15px_rgba(43, 45, 66, 1)] transition duration-700'}`}>

      <button onClick={toggleOpen} className="flex w-[100%] justify-between text-[1.6rem]">
        {question} {isOpen ? <FaChevronUp /> : <FaChevronDown />}
      </button>
      {isOpen && <div className="text-[1.2rem]">{answer}</div>}
    </div> 
  );
};
  
  const faqs: FAQProps[] = [
    {
      question: "What is React?",
      answer: "React is a JavaScript library for building user interfaces.",
    },
    {
      question: "What is TypeScript?",
      answer:
        "TypeScript is a superset of JavaScript that adds type annotations and other features to help catch errors at compile time.",
    },
    {
      question: "Why use React with TypeScript?",
      answer:
        "Using TypeScript with React can help catch errors earlier in the development process and make your code easier to reason about.",
    },
    {
        question: "Why use React with TypeScript?",
        answer:
          "Using TypeScript with React can help catch errors earlier in the development process and make your code easier to reason about.",
      },
  ];


function Accueil() {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

    return (
      <div className="w-full">
        <div className="flex flex-col gap-[5vh] bg-[#F0EFF2]">
            {/* hero section*/}
            <div className="bg-[url('/bgHero.png')] h-screen bg-bottom bg-cover w-full bg-no-repeat flex flex-col justify-center items-center gap-[10vh]">       
                <h1 className="max-w-[52vw] font-bold text-white text-[4.5rem] text-center">Trouvez la meilleure offre pour votre business</h1>
                <div className="flex flex-col gap-[3vh] justify-center align-center items-center ">
                  <div className="flex gap-[1vw]">
                    <input className="h-[10vh] w-[29vw] px-[2vw] rounded-[4px]" placeholder="Citer la banque ici pourcomparer" type="text" />
                    <input className="h-[10vh] w-[29vw] px-[2vw] rounded-[4px]" placeholder="Citer la banque ici pourcomparer" type="text" />
                  </div>
                  <input className="bg-Red max-w-[15vw] h-[10vh] font-bold px-[2vw] text-[1.5rem] text-white" type="button" value="Comparer" />
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
                <div className="flex px-[9vw] flex-col gap-[4vh]">
                    {faqs.map((faq) => (
                    <FAQ key={faq.question} question={faq.question} answer={faq.answer} />
                    ))}
                </div>
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