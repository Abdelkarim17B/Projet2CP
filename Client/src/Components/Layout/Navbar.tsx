function Navbar() {
    return (
      <div className="h-[56px] md:h-[64px] xl:h-[100px] w-full px-[9vw] py-[3vh] bg-white absolute">
        <div className="flex justify-between align-center items-center">
            <h1 className="text-[2rem] font-semibold">Logo</h1>
            <ul className="flex gap-[4vw] text-[1.5rem]">
                <li className="NavActive">Accueil</li>
                <li className="NavInactive">Classement</li>
                <li className="NavInactive">Map</li>
                <li className="NavInactive">Proposition</li>
                <li className="NavInactive">Contactez</li>
            </ul>
        </div>
      </div>
    )
  }
  
  export default Navbar
  