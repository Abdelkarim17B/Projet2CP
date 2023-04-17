
interface Language {
  language: string;
}

const Navbar: React.FC<Language> = ({ language }) => {

    return (
      <div className="h-[56px] md:h-[64px] xl:h-[100px] w-full px-[9vw] py-[3vh] bg-white fixed z-100 shadow-md mb-[5vh]">
        <div className="flex justify-between align-center items-center">
            <img className="" src="/logo.png"></img>
            <ul className="flex gap-[4vw] text-[1.5rem]">
                <li className="NavInactive">Catalogue</li>
                <li className="NavInactive">Populaire</li>
                <li className="NavInactive">Suggestions</li>
                <li className="NavInactive">Contactez-nous</li>
            </ul>
            {(language == "Français" ) ? <div className="flex items-center gap-[10px]"><img src="/flagFrance.png" alt="français" /><p className="NavInactive">Fr</p></div> : <div className="flex items-center gap-[10px]"><img src="/flagAlgeria.png" alt="Arabe" /><p className="NavInactive">Ar</p></div>}
        </div>
      </div>
    )
  }
  
  export default Navbar
  