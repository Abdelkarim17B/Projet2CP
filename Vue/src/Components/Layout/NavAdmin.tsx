import {Link} from "react-router-dom"



function NavbarAdmin() {
    return (
    <div className="h-[56px] md:h-[64px] xl:h-[100px] w-full px-[9vw] py-[3vh] bg-white fixed z-100 shadow-md mb-[5vh]">
        <div className="flex justify-between align-center items-center">
            <Link to="/">
              <img className="" src="/logo.png"></img>
            </Link>
            <ul className="flex gap-[4vw] text-[1.5rem]">
                <li className="NavInactive">
                  <Link to="/Accueil">Accueil</Link>
                </li>
                <li className="NavInactive">
                  <Link to="/Banques">Banques</Link>
                </li>
                <li className="NavInactive">
                  <Link to="/Annonces">Annonces</Link>
                </li>
                
            </ul>
            <div className="flex flex-row items-center gap-[1rem]">
              <img src={"/profile.svg"} alt="profile" />
              <h1 className="text-BlueDark font-semibold text-[1.5rem]">Tarek Benameur</h1>
              <img src={"/Arrow.svg"} alt="arrow" />
            </div>
            </div>
    </div>
    )
}


  export default NavbarAdmin
  
