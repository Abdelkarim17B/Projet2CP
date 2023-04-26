import logoABG from "/LogoAGB.png"
import logoBEA from "/LogoBEA.png"
import logoBNP from "/LogoBNP.png"
import logoBNA from "/LogoBNA.png"
import logoSG from "/LogoSG.png"
import { GoSearch } from "react-icons/go"
import { useEffect, useState } from "react"

type ComposantBanque = {
    id : number;
    nom : string;
    logo : string;
};

const listeBanque: ComposantBanque[] = [
    {id : 1, nom: "AGB", logo: logoABG},
    {id : 2, nom: "BEA", logo: logoBEA},
    {id : 3, nom: "SG", logo: logoSG},
    {id : 4, nom: "BNA", logo: logoBNA},
    {id : 5, nom: "BNP", logo: logoBNP},
    {id : 6, nom: "SG", logo: logoSG},
    {id : 7, nom: "BNA", logo: logoBNA},
    {id : 8, nom: "AGB", logo: logoABG},
    {id : 9, nom: "BEA", logo: logoBEA},
    {id : 10, nom: "BNP", logo: logoBNP},
    {id : 11, nom: "BNP", logo: logoBNP},
    {id : 12, nom: "BNA", logo: logoBNA},
    {id : 13, nom: "BNP", logo: logoBNP},
    {id : 14, nom: "SG", logo: logoSG},
    {id : 15, nom: "BNA", logo: logoBNA},
    {id : 16, nom: "SG", logo: logoSG},
    {id : 17, nom: "BNA", logo: logoBNA},
    {id : 18, nom: "BNP", logo: logoBNP},
    {id : 19, nom: "SG", logo: logoSG},
    {id : 20, nom: "BNA", logo: logoBNA},
    {id : 21, nom: "AGB", logo: logoABG},
    {id : 22, nom: "BEA", logo: logoBEA},
  ];

function AdminListeDesBnaques(){
    const [requeteRecherche,setRequeteRecherche] = useState<string>("");
    const [listeBanqueAff,setListeBanqueAff] = useState<ComposantBanque[]>(listeBanque);
    function updateRequeteRecherche(event : React.ChangeEvent<HTMLInputElement>) : void {
        setRequeteRecherche(event.target.value);
        console.log(requeteRecherche);
    }
    useEffect(()=>{
        const nouvelleListe = listeBanque.filter(
            (banque)=>
            banque.nom.toLowerCase().includes(requeteRecherche.toLowerCase())
        );
        setListeBanqueAff(nouvelleListe);
    },[requeteRecherche])
    return(
        <div className="bg-Gray33 flex flex-col h-full gap-[100px] min-h-screen">
            <div className="flex flex-row gap-[613px] justify-center mt-24">
                <div className="bg-white w-[630px] h-[90px] flex items-center justify-between px-10">
                    <input type="text" id="RechercheBnaqueAdmin" className="text-[28px] outline-none rounded-sm w-3/4" onChange={updateRequeteRecherche}></input>
                    <GoSearch size="30px" className="text-Gray"/>
                </div>
                <div>
                    <button className="w-[357px] h-[90px] bg-Red rounded-sm text-center text-[28px] text-white font-semibold"> Ajouter Banque</button>
                </div>
            </div>
            
            <div className="grid grid-cols-3 gap-[44px] justify-items-center mb-24">
                {listeBanqueAff.map((Banque) =>(
                    <div key={Banque.id} className="bg-white w-[504px] h-[257px] rounded-sm flex items-center justify-center">
                        <img src={Banque.logo} alt={Banque.nom}/>
                    </div>
                ))}
            </div>            
        </div>
    )
}

export default AdminListeDesBnaques;