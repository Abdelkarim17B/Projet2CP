import {PrestationModel} from "./../../../Model/Prestation"

function Prestation(props: PrestationModel) {
  return (
    <div className="mb-[30vh]">
        <table className="w-[82vw]">
                  <thead>
                    <tr>
                      <th className="px-16 py-3 text-left text-[1.2rem] bg-BlueDark font-light text-white tracking-wider border-b-2 pt-8 pb-8">
                        Gestion de compte
                      </th>
                      <th className="px-6 py-3 text-left text-[1.2rem] bg-BlueDark font-light text-white tracking-wider border-b-2 pt-8 pb-8">
                      Personal
                      </th>
                      <th className="px-6 py-3 text-left text-[1.2rem] bg-BlueDark font-light text-white tracking-wider border-b-2 pt-8 pb-8">
                        Entreprise
                      </th>
                      <th className="px-6 py-3 text-left text-[1.2rem] bg-BlueDark font-light text-white tracking-wider border-b-2 pt-8 pb-8">
                      Professionnel
                      </th>
                    </tr>
                  </thead>

                  <tbody className="bg-white w-[82vw]">  
                      <tr>
                        <td className="px-16 py-4 max-w-[20%]">
                          <div className="text-[1rem] font-medium text-gray-900">Ouverture compte courant</div>
                        </td>
                        <td className="px-6 py-4 w-[15%]">
                          <div className="text-[1rem] font-medium text-gray-900">{props.gestion_de_compte.ouverture_compte_courant.personnel == "" ? "/" : props.gestion_de_compte.ouverture_compte_courant.personnel}</div>
                        </td>
                        <td className="px-6 py-4 w-[15%]">
                          <div className="text-[1rem] font-medium text-gray-900">{props.gestion_de_compte.ouverture_compte_courant.entreprise == "" ? "/" : props.gestion_de_compte.ouverture_compte_courant.entreprise}</div>
                        </td>
                        <td className="px-6 py-4 w-[15%] max-w-[15%]">
                          <div className="text-[1rem] font-medium text-gray-900">{props.gestion_de_compte.ouverture_compte_courant.professionnel == "" ? "/" : props.gestion_de_compte.ouverture_compte_courant.professionnel}</div>
                        </td>
                      </tr>
                  </tbody>
                  <tbody className="bg-white w-[82vw]">  
                      <tr>
                        <td className="px-16 py-4 max-w-[20%]">
                          <div className="text-[1rem] font-medium text-gray-900">Tenue compte courant</div>
                        </td>
                        <td className="px-6 py-4 w-[15%]">
                          <div className="text-[1rem] font-medium text-gray-900">{props.gestion_de_compte.tenue_compte_courant.personnel == "" ? "/" : props.gestion_de_compte.tenue_compte_courant.personnel}</div>
                        </td>
                        <td className="px-6 py-4 w-[15%]">
                          <div className="text-[1rem] font-medium text-gray-900">{props.gestion_de_compte.tenue_compte_courant.entreprise == "" ? "/" : props.gestion_de_compte.tenue_compte_courant.entreprise}</div>
                        </td>
                        <td className="px-6 py-4 w-[15%] max-w-[15%]">
                          <div className="text-[1rem] font-medium text-gray-900">{props.gestion_de_compte.tenue_compte_courant.professionnel == "" ? "/" : props.gestion_de_compte.tenue_compte_courant.professionnel}</div>
                        </td>
                      </tr>
                  </tbody>
                  <tbody className="bg-white w-[82vw]">  
                      <tr>
                        <td className="px-16 py-4 max-w-[20%]">
                          <div className="text-[1rem] font-medium text-gray-900">Ouverture compte cheque</div>
                        </td>
                        <td className="px-6 py-4 w-[15%]">
                          <div className="text-[1rem] font-medium text-gray-900">{props.gestion_de_compte.ouverture_compte_cheque.personnel == "" ? "/" : props.gestion_de_compte.ouverture_compte_cheque.personnel}</div>
                        </td>
                        <td className="px-6 py-4 w-[15%]">
                          <div className="text-[1rem] font-medium text-gray-900">{props.gestion_de_compte.ouverture_compte_cheque.entreprise == "" ? "/" : props.gestion_de_compte.ouverture_compte_cheque.entreprise}</div>
                        </td>
                        <td className="px-6 py-4 w-[15%] max-w-[15%]">
                          <div className="text-[1rem] font-medium text-gray-900">{props.gestion_de_compte.ouverture_compte_cheque.professionnel == "" ? "/" : props.gestion_de_compte.ouverture_compte_cheque.professionnel}</div>
                        </td>
                      </tr>
                  </tbody>
                  <tbody className="bg-white w-[82vw]">  
                      <tr>
                        <td className="px-16 py-4 max-w-[20%]">
                          <div className="text-[1rem] font-medium text-gray-900">Tenue compte cheque</div>
                        </td>
                        <td className="px-6 py-4 w-[15%]">
                          <div className="text-[1rem] font-medium text-gray-900">{props.gestion_de_compte.tenue_compte_cheque.personnel == "" ? "/" : props.gestion_de_compte.tenue_compte_cheque.personnel}</div>
                        </td>
                        <td className="px-6 py-4 w-[15%]">
                          <div className="text-[1rem] font-medium text-gray-900">{props.gestion_de_compte.tenue_compte_cheque.entreprise == "" ? "/" : props.gestion_de_compte.tenue_compte_cheque.entreprise}</div>
                        </td>
                        <td className="px-6 py-4 w-[15%] max-w-[15%]">
                          <div className="text-[1rem] font-medium text-gray-900">{props.gestion_de_compte.tenue_compte_cheque.professionnel == "" ? "/" : props.gestion_de_compte.tenue_compte_cheque.professionnel}</div>
                        </td>
                      </tr>
                  </tbody>
                  <tbody className="bg-white w-[82vw]">  
                      <tr>
                        <td className="px-16 py-4 max-w-[20%]">
                          <div className="text-[1rem] font-medium text-gray-900">Ouverture compte epargne</div>
                        </td>
                        <td className="px-6 py-4 w-[15%]">
                          <div className="text-[1rem] font-medium text-gray-900">{props.gestion_de_compte.ouverture_compte_epargne.personnel == "" ? "/" : props.gestion_de_compte.ouverture_compte_epargne.personnel}</div>
                        </td>
                        <td className="px-6 py-4 w-[15%]">
                          <div className="text-[1rem] font-medium text-gray-900">{props.gestion_de_compte.ouverture_compte_epargne.entreprise == "" ? "/" : props.gestion_de_compte.ouverture_compte_epargne.entreprise}</div>
                        </td>
                        <td className="px-6 py-4 w-[15%] max-w-[15%]">
                          <div className="text-[1rem] font-medium text-gray-900">{props.gestion_de_compte.ouverture_compte_epargne.professionnel == "" ? "/" : props.gestion_de_compte.ouverture_compte_epargne.professionnel}</div>
                        </td>
                      </tr>
                  </tbody>
                  <tbody className="bg-white w-[82vw]">  
                      <tr>
                        <td className="px-16 py-4 max-w-[20%]">
                          <div className="text-[1rem] font-medium text-gray-900">Tenue compte epargne</div>
                        </td>
                        <td className="px-6 py-4 w-[15%]">
                          <div className="text-[1rem] font-medium text-gray-900">{props.gestion_de_compte.tenue_compte_epargne.personnel == "" ? "/" : props.gestion_de_compte.tenue_compte_epargne.personnel}</div>
                        </td>
                        <td className="px-6 py-4 w-[15%]">
                          <div className="text-[1rem] font-medium text-gray-900">{props.gestion_de_compte.tenue_compte_epargne.entreprise == "" ? "/" : props.gestion_de_compte.tenue_compte_epargne.entreprise}</div>
                        </td>
                        <td className="px-6 py-4 w-[15%] max-w-[15%]">
                          <div className="text-[1rem] font-medium text-gray-900">{props.gestion_de_compte.tenue_compte_epargne.professionnel == "" ? "/" : props.gestion_de_compte.tenue_compte_epargne.professionnel}</div>
                        </td>
                      </tr>
                  </tbody>
                  <tbody className="bg-white w-[82vw]">  
                      <tr>
                        <td className="px-16 py-4 max-w-[20%]">
                          <div className="text-[1rem] font-medium text-gray-900">Ouverture compte devise</div>
                        </td>
                        <td className="px-6 py-4 w-[15%]">
                          <div className="text-[1rem] font-medium text-gray-900">{props.gestion_de_compte.ouverture_compte_devise.personnel == "" ? "/" : props.gestion_de_compte.ouverture_compte_devise.personnel}</div>
                        </td>
                        <td className="px-6 py-4 w-[15%]">
                          <div className="text-[1rem] font-medium text-gray-900">{props.gestion_de_compte.ouverture_compte_devise.entreprise == "" ? "/" : props.gestion_de_compte.ouverture_compte_devise.entreprise}</div>
                        </td>
                        <td className="px-6 py-4 w-[15%] max-w-[15%]">
                          <div className="text-[1rem] font-medium text-gray-900">{props.gestion_de_compte.ouverture_compte_devise.professionnel == "" ? "/" : props.gestion_de_compte.ouverture_compte_devise.professionnel}</div>
                        </td>
                      </tr>
                  </tbody>
                  <tbody className="bg-white w-[82vw]">  
                      <tr>
                        <td className="px-16 py-4 max-w-[20%]">
                          <div className="text-[1rem] font-medium text-gray-900">Tenue compte devise</div>
                        </td>
                        <td className="px-6 py-4 w-[15%]">
                          <div className="text-[1rem] font-medium text-gray-900">{props.gestion_de_compte.tenue_compte_devise.personnel == "" ? "/" : props.gestion_de_compte.tenue_compte_devise.personnel}</div>
                        </td>
                        <td className="px-6 py-4 w-[15%]">
                          <div className="text-[1rem] font-medium text-gray-900">{props.gestion_de_compte.tenue_compte_devise.entreprise == "" ? "/" : props.gestion_de_compte.tenue_compte_devise.entreprise}</div>
                        </td>
                        <td className="px-6 py-4 w-[15%] max-w-[15%]">
                          <div className="text-[1rem] font-medium text-gray-900">{props.gestion_de_compte.tenue_compte_devise.professionnel == "" ? "/" : props.gestion_de_compte.tenue_compte_devise.professionnel}</div>
                        </td>
                      </tr>
                  </tbody>
                  <tbody className="bg-white w-[82vw]">  
                      <tr>
                        <td className="px-16 py-4 max-w-[20%]">
                          <div className="text-[1rem] font-medium text-gray-900">Fermeture de compte</div>
                        </td>
                        <td className="px-6 py-4 w-[15%]">
                          <div className="text-[1rem] font-medium text-gray-900">{props.gestion_de_compte.fermeture_de_compte.personnel == "" ? "/" : props.gestion_de_compte.fermeture_de_compte.personnel}</div>
                        </td>
                        <td className="px-6 py-4 w-[15%]">
                          <div className="text-[1rem] font-medium text-gray-900">{props.gestion_de_compte.fermeture_de_compte.entreprise == "" ? "/" : props.gestion_de_compte.fermeture_de_compte.entreprise}</div>
                        </td>
                        <td className="px-6 py-4 w-[15%] max-w-[15%]">
                          <div className="text-[1rem] font-medium text-gray-900">{props.gestion_de_compte.fermeture_de_compte.professionnel == "" ? "/" : props.gestion_de_compte.fermeture_de_compte.professionnel}</div>
                        </td>
                      </tr>
                  </tbody>
















                  <thead>
                    <tr>
                      <th className="px-16 py-3 text-left text-[1.2rem] bg-BlueDark font-light text-white tracking-wider border-b-2 pt-8 pb-8">
                        Gestion a distance                      
                      </th>
                      <th className="px-6 py-3 text-left text-[1.2rem] bg-BlueDark font-light text-white tracking-wider border-b-2 pt-8 pb-8">
                      Personal
                      </th>
                      <th className="px-6 py-3 text-left text-[1.2rem] bg-BlueDark font-light text-white tracking-wider border-b-2 pt-8 pb-8">
                        Entreprise
                      </th>
                      <th className="px-6 py-3 text-left text-[1.2rem] bg-BlueDark font-light text-white tracking-wider border-b-2 pt-8 pb-8">
                      Professionnel
                      </th>
                    </tr>
                  </thead>

                  <tbody className="bg-white w-[82vw]">  
                      <tr>
                        <td className="px-16 py-4 max-w-[20%]">
                          <div className="text-[1rem] font-medium text-gray-900">E-banking abonnement</div>
                        </td>
                        <td className="px-6 py-4 w-[15%]">
                          <div className="text-[1rem] font-medium text-gray-900">{props.gestion_a_distance.e_banking_abonnement.personnel== "" ? "/" : props.gestion_a_distance.e_banking_abonnement.personnel}</div>
                        </td>
                        <td className="px-6 py-4 w-[15%]">
                          <div className="text-[1rem] font-medium text-gray-900">{props.gestion_a_distance.e_banking_abonnement.entreprise== "" ? "/" : props.gestion_a_distance.e_banking_abonnement.entreprise}</div>
                        </td>
                        <td className="px-6 py-4 w-[15%] max-w-[15%]">
                          <div className="text-[1rem] font-medium text-gray-900">{props.gestion_a_distance.e_banking_abonnement.professionnel== "" ? "/" : props.gestion_a_distance.e_banking_abonnement.professionnel}</div>
                        </td>
                      </tr>
                  </tbody>
                  <tbody className="bg-white w-[82vw]">  
                      <tr>
                        <td className="px-16 py-4 max-w-[20%]">
                          <div className="text-[1rem] font-medium text-gray-900">E-banking consultation solde</div>
                        </td>
                        <td className="px-6 py-4 w-[15%]">
                          <div className="text-[1rem] font-medium text-gray-900">{props.gestion_a_distance.e_banking_consultation_solde.personnel== "" ? "/" : props.gestion_a_distance.e_banking_consultation_solde.personnel}</div>
                        </td>
                        <td className="px-6 py-4 w-[15%]">
                          <div className="text-[1rem] font-medium text-gray-900">{props.gestion_a_distance.e_banking_consultation_solde.entreprise== "" ? "/" : props.gestion_a_distance.e_banking_consultation_solde.entreprise}</div>
                        </td>
                        <td className="px-6 py-4 w-[15%] max-w-[15%]">
                          <div className="text-[1rem] font-medium text-gray-900">{props.gestion_a_distance.e_banking_consultation_solde.professionnel== "" ? "/" : props.gestion_a_distance.e_banking_consultation_solde.professionnel}</div>
                        </td>
                      </tr>
                  </tbody>
                  <tbody className="bg-white w-[82vw]">  
                      <tr>
                        <td className="px-16 py-4 max-w-[20%]">
                          <div className="text-[1rem] font-medium text-gray-900">E-banking virement</div>
                        </td>
                        <td className="px-6 py-4 w-[15%]">
                          <div className="text-[1rem] font-medium text-gray-900">{props.gestion_a_distance.e_banking_virement.personnel== "" ? "/" : props.gestion_a_distance.e_banking_virement.personnel}</div>
                        </td>
                        <td className="px-6 py-4 w-[15%]">
                          <div className="text-[1rem] font-medium text-gray-900">{props.gestion_a_distance.e_banking_virement.entreprise== "" ? "/" : props.gestion_a_distance.e_banking_virement.entreprise}</div>
                        </td>
                        <td className="px-6 py-4 w-[15%] max-w-[15%]">
                          <div className="text-[1rem] font-medium text-gray-900">{props.gestion_a_distance.e_banking_virement.professionnel== "" ? "/" : props.gestion_a_distance.e_banking_virement.professionnel}</div>
                        </td>
                      </tr>
                  </tbody>
                  <tbody className="bg-white w-[82vw]">  
                      <tr>
                        <td className="px-16 py-4 max-w-[20%]">
                          <div className="text-[1rem] font-medium text-gray-900">E-banking paiment</div>
                        </td>
                        <td className="px-6 py-4 w-[15%]">
                          <div className="text-[1rem] font-medium text-gray-900">{props.gestion_a_distance.e_banking_paiment.personnel== "" ? "/" : props.gestion_a_distance.e_banking_paiment.personnel}</div>
                        </td>
                        <td className="px-6 py-4 w-[15%]">
                          <div className="text-[1rem] font-medium text-gray-900">{props.gestion_a_distance.e_banking_paiment.entreprise== "" ? "/" : props.gestion_a_distance.e_banking_paiment.entreprise}</div>
                        </td>
                        <td className="px-6 py-4 w-[15%] max-w-[15%]">
                          <div className="text-[1rem] font-medium text-gray-900">{props.gestion_a_distance.e_banking_paiment.professionnel== "" ? "/" : props.gestion_a_distance.e_banking_paiment.professionnel}</div>
                        </td>
                      </tr>
                  </tbody>
                  <tbody className="bg-white w-[82vw]">  
                      <tr>
                        <td className="px-16 py-4 max-w-[20%]">
                          <div className="text-[1rem] font-medium text-gray-900">Sms banking abonnement</div>
                        </td>
                        <td className="px-6 py-4 w-[15%]">
                          <div className="text-[1rem] font-medium text-gray-900">{props.gestion_a_distance.sms_banking_abonnement.personnel== "" ? "/" : props.gestion_a_distance.sms_banking_abonnement.personnel}</div>
                        </td>
                        <td className="px-6 py-4 w-[15%]">
                          <div className="text-[1rem] font-medium text-gray-900">{props.gestion_a_distance.sms_banking_abonnement.entreprise== "" ? "/" : props.gestion_a_distance.sms_banking_abonnement.entreprise}</div>
                        </td>
                        <td className="px-6 py-4 w-[15%] max-w-[15%]">
                          <div className="text-[1rem] font-medium text-gray-900">{props.gestion_a_distance.sms_banking_abonnement.professionnel== "" ? "/" : props.gestion_a_distance.sms_banking_abonnement.professionnel}</div>
                        </td>
                      </tr>
                  </tbody>
                  <tbody className="bg-white w-[82vw]">  
                      <tr>
                        <td className="px-16 py-4 max-w-[20%]">
                          <div className="text-[1rem] font-medium text-gray-900">Sms banking virement en agence</div>
                        </td>
                        <td className="px-6 py-4 w-[15%]">
                          <div className="text-[1rem] font-medium text-gray-900">{props.gestion_a_distance.sms_banking_virement_en_agence.personnel== "" ? "/" : props.gestion_a_distance.sms_banking_virement_en_agence.personnel}</div>
                        </td>
                        <td className="px-6 py-4 w-[15%]">
                          <div className="text-[1rem] font-medium text-gray-900">{props.gestion_a_distance.sms_banking_virement_en_agence.entreprise== "" ? "/" : props.gestion_a_distance.sms_banking_virement_en_agence.entreprise}</div>
                        </td>
                        <td className="px-6 py-4 w-[15%] max-w-[15%]">
                          <div className="text-[1rem] font-medium text-gray-900">{props.gestion_a_distance.sms_banking_virement_en_agence.professionnel== "" ? "/" : props.gestion_a_distance.sms_banking_virement_en_agence.professionnel}</div>
                        </td>
                      </tr>
                  </tbody>
                  <tbody className="bg-white w-[82vw]">  
                      <tr>
                        <td className="px-16 py-4 max-w-[20%]">
                          <div className="text-[1rem] font-medium text-gray-900">Sms banking virement hors agence</div>
                        </td>
                        <td className="px-6 py-4 w-[15%]">
                          <div className="text-[1rem] font-medium text-gray-900">{props.gestion_a_distance.sms_banking_virement_hors_agence.personnel== "" ? "/" : props.gestion_a_distance.sms_banking_virement_hors_agence.personnel}</div>
                        </td>
                        <td className="px-6 py-4 w-[15%]">
                          <div className="text-[1rem] font-medium text-gray-900">{props.gestion_a_distance.sms_banking_virement_hors_agence.entreprise== "" ? "/" : props.gestion_a_distance.sms_banking_virement_hors_agence.entreprise}</div>
                        </td>
                        <td className="px-6 py-4 w-[15%] max-w-[15%]">
                          <div className="text-[1rem] font-medium text-gray-900">{props.gestion_a_distance.sms_banking_virement_hors_agence.professionnel== "" ? "/" : props.gestion_a_distance.sms_banking_virement_hors_agence.professionnel}</div>
                        </td>
                      </tr>
                  </tbody>
                  <tbody className="bg-white w-[82vw]">  
                      <tr>
                        <td className="px-16 py-4 max-w-[20%]">
                          <div className="text-[1rem] font-medium text-gray-900">Service contact</div>
                        </td>
                        <td className="px-6 py-4 w-[15%]">
                          <div className="text-[1rem] font-medium text-gray-900">{props.gestion_a_distance.service_contact.personnel== "" ? "/" : props.gestion_a_distance.service_contact.personnel}</div>
                        </td>
                        <td className="px-6 py-4 w-[15%]">
                          <div className="text-[1rem] font-medium text-gray-900">{props.gestion_a_distance.service_contact.entreprise== "" ? "/" : props.gestion_a_distance.service_contact.entreprise}</div>
                        </td>
                        <td className="px-6 py-4 w-[15%] max-w-[15%]">
                          <div className="text-[1rem] font-medium text-gray-900">{props.gestion_a_distance.service_contact.professionnel== "" ? "/" : props.gestion_a_distance.service_contact.professionnel}</div>
                        </td>
                      </tr>
                  </tbody>















                  <thead>
                    <tr>
                      <th className="px-16 py-3 text-left text-[1.2rem] bg-BlueDark font-light text-white tracking-wider border-b-2 pt-8 pb-8">
                      Option de payment                      </th>
                      <th className="px-6 py-3 text-left text-[1.2rem] bg-BlueDark font-light text-white tracking-wider border-b-2 pt-8 pb-8">
                      Personal
                      </th>
                      <th className="px-6 py-3 text-left text-[1.2rem] bg-BlueDark font-light text-white tracking-wider border-b-2 pt-8 pb-8">
                        Entreprise
                      </th>
                      <th className="px-6 py-3 text-left text-[1.2rem] bg-BlueDark font-light text-white tracking-wider border-b-2 pt-8 pb-8">
                      Professionnel
                      </th>
                    </tr>
                  </thead>

                  <tbody className="bg-white w-[82vw]">  
                      <tr>
                        <td className="px-16 py-4 max-w-[20%]">
                          <div className="text-[1rem] font-medium text-gray-900">Versement en agence</div>
                        </td>
                        <td className="px-6 py-4 w-[15%]">
                          <div className="text-[1rem] font-medium text-gray-900">{props.option_de_payment.versement_en_agence.personnel== "" ? "/" : props.option_de_payment.versement_en_agence.personnel}</div>
                        </td>
                        <td className="px-6 py-4 w-[15%]">
                          <div className="text-[1rem] font-medium text-gray-900">{props.option_de_payment.versement_en_agence.entreprise== "" ? "/" : props.option_de_payment.versement_en_agence.entreprise}</div>
                        </td>
                        <td className="px-6 py-4 w-[15%]">
                          <div className="text-[1rem] font-medium text-gray-900">{props.option_de_payment.versement_en_agence.professionnel== "" ? "/" : props.option_de_payment.versement_en_agence.professionnel}</div>
                        </td>
                      </tr>
                  </tbody>
                  <tbody className="bg-white w-[82vw]">  
                      <tr>
                        <td className="px-16 py-4 max-w-[20%]">
                          <div className="text-[1rem] font-medium text-gray-900">Versement hors agence </div>
                        </td>
                        <td className="px-6 py-4 w-[15%]">
                          <div className="text-[1rem] font-medium text-gray-900">{props.option_de_payment.versement_hors_agence.personnel== "" ? "/" : props.option_de_payment.versement_hors_agence.personnel}</div>
                        </td>
                        <td className="px-6 py-4 w-[15%]">
                          <div className="text-[1rem] font-medium text-gray-900">{props.option_de_payment.versement_hors_agence.entreprise== "" ? "/" : props.option_de_payment.versement_hors_agence.entreprise}</div>
                        </td>
                        <td className="px-6 py-4 w-[15%]">
                          <div className="text-[1rem] font-medium text-gray-900">{props.option_de_payment.versement_hors_agence.professionnel== "" ? "/" : props.option_de_payment.versement_hors_agence.professionnel}</div>
                        </td>
                      </tr>
                  </tbody>
                  <tbody className="bg-white w-[82vw]">  
                      <tr>
                        <td className="px-16 py-4 max-w-[20%]">
                          <div className="text-[1rem] font-medium text-gray-900">Virement en agence</div>
                        </td>
                        <td className="px-6 py-4 w-[15%]">
                          <div className="text-[1rem] font-medium text-gray-900">{props.option_de_payment.virement_en_agence.personnel== "" ? "/" : props.option_de_payment.virement_en_agence.personnel}</div>
                        </td>
                        <td className="px-6 py-4 w-[15%]">
                          <div className="text-[1rem] font-medium text-gray-900">{props.option_de_payment.virement_en_agence.entreprise== "" ? "/" : props.option_de_payment.virement_en_agence.entreprise}</div>
                        </td>
                        <td className="px-6 py-4 w-[15%]">
                          <div className="text-[1rem] font-medium text-gray-900">{props.option_de_payment.virement_en_agence.professionnel== "" ? "/" : props.option_de_payment.virement_en_agence.professionnel}</div>
                        </td>
                      </tr>
                  </tbody>
                  <tbody className="bg-white w-[82vw]">  
                      <tr>
                        <td className="px-16 py-4 max-w-[20%]">
                          <div className="text-[1rem] font-medium text-gray-900">Virement hors agence</div>
                        </td>
                        <td className="px-6 py-4 w-[15%]">
                          <div className="text-[1rem] font-medium text-gray-900">{props.option_de_payment.virement_hors_agence.personnel== "" ? "/" : props.option_de_payment.virement_hors_agence.personnel}</div>
                        </td>
                        <td className="px-6 py-4 w-[15%]">
                          <div className="text-[1rem] font-medium text-gray-900">{props.option_de_payment.virement_hors_agence.entreprise== "" ? "/" : props.option_de_payment.virement_hors_agence.entreprise}</div>
                        </td>
                        <td className="px-6 py-4 w-[15%]">
                          <div className="text-[1rem] font-medium text-gray-900">{props.option_de_payment.virement_hors_agence.professionnel== "" ? "/" : props.option_de_payment.virement_hors_agence.professionnel}</div>
                        </td>
                      </tr>
                  </tbody>
                  <tbody className="bg-white w-[82vw]">  
                      <tr>
                        <td className="px-16 py-4 max-w-[20%]">
                          <div className="text-[1rem] font-medium text-gray-900">Pelevement en agence</div>
                        </td>
                        <td className="px-6 py-4 w-[15%]">
                          <div className="text-[1rem] font-medium text-gray-900">{props.option_de_payment.prelevement_en_agence.personnel== "" ? "/" : props.option_de_payment.prelevement_en_agence.personnel}</div>
                        </td>
                        <td className="px-6 py-4 w-[15%]">
                          <div className="text-[1rem] font-medium text-gray-900">{props.option_de_payment.prelevement_en_agence.entreprise== "" ? "/" : props.option_de_payment.prelevement_en_agence.entreprise}</div>
                        </td>
                        <td className="px-6 py-4 w-[15%]">
                          <div className="text-[1rem] font-medium text-gray-900">{props.option_de_payment.prelevement_en_agence.professionnel== "" ? "/" : props.option_de_payment.prelevement_en_agence.professionnel}</div>
                        </td>
                      </tr>
                  </tbody>
                  <tbody className="bg-white w-[82vw]">  
                      <tr>
                        <td className="px-16 py-4 max-w-[20%]">
                          <div className="text-[1rem] font-medium text-gray-900">Pelevement hors agence</div>
                        </td>
                        <td className="px-6 py-4 w-[15%]">
                          <div className="text-[1rem] font-medium text-gray-900">{props.option_de_payment.prelevement_hors_agence.personnel== "" ? "/" : props.option_de_payment.prelevement_hors_agence.personnel}</div>
                        </td>
                        <td className="px-6 py-4 w-[15%]">
                          <div className="text-[1rem] font-medium text-gray-900">{props.option_de_payment.prelevement_hors_agence.entreprise== "" ? "/" : props.option_de_payment.prelevement_hors_agence.entreprise}</div>
                        </td>
                        <td className="px-6 py-4 w-[15%]">
                          <div className="text-[1rem] font-medium text-gray-900">{props.option_de_payment.prelevement_hors_agence.professionnel== "" ? "/" : props.option_de_payment.prelevement_hors_agence.professionnel}</div>
                        </td>
                      </tr>
                  </tbody>
                  <tbody className="bg-white w-[82vw]">  
                      <tr>
                        <td className="px-16 py-4 max-w-[20%]">
                          <div className="text-[1rem] font-medium text-gray-900">Retraits en agence</div>
                        </td>
                        <td className="px-6 py-4 w-[15%]">
                          <div className="text-[1rem] font-medium text-gray-900">{props.option_de_payment.retraits_en_agence.personnel== "" ? "/" : props.option_de_payment.retraits_en_agence.personnel}</div>
                        </td>
                        <td className="px-6 py-4 w-[15%]">
                          <div className="text-[1rem] font-medium text-gray-900">{props.option_de_payment.retraits_en_agence.entreprise== "" ? "/" : props.option_de_payment.retraits_en_agence.entreprise}</div>
                        </td>
                        <td className="px-6 py-4 w-[15%]">
                          <div className="text-[1rem] font-medium text-gray-900">{props.option_de_payment.retraits_en_agence.professionnel== "" ? "/" : props.option_de_payment.retraits_en_agence.professionnel}</div>
                        </td>
                      </tr>
                  </tbody>
                  <tbody className="bg-white w-[82vw]">  
                      <tr>
                        <td className="px-16 py-4 max-w-[20%]">
                          <div className="text-[1rem] font-medium text-gray-900">Retraits hors agence</div>
                        </td>
                        <td className="px-6 py-4 w-[15%]">
                          <div className="text-[1rem] font-medium text-gray-900">{props.option_de_payment.retraits_hors_agence.personnel== "" ? "/" : props.option_de_payment.retraits_hors_agence.personnel}</div>
                        </td>
                        <td className="px-6 py-4 w-[15%]">
                          <div className="text-[1rem] font-medium text-gray-900">{props.option_de_payment.retraits_hors_agence.entreprise== "" ? "/" : props.option_de_payment.retraits_hors_agence.entreprise}</div>
                        </td>
                        <td className="px-6 py-4 w-[15%]">
                          <div className="text-[1rem] font-medium text-gray-900">{props.option_de_payment.retraits_hors_agence.professionnel== "" ? "/" : props.option_de_payment.retraits_hors_agence.professionnel}</div>
                        </td>
                      </tr>
                  </tbody>
                  <tbody className="bg-white w-[82vw]">  
                      <tr>
                        <td className="px-16 py-4 max-w-[20%]">
                          <div className="text-[1rem] font-medium text-gray-900">Payment cheque en agence</div>
                        </td>
                        <td className="px-6 py-4 w-[15%]">
                          <div className="text-[1rem] font-medium text-gray-900">{props.option_de_payment.payment_cheque_en_agence.personnel== "" ? "/" : props.option_de_payment.payment_cheque_en_agence.personnel}</div>
                        </td>
                        <td className="px-6 py-4 w-[15%]">
                          <div className="text-[1rem] font-medium text-gray-900">{props.option_de_payment.payment_cheque_en_agence.entreprise== "" ? "/" : props.option_de_payment.payment_cheque_en_agence.entreprise}</div>
                        </td>
                        <td className="px-6 py-4 w-[15%]">
                          <div className="text-[1rem] font-medium text-gray-900">{props.option_de_payment.payment_cheque_en_agence.professionnel== "" ? "/" : props.option_de_payment.payment_cheque_en_agence.professionnel}</div>
                        </td>
                      </tr>
                  </tbody>
                  <tbody className="bg-white w-[82vw]">  
                      <tr>
                        <td className="px-16 py-4 max-w-[20%]">
                          <div className="text-[1rem] font-medium text-gray-900">Payment cheque hors agence</div>
                        </td>
                        <td className="px-6 py-4 w-[15%]">
                          <div className="text-[1rem] font-medium text-gray-900">{props.option_de_payment.payment_cheque_hors_agence.personnel== "" ? "/" : props.option_de_payment.payment_cheque_hors_agence.personnel}</div>
                        </td>
                        <td className="px-6 py-4 w-[15%]">
                          <div className="text-[1rem] font-medium text-gray-900">{props.option_de_payment.payment_cheque_hors_agence.entreprise== "" ? "/" : props.option_de_payment.payment_cheque_hors_agence.entreprise}</div>
                        </td>
                        <td className="px-6 py-4 w-[15%]">
                          <div className="text-[1rem] font-medium text-gray-900">{props.option_de_payment.payment_cheque_hors_agence.professionnel== "" ? "/" : props.option_de_payment.payment_cheque_hors_agence.professionnel}</div>
                        </td>
                      </tr>
                  </tbody>
                  <tbody className="bg-white w-[82vw]">  
                      <tr>
                        <td className="px-16 py-4 max-w-[20%]">
                          <div className="text-[1rem] font-medium text-gray-900">Vente devise</div>
                        </td>
                        <td className="px-6 py-4 w-[15%]">
                          <div className="text-[1rem] font-medium text-gray-900">{props.option_de_payment.vente_devise.personnel== "" ? "/" : props.option_de_payment.vente_devise.personnel}</div>
                        </td>
                        <td className="px-6 py-4 w-[15%]">
                          <div className="text-[1rem] font-medium text-gray-900">{props.option_de_payment.vente_devise.entreprise== "" ? "/" : props.option_de_payment.vente_devise.entreprise}</div>
                        </td>
                        <td className="px-6 py-4 w-[15%]">
                          <div className="text-[1rem] font-medium text-gray-900">{props.option_de_payment.vente_devise.professionnel== "" ? "/" : props.option_de_payment.vente_devise.professionnel}</div>
                        </td>
                      </tr>
                  </tbody>
                  <tbody className="bg-white w-[82vw]">  
                      <tr>
                        <td className="px-16 py-4 max-w-[20%]">
                          <div className="text-[1rem] font-medium text-gray-900">Achat devise</div>
                        </td>
                        <td className="px-6 py-4 w-[15%]">
                          <div className="text-[1rem] font-medium text-gray-900">{props.option_de_payment.achat_devise.personnel== "" ? "/" : props.option_de_payment.achat_devise.personnel}</div>
                        </td>
                        <td className="px-6 py-4 w-[15%]">
                          <div className="text-[1rem] font-medium text-gray-900">{props.option_de_payment.achat_devise.entreprise== "" ? "/" : props.option_de_payment.achat_devise.entreprise}</div>
                        </td>
                        <td className="px-6 py-4 w-[15%]">
                          <div className="text-[1rem] font-medium text-gray-900">{props.option_de_payment.achat_devise.professionnel== "" ? "/" : props.option_de_payment.achat_devise.professionnel}</div>
                        </td>
                      </tr>
                  </tbody>










                  <thead>
                    <tr>
                      <th className="px-16 py-3 text-left text-[1.2rem] bg-BlueDark font-light text-white tracking-wider border-b-2 pt-8 pb-8">
                      Moyens de payment                      </th>
                      <th className="px-6 py-3 text-left text-[1.2rem] bg-BlueDark font-light text-white tracking-wider border-b-2 pt-8 pb-8">
                      Personal
                      </th>
                      <th className="px-6 py-3 text-left text-[1.2rem] bg-BlueDark font-light text-white tracking-wider border-b-2 pt-8 pb-8">
                        Entreprise
                      </th>
                      <th className="px-6 py-3 text-left text-[1.2rem] bg-BlueDark font-light text-white tracking-wider border-b-2 pt-8 pb-8">
                      Professionnel
                      </th>
                    </tr>
                  </thead>

                  <tbody className="bg-white w-[82vw]">  
                      <tr>
                        <td className="px-16 py-4 max-w-[20%]">
                          <div className="text-[1rem] font-medium text-gray-900">Creation bank card</div>
                        </td>
                        <td className="px-6 py-4 w-[15%]">
                          <div className="text-[1rem] font-medium text-gray-900">{props.moyens_de_payment.creation_bank_card.personnel== "" ? "/" : props.moyens_de_payment.creation_bank_card.personnel}</div>
                        </td>
                        <td className="px-6 py-4 w-[15%]">
                          <div className="text-[1rem] font-medium text-gray-900">{props.moyens_de_payment.creation_bank_card.entreprise== "" ? "/" : props.moyens_de_payment.creation_bank_card.entreprise}</div>
                        </td>
                        <td className="px-6 py-4 w-[15%]">
                          <div className="text-[1rem] font-medium text-gray-900">{props.moyens_de_payment.creation_bank_card.professionnel== "" ? "/" : props.moyens_de_payment.creation_bank_card.professionnel}</div>
                        </td>
                      </tr>
                  </tbody>
                  <tbody className="bg-white w-[82vw]">  
                      <tr>
                        <td className="px-16 py-4 max-w-[20%]">
                          <div className="text-[1rem] font-medium text-gray-900">Renouvelement bank card</div>
                        </td>
                        <td className="px-6 py-4 w-[15%]">
                          <div className="text-[1rem] font-medium text-gray-900">{props.moyens_de_payment.renouvelement_bank_card.personnel== "" ? "/" : props.moyens_de_payment.renouvelement_bank_card.personnel}</div>
                        </td>
                        <td className="px-6 py-4 w-[15%]">
                          <div className="text-[1rem] font-medium text-gray-900">{props.moyens_de_payment.renouvelement_bank_card.entreprise== "" ? "/" : props.moyens_de_payment.renouvelement_bank_card.entreprise}</div>
                        </td>
                        <td className="px-6 py-4 w-[15%]">
                          <div className="text-[1rem] font-medium text-gray-900">{props.moyens_de_payment.renouvelement_bank_card.professionnel== "" ? "/" : props.moyens_de_payment.renouvelement_bank_card.professionnel}</div>
                        </td>
                      </tr>
                  </tbody>
                  <tbody className="bg-white w-[82vw]">  
                      <tr>
                        <td className="px-16 py-4 max-w-[20%]">
                          <div className="text-[1rem] font-medium text-gray-900">Remplacement bank card</div>
                        </td>
                        <td className="px-6 py-4 w-[15%]">
                          <div className="text-[1rem] font-medium text-gray-900">{props.moyens_de_payment.remplacement_bank_card.personnel== "" ? "/" : props.moyens_de_payment.remplacement_bank_card.personnel}</div>
                        </td>
                        <td className="px-6 py-4 w-[15%]">
                          <div className="text-[1rem] font-medium text-gray-900">{props.moyens_de_payment.remplacement_bank_card.entreprise== "" ? "/" : props.moyens_de_payment.remplacement_bank_card.entreprise}</div>
                        </td>
                        <td className="px-6 py-4 w-[15%]">
                          <div className="text-[1rem] font-medium text-gray-900">{props.moyens_de_payment.remplacement_bank_card.professionnel== "" ? "/" : props.moyens_de_payment.remplacement_bank_card.professionnel}</div>
                        </td>
                      </tr>
                  </tbody>
                  <tbody className="bg-white w-[82vw]">  
                      <tr>
                        <td className="px-16 py-4 max-w-[20%]">
                          <div className="text-[1rem] font-medium text-gray-900">Edition code confidentiel bank card</div>
                        </td>
                        <td className="px-6 py-4 w-[15%]">
                          <div className="text-[1rem] font-medium text-gray-900">{props.moyens_de_payment.edition_code_confidentiel_bank_card.personnel== "" ? "/" : props.moyens_de_payment.edition_code_confidentiel_bank_card.personnel}</div>
                        </td>
                        <td className="px-6 py-4 w-[15%]">
                          <div className="text-[1rem] font-medium text-gray-900">{props.moyens_de_payment.creation_bank_card.entreprise== "" ? "/" : props.moyens_de_payment.edition_code_confidentiel_bank_card.entreprise}</div>
                        </td>
                        <td className="px-6 py-4 w-[15%]">
                          <div className="text-[1rem] font-medium text-gray-900">{props.moyens_de_payment.edition_code_confidentiel_bank_card.professionnel== "" ? "/" : props.moyens_de_payment.edition_code_confidentiel_bank_card.professionnel}</div>
                        </td>
                      </tr>
                  </tbody>
                  <tbody className="bg-white w-[82vw]">  
                      <tr>
                        <td className="px-16 py-4 max-w-[20%]">
                          <div className="text-[1rem] font-medium text-gray-900">Retrait intra bancaire</div>
                        </td>
                        <td className="px-6 py-4 w-[15%]">
                          <div className="text-[1rem] font-medium text-gray-900">{props.moyens_de_payment.retrait_intra_bancaire.personnel== "" ? "/" : props.moyens_de_payment.retrait_intra_bancaire.personnel}</div>
                        </td>
                        <td className="px-6 py-4 w-[15%]">
                          <div className="text-[1rem] font-medium text-gray-900">{props.moyens_de_payment.retrait_intra_bancaire.entreprise== "" ? "/" : props.moyens_de_payment.retrait_intra_bancaire.entreprise}</div>
                        </td>
                        <td className="px-6 py-4 w-[15%]">
                          <div className="text-[1rem] font-medium text-gray-900">{props.moyens_de_payment.retrait_intra_bancaire.professionnel== "" ? "/" : props.moyens_de_payment.retrait_intra_bancaire.professionnel}</div>
                        </td>
                      </tr>
                  </tbody>
                  <tbody className="bg-white w-[82vw]">  
                      <tr>
                        <td className="px-16 py-4 max-w-[20%]">
                          <div className="text-[1rem] font-medium text-gray-900">Retrait inter bancaire</div>
                        </td>
                        <td className="px-6 py-4 w-[15%]">
                          <div className="text-[1rem] font-medium text-gray-900">{props.moyens_de_payment.retrait_inter_bancaire.personnel== "" ? "/" : props.moyens_de_payment.retrait_inter_bancaire.personnel}</div>
                        </td>
                        <td className="px-6 py-4 w-[15%]">
                          <div className="text-[1rem] font-medium text-gray-900">{props.moyens_de_payment.retrait_inter_bancaire.entreprise== "" ? "/" : props.moyens_de_payment.retrait_inter_bancaire.entreprise}</div>
                        </td>
                        <td className="px-6 py-4 w-[15%]">
                          <div className="text-[1rem] font-medium text-gray-900">{props.moyens_de_payment.retrait_inter_bancaire.professionnel== "" ? "/" : props.moyens_de_payment.retrait_inter_bancaire.professionnel}</div>
                        </td>
                      </tr>
                  </tbody>
                  <tbody className="bg-white w-[82vw]">  
                      <tr>
                        <td className="px-16 py-4 max-w-[20%]">
                          <div className="text-[1rem] font-medium text-gray-900">Creation visa</div>
                        </td>
                        <td className="px-6 py-4 w-[15%]">
                          <div className="text-[1rem] font-medium text-gray-900">{props.moyens_de_payment.creation_visa.personnel== "" ? "/" : props.moyens_de_payment.creation_visa.personnel}</div>
                        </td>
                        <td className="px-6 py-4 w-[15%]">
                          <div className="text-[1rem] font-medium text-gray-900">{props.moyens_de_payment.creation_visa.entreprise== "" ? "/" : props.moyens_de_payment.creation_visa.entreprise}</div>
                        </td>
                        <td className="px-6 py-4 w-[15%]">
                          <div className="text-[1rem] font-medium text-gray-900">{props.moyens_de_payment.creation_visa.professionnel== "" ? "/" : props.moyens_de_payment.creation_visa.professionnel}</div>
                        </td>
                      </tr>
                  </tbody>
                  <tbody className="bg-white w-[82vw]">  
                      <tr>
                        <td className="px-16 py-4 max-w-[20%]">
                          <div className="text-[1rem] font-medium text-gray-900">Renouvelement visa</div>
                        </td>
                        <td className="px-6 py-4 w-[15%]">
                          <div className="text-[1rem] font-medium text-gray-900">{props.moyens_de_payment.renouvelement_visa.personnel== "" ? "/" : props.moyens_de_payment.renouvelement_visa.personnel}</div>
                        </td>
                        <td className="px-6 py-4 w-[15%]">
                          <div className="text-[1rem] font-medium text-gray-900">{props.moyens_de_payment.renouvelement_visa.entreprise== "" ? "/" : props.moyens_de_payment.renouvelement_visa.entreprise}</div>
                        </td>
                        <td className="px-6 py-4 w-[15%]">
                          <div className="text-[1rem] font-medium text-gray-900">{props.moyens_de_payment.renouvelement_visa.professionnel== "" ? "/" : props.moyens_de_payment.renouvelement_visa.professionnel}</div>
                        </td>
                      </tr>
                  </tbody>
                  <tbody className="bg-white w-[82vw]">  
                      <tr>
                        <td className="px-16 py-4 max-w-[20%]">
                          <div className="text-[1rem] font-medium text-gray-900">Remplacement visa</div>
                        </td>
                        <td className="px-6 py-4 w-[15%]">
                          <div className="text-[1rem] font-medium text-gray-900">{props.moyens_de_payment.remplacement_visa.personnel== "" ? "/" : props.moyens_de_payment.remplacement_visa.personnel}</div>
                        </td>
                        <td className="px-6 py-4 w-[15%]">
                          <div className="text-[1rem] font-medium text-gray-900">{props.moyens_de_payment.remplacement_visa.entreprise== "" ? "/" : props.moyens_de_payment.remplacement_visa.entreprise}</div>
                        </td>
                        <td className="px-6 py-4 w-[15%]">
                          <div className="text-[1rem] font-medium text-gray-900">{props.moyens_de_payment.remplacement_visa.professionnel== "" ? "/" : props.moyens_de_payment.remplacement_visa.professionnel}</div>
                        </td>
                      </tr>
                  </tbody>
                  <tbody className="bg-white w-[82vw]">  
                      <tr>
                        <td className="px-16 py-4 max-w-[20%]">
                          <div className="text-[1rem] font-medium text-gray-900">Edition code confidentiel visa</div>
                        </td>
                        <td className="px-6 py-4 w-[15%]">
                          <div className="text-[1rem] font-medium text-gray-900">{props.moyens_de_payment.edition_code_confidentiel_visa.personnel== "" ? "/" : props.moyens_de_payment.edition_code_confidentiel_visa.personnel}</div>
                        </td>
                        <td className="px-6 py-4 w-[15%]">
                          <div className="text-[1rem] font-medium text-gray-900">{props.moyens_de_payment.edition_code_confidentiel_visa.entreprise== "" ? "/" : props.moyens_de_payment.edition_code_confidentiel_visa.entreprise}</div>
                        </td>
                        <td className="px-6 py-4 w-[15%]">
                          <div className="text-[1rem] font-medium text-gray-900">{props.moyens_de_payment.edition_code_confidentiel_visa.professionnel== "" ? "/" : props.moyens_de_payment.edition_code_confidentiel_visa.professionnel}</div>
                        </td>
                      </tr>
                  </tbody>












                  <thead>
                    <tr>
                      <th className="px-16 py-3 text-left text-[1.2rem] bg-BlueDark font-light text-white tracking-wider border-b-2 pt-8 pb-8">
                      Prets et credits
                      </th>
                      <th className="px-6 py-3 text-left text-[1.2rem] bg-BlueDark font-light text-white tracking-wider border-b-2 pt-8 pb-8">
                      Personal
                      </th>
                      <th className="px-6 py-3 text-left text-[1.2rem] bg-BlueDark font-light text-white tracking-wider border-b-2 pt-8 pb-8">
                        Entreprise
                      </th>
                      <th className="px-6 py-3 text-left text-[1.2rem] bg-BlueDark font-light text-white tracking-wider border-b-2 pt-8 pb-8">
                      Professionnel
                      </th>
                    </tr>
                  </thead>

                  <tbody className="bg-white w-[82vw]">  
                      <tr>
                        <td className="px-16 py-4 max-w-[20%]">
                          <div className="text-[1rem] font-medium text-gray-900">Decouvert duree</div>
                        </td>
                        <td className="px-6 py-4 w-[15%]">
                          <div className="text-[1rem] font-medium text-gray-900">{props.prets_et_credits.decouvert_duree.personnel== "" ? "/" : props.prets_et_credits.decouvert_duree.personnel}</div>
                        </td>
                        <td className="px-6 py-4 w-[15%]">
                          <div className="text-[1rem] font-medium text-gray-900">{props.prets_et_credits.decouvert_duree.entreprise== "" ? "/" : props.prets_et_credits.decouvert_duree.entreprise}</div>
                        </td>
                        <td className="px-6 py-4 w-[15%]">
                          <div className="text-[1rem] font-medium text-gray-900">{props.prets_et_credits.decouvert_duree.professionnel== "" ? "/" : props.prets_et_credits.decouvert_duree.professionnel}</div>
                        </td>
                      </tr>
                  </tbody>
                  <tbody className="bg-white w-[82vw]">  
                      <tr>
                        <td className="px-16 py-4 max-w-[20%]">
                          <div className="text-[1rem] font-medium text-gray-900">Decouvert taux</div>
                        </td>
                        <td className="px-6 py-4 w-[15%]">
                          <div className="text-[1rem] font-medium text-gray-900">{props.prets_et_credits.decouvert_taux.personnel== "" ? "/" : props.prets_et_credits.decouvert_taux.personnel}</div>
                        </td>
                        <td className="px-6 py-4 w-[15%]">
                          <div className="text-[1rem] font-medium text-gray-900">{props.prets_et_credits.decouvert_taux.entreprise== "" ? "/" : props.prets_et_credits.decouvert_taux.entreprise}</div>
                        </td>
                        <td className="px-6 py-4 w-[15%]">
                          <div className="text-[1rem] font-medium text-gray-900">{props.prets_et_credits.decouvert_taux.professionnel== "" ? "/" : props.prets_et_credits.decouvert_taux.professionnel}</div>
                        </td>
                      </tr>
                  </tbody>
                  <tbody className="bg-white w-[82vw]">  
                      <tr>
                        <td className="px-16 py-4 max-w-[20%]">
                          <div className="text-[1rem] font-medium text-gray-900">Credit court terme taux</div>
                        </td>
                        <td className="px-6 py-4 w-[15%]">
                          <div className="text-[1rem] font-medium text-gray-900">{props.prets_et_credits.credit_court_terme_taux.personnel== "" ? "/" : props.prets_et_credits.credit_court_terme_taux.personnel}</div>
                        </td>
                        <td className="px-6 py-4 w-[15%]">
                          <div className="text-[1rem] font-medium text-gray-900">{props.prets_et_credits.credit_court_terme_taux.entreprise== "" ? "/" : props.prets_et_credits.credit_court_terme_taux.entreprise}</div>
                        </td>
                        <td className="px-6 py-4 w-[15%]">
                          <div className="text-[1rem] font-medium text-gray-900">{props.prets_et_credits.credit_court_terme_taux.professionnel== "" ? "/" : props.prets_et_credits.credit_court_terme_taux.professionnel}</div>
                        </td>
                      </tr>
                  </tbody>
                  <tbody className="bg-white w-[82vw]">  
                      <tr>
                        <td className="px-16 py-4 max-w-[20%]">
                          <div className="text-[1rem] font-medium text-gray-900">Credit moyen terme taux</div>
                        </td>
                        <td className="px-6 py-4 w-[15%]">
                          <div className="text-[1rem] font-medium text-gray-900">{props.prets_et_credits.credit_moyen_terme_taux.personnel== "" ? "/" : props.prets_et_credits.credit_moyen_terme_taux.personnel}</div>
                        </td>
                        <td className="px-6 py-4 w-[15%]">
                          <div className="text-[1rem] font-medium text-gray-900">{props.prets_et_credits.credit_moyen_terme_taux.entreprise== "" ? "/" : props.prets_et_credits.credit_moyen_terme_taux.entreprise}</div>
                        </td>
                        <td className="px-6 py-4 w-[15%]">
                          <div className="text-[1rem] font-medium text-gray-900">{props.prets_et_credits.credit_moyen_terme_taux.professionnel== "" ? "/" : props.prets_et_credits.credit_moyen_terme_taux.professionnel}</div>
                        </td>
                      </tr>
                  </tbody>
                  <tbody className="bg-white w-[82vw]">  
                      <tr>
                        <td className="px-16 py-4 max-w-[20%]">
                          <div className="text-[1rem] font-medium text-gray-900">Credit long terme taux</div>
                        </td>
                        <td className="px-6 py-4 w-[15%]">
                          <div className="text-[1rem] font-medium text-gray-900">{props.prets_et_credits.credit_long_terme_taux.personnel== "" ? "/" : props.prets_et_credits.credit_long_terme_taux.personnel}</div>
                        </td>
                        <td className="px-6 py-4 w-[15%]">
                          <div className="text-[1rem] font-medium text-gray-900">{props.prets_et_credits.credit_long_terme_taux.entreprise== "" ? "/" : props.prets_et_credits.credit_long_terme_taux.entreprise}</div>
                        </td>
                        <td className="px-6 py-4 w-[15%]">
                          <div className="text-[1rem] font-medium text-gray-900">{props.prets_et_credits.credit_long_terme_taux.professionnel== "" ? "/" : props.prets_et_credits.credit_long_terme_taux.professionnel}</div>
                        </td>
                      </tr>
                  </tbody>
                  <tbody className="bg-white w-[82vw]">  
                      <tr>
                        <td className="px-16 py-4 max-w-[20%]">
                          <div className="text-[1rem] font-medium text-gray-900">Options possibles</div>
                        </td>
                        <td className="px-6 py-4 w-[15%]">
                          <div className="text-[1rem] font-medium text-gray-900">{props.prets_et_credits.options_possibles.personnel== "" ? "/" : props.prets_et_credits.options_possibles.personnel}</div>
                        </td>
                        <td className="px-6 py-4 w-[15%]">
                          <div className="text-[1rem] font-medium text-gray-900">{props.prets_et_credits.options_possibles.entreprise== "" ? "/" : props.prets_et_credits.options_possibles.entreprise}</div>
                        </td>
                        <td className="px-6 py-4 w-[15%]">
                          <div className="text-[1rem] font-medium text-gray-900">{props.prets_et_credits.options_possibles.professionnel== "" ? "/" : props.prets_et_credits.options_possibles.professionnel}</div>
                        </td>
                      </tr>
                  </tbody>
















                  <thead>
                    <tr>
                      <th className="px-16 py-3 text-left text-[1.2rem] bg-BlueDark font-light text-white tracking-wider border-b-2 pt-8 pb-8">
                      Placement
                      </th>
                      <th className="px-6 py-3 text-left text-[1.2rem] bg-BlueDark font-light text-white tracking-wider border-b-2 pt-8 pb-8">
                      Personal
                      </th>
                      <th className="px-6 py-3 text-left text-[1.2rem] bg-BlueDark font-light text-white tracking-wider border-b-2 pt-8 pb-8">
                        Entreprise
                      </th>
                      <th className="px-6 py-3 text-left text-[1.2rem] bg-BlueDark font-light text-white tracking-wider border-b-2 pt-8 pb-8">
                      Professionnel
                      </th>
                    </tr>
                  </thead>

                  <tbody className="bg-white w-[82vw]">  
                      <tr>
                        <td className="px-16 py-4 max-w-[20%]">
                          <div className="text-[1rem] font-medium text-gray-900">Depots a court terme</div>
                        </td>
                        <td className="px-6 py-4 w-[15%]">
                          <div className="text-[1rem] font-medium text-gray-900">{props.placement.depots_a_court_terme.personnel== "" ? "/" : props.placement.depots_a_court_terme.personnel}</div>
                        </td>
                        <td className="px-6 py-4 w-[15%]">
                          <div className="text-[1rem] font-medium text-gray-900">{props.placement.depots_a_court_terme.entreprise== "" ? "/" : props.placement.depots_a_court_terme.entreprise}</div>
                        </td>
                        <td className="px-6 py-4 w-[15%]">
                          <div className="text-[1rem] font-medium text-gray-900">{props.placement.depots_a_court_terme.professionnel== "" ? "/" : props.placement.depots_a_court_terme.professionnel}</div>
                        </td>
                      </tr>
                  </tbody>
                  <tbody className="bg-white w-[82vw]">  
                      <tr>
                        <td className="px-16 py-4 max-w-[20%]">
                          <div className="text-[1rem] font-medium text-gray-900">Depots a moyen terme</div>
                        </td>
                        <td className="px-6 py-4 w-[15%]">
                          <div className="text-[1rem] font-medium text-gray-900">{props.placement.depots_a_moyen_terme.personnel== "" ? "/" : props.placement.depots_a_moyen_terme.personnel}</div>
                        </td>
                        <td className="px-6 py-4 w-[15%]">
                          <div className="text-[1rem] font-medium text-gray-900">{props.placement.depots_a_moyen_terme.entreprise== "" ? "/" : props.placement.depots_a_moyen_terme.entreprise}</div>
                        </td>
                        <td className="px-6 py-4 w-[15%]">
                          <div className="text-[1rem] font-medium text-gray-900">{props.placement.depots_a_moyen_terme.professionnel== "" ? "/" : props.placement.depots_a_moyen_terme.professionnel}</div>
                        </td>
                      </tr>
                  </tbody>
                  <tbody className="bg-white w-[82vw]">  
                      <tr>
                        <td className="px-16 py-4 max-w-[20%]">
                          <div className="text-[1rem] font-medium text-gray-900">Depots a long terme</div>
                        </td>
                        <td className="px-6 py-4 w-[15%]">
                          <div className="text-[1rem] font-medium text-gray-900">{props.placement.depots_a_long_terme.personnel== "" ? "/" : props.placement.depots_a_long_terme.personnel}</div>
                        </td>
                        <td className="px-6 py-4 w-[15%]">
                          <div className="text-[1rem] font-medium text-gray-900">{props.placement.depots_a_long_terme.entreprise== "" ? "/" : props.placement.depots_a_long_terme.entreprise}</div>
                        </td>
                        <td className="px-6 py-4 w-[15%]">
                          <div className="text-[1rem] font-medium text-gray-900">{props.placement.depots_a_long_terme.professionnel== "" ? "/" : props.placement.depots_a_long_terme.professionnel}</div>
                        </td>
                      </tr>
                  </tbody>














                  <thead>
                    <tr>
                      <th className="px-16 py-3 text-left text-[1.2rem] bg-BlueDark font-light text-white tracking-wider border-b-2 pt-8 pb-8">
                      Epargne
                      </th>
                      <th className="px-6 py-3 text-left text-[1.2rem] bg-BlueDark font-light text-white tracking-wider border-b-2 pt-8 pb-8">
                      Personal
                      </th>
                      <th className="px-6 py-3 text-left text-[1.2rem] bg-BlueDark font-light text-white tracking-wider border-b-2 pt-8 pb-8">
                        Entreprise
                      </th>
                      <th className="px-6 py-3 text-left text-[1.2rem] bg-BlueDark font-light text-white tracking-wider border-b-2 pt-8 pb-8">
                      Professionnel
                      </th>
                    </tr>
                  </thead>

                  <tbody className="bg-white w-[82vw]">  
                      <tr>
                        <td className="px-16 py-4 max-w-[20%]">
                          <div className="text-[1rem] font-medium text-gray-900">Epargne duree taux 01</div>
                        </td>
                        <td className="px-6 py-4 w-[15%]">
                          <div className="text-[1rem] font-medium text-gray-900">{props.epargne.epargne_duree_taux_01.personnel== "" ? "/" : props.epargne.epargne_duree_taux_01.personnel}</div>
                        </td>
                        <td className="px-6 py-4 w-[15%]">
                          <div className="text-[1rem] font-medium text-gray-900">{props.epargne.epargne_duree_taux_01.entreprise== "" ? "/" : props.epargne.epargne_duree_taux_01.entreprise}</div>
                        </td>
                        <td className="px-6 py-4 w-[15%]">
                          <div className="text-[1rem] font-medium text-gray-900">{props.epargne.epargne_duree_taux_01.professionnel== "" ? "/" : props.epargne.epargne_duree_taux_01.professionnel}</div>
                        </td>
                      </tr>
                  </tbody>
                  <tbody className="bg-white w-[82vw]">  
                      <tr>
                        <td className="px-16 py-4 max-w-[20%]">
                          <div className="text-[1rem] font-medium text-gray-900">Epargne duree taux 02</div>
                        </td>
                        <td className="px-6 py-4 w-[15%]">
                          <div className="text-[1rem] font-medium text-gray-900">{props.epargne.epargne_duree_taux_02.personnel== "" ? "/" : props.epargne.epargne_duree_taux_02.personnel}</div>
                        </td>
                        <td className="px-6 py-4 w-[15%]">
                          <div className="text-[1rem] font-medium text-gray-900">{props.epargne.epargne_duree_taux_02.entreprise== "" ? "/" : props.epargne.epargne_duree_taux_02.entreprise}</div>
                        </td>
                        <td className="px-6 py-4 w-[15%]">
                          <div className="text-[1rem] font-medium text-gray-900">{props.epargne.epargne_duree_taux_02.professionnel== "" ? "/" : props.epargne.epargne_duree_taux_02.professionnel}</div>
                        </td>
                      </tr>
                  </tbody>
                  <tbody className="bg-white w-[82vw]">  
                      <tr>
                        <td className="px-16 py-4 max-w-[20%]">
                          <div className="text-[1rem] font-medium text-gray-900">Epargne duree taux 03</div>
                        </td>
                        <td className="px-6 py-4 w-[15%]">
                          <div className="text-[1rem] font-medium text-gray-900">{props.epargne.epargne_duree_taux_03.personnel== "" ? "/" : props.epargne.epargne_duree_taux_03.personnel}</div>
                        </td>
                        <td className="px-6 py-4 w-[15%]">
                          <div className="text-[1rem] font-medium text-gray-900">{props.epargne.epargne_duree_taux_03.entreprise== "" ? "/" : props.epargne.epargne_duree_taux_03.entreprise}</div>
                        </td>
                        <td className="px-6 py-4 w-[15%]">
                          <div className="text-[1rem] font-medium text-gray-900">{props.epargne.epargne_duree_taux_03.professionnel== "" ? "/" : props.epargne.epargne_duree_taux_03.professionnel}</div>
                        </td>
                      </tr>
                  </tbody>
                  <tbody className="bg-white w-[82vw]">  
                      <tr>
                        <td className="px-16 py-4 max-w-[20%]">
                          <div className="text-[1rem] font-medium text-gray-900">Epargne duree taux 04</div>
                        </td>
                        <td className="px-6 py-4 w-[15%]">
                          <div className="text-[1rem] font-medium text-gray-900">{props.epargne.epargne_duree_taux_04.personnel== "" ? "/" : props.epargne.epargne_duree_taux_04.personnel}</div>
                        </td>
                        <td className="px-6 py-4 w-[15%]">
                          <div className="text-[1rem] font-medium text-gray-900">{props.epargne.epargne_duree_taux_04.entreprise== "" ? "/" : props.epargne.epargne_duree_taux_04.entreprise}</div>
                        </td>
                        <td className="px-6 py-4 w-[15%]">
                          <div className="text-[1rem] font-medium text-gray-900">{props.epargne.epargne_duree_taux_04.professionnel== "" ? "/" : props.epargne.epargne_duree_taux_04.professionnel}</div>
                        </td>
                      </tr>
                  </tbody>
                  <tbody className="bg-white w-[82vw]">  
                      <tr>
                        <td className="px-16 py-4 max-w-[20%]">
                          <div className="text-[1rem] font-medium text-gray-900">Epargne duree taux 05</div>
                        </td>
                        <td className="px-6 py-4 w-[15%]">
                          <div className="text-[1rem] font-medium text-gray-900">{props.epargne.epargne_duree_taux_05.personnel== "" ? "/" : props.epargne.epargne_duree_taux_05.personnel}</div>
                        </td>
                        <td className="px-6 py-4 w-[15%]">
                          <div className="text-[1rem] font-medium text-gray-900">{props.epargne.epargne_duree_taux_05.entreprise== "" ? "/" : props.epargne.epargne_duree_taux_05.entreprise}</div>
                        </td>
                        <td className="px-6 py-4 w-[15%]">
                          <div className="text-[1rem] font-medium text-gray-900">{props.epargne.epargne_duree_taux_05.professionnel== "" ? "/" : props.epargne.epargne_duree_taux_05.professionnel}</div>
                        </td>
                      </tr>
                  </tbody>
                  <tbody className="bg-white w-[82vw]">  
                      <tr>
                        <td className="px-16 py-4 max-w-[20%]">
                          <div className="text-[1rem] font-medium text-gray-900">Epargne duree taux 06</div>
                        </td>
                        <td className="px-6 py-4 w-[15%]">
                          <div className="text-[1rem] font-medium text-gray-900">{props.epargne.epargne_duree_taux_06.personnel== "" ? "/" : props.epargne.epargne_duree_taux_06.personnel}</div>
                        </td>
                        <td className="px-6 py-4 w-[15%]">
                          <div className="text-[1rem] font-medium text-gray-900">{props.epargne.epargne_duree_taux_06.entreprise== "" ? "/" : props.epargne.epargne_duree_taux_06.entreprise}</div>
                        </td>
                        <td className="px-6 py-4 w-[15%]">
                          <div className="text-[1rem] font-medium text-gray-900">{props.epargne.epargne_duree_taux_06.professionnel== "" ? "/" : props.epargne.epargne_duree_taux_06.professionnel}</div>
                        </td>
                      </tr>
                  </tbody>
                  <tbody className="bg-white w-[82vw]">  
                      <tr>
                        <td className="px-16 py-4 max-w-[20%]">
                          <div className="text-[1rem] font-medium text-gray-900">Epargne duree taux 07</div>
                        </td>
                        <td className="px-6 py-4 w-[15%]">
                          <div className="text-[1rem] font-medium text-gray-900">{props.epargne.epargne_duree_taux_07.personnel== "" ? "/" : props.epargne.epargne_duree_taux_07.personnel}</div>
                        </td>
                        <td className="px-6 py-4 w-[15%]">
                          <div className="text-[1rem] font-medium text-gray-900">{props.epargne.epargne_duree_taux_07.entreprise== "" ? "/" : props.epargne.epargne_duree_taux_07.entreprise}</div>
                        </td>
                        <td className="px-6 py-4 w-[15%]">
                          <div className="text-[1rem] font-medium text-gray-900">{props.epargne.epargne_duree_taux_07.professionnel== "" ? "/" : props.epargne.epargne_duree_taux_07.professionnel}</div>
                        </td>
                      </tr>
                  </tbody>
                  <tbody className="bg-white w-[82vw]">  
                      <tr>
                        <td className="px-16 py-4 max-w-[20%]">
                          <div className="text-[1rem] font-medium text-gray-900">Epargne duree taux 08</div>
                        </td>
                        <td className="px-6 py-4 w-[15%]">
                          <div className="text-[1rem] font-medium text-gray-900">{props.epargne.epargne_duree_taux_08.personnel== "" ? "/" : props.epargne.epargne_duree_taux_08.personnel}</div>
                        </td>
                        <td className="px-6 py-4 w-[15%]">
                          <div className="text-[1rem] font-medium text-gray-900">{props.epargne.epargne_duree_taux_08.entreprise== "" ? "/" : props.epargne.epargne_duree_taux_08.entreprise}</div>
                        </td>
                        <td className="px-6 py-4 w-[15%]">
                          <div className="text-[1rem] font-medium text-gray-900">{props.epargne.epargne_duree_taux_08.professionnel== "" ? "/" : props.epargne.epargne_duree_taux_08.professionnel}</div>
                        </td>
                      </tr>
                  </tbody>
                  <tbody className="bg-white w-[82vw]">  
                      <tr>
                        <td className="px-16 py-4 max-w-[20%]">
                          <div className="text-[1rem] font-medium text-gray-900">Epargne duree taux 09</div>
                        </td>
                        <td className="px-6 py-4 w-[15%]">
                          <div className="text-[1rem] font-medium text-gray-900">{props.epargne.epargne_duree_taux_09.personnel== "" ? "/" : props.epargne.epargne_duree_taux_09.personnel}</div>
                        </td>
                        <td className="px-6 py-4 w-[15%]">
                          <div className="text-[1rem] font-medium text-gray-900">{props.epargne.epargne_duree_taux_09.entreprise== "" ? "/" : props.epargne.epargne_duree_taux_09.entreprise}</div>
                        </td>
                        <td className="px-6 py-4 w-[15%]">
                          <div className="text-[1rem] font-medium text-gray-900">{props.epargne.epargne_duree_taux_09.professionnel== "" ? "/" : props.epargne.epargne_duree_taux_09.professionnel}</div>
                        </td>
                      </tr>
                  </tbody>
                  <tbody className="bg-white w-[82vw]">  
                      <tr>
                        <td className="px-16 py-4 max-w-[20%]">
                          <div className="text-[1rem] font-medium text-gray-900">Epargne duree taux 10</div>
                        </td>
                        <td className="px-6 py-4 w-[15%]">
                          <div className="text-[1rem] font-medium text-gray-900">{props.epargne.epargne_duree_taux_10.personnel== "" ? "/" : props.epargne.epargne_duree_taux_10.personnel}</div>
                        </td>
                        <td className="px-6 py-4 w-[15%]">
                          <div className="text-[1rem] font-medium text-gray-900">{props.epargne.epargne_duree_taux_10.entreprise== "" ? "/" : props.epargne.epargne_duree_taux_10.entreprise}</div>
                        </td>
                        <td className="px-6 py-4 w-[15%]">
                          <div className="text-[1rem] font-medium text-gray-900">{props.epargne.epargne_duree_taux_10.professionnel== "" ? "/" : props.epargne.epargne_duree_taux_10.professionnel}</div>
                        </td>
                      </tr>
                  </tbody>












                  <thead>
                    <tr>
                      <th className="px-16 py-3 text-left text-[1.2rem] bg-BlueDark font-light text-white tracking-wider border-b-2 pt-8 pb-8">
                      Coffre fort
                      </th>
                      <th className="px-6 py-3 text-left text-[1.2rem] bg-BlueDark font-light text-white tracking-wider border-b-2 pt-8 pb-8">
                      Personal
                      </th>
                      <th className="px-6 py-3 text-left text-[1.2rem] bg-BlueDark font-light text-white tracking-wider border-b-2 pt-8 pb-8">
                        Entreprise
                      </th>
                      <th className="px-6 py-3 text-left text-[1.2rem] bg-BlueDark font-light text-white tracking-wider border-b-2 pt-8 pb-8">
                      Professionnel
                      </th>
                    </tr>
                  </thead>

                  <tbody className="bg-white w-[82vw]">  
                      <tr>
                        <td className="px-16 py-4 max-w-[20%]">
                          <div className="text-[1rem] font-medium text-gray-900">Petit</div>
                        </td>
                        <td className="px-6 py-4 w-[15%]">
                          <div className="text-[1rem] font-medium text-gray-900">{props.coffre_fort.petit.personnel== "" ? "/" : props.coffre_fort.petit.personnel}</div>
                        </td>
                        <td className="px-6 py-4 w-[15%]">
                          <div className="text-[1rem] font-medium text-gray-900">{props.coffre_fort.petit.entreprise== "" ? "/" : props.coffre_fort.petit.entreprise}</div>
                        </td>
                        <td className="px-6 py-4 w-[15%]">
                          <div className="text-[1rem] font-medium text-gray-900">{props.coffre_fort.petit.professionnel== "" ? "/" : props.coffre_fort.petit.professionnel}</div>
                        </td>
                      </tr>
                  </tbody>
                  <tbody className="bg-white w-[82vw]">  
                      <tr>
                        <td className="px-16 py-4 max-w-[20%]">
                          <div className="text-[1rem] font-medium text-gray-900">Moyen</div>
                        </td>
                        <td className="px-6 py-4 w-[15%]">
                          <div className="text-[1rem] font-medium text-gray-900">{props.coffre_fort.moyen.personnel== "" ? "/" : props.coffre_fort.moyen.personnel}</div>
                        </td>
                        <td className="px-6 py-4 w-[15%]">
                          <div className="text-[1rem] font-medium text-gray-900">{props.coffre_fort.moyen.entreprise== "" ? "/" : props.coffre_fort.moyen.entreprise}</div>
                        </td>
                        <td className="px-6 py-4 w-[15%]">
                          <div className="text-[1rem] font-medium text-gray-900">{props.coffre_fort.moyen.professionnel== "" ? "/" : props.coffre_fort.moyen.professionnel}</div>
                        </td>
                      </tr>
                  </tbody>
                  <tbody className="bg-white w-[82vw]">  
                      <tr>
                        <td className="px-16 py-4 max-w-[20%]">
                          <div className="text-[1rem] font-medium text-gray-900">Grand</div>
                        </td>
                        <td className="px-6 py-4 w-[15%]">
                          <div className="text-[1rem] font-medium text-gray-900">{props.coffre_fort.grand.personnel== "" ? "/" : props.coffre_fort.grand.personnel}</div>
                        </td>
                        <td className="px-6 py-4 w-[15%]">
                          <div className="text-[1rem] font-medium text-gray-900">{props.coffre_fort.grand.entreprise== "" ? "/" : props.coffre_fort.grand.entreprise}</div>
                        </td>
                        <td className="px-6 py-4 w-[15%]">
                          <div className="text-[1rem] font-medium text-gray-900">{props.coffre_fort.grand.professionnel== "" ? "/" : props.coffre_fort.grand.professionnel}</div>
                        </td>
                      </tr>
                  </tbody>
                  <tbody className="bg-white w-[82vw]">  
                      <tr>
                        <td className="px-16 py-4 max-w-[20%]">
                          <div className="text-[1rem] font-medium text-gray-900">Cautionnement</div>
                        </td>
                        <td className="px-6 py-4 w-[15%]">
                          <div className="text-[1rem] font-medium text-gray-900">{props.coffre_fort.cautionnement.personnel== "" ? "/" : props.coffre_fort.cautionnement.personnel}</div>
                        </td>
                        <td className="px-6 py-4 w-[15%]">
                          <div className="text-[1rem] font-medium text-gray-900">{props.coffre_fort.cautionnement.entreprise== "" ? "/" : props.coffre_fort.cautionnement.entreprise}</div>
                        </td>
                        <td className="px-6 py-4 w-[15%]">
                          <div className="text-[1rem] font-medium text-gray-900">{props.coffre_fort.cautionnement.professionnel== "" ? "/" : props.coffre_fort.cautionnement.professionnel}</div>
                        </td>
                      </tr>
                  </tbody>













                  <thead>
                    <tr>
                      <th className="px-16 py-3 text-left text-[1.2rem] bg-BlueDark font-light text-white tracking-wider border-b-2 pt-8 pb-8">
                      Financement externe
                      </th>
                      <th className="px-6 py-3 text-left text-[1.2rem] bg-BlueDark font-light text-white tracking-wider border-b-2 pt-8 pb-8">
                      Personal
                      </th>
                      <th className="px-6 py-3 text-left text-[1.2rem] bg-BlueDark font-light text-white tracking-wider border-b-2 pt-8 pb-8">
                        Entreprise
                      </th>
                      <th className="px-6 py-3 text-left text-[1.2rem] bg-BlueDark font-light text-white tracking-wider border-b-2 pt-8 pb-8">
                      Professionnel
                      </th>
                    </tr>
                  </thead>

                  <tbody className="bg-white w-[82vw]">  
                      <tr>
                        <td className="px-16 py-4 max-w-[20%]">
                          <div className="text-[1rem] font-medium text-gray-900">Encaissement cheque etranger</div>
                        </td>
                        <td className="px-6 py-4 w-[15%]">
                          <div className="text-[1rem] font-medium text-gray-900">{props.financement_externe.encaissement_cheque_etranger.personnel== "" ? "/" : props.financement_externe.encaissement_cheque_etranger.personnel}</div>
                        </td>
                        <td className="px-6 py-4 w-[15%]">
                          <div className="text-[1rem] font-medium text-gray-900">{props.financement_externe.encaissement_cheque_etranger.entreprise== "" ? "/" : props.financement_externe.encaissement_cheque_etranger.entreprise}</div>
                        </td>
                        <td className="px-6 py-4 w-[15%]">
                          <div className="text-[1rem] font-medium text-gray-900">{props.financement_externe.encaissement_cheque_etranger.professionnel== "" ? "/" : props.financement_externe.encaissement_cheque_etranger.professionnel}</div>
                        </td>
                      </tr>
                  </tbody>
                  <tbody className="bg-white w-[82vw]">  
                      <tr>
                        <td className="px-16 py-4 max-w-[20%]">
                          <div className="text-[1rem] font-medium text-gray-900">Virement reçu</div>
                        </td>
                        <td className="px-6 py-4 w-[15%]">
                          <div className="text-[1rem] font-medium text-gray-900">{props.financement_externe.virement_recu.personnel== "" ? "/" : props.financement_externe.virement_recu.personnel}</div>
                        </td>
                        <td className="px-6 py-4 w-[15%]">
                          <div className="text-[1rem] font-medium text-gray-900">{props.financement_externe.virement_recu.entreprise== "" ? "/" : props.financement_externe.virement_recu.entreprise}</div>
                        </td>
                        <td className="px-6 py-4 w-[15%]">
                          <div className="text-[1rem] font-medium text-gray-900">{props.financement_externe.virement_recu.professionnel== "" ? "/" : props.financement_externe.virement_recu.professionnel}</div>
                        </td>
                      </tr>
                  </tbody>
                  <tbody className="bg-white w-[82vw]">  
                      <tr>
                        <td className="px-16 py-4 max-w-[20%]">
                          <div className="text-[1rem] font-medium text-gray-900">Virement emis</div>
                        </td>
                        <td className="px-6 py-4 w-[15%]">
                          <div className="text-[1rem] font-medium text-gray-900">{props.financement_externe.virement_emis.personnel== "" ? "/" : props.financement_externe.virement_emis.personnel}</div>
                        </td>
                        <td className="px-6 py-4 w-[15%]">
                          <div className="text-[1rem] font-medium text-gray-900">{props.financement_externe.virement_emis.entreprise== "" ? "/" : props.financement_externe.virement_emis.entreprise}</div>
                        </td>
                        <td className="px-6 py-4 w-[15%]">
                          <div className="text-[1rem] font-medium text-gray-900">{props.financement_externe.virement_emis.professionnel== "" ? "/" : props.financement_externe.virement_emis.professionnel}</div>
                        </td>
                      </tr>
                  </tbody>
                  <tbody className="bg-white w-[82vw]">  
                      <tr>
                        <td className="px-16 py-4 max-w-[20%]">
                          <div className="text-[1rem] font-medium text-gray-900">Exportation domiciliation</div>
                        </td>
                        <td className="px-6 py-4 w-[15%]">
                          <div className="text-[1rem] font-medium text-gray-900">{props.financement_externe.exportation_domiciliation.personnel== "" ? "/" : props.financement_externe.exportation_domiciliation.personnel}</div>
                        </td>
                        <td className="px-6 py-4 w-[15%]">
                          <div className="text-[1rem] font-medium text-gray-900">{props.financement_externe.exportation_domiciliation.entreprise== "" ? "/" : props.financement_externe.exportation_domiciliation.entreprise}</div>
                        </td>
                        <td className="px-6 py-4 w-[15%]">
                          <div className="text-[1rem] font-medium text-gray-900">{props.financement_externe.exportation_domiciliation.professionnel== "" ? "/" : props.financement_externe.exportation_domiciliation.professionnel}</div>
                        </td>
                      </tr>
                  </tbody>
                  <tbody className="bg-white w-[82vw]">  
                      <tr>
                        <td className="px-16 py-4 max-w-[20%]">
                          <div className="text-[1rem] font-medium text-gray-900">Importation domiciliation</div>
                        </td>
                        <td className="px-6 py-4 w-[15%]">
                          <div className="text-[1rem] font-medium text-gray-900">{props.financement_externe.importation_domiciliation.personnel== "" ? "/" : props.financement_externe.importation_domiciliation.personnel}</div>
                        </td>
                        <td className="px-6 py-4 w-[15%]">
                          <div className="text-[1rem] font-medium text-gray-900">{props.financement_externe.importation_domiciliation.entreprise== "" ? "/" : props.financement_externe.importation_domiciliation.entreprise}</div>
                        </td>
                        <td className="px-6 py-4 w-[15%]">
                          <div className="text-[1rem] font-medium text-gray-900">{props.financement_externe.importation_domiciliation.professionnel== "" ? "/" : props.financement_externe.importation_domiciliation.professionnel}</div>
                        </td>
                      </tr>
                  </tbody>
                  <tbody className="bg-white w-[82vw]">  
                      <tr>
                        <td className="px-16 py-4 max-w-[20%]">
                          <div className="text-[1rem] font-medium text-gray-900">Transfert libre prelevement compte dinars</div>
                        </td>
                        <td className="px-6 py-4 w-[15%]">
                          <div className="text-[1rem] font-medium text-gray-900">{props.financement_externe.transfert_libre_prelevement_compte_dinars.personnel== "" ? "/" : props.financement_externe.transfert_libre_prelevement_compte_dinars.personnel}</div>
                        </td>
                        <td className="px-6 py-4 w-[15%]">
                          <div className="text-[1rem] font-medium text-gray-900">{props.financement_externe.transfert_libre_prelevement_compte_dinars.entreprise== "" ? "/" : props.financement_externe.transfert_libre_prelevement_compte_dinars.entreprise}</div>
                        </td>
                        <td className="px-6 py-4 w-[15%]">
                          <div className="text-[1rem] font-medium text-gray-900">{props.financement_externe.transfert_libre_prelevement_compte_dinars.professionnel== "" ? "/" : props.financement_externe.transfert_libre_prelevement_compte_dinars.professionnel}</div>
                        </td>
                      </tr>
                  </tbody>
                  <tbody className="bg-white w-[82vw]">  
                      <tr>
                        <td className="px-16 py-4 max-w-[20%]">
                          <div className="text-[1rem] font-medium text-gray-900">Transfert libre prelevement compte devise</div>
                        </td>
                        <td className="px-6 py-4 w-[15%]">
                          <div className="text-[1rem] font-medium text-gray-900">{props.financement_externe.transfert_libre_prelevement_compte_devise.personnel== "" ? "/" : props.financement_externe.transfert_libre_prelevement_compte_devise.personnel}</div>
                        </td>
                        <td className="px-6 py-4 w-[15%]">
                          <div className="text-[1rem] font-medium text-gray-900">{props.financement_externe.transfert_libre_prelevement_compte_devise.entreprise== "" ? "/" : props.financement_externe.transfert_libre_prelevement_compte_devise.entreprise}</div>
                        </td>
                        <td className="px-6 py-4 w-[15%]">
                          <div className="text-[1rem] font-medium text-gray-900">{props.financement_externe.transfert_libre_prelevement_compte_devise.professionnel== "" ? "/" : props.financement_externe.transfert_libre_prelevement_compte_devise.professionnel}</div>
                        </td>
                      </tr>
                  </tbody>
                </table>
    </div>
  )
}

export default Prestation