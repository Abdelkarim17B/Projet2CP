import { useState } from "react";
import { FaChevronDown , FaChevronUp} from 'react-icons/fa'

interface FAQProps {
    id: number;
    question: string;
    answer: string;
}
  
function FAQElement(props: FAQProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`${!isOpen ? 'px-[4vw] border-2 py-[4vh] border-Blue66 rounded-[8px] flex flex-col gap-[2vh] transition duration-700' : 'px-[4vw] border-2 py-[4vh] border-Blue66 rounded-[8px] flex flex-col gap-[2vh] bg-BlueDark text-white shadow-[0_35px_60px_15px_rgba(43, 45, 66, 1)] transition duration-700'}`}>

      <button onClick={toggleOpen} className="flex w-[100%] justify-between text-[1.3rem] md:text-[1.6rem]">
        {props.question} {isOpen ? <FaChevronUp /> : <FaChevronDown />}
      </button>
      {isOpen && <div className="md:text-[1.2rem]">{props.answer}</div>}
    </div> 
  );
};
  
  const faqs: FAQProps[] = [
    {
      id: 1,
      question: "Comment utiliser Banky?",
      answer: "Vous pouver simplement consulter offres des banques avec ses profiles ou bien comparer deux banques entre eux.",
    },
    {
      id:2,
      question: "Pourquoi Banky?",
      answer:
        "Puisque Banky offre une meilleur experience pour l'utilisateur et meme un systeme des annonces pour les banques et les partenaires.",
    },
    {
      id:3,
      question: "Les données de Banky sont réelles?",
      answer:
        "Oui, effectivement les données stocekr dans le site Banky sont a jour et fiables.",
    },
    {
        id:4,
        question: "Comment ajouter des annonces?",
        answer:
          "Vous pouver envoyer vos annonces en utilsans le contact form dans la page 'Contactez-Nous' et attendre la validation de l'admin.",
      },
  ];


function FAQ(){
    return(
        <div className="flex px-[9vw] flex-col gap-[4vh]">
            {faqs.map((faq) => (
        <FAQElement key={faq.id} id={faq.id} question={faq.question} answer={faq.answer} />
        ))}
        </div>    
    )
}

export default FAQ;