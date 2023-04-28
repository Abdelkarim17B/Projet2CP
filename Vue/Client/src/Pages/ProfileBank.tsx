<<<<<<< HEAD
import { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import InfoBank from "../Components/Pages/ProfileBank/InfoBank";
import Prestation from "../Components/Pages/ProfileBank/Prestation";
import { Bank } from "../Model/Bank";
import {PrestationModel} from "../Model/Prestation";

function ProfileBank(){
    const { id } = useParams();
    const [bank, setBank] = useState<Bank>();
    const [offre, setOffre] = useState<PrestationModel>();
    useEffect(() => {
      const BankFetching = async () => {
        const data = await (
          await fetch('http://localhost:3000/catalogue/'+id)
        ).json();
        setBank(() => data[0]);
        setOffre(() => data[1]);
      };
      BankFetching();
    }, []);

    return (    
    <div className="flex flex-col items-center justify-center bg-[#F0EFF2]">
        {bank && <InfoBank nom_banque={bank.nom_banque} adresse={bank.adresse} adresse_mail={bank.adresse_mail} num_tel={bank.num_tel} num_fax={bank.num_fax} site_web={bank.site_web} logo={bank.logo} id_banque={bank.id_banque}/>}
        {offre && <Prestation id_banque={offre.id_banque} nom_banque={offre.nom_banque} gestion_de_compte={offre.gestion_de_compte} gestion_a_distance={offre.gestion_a_distance} option_de_payment={offre.option_de_payment} moyens_de_payment={offre.moyens_de_payment} prets_et_credits={offre.prets_et_credits} placement={offre.placement} epargne={offre.epargne} coffre_fort={offre.coffre_fort} financement_externe={offre.financement_externe}/>}
    </div>
    )
}




export default ProfileBank
=======
import { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import InfoBank from "../Components/Pages/ProfileBank/InfoBank";
import Prestation from "../Components/Pages/ProfileBank/Prestation";
import { Bank } from "../Model/Bank";
import {PrestationModel} from "../Model/Prestation";

function ProfileBank(){
    const { id } = useParams();
    const [bank, setBank] = useState<Bank>();
    const [offre, setOffre] = useState<PrestationModel>();
    useEffect(() => {
      const BankFetching = async () => {
        const data = await (
          await fetch('http://localhost:3000/catalogue/'+id)
        ).json();
        setBank(() => data[0]);
        setOffre(() => data[1]);
      };
      BankFetching();
    }, []);

    return (    
    <div className="flex flex-col items-center justify-center bg-[#F0EFF2]">
        {bank && <InfoBank nom_banque={bank.nom_banque} adresse={bank.adresse} adresse_mail={bank.adresse_mail} num_tel={bank.num_tel} num_fax={bank.num_fax} site_web={bank.site_web} logo={bank.logo} id_banque={bank.id_banque}/>}
        {offre && <Prestation id_banque={offre.id_banque} nom_banque={offre.nom_banque} gestion_de_compte={offre.gestion_de_compte} gestion_a_distance={offre.gestion_a_distance} option_de_payment={offre.option_de_payment} moyens_de_payment={offre.moyens_de_payment} prets_et_credits={offre.prets_et_credits} placement={offre.placement} epargne={offre.epargne} coffre_fort={offre.coffre_fort} financement_externe={offre.financement_externe}/>}
    </div>
    )
}




export default ProfileBank
>>>>>>> 65f8f2e7bb4507b85674a3a0a3553126055cafcc
