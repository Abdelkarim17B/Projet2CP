import { useEffect, useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import { AiOutlineSearch } from "react-icons/ai";
import { Bank } from "../../../Model/Bank";

interface props {
  chooseMessage: Function;
  banks: Bank[];
}

const Selector = (props:props) => {

  const [inputValue, setInputValue] = useState("");
  const [selected, setSelected] = useState("");
  const [open, setOpen] = useState(false);
 

  return (
    <div className="h-[10vh]" style={{zIndex: 90}}>
      <div
        onClick={() => setOpen(!open)}
        className={`font light bg-white h-[10vh] lg:w-[35vw] w-[65vw] px-[2vw] rounded-[4px] flex items-center justify-between rounded-[4px] ${
          !selected && "text-gray-500"
        }`}
      >
        {selected
          ? selected?.length > 50
            ? selected?.substring(0, 60) + "..."
            : selected
          : "Citer une banque ici pour Comparer"}
        <BiChevronDown size={20} className={`${open && "rotate-180"}`} />
      </div>
      <ul
        className={`bg-white mt-2 overflow-y-auto lg:w-[35vw] w-[65vw] ${
          open ? "max-h-60" : "max-h-0"
        } `}
      >
        <div className="flex items-center p-4 sticky top-0 bg-white ">
          <AiOutlineSearch size={18} className="text-gray-700" />
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value.toLowerCase())}
            placeholder="Entrer banque name"
            className="placeholder:text-gray-700 p-2 outline-none h-[5vh] lg:w-[35vw] w-[65vw]"
          />
        </div>
        {props.banks.map((banque) => (
          <li
            key={banque.nom_banque}
            className={`p-4 text-sm lg:w-[35vw] w-[65vw] hover:bg-BlueDark hover:text-white
            ${
                banque.nom_banque.toLowerCase() === selected?.toLowerCase() &&
              "bg-BlueDark text-white lg:w-[35vw] w-[65vw]"
            }
            ${
                banque.nom_banque.toLowerCase().startsWith(inputValue)
                ? "block"
                : "hidden"
            }`}
            onClick={() => {
              if (banque.nom_banque.toLowerCase() !== selected.toLowerCase()) {
                setSelected(banque.nom_banque);
                props.chooseMessage(banque.id_banque.toString());
                //console.log(banque.id_banque.toString());
                setOpen(false);
                setInputValue("");
              }
            }}
          >
            {banque.nom_banque}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Selector;