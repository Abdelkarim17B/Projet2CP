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
    <div className={`${!isOpen ? 'px-[2vw] border-2 py-[4vh] border-Blue66 rounded-[8px] flex flex-col gap-[2vh] transition duration-700' : 'px-[2vw] border-2 py-[4vh] border-Blue66 rounded-[8px] flex flex-col gap-[2vh] bg-BlueDark text-white shadow-[0_35px_60px_15px_rgba(43, 45, 66, 1)] transition duration-700'}`}>

      <button onClick={toggleOpen} className="flex w-[100%] justify-between text-[1.6rem]">
        {props.question} {isOpen ? <FaChevronUp /> : <FaChevronDown />}
      </button>
      {isOpen && <div className="text-[1.2rem]">{props.answer}</div>}
    </div> 
  );
};
  
  const faqs: FAQProps[] = [
    {
      id: 1,
      question: "What is React?",
      answer: "React is a JavaScript library for building user interfaces.",
    },
    {
      id:2,
      question: "What is TypeScript?",
      answer:
        "TypeScript is a superset of JavaScript that adds type annotations and other features to help catch errors at compile time.",
    },
    {
      id:3,
      question: "Why use React with TypeScript?",
      answer:
        "Using TypeScript with React can help catch errors earlier in the development process and make your code easier to reason about.",
    },
    {
        id:4,
        question: "Why use React with TypeScript?",
        answer:
          "Using TypeScript with React can help catch errors earlier in the development process and make your code easier to reason about.",
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