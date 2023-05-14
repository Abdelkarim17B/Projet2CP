import {Bank} from "../../Model/Bank"
import { GoSearch } from "react-icons/go"
import { useState } from "react"
import { Link, useLoaderData } from "react-router-dom";



function AdminListeDesBanques(){
    //const [requeteRecherche,setRequeteRecherche] = useState<string>("");
    const listeBanqueAff = useLoaderData() as Bank[];

    /*function updateRequeteRecherche(event : React.ChangeEvent<HTMLInputElement>) : void {
        setRequeteRecherche(event.target.value);
        console.log(requeteRecherche);
    }*/
    return(
        <div className="flex flex-col h-full gap-[100px] min-h-screen items-center justify-center pt-[20vh]">
            <div className="flex flex-row gap-[613px] justify-center mt-24">
                {/*<div className="bg-white w-[30vw] h-[10vh] flex items-center justify-between px-10">
                    <input type="text" id="RechercheBnaqueAdmin" placeholder="rechercher" className="text-[28px] outline-none rounded-sm w-3/4" onChange={updateRequeteRecherche}></input>
                    <GoSearch size="30px" className="text-Gray"/>
    </div>*/}
                <div>
                    <Link to="/admin/banques/ajouter"><button className="w-[357px] h-[90px] bg-Red rounded-sm text-center text-[28px] text-white font-semibold">Ajouter Banque</button></Link>
                </div>
            </div>
            
            <div className="grid grid-cols-3 gap-[2vw] justify-items-center mb-24 w-[82vw]">
                {listeBanqueAff.map((Banque) =>(
                    <Link to={Banque.id_banque.toString()}>
                        <div key={Banque.id_banque} className="bg-white w-[25vw] h-[25vh] rounded-sm flex items-center justify-center">
                            <img className="max-h-[64%] max-w-[64%] w-auto" src={Banque.logo} alt={Banque.nom_banque}/>
                        </div>
                    </Link>
                ))}
            </div>            
        </div>
    )
}

export default AdminListeDesBanques;