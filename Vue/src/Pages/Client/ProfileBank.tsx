import { useEffect, useMemo, useState } from "react";
import { ScrollRestoration, useParams } from "react-router-dom";
import InfoBank from "../../Components/Pages/Client/ProfileBank/InfoBank";
import Prestation from "../../Components/Pages/Client/ProfileBank/Prestation";
import { Bank } from "../../Model/Bank";
import {PrestationModel} from "../../Model/Prestation";

function ProfileBank(){
    const { id } = useParams();
    const [bank, setBank] = useState<Bank>();
    const [offre, setOffre] = useState<PrestationModel>();
    useEffect(() => {
      const BankFetching = async () => {
        const data = await (
          await fetch('https://projet2-cp-i8rn.vercel.app/catalogue/'+id)
        ).json();
        setBank(() => data[0]);
        setOffre(() => data[1]);
      };
      BankFetching();
    }, []);

    return (    
    <div className="flex flex-col items-center justify-center bg-[#F0EFF2] pt-[5vh]">
      <ScrollRestoration />
        {
          !(bank && offre) && 
          <div className="h-screen w-full flex flex-col justify-center items-center gap-[10vh]">
            <h1 className="max-w-[82vw] font-bold text-BlueDark text-[4.5rem] text-center">Entrain de traiter votre demande Veuillez patienter....</h1>
            <img className="animate-spin-slow" src="/setting.png"></img>
          </div>
        }
        {bank && <InfoBank nom_banque={bank.nom_banque} adresse={bank.adresse} adresse_mail={bank.adresse_mail} num_tel={bank.num_tel} num_fax={bank.num_fax} site_web={bank.site_web} logo={bank.logo} id_banque={bank.id_banque}/>}
        {offre && <Prestation id_banque={offre.id_banque} nom_banque={offre.nom_banque} gestion_de_compte={offre.gestion_de_compte} gestion_a_distance={offre.gestion_a_distance} option_de_payment={offre.option_de_payment} moyens_de_payment={offre.moyens_de_payment} prets_et_credits={offre.prets_et_credits} placement={offre.placement} epargne={offre.epargne} coffre_fort={offre.coffre_fort} financement_externe={offre.financement_externe}/>}
    </div>
    )
}




export default ProfileBank
