import {Bank} from "../../../Client/src/Model/Bank"
import { GoSearch } from "react-icons/go"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";



function AdminListeDesBanques(){
    const [requeteRecherche,setRequeteRecherche] = useState<string>("");
    const [listeBanqueAff,setListeBanqueAff] = useState<Bank[]>([]);
    function updateRequeteRecherche(event : React.ChangeEvent<HTMLInputElement>) : void {
        setRequeteRecherche(event.target.value);
        console.log(requeteRecherche);
    }
    let myRequest = new Request('http://localhost:3000/catalogue/');
    useEffect(() => {
    fetch(myRequest)
      .then((res) => res.json())
      .then((data) => {
        setListeBanqueAff(data);
      }).catch(function (err){console.log(err)});
  }, []);
    return(
        <div className="flex flex-col h-full gap-[100px] min-h-screen items-center justify-center pt-[20vh]">
            <div className="flex flex-row gap-[613px] justify-center mt-24">
                <div className="bg-white w-[630px] h-[90px] flex items-center justify-between px-10">
                    <input type="text" id="RechercheBnaqueAdmin" className="text-[28px] outline-none rounded-sm w-3/4" onChange={updateRequeteRecherche}></input>
                    <GoSearch size="30px" className="text-Gray"/>
                </div>
                <div>
                    <Link to="/banques/ajouter"><button className="w-[357px] h-[90px] bg-Red rounded-sm text-center text-[28px] text-white font-semibold">Ajouter Banque</button></Link>
                </div>
            </div>
            
            <div className="grid grid-cols-3 gap-[2vw] justify-items-center mb-24 w-[91vw]">
                {listeBanqueAff.map((Banque) =>(
                    <Link to={Banque.id_banque.toString()}>
                        <div key={Banque.id_banque} className="bg-white w-[455px] h-[257px] rounded-sm flex items-center justify-center">
                            <img className="max-h-[75%] max-w-[80%] w-auto" src={Banque.logo} alt={Banque.nom_banque}/>
                        </div>
                    </Link>
                ))}
            </div>            
        </div>
    )
}

export default AdminListeDesBanques;