import {NavLink, Link} from "react-router-dom"

interface Language {
  language: string;
}

function Navbar(props: Language){
    return (
      <div className="h-[56px] md:h-[64px] xl:h-[100px] w-full px-[9vw] py-[3vh] bg-white fixed z-100 shadow-md mb-[5vh]">
        <div className="flex justify-between align-center items-center">
            <Link to="/">
              <img className="" src="/logo.png"></img>
            </Link>
            <ul className="flex gap-[4vw] text-[1.5rem] font-light text-Blue66">
                <li>
                  <NavLink to="/">Home</NavLink>
                </li>
                <li >
                  <NavLink to="/Catalogue">Catalogue</NavLink>
                </li>
                <li>
                  <NavLink to="/propos">À propos</NavLink>
                </li>
                <li >
                  <NavLink to="/Contactez">Contactez-nous</NavLink>
                </li>
            </ul>
            {(props.language == "Français" ) ? <div className="flex items-center gap-[10px]"><img src="/flagFrance.png" alt="français" /><p className="NavInactive">Fr</p></div> : <div className="flex items-center gap-[10px]"><img src="/flagAlgeria.png" alt="Arabe" /><p className="NavInactive">Ar</p></div>}
        </div>
      </div>
    )
  }
  
  export default Navbar
  