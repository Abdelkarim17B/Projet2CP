import { useState,useEffect } from "react";
import { useSearchParams } from "react-router-dom"
import InfoBank from "../Components/Pages/ProfileBank/InfoBank";
import Results from "../Components/Pages/ResultatComparison/Results";
import {Bank} from "../Model/Bank"
import {PrestationModel} from "../Model/Prestation"

export function EmptyString(str:String){
    if(str == ""){
        return "/";
    }else{
        return str;
    }
}

function ResultatCmp() {
  const [banquesParams, setBanquesParams] = useSearchParams();
  const firstBanque = banquesParams.get("firstBanque");
  const secondBanque = banquesParams.get("secondBanque");

  
  const [bankFirst, setBankFirst] = useState<Bank>();
  const [offreFirst, setOffreFirst] = useState<PrestationModel>();
  const [bankSecond, setBankSecond] = useState<Bank>();
  const [offreSecond, setOffreSecond] = useState<PrestationModel>();
  
  useEffect(() => {
    const BankFetching = async () => {
      const data = await (
        await fetch('http://localhost:3000/comparaison/'+firstBanque+'/'+secondBanque)
      ).json();

        setBankFirst((data.Bank1)[0]);
        setBankSecond((data.Bank2)[0]);
        setOffreFirst((data.Bank1)[1]);
        setOffreSecond((data.Bank2)[1]);
      console.log({data})
    };
    BankFetching();
  }, []);

  

  

  

  return (
        <div className="bg-[#F0EFF2] flex flex-col justify-center items-center">
                {/* les infos des deux banques*/}
                <div className="flex px-[9vw] items-center py-[10vh]">
                    {bankFirst && <InfoBank nom_banque={bankFirst.nom_banque} adresse={bankFirst.adresse} adresse_mail={bankFirst.adresse_mail} num_tel={bankFirst.num_tel} num_fax={bankFirst.num_fax} site_web={bankFirst.site_web} logo={bankFirst.logo} id_banque={bankFirst.id_banque}/>}
                    <div className="bg-BlueDark w-[1px] h-[90vh]"></div>
                    {bankSecond && <InfoBank nom_banque={bankSecond.nom_banque} adresse={bankSecond.adresse} adresse_mail={bankSecond.adresse_mail} num_tel={bankSecond.num_tel} num_fax={bankSecond.num_fax} site_web={bankSecond.site_web} logo={bankSecond.logo} id_banque={bankSecond.id_banque}/>}
                </div>

                {/* les resultats de la comparaison*/}
                {offreFirst && offreSecond && 
                    <div className="mb-[30vh]">
                        <table className="w-[82vw]">
                            <thead>
                                <tr>
                                    <th className="px-16 py-3 text-center text-[1.8rem] bg-BlueDark font-light text-white tracking-wider border-b-2 pt-8 pb-8">
                                    Gestion de compte
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white w-[100%]">  
                            <tr>
                              <td className="py-8">
                                    <div className="text-[1.4rem] font-medium text-center text-BlueDark">
                                        <h3>Ouverture compte courant</h3>
                                        {  
                                            <Results Personnel1={EmptyString(offreFirst.gestion_de_compte.ouverture_compte_courant.personnel)} Personnel2={EmptyString(offreSecond.gestion_de_compte.ouverture_compte_courant.personnel)} Entreprise1={EmptyString(offreFirst.gestion_de_compte.ouverture_compte_courant.entreprise)} Entreprise2={EmptyString(offreSecond.gestion_de_compte.ouverture_compte_courant.entreprise)} Proffessionel1={EmptyString(offreFirst.gestion_de_compte.ouverture_compte_courant.professionnel)} Proffessionel2={EmptyString(offreSecond.gestion_de_compte.ouverture_compte_courant.professionnel)}/>}
                                        
                                    </div>
                              </td>
                            </tr>
                        </tbody>
                        <tbody className="bg-white w-[100%]">  
                            <tr>
                              <td className="py-8">
                                    <div className="text-[1.4rem] font-medium text-center text-BlueDark">
                                        <h3>Tenue compte courant</h3>
                                        {   
                                            <Results Personnel1={EmptyString(offreFirst.gestion_de_compte.tenue_compte_courant.personnel)} Personnel2={EmptyString(offreSecond.gestion_de_compte.tenue_compte_courant.personnel)} Entreprise1={EmptyString(offreFirst.gestion_de_compte.tenue_compte_courant.entreprise)} Entreprise2={EmptyString(offreSecond.gestion_de_compte.tenue_compte_courant.entreprise)} Proffessionel1={EmptyString(offreFirst.gestion_de_compte.ouverture_compte_courant.professionnel)} Proffessionel2={EmptyString(offreSecond.gestion_de_compte.tenue_compte_courant.professionnel)}/>}
                                        
                                    </div>)
                              </td>
                            </tr>
                        </tbody>
                        <tbody className="bg-white w-[100%]">  
                            <tr>
                              <td className="py-8">
                                    <div className="text-[1.4rem] font-medium text-center text-BlueDark">
                                        <h3>Ouverture compte cheque</h3>
                                        {   
                                            <Results Personnel1={EmptyString(offreFirst.gestion_de_compte.ouverture_compte_cheque.personnel)} Personnel2={EmptyString(offreSecond.gestion_de_compte.ouverture_compte_cheque.personnel)} Entreprise1={EmptyString(offreFirst.gestion_de_compte.ouverture_compte_cheque.entreprise)} Entreprise2={EmptyString(offreSecond.gestion_de_compte.ouverture_compte_cheque.entreprise)} Proffessionel1={EmptyString(offreFirst.gestion_de_compte.ouverture_compte_cheque.professionnel)} Proffessionel2={EmptyString(offreSecond.gestion_de_compte.ouverture_compte_cheque.professionnel)}/>}
                                        
                                    </div>
                              </td>
                            </tr>
                        </tbody>
                        <tbody className="bg-white w-[100%]">  
                            <tr>
                              <td className="py-8">
                                    <div className="text-[1.4rem] font-medium text-center text-BlueDark">
                                        <h3>Tenue compte cheque</h3>
                                        {   
                                            <Results Personnel1={EmptyString(offreFirst.gestion_de_compte.tenue_compte_cheque.personnel)} Personnel2={EmptyString(offreSecond.gestion_de_compte.tenue_compte_cheque.personnel)} Entreprise1={EmptyString(offreFirst.gestion_de_compte.tenue_compte_cheque.entreprise)} Entreprise2={EmptyString(offreSecond.gestion_de_compte.tenue_compte_cheque.entreprise)} Proffessionel1={EmptyString(offreFirst.gestion_de_compte.tenue_compte_cheque.professionnel)} Proffessionel2={EmptyString(offreSecond.gestion_de_compte.tenue_compte_cheque.professionnel)}/>}
                                    </div>
                              </td>
                            </tr>
                        </tbody>
                        <tbody className="bg-white w-[100%]">  
                            <tr>
                              <td className="py-8">
                                    <div className="text-[1.4rem] font-medium text-center text-BlueDark">
                                        <h3>Ouverture compte epargne</h3>
                                        {   
                                            <Results Personnel1={EmptyString(offreFirst.gestion_de_compte.ouverture_compte_epargne.personnel)} Personnel2={EmptyString(offreSecond.gestion_de_compte.ouverture_compte_epargne.personnel)} Entreprise1={EmptyString(offreFirst.gestion_de_compte.ouverture_compte_epargne.entreprise)} Entreprise2={EmptyString(offreSecond.gestion_de_compte.ouverture_compte_epargne.entreprise)} Proffessionel1={EmptyString(offreFirst.gestion_de_compte.ouverture_compte_epargne.professionnel)} Proffessionel2={EmptyString(offreSecond.gestion_de_compte.ouverture_compte_epargne.professionnel)}/>}
                                    </div>
                              </td>
                            </tr>
                        </tbody>
                        <tbody className="bg-white w-[100%]">  
                            <tr>
                              <td className="py-8">
                                    <div className="text-[1.4rem] font-medium text-center text-BlueDark">
                                        <h3>Tenue compte epargne</h3>
                                        {   
                                            <Results Personnel1={EmptyString(offreFirst.gestion_de_compte.tenue_compte_epargne.personnel)} Personnel2={EmptyString(offreSecond.gestion_de_compte.tenue_compte_epargne.personnel)} Entreprise1={EmptyString(offreFirst.gestion_de_compte.tenue_compte_epargne.entreprise)} Entreprise2={EmptyString(offreSecond.gestion_de_compte.tenue_compte_epargne.entreprise)} Proffessionel1={EmptyString(offreFirst.gestion_de_compte.tenue_compte_epargne.professionnel)} Proffessionel2={EmptyString(offreSecond.gestion_de_compte.tenue_compte_epargne.professionnel)}/>}
                                    </div>
                              </td>
                            </tr>
                        </tbody>
                        <tbody className="bg-white w-[100%]">  
                            <tr>
                              <td className="py-8">
                                    <div className="text-[1.4rem] font-medium text-center text-BlueDark">
                                        <h3>Ouverture compte devise</h3>
                                        {   
                                            <Results Personnel1={EmptyString(offreFirst.gestion_de_compte.ouverture_compte_devise.personnel)} Personnel2={EmptyString(offreSecond.gestion_de_compte.ouverture_compte_devise.personnel)} Entreprise1={EmptyString(offreFirst.gestion_de_compte.ouverture_compte_devise.entreprise)} Entreprise2={EmptyString(offreSecond.gestion_de_compte.ouverture_compte_devise.entreprise)} Proffessionel1={EmptyString(offreFirst.gestion_de_compte.ouverture_compte_devise.professionnel)} Proffessionel2={EmptyString(offreSecond.gestion_de_compte.ouverture_compte_devise.professionnel)}/>}
                                    </div>
                              </td>
                            </tr>
                        </tbody>
                        <tbody className="bg-white w-[100%]">  
                            <tr>
                              <td className="py-8">
                                    <div className="text-[1.4rem] font-medium text-center text-BlueDark">
                                        <h3>Tenue compte devise</h3>
                                        {   
                                            <Results Personnel1={EmptyString(offreFirst.gestion_de_compte.tenue_compte_devise.personnel)} Personnel2={EmptyString(offreSecond.gestion_de_compte.tenue_compte_devise.personnel)} Entreprise1={EmptyString(offreFirst.gestion_de_compte.tenue_compte_devise.entreprise)} Entreprise2={EmptyString(offreSecond.gestion_de_compte.tenue_compte_devise.entreprise)} Proffessionel1={EmptyString(offreFirst.gestion_de_compte.tenue_compte_devise.professionnel)} Proffessionel2={EmptyString(offreSecond.gestion_de_compte.tenue_compte_devise.professionnel)}/>}
                                    </div>
                              </td>
                            </tr>
                        </tbody>
                        <tbody className="bg-white w-[100%]">  
                            <tr>
                              <td className="py-8">
                                    <div className="text-[1.4rem] font-medium text-center text-BlueDark">
                                        <h3>Fermeture de compte</h3>
                                        {   
                                            <Results Personnel1={EmptyString(offreFirst.gestion_de_compte.fermeture_de_compte.personnel)} Personnel2={EmptyString(offreSecond.gestion_de_compte.fermeture_de_compte.personnel)} Entreprise1={EmptyString(offreFirst.gestion_de_compte.fermeture_de_compte.entreprise)} Entreprise2={EmptyString(offreSecond.gestion_de_compte.fermeture_de_compte.entreprise)} Proffessionel1={EmptyString(offreFirst.gestion_de_compte.fermeture_de_compte.professionnel)} Proffessionel2={EmptyString(offreSecond.gestion_de_compte.fermeture_de_compte.professionnel)}/>}
                                    </div>)
                              </td>
                            </tr>
                        </tbody>
                    </table>


















                    <table className="w-[82vw]">
                            <thead>
                                <tr>
                                    <th className="px-16 py-3 text-center text-[1.8rem] bg-BlueDark font-light text-white tracking-wider border-b-2 pt-8 pb-8">
                                    Gestion a distance
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white w-[100%]">  
                            <tr>
                              <td className="py-8">
                                    <div className="text-[1.4rem] font-medium text-center text-BlueDark">
                                        <h3>E-banking abonnement</h3>
                                        {   
                                            <Results Personnel1={EmptyString(offreFirst.gestion_a_distance.e_banking_abonnement.personnel)} Personnel2={EmptyString(offreSecond.gestion_a_distance.e_banking_abonnement.personnel)} Entreprise1={EmptyString(offreFirst.gestion_a_distance.e_banking_abonnement.entreprise)} Entreprise2={EmptyString(offreSecond.gestion_a_distance.e_banking_abonnement.entreprise)} Proffessionel1={EmptyString(offreFirst.gestion_a_distance.e_banking_abonnement.professionnel)} Proffessionel2={EmptyString(offreSecond.gestion_a_distance.e_banking_abonnement.professionnel)}/>}
                                        
                                    </div>
                              </td>
                            </tr>
                        </tbody>
                        <tbody className="bg-white w-[100%]">  
                            <tr>
                              <td className="py-8">
                                    <div className="text-[1.4rem] font-medium text-center text-BlueDark">
                                        <h3>E-banking consultation solde</h3>
                                        {   
                                            <Results Personnel1={EmptyString(offreFirst.gestion_a_distance.e_banking_consultation_solde.personnel)} Personnel2={EmptyString(offreSecond.gestion_a_distance.e_banking_consultation_solde.personnel)} Entreprise1={EmptyString(offreFirst.gestion_a_distance.e_banking_consultation_solde.entreprise)} Entreprise2={EmptyString(offreSecond.gestion_a_distance.e_banking_consultation_solde.entreprise)} Proffessionel1={EmptyString(offreFirst.gestion_a_distance.e_banking_consultation_solde.professionnel)} Proffessionel2={EmptyString(offreSecond.gestion_a_distance.e_banking_consultation_solde.professionnel)}/>}
                                        
                                    </div>
                              </td>
                            </tr>
                        </tbody>
                        <tbody className="bg-white w-[100%]">  
                            <tr>
                              <td className="py-8">
                                    <div className="text-[1.4rem] font-medium text-center text-BlueDark">
                                        <h3>E-banking virement</h3>
                                        {   
                                            <Results Personnel1={EmptyString(offreFirst.gestion_a_distance.e_banking_virement.personnel)} Personnel2={EmptyString(offreSecond.gestion_a_distance.e_banking_virement.personnel)} Entreprise1={EmptyString(offreFirst.gestion_a_distance.e_banking_virement.entreprise)} Entreprise2={EmptyString(offreSecond.gestion_a_distance.e_banking_virement.entreprise)} Proffessionel1={EmptyString(offreFirst.gestion_a_distance.e_banking_virement.professionnel)} Proffessionel2={EmptyString(offreSecond.gestion_a_distance.e_banking_virement.professionnel)}/>}
                                        
                                    </div>
                              </td>
                            </tr>
                        </tbody>
                        <tbody className="bg-white w-[100%]">  
                            <tr>
                              <td className="py-8">
                                    <div className="text-[1.4rem] font-medium text-center text-BlueDark">
                                        <h3>E-banking paiment</h3>
                                        {   
                                            <Results Personnel1={EmptyString(offreFirst.gestion_a_distance.e_banking_paiment.personnel)} Personnel2={EmptyString(offreSecond.gestion_a_distance.e_banking_paiment.personnel)} Entreprise1={EmptyString(offreFirst.gestion_a_distance.e_banking_paiment.entreprise)} Entreprise2={EmptyString(offreSecond.gestion_a_distance.e_banking_paiment.entreprise)} Proffessionel1={EmptyString(offreFirst.gestion_a_distance.e_banking_paiment.professionnel)} Proffessionel2={EmptyString(offreSecond.gestion_a_distance.e_banking_paiment.professionnel)}/>}
                                    </div>
                              </td>
                            </tr>
                        </tbody>
                        <tbody className="bg-white w-[100%]">  
                            <tr>
                              <td className="py-8">
                                    <div className="text-[1.4rem] font-medium text-center text-BlueDark">
                                        <h3>Sms banking abonnement</h3>
                                        {   
                                            <Results Personnel1={EmptyString(offreFirst.gestion_a_distance.sms_banking_abonnement.personnel)} Personnel2={EmptyString(offreSecond.gestion_a_distance.sms_banking_abonnement.personnel)} Entreprise1={EmptyString(offreFirst.gestion_a_distance.sms_banking_abonnement.entreprise)} Entreprise2={EmptyString(offreSecond.gestion_a_distance.sms_banking_abonnement.entreprise)} Proffessionel1={EmptyString(offreFirst.gestion_a_distance.sms_banking_abonnement.professionnel)} Proffessionel2={EmptyString(offreSecond.gestion_a_distance.sms_banking_abonnement.professionnel)}/>}
                                    </div>
                              </td>
                            </tr>
                        </tbody>
                        <tbody className="bg-white w-[100%]">  
                            <tr>
                              <td className="py-8">
                                    <div className="text-[1.4rem] font-medium text-center text-BlueDark">
                                        <h3>Sms banking virement en agence</h3>
                                        {   
                                            <Results Personnel1={EmptyString(offreFirst.gestion_a_distance.sms_banking_virement_en_agence.personnel)} Personnel2={EmptyString(offreSecond.gestion_a_distance.sms_banking_virement_en_agence.personnel)} Entreprise1={EmptyString(offreFirst.gestion_a_distance.sms_banking_virement_en_agence.entreprise)} Entreprise2={EmptyString(offreSecond.gestion_a_distance.sms_banking_virement_en_agence.entreprise)} Proffessionel1={EmptyString(offreFirst.gestion_a_distance.sms_banking_virement_en_agence.professionnel)} Proffessionel2={EmptyString(offreSecond.gestion_a_distance.sms_banking_virement_en_agence.professionnel)}/>}
                                    </div>
                              </td>
                            </tr>
                        </tbody>
                        <tbody className="bg-white w-[100%]">  
                            <tr>
                              <td className="py-8">
                                    <div className="text-[1.4rem] font-medium text-center text-BlueDark">
                                        <h3>Sms banking virement hors agence</h3>
                                        {   
                                            <Results Personnel1={EmptyString(offreFirst.gestion_a_distance.sms_banking_virement_hors_agence.personnel)} Personnel2={EmptyString(offreSecond.gestion_a_distance.sms_banking_virement_hors_agence.personnel)} Entreprise1={EmptyString(offreFirst.gestion_a_distance.sms_banking_virement_hors_agence.entreprise)} Entreprise2={EmptyString(offreSecond.gestion_a_distance.sms_banking_virement_hors_agence.entreprise)} Proffessionel1={EmptyString(offreFirst.gestion_a_distance.sms_banking_virement_hors_agence.professionnel)} Proffessionel2={EmptyString(offreSecond.gestion_a_distance.sms_banking_virement_hors_agence.professionnel)}/>}
                                    </div>
                              </td>
                            </tr>
                        </tbody>
                        <tbody className="bg-white w-[100%]">  
                            <tr>
                              <td className="py-8">
                                    <div className="text-[1.4rem] font-medium text-center text-BlueDark">
                                        <h3>Service contact</h3>
                                        {   
                                            <Results Personnel1={EmptyString(offreFirst.gestion_a_distance.service_contact.personnel)} Personnel2={EmptyString(offreSecond.gestion_a_distance.service_contact.personnel)} Entreprise1={EmptyString(offreFirst.gestion_a_distance.service_contact.entreprise)} Entreprise2={EmptyString(offreSecond.gestion_a_distance.service_contact.entreprise)} Proffessionel1={EmptyString(offreFirst.gestion_a_distance.service_contact.professionnel)} Proffessionel2={EmptyString(offreSecond.gestion_a_distance.service_contact.professionnel)}/>}
                                    </div>
                              </td>
                            </tr>
                        </tbody>
                    </table>



















                    <table className="w-[82vw]">
                            <thead>
                                <tr>
                                    <th className="px-16 py-3 text-center text-[1.8rem] bg-BlueDark font-light text-white tracking-wider border-b-2 pt-8 pb-8">
                                    Option de payment
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white w-[100%]">  
                            <tr>
                              <td className="py-8">
                                    <div className="text-[1.4rem] font-medium text-center text-BlueDark">
                                        <h3>Versement en agence</h3>
                                        {   
                                            <Results Personnel1={EmptyString(offreFirst.option_de_payment.versement_en_agence.personnel)} Personnel2={EmptyString(offreSecond.option_de_payment.versement_en_agence.personnel)} Entreprise1={EmptyString(offreFirst.option_de_payment.versement_en_agence.entreprise)} Entreprise2={EmptyString(offreSecond.option_de_payment.versement_en_agence.entreprise)} Proffessionel1={EmptyString(offreFirst.option_de_payment.versement_en_agence.professionnel)} Proffessionel2={EmptyString(offreSecond.option_de_payment.versement_en_agence.professionnel)}/>}
                                        
                                    </div>
                              </td>
                            </tr>
                        </tbody>
                        <tbody className="bg-white w-[100%]">  
                            <tr>
                              <td className="py-8">
                                    <div className="text-[1.4rem] font-medium text-center text-BlueDark">
                                        <h3>Versement hors agence</h3>
                                        {      
                                                <Results Personnel1={EmptyString(offreFirst.option_de_payment.versement_hors_agence.personnel)} Personnel2={EmptyString(offreSecond.option_de_payment.versement_hors_agence.personnel)} Entreprise1={EmptyString(offreFirst.option_de_payment.versement_hors_agence.entreprise)} Entreprise2={EmptyString(offreSecond.option_de_payment.versement_hors_agence.entreprise)} Proffessionel1={EmptyString(offreFirst.option_de_payment.versement_hors_agence.professionnel)} Proffessionel2={EmptyString(offreSecond.option_de_payment.versement_hors_agence.professionnel)}/>}
                                        
                                    </div>
                              </td>
                            </tr>
                        </tbody>
                        <tbody className="bg-white w-[100%]">  
                            <tr>
                              <td className="py-8">
                                    <div className="text-[1.4rem] font-medium text-center text-BlueDark">
                                        <h3>Virement en agence</h3>
                                        {   
                                            <Results Personnel1={EmptyString(offreFirst.option_de_payment.virement_en_agence.personnel)} Personnel2={EmptyString(offreSecond.option_de_payment.virement_en_agence.personnel)} Entreprise1={EmptyString(offreFirst.option_de_payment.virement_en_agence.entreprise)} Entreprise2={EmptyString(offreSecond.option_de_payment.virement_en_agence.entreprise)} Proffessionel1={EmptyString(offreFirst.option_de_payment.virement_en_agence.professionnel)} Proffessionel2={EmptyString(offreSecond.option_de_payment.virement_en_agence.professionnel)}/>}
                                        
                                    </div>
                              </td>
                            </tr>
                        </tbody>
                        <tbody className="bg-white w-[100%]">  
                            <tr>
                              <td className="py-8">
                                    <div className="text-[1.4rem] font-medium text-center text-BlueDark">
                                        <h3>Virement hors agence</h3>
                                        {   
                                            <Results Personnel1={EmptyString(offreFirst.option_de_payment.virement_hors_agence.personnel)} Personnel2={EmptyString(offreSecond.option_de_payment.virement_hors_agence.personnel)} Entreprise1={EmptyString(offreFirst.option_de_payment.virement_hors_agence.entreprise)} Entreprise2={EmptyString(offreSecond.option_de_payment.virement_hors_agence.entreprise)} Proffessionel1={EmptyString(offreFirst.option_de_payment.virement_hors_agence.professionnel)} Proffessionel2={EmptyString(offreSecond.option_de_payment.virement_hors_agence.professionnel)}/>}
                                    </div>
                              </td>
                            </tr>
                        </tbody>
                        <tbody className="bg-white w-[100%]">  
                            <tr>
                              <td className="py-8">
                                    <div className="text-[1.4rem] font-medium text-center text-BlueDark">
                                        <h3>Pelevement en agence</h3>
                                        {   
                                            <Results Personnel1={EmptyString(offreFirst.option_de_payment.prelevement_en_agence.personnel)} Personnel2={EmptyString(offreSecond.option_de_payment.prelevement_en_agence.personnel)} Entreprise1={EmptyString(offreFirst.option_de_payment.prelevement_en_agence.entreprise)} Entreprise2={EmptyString(offreSecond.option_de_payment.prelevement_en_agence.entreprise)} Proffessionel1={EmptyString(offreFirst.option_de_payment.prelevement_en_agence.professionnel)} Proffessionel2={EmptyString(offreSecond.option_de_payment.prelevement_en_agence.professionnel)}/>}
                                    </div>
                              </td>
                            </tr>
                        </tbody>
                        <tbody className="bg-white w-[100%]">  
                            <tr>
                              <td className="py-8">
                                    <div className="text-[1.4rem] font-medium text-center text-BlueDark">
                                        <h3>Pelevement hors agence</h3>
                                        {   
                                            <Results Personnel1={EmptyString(offreFirst.option_de_payment.prelevement_hors_agence.personnel)} Personnel2={EmptyString(offreSecond.option_de_payment.prelevement_hors_agence.personnel)} Entreprise1={EmptyString(offreFirst.option_de_payment.prelevement_hors_agence.entreprise)} Entreprise2={EmptyString(offreSecond.option_de_payment.prelevement_hors_agence.entreprise)} Proffessionel1={EmptyString(offreFirst.option_de_payment.prelevement_hors_agence.professionnel)} Proffessionel2={EmptyString(offreSecond.option_de_payment.prelevement_hors_agence.professionnel)}/>}
                                    </div>
                              </td>
                            </tr>
                        </tbody>
                        <tbody className="bg-white w-[100%]">  
                            <tr>
                              <td className="py-8">
                                    <div className="text-[1.4rem] font-medium text-center text-BlueDark">
                                        <h3>Retraits en agence</h3>
                                        {   
                                            <Results Personnel1={EmptyString(offreFirst.option_de_payment.retraits_en_agence.personnel)} Personnel2={EmptyString(offreSecond.option_de_payment.retraits_en_agence.personnel)} Entreprise1={EmptyString(offreFirst.option_de_payment.retraits_en_agence.entreprise)} Entreprise2={EmptyString(offreSecond.option_de_payment.retraits_en_agence.entreprise)} Proffessionel1={EmptyString(offreFirst.option_de_payment.retraits_en_agence.professionnel)} Proffessionel2={EmptyString(offreSecond.option_de_payment.retraits_en_agence.professionnel)}/>}
                                    </div>
                              </td>
                            </tr>
                        </tbody>
                        <tbody className="bg-white w-[100%]">  
                            <tr>
                              <td className="py-8">
                                    <div className="text-[1.4rem] font-medium text-center text-BlueDark">
                                        <h3>Retraits hors agence</h3>
                                        {   
                                            <Results Personnel1={EmptyString(offreFirst.option_de_payment.retraits_hors_agence.personnel)} Personnel2={EmptyString(offreSecond.option_de_payment.retraits_hors_agence.personnel)} Entreprise1={EmptyString(offreFirst.option_de_payment.retraits_hors_agence.entreprise)} Entreprise2={EmptyString(offreSecond.option_de_payment.retraits_hors_agence.entreprise)} Proffessionel1={EmptyString(offreFirst.option_de_payment.retraits_hors_agence.professionnel)} Proffessionel2={EmptyString(offreSecond.option_de_payment.retraits_hors_agence.professionnel)}/>}
                                    </div>
                              </td>
                            </tr>
                        </tbody>
                        <tbody className="bg-white w-[100%]">  
                            <tr>
                              <td className="py-8">
                                    <div className="text-[1.4rem] font-medium text-center text-BlueDark">
                                        <h3>Payment cheque en agence</h3>
                                        {   
                                            <Results Personnel1={EmptyString(offreFirst.option_de_payment.payment_cheque_en_agence.personnel)} Personnel2={EmptyString(offreSecond.option_de_payment.payment_cheque_en_agence.personnel)} Entreprise1={EmptyString(offreFirst.option_de_payment.payment_cheque_en_agence.entreprise)} Entreprise2={EmptyString(offreSecond.option_de_payment.payment_cheque_en_agence.entreprise)} Proffessionel1={EmptyString(offreFirst.option_de_payment.payment_cheque_en_agence.professionnel)} Proffessionel2={EmptyString(offreSecond.option_de_payment.payment_cheque_en_agence.professionnel)}/>}
                                    </div>
                              </td>
                            </tr>
                        </tbody>
                        <tbody className="bg-white w-[100%]">  
                            <tr>
                              <td className="py-8">
                                    <div className="text-[1.4rem] font-medium text-center text-BlueDark">
                                        <h3>Payment cheque hors agence</h3>
                                        {   
                                            <Results Personnel1={EmptyString(offreFirst.option_de_payment.payment_cheque_hors_agence.personnel)} Personnel2={EmptyString(offreSecond.option_de_payment.payment_cheque_hors_agence.personnel)} Entreprise1={EmptyString(offreFirst.option_de_payment.payment_cheque_hors_agence.entreprise)} Entreprise2={EmptyString(offreSecond.option_de_payment.payment_cheque_hors_agence.entreprise)} Proffessionel1={EmptyString(offreFirst.option_de_payment.payment_cheque_hors_agence.professionnel)} Proffessionel2={EmptyString(offreSecond.option_de_payment.payment_cheque_hors_agence.professionnel)}/>}
                                    </div>
                              </td>
                            </tr>
                        </tbody>
                        <tbody className="bg-white w-[100%]">  
                            <tr>
                              <td className="py-8">
                                    <div className="text-[1.4rem] font-medium text-center text-BlueDark">
                                        <h3>Vente devise</h3>
                                        {   
                                            <Results Personnel1={EmptyString(offreFirst.option_de_payment.vente_devise.personnel)} Personnel2={EmptyString(offreSecond.option_de_payment.vente_devise.personnel)} Entreprise1={EmptyString(offreFirst.option_de_payment.vente_devise.entreprise)} Entreprise2={EmptyString(offreSecond.option_de_payment.vente_devise.entreprise)} Proffessionel1={EmptyString(offreFirst.option_de_payment.vente_devise.professionnel)} Proffessionel2={EmptyString(offreSecond.option_de_payment.vente_devise.professionnel)}/>}
                                    </div>
                              </td>
                            </tr>
                        </tbody>
                        <tbody className="bg-white w-[100%]">  
                            <tr>
                              <td className="py-8">
                                    <div className="text-[1.4rem] font-medium text-center text-BlueDark">
                                        <h3>achat devise</h3>
                                        {   
                                            <Results Personnel1={EmptyString(offreFirst.option_de_payment.achat_devise.personnel)} Personnel2={EmptyString(offreSecond.option_de_payment.achat_devise.personnel)} Entreprise1={EmptyString(offreFirst.option_de_payment.achat_devise.entreprise)} Entreprise2={EmptyString(offreSecond.option_de_payment.achat_devise.entreprise)} Proffessionel1={EmptyString(offreFirst.option_de_payment.achat_devise.professionnel)} Proffessionel2={EmptyString(offreSecond.option_de_payment.achat_devise.professionnel)}/>}
                                    </div>
                              </td>
                            </tr>
                        </tbody>
                    </table>)




















                    <table className="w-[82vw]">
                            <thead>
                                <tr>
                                    <th className="px-16 py-3 text-center text-[1.8rem] bg-BlueDark font-light text-white tracking-wider border-b-2 pt-8 pb-8">
                                    Moyens de payment
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white w-[100%]">  
                            <tr>
                              <td className="py-8">
                                    <div className="text-[1.4rem] font-medium text-center text-BlueDark">
                                        <h3>Creation bank card</h3>
                                        {   
                                            <Results Personnel1={EmptyString(offreFirst.moyens_de_payment.creation_bank_card.personnel)} Personnel2={EmptyString(offreSecond.moyens_de_payment.creation_bank_card.personnel)} Entreprise1={EmptyString(offreFirst.moyens_de_payment.creation_bank_card.entreprise)} Entreprise2={EmptyString(offreSecond.moyens_de_payment.creation_bank_card.entreprise)} Proffessionel1={EmptyString(offreFirst.moyens_de_payment.creation_bank_card.professionnel)} Proffessionel2={EmptyString(offreSecond.moyens_de_payment.creation_bank_card.professionnel)}/>}
                                        
                                    </div>
                              </td>
                            </tr>
                        </tbody>
                        <tbody className="bg-white w-[100%]">  
                            <tr>
                              <td className="py-8">
                                    <div className="text-[1.4rem] font-medium text-center text-BlueDark">
                                        <h3>Renouvelement bank card</h3>
                                        {   
                                            <Results Personnel1={EmptyString(offreFirst.moyens_de_payment.renouvelement_bank_card.personnel)} Personnel2={EmptyString(offreSecond.moyens_de_payment.renouvelement_bank_card.personnel)} Entreprise1={EmptyString(offreFirst.moyens_de_payment.renouvelement_bank_card.entreprise)} Entreprise2={EmptyString(offreSecond.moyens_de_payment.renouvelement_bank_card.entreprise)} Proffessionel1={EmptyString(offreFirst.moyens_de_payment.renouvelement_bank_card.professionnel)} Proffessionel2={EmptyString(offreSecond.moyens_de_payment.renouvelement_bank_card.professionnel)}/>}
                                        
                                    </div>
                              </td>
                            </tr>
                        </tbody>
                        <tbody className="bg-white w-[100%]">  
                            <tr>
                              <td className="py-8">
                                    <div className="text-[1.4rem] font-medium text-center text-BlueDark">
                                        <h3>Remplacement bank card</h3>
                                        {   
                                            <Results Personnel1={EmptyString(offreFirst.moyens_de_payment.remplacement_bank_card.personnel)} Personnel2={EmptyString(offreSecond.moyens_de_payment.remplacement_bank_card.personnel)} Entreprise1={EmptyString(offreFirst.moyens_de_payment.remplacement_bank_card.entreprise)} Entreprise2={EmptyString(offreSecond.moyens_de_payment.remplacement_bank_card.entreprise)} Proffessionel1={EmptyString(offreFirst.moyens_de_payment.remplacement_bank_card.professionnel)} Proffessionel2={EmptyString(offreSecond.moyens_de_payment.remplacement_bank_card.professionnel)}/>}
                                        
                                    </div>
                              </td>
                            </tr>
                        </tbody>
                        <tbody className="bg-white w-[100%]">  
                            <tr>
                              <td className="py-8">
                                    <div className="text-[1.4rem] font-medium text-center text-BlueDark">
                                        <h3>Edition code confidentiel bank card</h3>
                                        {   
                                            <Results Personnel1={EmptyString(offreFirst.moyens_de_payment.edition_code_confidentiel_bank_card.personnel)} Personnel2={EmptyString(offreSecond.moyens_de_payment.edition_code_confidentiel_bank_card.personnel)} Entreprise1={EmptyString(offreFirst.moyens_de_payment.edition_code_confidentiel_bank_card.entreprise)} Entreprise2={EmptyString(offreSecond.moyens_de_payment.edition_code_confidentiel_bank_card.entreprise)} Proffessionel1={EmptyString(offreFirst.moyens_de_payment.edition_code_confidentiel_bank_card.professionnel)} Proffessionel2={EmptyString(offreSecond.moyens_de_payment.edition_code_confidentiel_bank_card.professionnel)}/>}
                                    </div>
                              </td>
                            </tr>
                        </tbody>
                        <tbody className="bg-white w-[100%]">  
                            <tr>
                              <td className="py-8">
                                    <div className="text-[1.4rem] font-medium text-center text-BlueDark">
                                        <h3>Retrait intra bancaire</h3>
                                        {   
                                            <Results Personnel1={EmptyString(offreFirst.moyens_de_payment.retrait_intra_bancaire.personnel)} Personnel2={EmptyString(offreSecond.moyens_de_payment.retrait_intra_bancaire.personnel)} Entreprise1={EmptyString(offreFirst.moyens_de_payment.retrait_intra_bancaire.entreprise)} Entreprise2={EmptyString(offreSecond.moyens_de_payment.retrait_intra_bancaire.entreprise)} Proffessionel1={EmptyString(offreFirst.moyens_de_payment.retrait_intra_bancaire.professionnel)} Proffessionel2={EmptyString(offreSecond.moyens_de_payment.retrait_intra_bancaire.professionnel)}/>}
                                    </div>
                              </td>
                            </tr>
                        </tbody>
                        <tbody className="bg-white w-[100%]">  
                            <tr>
                              <td className="py-8">
                                    <div className="text-[1.4rem] font-medium text-center text-BlueDark">
                                        <h3>Retrait inter bancaire</h3>
                                        {   
                                            <Results Personnel1={EmptyString(offreFirst.moyens_de_payment.retrait_inter_bancaire.personnel)} Personnel2={EmptyString(offreSecond.moyens_de_payment.retrait_inter_bancaire.personnel)} Entreprise1={EmptyString(offreFirst.moyens_de_payment.retrait_inter_bancaire.entreprise)} Entreprise2={EmptyString(offreSecond.moyens_de_payment.retrait_inter_bancaire.entreprise)} Proffessionel1={EmptyString(offreFirst.moyens_de_payment.retrait_inter_bancaire.professionnel)} Proffessionel2={EmptyString(offreSecond.moyens_de_payment.retrait_inter_bancaire.professionnel)}/>}
                                    </div>
                              </td>
                            </tr>
                        </tbody>
                        <tbody className="bg-white w-[100%]">  
                            <tr>
                              <td className="py-8">
                                    <div className="text-[1.4rem] font-medium text-center text-BlueDark">
                                        <h3>Creation visa</h3>
                                        {   
                                            <Results Personnel1={EmptyString(offreFirst.moyens_de_payment.creation_visa.personnel)} Personnel2={EmptyString(offreSecond.moyens_de_payment.creation_visa.personnel)} Entreprise1={EmptyString(offreFirst.moyens_de_payment.creation_visa.entreprise)} Entreprise2={EmptyString(offreSecond.moyens_de_payment.creation_visa.entreprise)} Proffessionel1={EmptyString(offreFirst.moyens_de_payment.creation_visa.professionnel)} Proffessionel2={EmptyString(offreSecond.moyens_de_payment.creation_visa.professionnel)}/>}
                                    </div>
                              </td>
                            </tr>
                        </tbody>
                        <tbody className="bg-white w-[100%]">  
                            <tr>
                              <td className="py-8">
                                    <div className="text-[1.4rem] font-medium text-center text-BlueDark">
                                        <h3>Renouvelement visa</h3>
                                        {   
                                            <Results Personnel1={EmptyString(offreFirst.moyens_de_payment.renouvelement_visa.personnel)} Personnel2={EmptyString(offreSecond.moyens_de_payment.renouvelement_visa.personnel)} Entreprise1={EmptyString(offreFirst.moyens_de_payment.renouvelement_visa.entreprise)} Entreprise2={EmptyString(offreSecond.moyens_de_payment.renouvelement_visa.entreprise)} Proffessionel1={EmptyString(offreFirst.moyens_de_payment.renouvelement_visa.professionnel)} Proffessionel2={EmptyString(offreSecond.moyens_de_payment.renouvelement_visa.professionnel)}/>}
                                    </div>
                              </td>
                            </tr>
                        </tbody>
                        <tbody className="bg-white w-[100%]">  
                            <tr>
                              <td className="py-8">
                                    <div className="text-[1.4rem] font-medium text-center text-BlueDark">
                                        <h3>Remplacement visa</h3>
                                        {   
                                            <Results Personnel1={EmptyString(offreFirst.moyens_de_payment.remplacement_visa.personnel)} Personnel2={EmptyString(offreSecond.moyens_de_payment.remplacement_visa.personnel)} Entreprise1={EmptyString(offreFirst.moyens_de_payment.remplacement_visa.entreprise)} Entreprise2={EmptyString(offreSecond.moyens_de_payment.remplacement_visa.entreprise)} Proffessionel1={EmptyString(offreFirst.moyens_de_payment.remplacement_visa.professionnel)} Proffessionel2={EmptyString(offreSecond.moyens_de_payment.remplacement_visa.professionnel)}/>}
                                    </div>
                              </td>
                            </tr>
                        </tbody>
                        <tbody className="bg-white w-[100%]">  
                            <tr>
                              <td className="py-8">
                                    <div className="text-[1.4rem] font-medium text-center text-BlueDark">
                                        <h3>Edition code confidentiel visa</h3>
                                        {   
                                            <Results Personnel1={EmptyString(offreFirst.moyens_de_payment.edition_code_confidentiel_visa.personnel)} Personnel2={EmptyString(offreSecond.moyens_de_payment.edition_code_confidentiel_visa.personnel)} Entreprise1={EmptyString(offreFirst.moyens_de_payment.edition_code_confidentiel_visa.entreprise)} Entreprise2={EmptyString(offreSecond.moyens_de_payment.edition_code_confidentiel_visa.entreprise)} Proffessionel1={EmptyString(offreFirst.moyens_de_payment.edition_code_confidentiel_visa.professionnel)} Proffessionel2={EmptyString(offreSecond.moyens_de_payment.edition_code_confidentiel_visa.professionnel)}/>}
                                    </div>
                              </td>
                            </tr>
                        </tbody>
                    </table>





















                    <table className="w-[82vw]">
                            <thead>
                                <tr>
                                    <th className="px-16 py-3 text-center text-[1.8rem] bg-BlueDark font-light text-white tracking-wider border-b-2 pt-8 pb-8">
                                    Prets et credits
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white w-[100%]">  
                            <tr>
                              <td className="py-8">
                                    <div className="text-[1.4rem] font-medium text-center text-BlueDark">
                                        <h3>Decouvert duree</h3>
                                        {   
                                            <Results Personnel1={EmptyString(offreFirst.prets_et_credits.decouvert_duree.personnel)} Personnel2={EmptyString(offreSecond.prets_et_credits.decouvert_duree.personnel)} Entreprise1={EmptyString(offreFirst.prets_et_credits.decouvert_duree.entreprise)} Entreprise2={EmptyString(offreSecond.prets_et_credits.decouvert_duree.entreprise)} Proffessionel1={EmptyString(offreFirst.prets_et_credits.decouvert_duree.professionnel)} Proffessionel2={EmptyString(offreSecond.prets_et_credits.decouvert_duree.professionnel)}/>}
                                        
                                    </div>
                              </td>
                            </tr>
                        </tbody>
                        <tbody className="bg-white w-[100%]">  
                            <tr>
                              <td className="py-8">
                                    <div className="text-[1.4rem] font-medium text-center text-BlueDark">
                                        <h3>Decouvert taux</h3>
                                        {   
                                            <Results Personnel1={EmptyString(offreFirst.prets_et_credits.decouvert_taux.personnel)} Personnel2={EmptyString(offreSecond.prets_et_credits.decouvert_taux.personnel)} Entreprise1={EmptyString(offreFirst.prets_et_credits.decouvert_taux.entreprise)} Entreprise2={EmptyString(offreSecond.prets_et_credits.decouvert_taux.entreprise)} Proffessionel1={EmptyString(offreFirst.prets_et_credits.decouvert_taux.professionnel)} Proffessionel2={EmptyString(offreSecond.prets_et_credits.decouvert_taux.professionnel)}/>}
                                        
                                    </div>
                              </td>
                            </tr>
                        </tbody>
                        <tbody className="bg-white w-[100%]">  
                            <tr>
                              <td className="py-8">
                                    <div className="text-[1.4rem] font-medium text-center text-BlueDark">
                                        <h3>Credit court terme taux</h3>
                                        {   
                                            <Results Personnel1={EmptyString(offreFirst.prets_et_credits.credit_court_terme_taux.personnel)} Personnel2={EmptyString(offreSecond.prets_et_credits.credit_court_terme_taux.personnel)} Entreprise1={EmptyString(offreFirst.prets_et_credits.credit_court_terme_taux.entreprise)} Entreprise2={EmptyString(offreSecond.prets_et_credits.credit_court_terme_taux.entreprise)} Proffessionel1={EmptyString(offreFirst.prets_et_credits.credit_court_terme_taux.professionnel)} Proffessionel2={EmptyString(offreSecond.prets_et_credits.credit_court_terme_taux.professionnel)}/>}
                                        
                                    </div>
                              </td>
                            </tr>
                        </tbody>
                        <tbody className="bg-white w-[100%]">  
                            <tr>
                              <td className="py-8">
                                    <div className="text-[1.4rem] font-medium text-center text-BlueDark">
                                        <h3>Credit moyen terme taux</h3>
                                        {   
                                            <Results Personnel1={EmptyString(offreFirst.prets_et_credits.credit_moyen_terme_taux.personnel)} Personnel2={EmptyString(offreSecond.prets_et_credits.credit_moyen_terme_taux.personnel)} Entreprise1={EmptyString(offreFirst.prets_et_credits.credit_moyen_terme_taux.entreprise)} Entreprise2={EmptyString(offreSecond.prets_et_credits.credit_moyen_terme_taux.entreprise)} Proffessionel1={EmptyString(offreFirst.prets_et_credits.credit_moyen_terme_taux.professionnel)} Proffessionel2={EmptyString(offreSecond.prets_et_credits.credit_moyen_terme_taux.professionnel)}/>}
                                    </div>
                              </td>
                            </tr>
                        </tbody>
                        <tbody className="bg-white w-[100%]">  
                            <tr>
                              <td className="py-8">
                                    <div className="text-[1.4rem] font-medium text-center text-BlueDark">
                                        <h3>Credit long terme taux</h3>
                                        {   
                                            <Results Personnel1={EmptyString(offreFirst.prets_et_credits.credit_long_terme_taux.personnel)} Personnel2={EmptyString(offreSecond.prets_et_credits.credit_long_terme_taux.personnel)} Entreprise1={EmptyString(offreFirst.prets_et_credits.credit_long_terme_taux.entreprise)} Entreprise2={EmptyString(offreSecond.prets_et_credits.credit_long_terme_taux.entreprise)} Proffessionel1={EmptyString(offreFirst.prets_et_credits.credit_long_terme_taux.professionnel)} Proffessionel2={EmptyString(offreSecond.prets_et_credits.credit_long_terme_taux.professionnel)}/>}
                                    </div>
                              </td>
                            </tr>
                        </tbody>
                        <tbody className="bg-white w-[100%]">  
                            <tr>
                              <td className="py-8">
                                    <div className="text-[1.4rem] font-medium text-center text-BlueDark">
                                        <h3>Options possibles</h3>
                                        {   
                                            <Results Personnel1={EmptyString(offreFirst.prets_et_credits.options_possibles.personnel)} Personnel2={EmptyString(offreSecond.prets_et_credits.options_possibles.personnel)} Entreprise1={EmptyString(offreFirst.prets_et_credits.options_possibles.entreprise)} Entreprise2={EmptyString(offreSecond.prets_et_credits.options_possibles.entreprise)} Proffessionel1={EmptyString(offreFirst.prets_et_credits.options_possibles.professionnel)} Proffessionel2={EmptyString(offreSecond.prets_et_credits.options_possibles.professionnel)}/>}
                                    </div>
                              </td>
                            </tr>
                        </tbody>
                    </table>


















                    <table className="w-[82vw]">
                            <thead>
                                <tr>
                                    <th className="px-16 py-3 text-center text-[1.8rem] bg-BlueDark font-light text-white tracking-wider border-b-2 pt-8 pb-8">
                                    Placement
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white w-[100%]">  
                            <tr>
                              <td className="py-8">
                                    <div className="text-[1.4rem] font-medium text-center text-BlueDark">
                                        <h3>Depots a court terme</h3>
                                        {   
                                            <Results Personnel1={EmptyString(offreFirst.placement.depots_a_court_terme.personnel)} Personnel2={EmptyString(offreSecond.placement.depots_a_court_terme.personnel)} Entreprise1={EmptyString(offreFirst.placement.depots_a_court_terme.entreprise)} Entreprise2={EmptyString(offreSecond.placement.depots_a_court_terme.entreprise)} Proffessionel1={EmptyString(offreFirst.placement.depots_a_court_terme.professionnel)} Proffessionel2={EmptyString(offreSecond.placement.depots_a_court_terme.professionnel)}/>}
                                        
                                    </div>
                              </td>
                            </tr>
                        </tbody>
                        <tbody className="bg-white w-[100%]">  
                            <tr>
                              <td className="py-8">
                                    <div className="text-[1.4rem] font-medium text-center text-BlueDark">
                                        <h3>Depots a moyen terme</h3>
                                        {   
                                            <Results Personnel1={EmptyString(offreFirst.placement.depots_a_moyen_terme.personnel)} Personnel2={EmptyString(offreSecond.placement.depots_a_moyen_terme.personnel)} Entreprise1={EmptyString(offreFirst.placement.depots_a_moyen_terme.entreprise)} Entreprise2={EmptyString(offreSecond.placement.depots_a_moyen_terme.entreprise)} Proffessionel1={EmptyString(offreFirst.placement.depots_a_moyen_terme.professionnel)} Proffessionel2={EmptyString(offreSecond.placement.depots_a_moyen_terme.professionnel)}/>}
                                        
                                    </div>
                              </td>
                            </tr>
                        </tbody>
                        <tbody className="bg-white w-[100%]">  
                            <tr>
                              <td className="py-8">
                                    <div className="text-[1.4rem] font-medium text-center text-BlueDark">
                                        <h3>Depots a long terme</h3>
                                        {   
                                            <Results Personnel1={EmptyString(offreFirst.placement.depots_a_long_terme.personnel)} Personnel2={EmptyString(offreSecond.placement.depots_a_long_terme.personnel)} Entreprise1={EmptyString(offreFirst.placement.depots_a_long_terme.entreprise)} Entreprise2={EmptyString(offreSecond.placement.depots_a_long_terme.entreprise)} Proffessionel1={EmptyString(offreFirst.placement.depots_a_long_terme.professionnel)} Proffessionel2={EmptyString(offreSecond.placement.depots_a_long_terme.professionnel)}/>}
                                        
                                    </div>
                              </td>
                            </tr>
                        </tbody>
                        
                    </table>
















                    <table className="w-[82vw]">
                            <thead>
                                <tr>
                                    <th className="px-16 py-3 text-center text-[1.8rem] bg-BlueDark font-light text-white tracking-wider border-b-2 pt-8 pb-8">
                                    Epargne
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white w-[100%]">  
                            <tr>
                              <td className="py-8">
                                    <div className="text-[1.4rem] font-medium text-center text-BlueDark">
                                        <h3>Epargne duree taux 01</h3>
                                        {   
                                            <Results Personnel1={EmptyString(offreFirst.epargne.epargne_duree_taux_01.personnel)} Personnel2={EmptyString(offreSecond.epargne.epargne_duree_taux_01.personnel)} Entreprise1={EmptyString(offreFirst.epargne.epargne_duree_taux_01.entreprise)} Entreprise2={EmptyString(offreSecond.epargne.epargne_duree_taux_01.entreprise)} Proffessionel1={EmptyString(offreFirst.epargne.epargne_duree_taux_01.professionnel)} Proffessionel2={EmptyString(offreSecond.epargne.epargne_duree_taux_01.professionnel)}/>}
                                        
                                    </div>
                                    
                              </td>
                            </tr>
                        </tbody>
                        <tbody className="bg-white w-[100%]">  
                            <tr>
                              <td className="py-8">
                                    <div className="text-[1.4rem] font-medium text-center text-BlueDark">
                                        <h3>Epargne duree taux 02</h3>
                                        {   
                                            <Results Personnel1={EmptyString(offreFirst.epargne.epargne_duree_taux_02.personnel)} Personnel2={EmptyString(offreSecond.epargne.epargne_duree_taux_02.personnel)} Entreprise1={EmptyString(offreFirst.epargne.epargne_duree_taux_02.entreprise)} Entreprise2={EmptyString(offreSecond.epargne.epargne_duree_taux_02.entreprise)} Proffessionel1={EmptyString(offreFirst.epargne.epargne_duree_taux_02.professionnel)} Proffessionel2={EmptyString(offreSecond.epargne.epargne_duree_taux_02.professionnel)}/>}
                                        
                                    </div>
                                    
                              </td>
                            </tr>
                        </tbody>
                        <tbody className="bg-white w-[100%]">  
                            <tr>
                              <td className="py-8">
                                    <div className="text-[1.4rem] font-medium text-center text-BlueDark">
                                        <h3>Epargne duree taux 03</h3>
                                        {   
                                            <Results Personnel1={EmptyString(offreFirst.epargne.epargne_duree_taux_03.personnel)} Personnel2={EmptyString(offreSecond.epargne.epargne_duree_taux_03.personnel)} Entreprise1={EmptyString(offreFirst.epargne.epargne_duree_taux_03.entreprise)} Entreprise2={EmptyString(offreSecond.epargne.epargne_duree_taux_03.entreprise)} Proffessionel1={EmptyString(offreFirst.epargne.epargne_duree_taux_03.professionnel)} Proffessionel2={EmptyString(offreSecond.epargne.epargne_duree_taux_03.professionnel)}/>}
                                        
                                    </div>
                                    
                              </td>
                            </tr>
                        </tbody>
                        <tbody className="bg-white w-[100%]">  
                            <tr>
                              <td className="py-8">
                                    <div className="text-[1.4rem] font-medium text-center text-BlueDark">
                                        <h3>Epargne duree taux 04</h3>
                                        {   
                                            <Results Personnel1={EmptyString(offreFirst.epargne.epargne_duree_taux_04.personnel)} Personnel2={EmptyString(offreSecond.epargne.epargne_duree_taux_04.personnel)} Entreprise1={EmptyString(offreFirst.epargne.epargne_duree_taux_04.entreprise)} Entreprise2={EmptyString(offreSecond.epargne.epargne_duree_taux_04.entreprise)} Proffessionel1={EmptyString(offreFirst.epargne.epargne_duree_taux_04.professionnel)} Proffessionel2={EmptyString(offreSecond.epargne.epargne_duree_taux_04.professionnel)}/>}
                                        
                                    </div>
                                    
                              </td>
                            </tr>
                        </tbody>
                        <tbody className="bg-white w-[100%]">  
                            <tr>
                              <td className="py-8">
                                    <div className="text-[1.4rem] font-medium text-center text-BlueDark">
                                        <h3>Epargne duree taux 05</h3>
                                        {   
                                            <Results Personnel1={EmptyString(offreFirst.epargne.epargne_duree_taux_05.personnel)} Personnel2={EmptyString(offreSecond.epargne.epargne_duree_taux_05.personnel)} Entreprise1={EmptyString(offreFirst.epargne.epargne_duree_taux_05.entreprise)} Entreprise2={EmptyString(offreSecond.epargne.epargne_duree_taux_05.entreprise)} Proffessionel1={EmptyString(offreFirst.epargne.epargne_duree_taux_05.professionnel)} Proffessionel2={EmptyString(offreSecond.epargne.epargne_duree_taux_05.professionnel)}/>}
                                        
                                    </div>
                                    
                              </td>
                            </tr>
                        </tbody>
                        <tbody className="bg-white w-[100%]">  
                            <tr>
                              <td className="py-8">
                                    <div className="text-[1.4rem] font-medium text-center text-BlueDark">
                                        <h3>Epargne duree taux 06</h3>
                                        {   
                                            <Results Personnel1={EmptyString(offreFirst.epargne.epargne_duree_taux_06.personnel)} Personnel2={EmptyString(offreSecond.epargne.epargne_duree_taux_06.personnel)} Entreprise1={EmptyString(offreFirst.epargne.epargne_duree_taux_06.entreprise)} Entreprise2={EmptyString(offreSecond.epargne.epargne_duree_taux_06.entreprise)} Proffessionel1={EmptyString(offreFirst.epargne.epargne_duree_taux_06.professionnel)} Proffessionel2={EmptyString(offreSecond.epargne.epargne_duree_taux_06.professionnel)}/>}
                                        
                                    </div>
                                    
                              </td>
                            </tr>
                        </tbody>
                        <tbody className="bg-white w-[100%]">  
                            <tr>
                              <td className="py-8">
                                    <div className="text-[1.4rem] font-medium text-center text-BlueDark">
                                        <h3>Epargne duree taux 07</h3>
                                        {   
                                            <Results Personnel1={EmptyString(offreFirst.epargne.epargne_duree_taux_07.personnel)} Personnel2={EmptyString(offreSecond.epargne.epargne_duree_taux_07.personnel)} Entreprise1={EmptyString(offreFirst.epargne.epargne_duree_taux_07.entreprise)} Entreprise2={EmptyString(offreSecond.epargne.epargne_duree_taux_07.entreprise)} Proffessionel1={EmptyString(offreFirst.epargne.epargne_duree_taux_07.professionnel)} Proffessionel2={EmptyString(offreSecond.epargne.epargne_duree_taux_07.professionnel)}/>}
                                        
                                    </div>
                                    
                              </td>
                            </tr>
                        </tbody>
                        <tbody className="bg-white w-[100%]">  
                            <tr>
                              <td className="py-8">
                                    <div className="text-[1.4rem] font-medium text-center text-BlueDark">
                                        <h3>Epargne duree taux 08</h3>
                                        {   
                                            <Results Personnel1={EmptyString(offreFirst.epargne.epargne_duree_taux_08.personnel)} Personnel2={EmptyString(offreSecond.epargne.epargne_duree_taux_08.personnel)} Entreprise1={EmptyString(offreFirst.epargne.epargne_duree_taux_08.entreprise)} Entreprise2={EmptyString(offreSecond.epargne.epargne_duree_taux_08.entreprise)} Proffessionel1={EmptyString(offreFirst.epargne.epargne_duree_taux_08.professionnel)} Proffessionel2={EmptyString(offreSecond.epargne.epargne_duree_taux_08.professionnel)}/>}
                                        
                                    </div>
                                    
                              </td>
                            </tr>
                        </tbody>
                        <tbody className="bg-white w-[100%]">  
                            <tr>
                              <td className="py-8">
                                    <div className="text-[1.4rem] font-medium text-center text-BlueDark">
                                        <h3>Epargne duree taux 09</h3>
                                        {   
                                            <Results Personnel1={EmptyString(offreFirst.epargne.epargne_duree_taux_09.personnel)} Personnel2={EmptyString(offreSecond.epargne.epargne_duree_taux_09.personnel)} Entreprise1={EmptyString(offreFirst.epargne.epargne_duree_taux_09.entreprise)} Entreprise2={EmptyString(offreSecond.epargne.epargne_duree_taux_09.entreprise)} Proffessionel1={EmptyString(offreFirst.epargne.epargne_duree_taux_09.professionnel)} Proffessionel2={EmptyString(offreSecond.epargne.epargne_duree_taux_09.professionnel)}/>}
                                        
                                    </div>
                                    
                              </td>
                            </tr>
                        </tbody>
                        <tbody className="bg-white w-[100%]">  
                            <tr>
                              <td className="py-8">
                                    <div className="text-[1.4rem] font-medium text-center text-BlueDark">
                                        <h3>Epargne duree taux 10</h3>
                                        {   
                                            <Results Personnel1={EmptyString(offreFirst.epargne.epargne_duree_taux_10.personnel)} Personnel2={EmptyString(offreSecond.epargne.epargne_duree_taux_10.personnel)} Entreprise1={EmptyString(offreFirst.epargne.epargne_duree_taux_10.entreprise)} Entreprise2={EmptyString(offreSecond.epargne.epargne_duree_taux_10.entreprise)} Proffessionel1={EmptyString(offreFirst.epargne.epargne_duree_taux_10.professionnel)} Proffessionel2={EmptyString(offreSecond.epargne.epargne_duree_taux_10.professionnel)}/>}
                                        
                                    </div>
                                    
                              </td>
                            </tr>
                        </tbody>
                        
                    </table>

















                    <table className="w-[82vw]">
                            <thead>
                                <tr>
                                    <th className="px-16 py-3 text-center text-[1.8rem] bg-BlueDark font-light text-white tracking-wider border-b-2 pt-8 pb-8">
                                    Coffre fort
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white w-[100%]">  
                            <tr>
                              <td className="py-8">
                                    <div className="text-[1.4rem] font-medium text-center text-BlueDark">
                                        <h3>Petit</h3>
                                        {   
                                            <Results Personnel1={EmptyString(offreFirst.coffre_fort.petit.personnel)} Personnel2={EmptyString(offreSecond.coffre_fort.petit.personnel)} Entreprise1={EmptyString(offreFirst.coffre_fort.petit.entreprise)} Entreprise2={EmptyString(offreSecond.coffre_fort.petit.entreprise)} Proffessionel1={EmptyString(offreFirst.coffre_fort.petit.professionnel)} Proffessionel2={EmptyString(offreSecond.coffre_fort.petit.professionnel)}/>}
                                        
                                    </div>
                              </td>
                            </tr>
                        </tbody>
                        <tbody className="bg-white w-[100%]">  
                            <tr>
                              <td className="py-8">
                                    <div className="text-[1.4rem] font-medium text-center text-BlueDark">
                                        <h3>Moyen</h3>
                                        {   
                                            <Results Personnel1={EmptyString(offreFirst.coffre_fort.moyen.personnel)} Personnel2={EmptyString(offreSecond.coffre_fort.moyen.personnel)} Entreprise1={EmptyString(offreFirst.coffre_fort.moyen.entreprise)} Entreprise2={EmptyString(offreSecond.coffre_fort.moyen.entreprise)} Proffessionel1={EmptyString(offreFirst.coffre_fort.moyen.professionnel)} Proffessionel2={EmptyString(offreSecond.coffre_fort.moyen.professionnel)}/>}
                                        
                                    </div>
                              </td>
                            </tr>
                        </tbody>
                        <tbody className="bg-white w-[100%]">  
                            <tr>
                              <td className="py-8">
                                    <div className="text-[1.4rem] font-medium text-center text-BlueDark">
                                        <h3>Grand</h3>
                                        {   
                                            <Results Personnel1={EmptyString(offreFirst.coffre_fort.grand.personnel)} Personnel2={EmptyString(offreSecond.coffre_fort.grand.personnel)} Entreprise1={EmptyString(offreFirst.coffre_fort.grand.entreprise)} Entreprise2={EmptyString(offreSecond.coffre_fort.grand.entreprise)} Proffessionel1={EmptyString(offreFirst.coffre_fort.grand.professionnel)} Proffessionel2={EmptyString(offreSecond.coffre_fort.grand.professionnel)}/>}
                                        
                                    </div>
                              </td>
                            </tr>
                        </tbody>
                        <tbody className="bg-white w-[100%]">  
                            <tr>
                              <td className="py-8">
                                    <div className="text-[1.4rem] font-medium text-center text-BlueDark">
                                        <h3>Cautionnement</h3>
                                        {   
                                            <Results Personnel1={EmptyString(offreFirst.coffre_fort.cautionnement.personnel)} Personnel2={EmptyString(offreSecond.coffre_fort.cautionnement.personnel)} Entreprise1={EmptyString(offreFirst.coffre_fort.cautionnement.entreprise)} Entreprise2={EmptyString(offreSecond.coffre_fort.cautionnement.entreprise)} Proffessionel1={EmptyString(offreFirst.coffre_fort.cautionnement.professionnel)} Proffessionel2={EmptyString(offreSecond.coffre_fort.cautionnement.professionnel)}/>}
                                        
                                    </div>
                              </td>
                            </tr>
                        </tbody>
                        
                    </table>

















                    <table className="w-[82vw]">
                            <thead>
                                <tr>
                                    <th className="px-16 py-3 text-center text-[1.8rem] bg-BlueDark font-light text-white tracking-wider border-b-2 pt-8 pb-8">
                                    Financement externe
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white w-[100%]">  
                            <tr>
                              <td className="py-8">
                                    <div className="text-[1.4rem] font-medium text-center text-BlueDark">
                                        <h3>Encaissement cheque etranger</h3>
                                        {   
                                            <Results Personnel1={EmptyString(offreFirst.financement_externe.encaissement_cheque_etranger.personnel)} Personnel2={EmptyString(offreSecond.financement_externe.encaissement_cheque_etranger.personnel)} Entreprise1={EmptyString(offreFirst.financement_externe.encaissement_cheque_etranger.entreprise)} Entreprise2={EmptyString(offreSecond.financement_externe.encaissement_cheque_etranger.entreprise)} Proffessionel1={EmptyString(offreFirst.financement_externe.encaissement_cheque_etranger.professionnel)} Proffessionel2={EmptyString(offreSecond.financement_externe.encaissement_cheque_etranger.professionnel)}/>}
                                        
                                    </div>
                                    
                              </td>
                            </tr>
                        </tbody>
                        <tbody className="bg-white w-[100%]">  
                            <tr>
                              <td className="py-8">
                                    <div className="text-[1.4rem] font-medium text-center text-BlueDark">
                                        <h3>Virement reçu</h3>
                                        {   
                                            <Results Personnel1={EmptyString(offreFirst.financement_externe.virement_recu.personnel)} Personnel2={EmptyString(offreSecond.financement_externe.virement_recu.personnel)} Entreprise1={EmptyString(offreFirst.financement_externe.virement_recu.entreprise)} Entreprise2={EmptyString(offreSecond.financement_externe.virement_recu.entreprise)} Proffessionel1={EmptyString(offreFirst.financement_externe.virement_recu.professionnel)} Proffessionel2={EmptyString(offreSecond.financement_externe.virement_recu.professionnel)}/>}
                                        
                                    </div>
                                    
                              </td>
                            </tr>
                        </tbody>
                        <tbody className="bg-white w-[100%]">  
                            <tr>
                              <td className="py-8">
                                    <div className="text-[1.4rem] font-medium text-center text-BlueDark">
                                        <h3>Virement emis</h3>
                                        {   
                                            <Results Personnel1={EmptyString(offreFirst.financement_externe.virement_emis.personnel)} Personnel2={EmptyString(offreSecond.financement_externe.virement_emis.personnel)} Entreprise1={EmptyString(offreFirst.financement_externe.virement_emis.entreprise)} Entreprise2={EmptyString(offreSecond.financement_externe.virement_emis.entreprise)} Proffessionel1={EmptyString(offreFirst.financement_externe.virement_emis.professionnel)} Proffessionel2={EmptyString(offreSecond.financement_externe.virement_emis.professionnel)}/>}
                                        
                                        
                                    </div>
                                    
                              </td>
                            </tr>
                        </tbody>
                        <tbody className="bg-white w-[100%]">  
                            <tr>
                              <td className="py-8">
                                    <div className="text-[1.4rem] font-medium text-center text-BlueDark">
                                        <h3>Exportation domiciliation</h3>
                                        {   
                                            <Results Personnel1={EmptyString(offreFirst.financement_externe.exportation_domiciliation.personnel)} Personnel2={EmptyString(offreSecond.financement_externe.exportation_domiciliation.personnel)} Entreprise1={EmptyString(offreFirst.financement_externe.exportation_domiciliation.entreprise)} Entreprise2={EmptyString(offreSecond.financement_externe.exportation_domiciliation.entreprise)} Proffessionel1={EmptyString(offreFirst.financement_externe.exportation_domiciliation.professionnel)} Proffessionel2={EmptyString(offreSecond.financement_externe.exportation_domiciliation.professionnel)}/>}
                                        
                                        
                                    </div>
                                    
                              </td>
                            </tr>
                        </tbody>
                        <tbody className="bg-white w-[100%]">  
                            <tr>
                              <td className="py-8">
                                    <div className="text-[1.4rem] font-medium text-center text-BlueDark">
                                        <h3>Importation domiciliation</h3>
                                        {   
                                            <Results Personnel1={EmptyString(offreFirst.financement_externe.importation_domiciliation.personnel)} Personnel2={EmptyString(offreSecond.financement_externe.importation_domiciliation.personnel)} Entreprise1={EmptyString(offreFirst.financement_externe.importation_domiciliation.entreprise)} Entreprise2={EmptyString(offreSecond.financement_externe.importation_domiciliation.entreprise)} Proffessionel1={EmptyString(offreFirst.financement_externe.importation_domiciliation.professionnel)} Proffessionel2={EmptyString(offreSecond.financement_externe.importation_domiciliation.professionnel)}/>}
                                        
                                        
                                    </div>
                                    
                              </td>
                            </tr>
                        </tbody>
                        <tbody className="bg-white w-[100%]">  
                            <tr>
                              <td className="py-8">
                                    <div className="text-[1.4rem] font-medium text-center text-BlueDark">
                                        <h3>Transfert libre prelevement compte dinars</h3>
                                        {   
                                            <Results Personnel1={EmptyString(offreFirst.financement_externe.transfert_libre_prelevement_compte_dinars.personnel)} Personnel2={EmptyString(offreSecond.financement_externe.transfert_libre_prelevement_compte_dinars.personnel)} Entreprise1={EmptyString(offreFirst.financement_externe.transfert_libre_prelevement_compte_dinars.entreprise)} Entreprise2={EmptyString(offreSecond.financement_externe.transfert_libre_prelevement_compte_dinars.entreprise)} Proffessionel1={EmptyString(offreFirst.financement_externe.transfert_libre_prelevement_compte_dinars.professionnel)} Proffessionel2={EmptyString(offreSecond.financement_externe.transfert_libre_prelevement_compte_dinars.professionnel)}/>}
                                        
                                        
                                    </div>
                                    
                              </td>
                            </tr>
                        </tbody>
                        <tbody className="bg-white w-[100%]">  
                            <tr>
                              <td className="py-8">
                                    <div className="text-[1.4rem] font-medium text-center text-BlueDark">
                                        <h3>Transfert libre prelevement compte devise</h3>
                                        {   
                                            <Results Personnel1={EmptyString(offreFirst.financement_externe.transfert_libre_prelevement_compte_devise.personnel)} Personnel2={EmptyString(offreSecond.financement_externe.transfert_libre_prelevement_compte_devise.personnel)} Entreprise1={EmptyString(offreFirst.financement_externe.transfert_libre_prelevement_compte_devise.entreprise)} Entreprise2={EmptyString(offreSecond.financement_externe.transfert_libre_prelevement_compte_devise.entreprise)} Proffessionel1={EmptyString(offreFirst.financement_externe.transfert_libre_prelevement_compte_devise.professionnel)} Proffessionel2={EmptyString(offreSecond.financement_externe.transfert_libre_prelevement_compte_devise.professionnel)}/>}
                                        
                                    </div>
                                    
                              </td>
                            </tr>
                        </tbody>
                        
                    </table>
                                        </div>}
        </div>
  )
}

export default ResultatCmp