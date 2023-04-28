import { useEffect, useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import { AiOutlineSearch } from "react-icons/ai";
import { Bank } from "../../../Model/Bank";


const Selector = ({chooseMessage}) => {

  const [Banks, setBank] = useState<Bank[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [selected, setSelected] = useState("");
  const [open, setOpen] = useState(false);
  let myRequest = new Request('http://localhost:3000/catalogue/');
  useEffect(() => {
    fetch(myRequest)
      .then((res) => res.json())
      .then((data) => {
        setBank(data);
      }).catch(function (err){console.log(err)});
  }, []);

  return (
    <div className="h-[10vh] z-80">
      <div
        onClick={() => setOpen(!open)}
        className={`font light bg-white h-[10vh] w-[25vw] px-[2vw] rounded-[4px] flex items-center justify-between rounded-[4px] ${
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
        className={`bg-white mt-2 overflow-y-auto ${
          open ? "max-h-60" : "max-h-0"
        } `}
      >
        <div className="flex items-center p-4 sticky top-0 bg-white">
          <AiOutlineSearch size={18} className="text-gray-700" />
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value.toLowerCase())}
            placeholder="Entrer banque name"
            className="placeholder:text-gray-700 p-2 outline-none h-[5vh]"
          />
        </div>
        {Banks.map((banque) => (
          <li
            key={banque.nom_banque}
            className={`p-4 text-sm hover:bg-BlueDark hover:text-white
            ${
                banque.nom_banque.toLowerCase() === selected?.toLowerCase() &&
              "bg-BlueDark text-white"
            }
            ${
                banque.nom_banque.toLowerCase().startsWith(inputValue)
                ? "block"
                : "hidden"
            }`}
            onClick={() => {
              if (banque.nom_banque.toLowerCase() !== selected.toLowerCase()) {
                setSelected(banque.nom_banque);
                chooseMessage(banque.id_banque.toString());
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