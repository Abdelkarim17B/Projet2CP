import annonceBNA from "/AnnonceBNA.png"
import annonceBA from "/AnnonceBA.png"
import annonceBNP from "/AnnoceBNP.png"
import { GoSearch } from "react-icons/go"
import { useEffect, useState } from "react"

type ComposantAnnonce = {
    id : number;
    titre : string;
    banque : string;
    logo : string;
};

const listeAnnonce: ComposantAnnonce[] = [
    {id : 1,titre : "Offre Ramadan",banque : "BNA",logo : annonceBNA},
    {id : 2,titre : "Offre Aid",banque : "BA",logo : annonceBA},
    {id : 18,titre : "Nouvelle Offre",banque : "BNP",logo : annonceBNP},
    {id : 19,titre : "Offre Ramadan",banque : "BNA",logo : annonceBNA},
    {id : 20,titre : "Offre Aid",banque : "BA",logo : annonceBA},
    {id : 3,titre : "Nouvelle Offre",banque : "BNP",logo : annonceBNP},
    {id : 4,titre : "Offre Ramadan",banque : "BNA",logo : annonceBNA},
    {id : 5,titre : "Offre Aid",banque : "BA",logo : annonceBA},
    {id : 6,titre : "Nouvelle Offre",banque : "BNP",logo : annonceBNP},
    {id : 7,titre : "Offre Ramadan",banque : "BNA",logo : annonceBNA},
    {id : 15,titre : "Nouvelle Offre",banque : "BNP",logo : annonceBNP},
    {id : 16,titre : "Offre Ramadan",banque : "BNA",logo : annonceBNA},
    {id : 8,titre : "Offre Aid",banque : "BA",logo : annonceBA},
    {id : 9,titre : "Nouvelle Offre",banque : "BNP",logo : annonceBNP},
    {id : 10,titre : "Offre Ramadan",banque : "BNA",logo : annonceBNA},
    {id : 11,titre : "Offre Aid",banque : "BA",logo : annonceBA},
    {id : 12,titre : "Nouvelle Offre",banque : "BNP",logo : annonceBNP},
    {id : 22,titre : "Offre Ramadan",banque : "BNA",logo : annonceBNA},
    {id : 13,titre : "Offre Ramadan",banque : "BNA",logo : annonceBNA},
    {id : 14,titre : "Offre Aid",banque : "BA",logo : annonceBA},
    {id : 17,titre : "Offre Aid",banque : "BA",logo : annonceBA},
    {id : 21,titre : "Nouvelle Offre",banque : "BNP",logo : annonceBNP},
    {id : 23,titre : "Offre Aid",banque : "BA",logo : annonceBA},
  ];

function AdminListeDesAnnonces(){
    const [requeteRecherche,setRequeteRecherche] = useState<string>("");
    const [listeAnnoceAff,setListeBanqueAff] = useState<ComposantAnnonce[]>(listeAnnonce);
    function updateRequeteRecherche(event : React.ChangeEvent<HTMLInputElement>) : void {
        setRequeteRecherche(event.target.value);
        console.log(requeteRecherche);
    }
    useEffect(()=>{
        const nouvelleListe = listeAnnonce.filter(
            (annonce)=>
            annonce.titre.toLowerCase().includes(requeteRecherche.toLowerCase())
        );
        setListeBanqueAff(nouvelleListe);
    },[requeteRecherche])
    return(
        <div className="bg-Gray33 flex flex-col h-full gap-[100px] min-h-screen">
            <div className="flex flex-row gap-[613px] justify-center mt-24">
                <div className="bg-white w-[630px] h-[90px] flex items-center justify-between px-10">
                    <input type="text" id="RechercheAnnonceAdmin" className="text-[28px] outline-none rounded-sm w-3/4" onChange={updateRequeteRecherche}></input>
                    <GoSearch size="30px" className="text-Gray"/>
                </div>
                <div>
                    <button className="w-[357px] h-[90px] bg-Red rounded-sm text-center text-[28px] text-white font-semibold"> Ajouter Annonce</button>
                </div>
            </div>
            <div className="grid grid-cols-3 gap-[60px] justify-items-center mb-24">
                {(listeAnnoceAff.length == 0) ? (
                    <div className="text-72 font-bold">
                        Pas d'Annonces {/*FIX IT LATER*/}
                    </div>
                ) :
                (listeAnnoceAff.map((Annonce) =>(
                    <div key={Annonce.id} className="w-[514px] h-[366px] relative">
                        <img src={Annonce.logo} alt={Annonce.titre} className="rounded-md"/>
                        <div className="absolute inset-0" style={{ background: "linear-gradient(rgba(0,0,0,0.4) 60%, rgba(0,0,0,0.8))" }}></div>
                        <div className="absolute bottom-0 left-1/2 right-1/2 w-[400px] h-[99px] transform -translate-x-1/2 -translate-y-1/2 text-white">
                            <div className="text-[30px] font-bold">
                                {Annonce.banque}
                            </div>
                            <div className="text-[50px] font-bold">
                                {Annonce.titre}
                            </div>
                        </div>
                    </div>
                )))}
            </div>            
        </div>
    )
}

export default AdminListeDesAnnonces;