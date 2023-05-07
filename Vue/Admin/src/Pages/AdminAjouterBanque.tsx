import { useState ,useEffect} from "react";
import axios from "../api/axios";

const ADMIN_LISTE_BANQUE_URL : string = "/catalogue" ;
const ADMIN_AOUTER_BANQUE_URL : string = "/admin/catalogue/BankAdder";
const ADMIN_AJOUTER_PRESTATION_URL : string = "/admin/catalogue/PresAdder"


type infosBanque = {
    id_banque : number,
    nom_banque : string,
    adresse : string,
    num_tel : string,
    num_fax : string,
    adresse_mail : string,
    logo : string,
    site_web : string
}

type gestion_de_compte = {
    ouverture_compte_courant : string,
    tenue_compte_courant : string,
    ouverture_compte_cheque : string,
    tenue_compte_cheque : string,
    ouverture_compte_epargne : string,
    tenue_compte_epargne : string,
    ouverture_compte_devise : string,
    tenue_compte_devise : string,
    fermeture_de_compte : string
}

type gestion_a_distance = {
    e_banking_abonnement : string,
    e_banking_consultation_solde : string,
    e_banking_virement : string,
    e_banking_paiment : string,
    sms_banking_abonnement : string,
    sms_banking_virement_en_agence : string,
    sms_banking_virement_hors_agence : string,
    service_contact : string
}

type option_de_payment = {
    versement_en_agence : string,
    versement_hors_agence : string,
    virement_en_agence : string,
    virement_hors_agence : string ,
    prelevement_en_agence : string,
    prelevement_hors_agence : string,
    retraits_en_agence : string,
    retraits_hors_agence : string,
    payment_cheque_en_agence : string,
    payment_cheque_hors_agence: string,
    vente_devise: string,
    achat_devise : string,
}


type moyens_de_payment = {
    creation_bank_card : string,
    renouvelement_bank_card : string,
    remplacement_bank_card : string,
    edition_code_confidentiel_bank_card : string,
    retrait_intra_bancaire : string,
    retrait_inter_bancaire : string,
    creation_visa : string,
    renouvelement_visa : string,
    remplacement_visa : string,
    edition_code_confidentiel_visa : string,
}

type prets_et_credits = {
    decouvert_duree : string,
    decouvert_taux : string,
    credit_court_terme_taux : string,
    credit_moyen_terme_taux : string,
    credit_long_terme_taux : string,
    options_possibles : string,
}

type placement = {
    depots_a_court_terme : string,
    depots_a_moyen_terme : string,
    depots_a_long_terme : string,
}


type epargne = {
    epargne_duree_taux_01 : string,
    epargne_duree_taux_02 : string,
    epargne_duree_taux_03 : string,
    epargne_duree_taux_04 : string,
    epargne_duree_taux_05 : string,
    epargne_duree_taux_06 : string,
    epargne_duree_taux_07 : string,
    epargne_duree_taux_08 : string,
    epargne_duree_taux_09 : string,
    epargne_duree_taux_10 : string,
}


type coffre_fort = {
    petit : string,
    moyen : string,
    grand : string,
    cautionnement : string,
}


type financement_externe =  {
    encaissement_cheque_etranger : string,
    virement_recu : string,
    virement_emis : string,
    exportation_domiciliation : string,
    importation_domiciliation : string,
    transfert_libre_prelevement_compte_dinars : string,
    transfert_libre_prelevement_compte_devise : string,
}  

type personnel = {
    gestion_de_compte : gestion_de_compte,
    gestion_a_distance : gestion_a_distance,
    option_de_payment : option_de_payment,
    moyens_de_payment : moyens_de_payment,
    prets_et_credits : prets_et_credits,
    placement : placement,
    epargne : epargne,
    coffre_fort : coffre_fort,
    financement_externe : financement_externe,
}

type entreprise = {
    gestion_de_compte : gestion_de_compte,
    gestion_a_distance : gestion_a_distance,
    option_de_payment : option_de_payment,
    moyens_de_payment : moyens_de_payment,
    prets_et_credits : prets_et_credits,
    placement : placement,
    epargne : epargne,
    coffre_fort : coffre_fort,
    financement_externe : financement_externe,
}

type professionnel = {
    gestion_de_compte : gestion_de_compte,
    gestion_a_distance : gestion_a_distance,
    option_de_payment : option_de_payment,
    moyens_de_payment : moyens_de_payment,
    prets_et_credits : prets_et_credits,
    placement : placement,
    epargne : epargne,
    coffre_fort : coffre_fort,
    financement_externe : financement_externe,
}

type prestation = {
    id_banque : number,
    personnel : personnel,
    professionnel : professionnel,
    entreprise : entreprise,
}

function AdminAjouterBanque(){
    const [listeBnaque,setListeBanque] = useState<infosBanque[]>([]);
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get(ADMIN_LISTE_BANQUE_URL);
            setListeBanque(response.data);
          } catch (error) {
            console.log(error);
          }
        }
        fetchData();
    }, []);
    const ids: number[] = listeBnaque.map((data: { id_banque: number; }) => data.id_banque); // liste des IDs
    function generateRandomID() : number {
        let rand : number;
        do {
            rand = Math.floor(Math.random() * 1000) + 1;
          } while (ids.includes(rand));
        return rand;
    }
    const [gestion_de_compte_perso,set_gestion_de_compte_perso] = useState<gestion_de_compte>({
        ouverture_compte_courant : "",
        tenue_compte_courant : "",
        ouverture_compte_cheque : "",
        tenue_compte_cheque : "",
        ouverture_compte_epargne : "",
        tenue_compte_epargne : "",
        ouverture_compte_devise : "",
        tenue_compte_devise : "",
        fermeture_de_compte : ""
    })
    const [gestion_de_compte_pro,set_gestion_de_compte_pro] = useState<gestion_de_compte>({
        ouverture_compte_courant : "",
        tenue_compte_courant : "",
        ouverture_compte_cheque : "",
        tenue_compte_cheque : "",
        ouverture_compte_epargne : "",
        tenue_compte_epargne : "",
        ouverture_compte_devise : "",
        tenue_compte_devise : "",
        fermeture_de_compte : ""
    })
    const [gestion_de_compte_ent,set_gestion_de_compte_ent] = useState<gestion_de_compte>({
        ouverture_compte_courant : "",
        tenue_compte_courant : "",
        ouverture_compte_cheque : "",
        tenue_compte_cheque : "",
        ouverture_compte_epargne : "",
        tenue_compte_epargne : "",
        ouverture_compte_devise : "",
        tenue_compte_devise : "",
        fermeture_de_compte : ""
    })

    const [gestion_a_distance_perso,set_gestion_a_distance_perso] = useState<gestion_a_distance>({
        e_banking_abonnement : "",
        e_banking_consultation_solde : "",
        e_banking_virement : "",
        e_banking_paiment : "",
        sms_banking_abonnement : "",
        sms_banking_virement_en_agence : "",
        sms_banking_virement_hors_agence : "",
        service_contact : ""
    })

    const [gestion_a_distance_pro,set_gestion_a_distance_pro] = useState<gestion_a_distance>({
        e_banking_abonnement : "",
        e_banking_consultation_solde : "",
        e_banking_virement : "",
        e_banking_paiment : "",
        sms_banking_abonnement : "",
        sms_banking_virement_en_agence : "",
        sms_banking_virement_hors_agence : "",
        service_contact : ""
    })

    const [gestion_a_distance_ent,set_gestion_a_distance_ent] = useState<gestion_a_distance>({
        e_banking_abonnement : "",
        e_banking_consultation_solde : "",
        e_banking_virement : "",
        e_banking_paiment : "",
        sms_banking_abonnement : "",
        sms_banking_virement_en_agence : "",
        sms_banking_virement_hors_agence : "",
        service_contact : ""
    })

    const [option_de_payment_perso,set_option_de_payment_perso] = useState<option_de_payment>({
        versement_en_agence : "",
        versement_hors_agence : "",
        virement_en_agence : "",
        virement_hors_agence : "",
        prelevement_en_agence : "",
        prelevement_hors_agence : "",
        retraits_en_agence : "",
        retraits_hors_agence : "",
        payment_cheque_en_agence : "",
        payment_cheque_hors_agence : "",
        vente_devise : "",
        achat_devise : ""
    })

    const [option_de_payment_pro,set_option_de_payment_pro] = useState<option_de_payment>({
        versement_en_agence : "",
        versement_hors_agence : "",
        virement_en_agence : "",
        virement_hors_agence : "",
        prelevement_en_agence : "",
        prelevement_hors_agence : "",
        retraits_en_agence : "",
        retraits_hors_agence : "",
        payment_cheque_en_agence : "",
        payment_cheque_hors_agence : "",
        vente_devise : "",
        achat_devise : ""
    })

    const [option_de_payment_ent,set_option_de_payment_ent] = useState<option_de_payment>({
        versement_en_agence : "",
        versement_hors_agence : "",
        virement_en_agence : "",
        virement_hors_agence : "",
        prelevement_en_agence : "",
        prelevement_hors_agence : "",
        retraits_en_agence : "",
        retraits_hors_agence : "",
        payment_cheque_en_agence : "",
        payment_cheque_hors_agence : "",
        vente_devise : "",
        achat_devise : ""
    })


    const [moyens_de_payment_perso , set_moyen_de_paiment_perso] = useState<moyens_de_payment>({
        creation_bank_card : "",
        renouvelement_bank_card : "",
        remplacement_bank_card : "",
        edition_code_confidentiel_bank_card : "",
        retrait_intra_bancaire : "",
        retrait_inter_bancaire : "",
        creation_visa : "",
        renouvelement_visa : "",
        remplacement_visa : "",
        edition_code_confidentiel_visa : ""
    })

    const [moyens_de_payment_pro , set_moyen_de_paiment_pro] = useState<moyens_de_payment>({
        creation_bank_card : "",
        renouvelement_bank_card : "",
        remplacement_bank_card : "",
        edition_code_confidentiel_bank_card : "",
        retrait_intra_bancaire : "",
        retrait_inter_bancaire : "",
        creation_visa : "",
        renouvelement_visa : "",
        remplacement_visa : "",
        edition_code_confidentiel_visa : ""
    })

    const [moyens_de_payment_ent , set_moyen_de_paiment_ent] = useState<moyens_de_payment>({
        creation_bank_card : "",
        renouvelement_bank_card : "",
        remplacement_bank_card : "",
        edition_code_confidentiel_bank_card : "",
        retrait_intra_bancaire : "",
        retrait_inter_bancaire : "",
        creation_visa : "",
        renouvelement_visa : "",
        remplacement_visa : "",
        edition_code_confidentiel_visa : ""
    })


    const [prets_et_credits_perso , set_prets_et_credits_perso ] = useState<prets_et_credits>({
        decouvert_duree: "",
        decouvert_taux: "",
        credit_court_terme_taux: "",
        credit_moyen_terme_taux: "",
        credit_long_terme_taux: "",
        options_possibles: ""
    })

    const [prets_et_credits_pro , set_prets_et_credits_pro ] = useState<prets_et_credits>({
        decouvert_duree: "",
        decouvert_taux: "",
        credit_court_terme_taux: "",
        credit_moyen_terme_taux: "",
        credit_long_terme_taux: "",
        options_possibles: ""
    })

    const [prets_et_credits_ent , set_prets_et_credits_ent ] = useState<prets_et_credits>({
        decouvert_duree: "",
        decouvert_taux: "",
        credit_court_terme_taux: "",
        credit_moyen_terme_taux: "",
        credit_long_terme_taux: "",
        options_possibles: ""
    })

    
    const [placement_perso , set_placement_perso] = useState<placement>({
        depots_a_court_terme: "",
        depots_a_moyen_terme: "",
        depots_a_long_terme: ""
    })


    const [placement_pro , set_placement_pro] = useState<placement>({
        depots_a_court_terme: "",
        depots_a_moyen_terme: "",
        depots_a_long_terme: ""
    })


    const [placement_ent , set_placement_ent] = useState<placement>({
        depots_a_court_terme: "",
        depots_a_moyen_terme: "",
        depots_a_long_terme: ""
    })


    const [epargne_perso, set_epargne_perso] = useState<epargne>({
        epargne_duree_taux_01: "",
        epargne_duree_taux_02: "",
        epargne_duree_taux_03: "",
        epargne_duree_taux_04: "",
        epargne_duree_taux_05: "",
        epargne_duree_taux_06: "",
        epargne_duree_taux_07: "",
        epargne_duree_taux_08: "",
        epargne_duree_taux_09: "",
        epargne_duree_taux_10: ""
    })


    const [epargne_pro, set_epargne_pro] = useState<epargne>({
        epargne_duree_taux_01: "",
        epargne_duree_taux_02: "",
        epargne_duree_taux_03: "",
        epargne_duree_taux_04: "",
        epargne_duree_taux_05: "",
        epargne_duree_taux_06: "",
        epargne_duree_taux_07: "",
        epargne_duree_taux_08: "",
        epargne_duree_taux_09: "",
        epargne_duree_taux_10: ""
    })


    const [epargne_ent, set_epargne_ent] = useState<epargne>({
        epargne_duree_taux_01: "",
        epargne_duree_taux_02: "",
        epargne_duree_taux_03: "",
        epargne_duree_taux_04: "",
        epargne_duree_taux_05: "",
        epargne_duree_taux_06: "",
        epargne_duree_taux_07: "",
        epargne_duree_taux_08: "",
        epargne_duree_taux_09: "",
        epargne_duree_taux_10: ""
    })


    const [coffre_fort_perso , set_coffre_fort_perso] = useState<coffre_fort>({
        petit: "",
        moyen: "",
        grand: "",
        cautionnement: ""
    })


    const [coffre_fort_pro , set_coffre_fort_pro] = useState<coffre_fort>({
        petit: "",
        moyen: "",
        grand: "",
        cautionnement: ""
    })



    const [coffre_fort_ent , set_coffre_fort_ent] = useState<coffre_fort>({
        petit: "",
        moyen: "",
        grand: "",
        cautionnement: ""
    })


    const [financement_externe_perso , set_financement_externe_perso] = useState<financement_externe>({
        encaissement_cheque_etranger: "",
        virement_recu: "",
        virement_emis: "",
        exportation_domiciliation: "",
        importation_domiciliation: "",
        transfert_libre_prelevement_compte_dinars: "",
        transfert_libre_prelevement_compte_devise: ""
    })

    const [financement_externe_pro , set_financement_externe_pro] = useState<financement_externe>({
        encaissement_cheque_etranger: "",
        virement_recu: "",
        virement_emis: "",
        exportation_domiciliation: "",
        importation_domiciliation: "",
        transfert_libre_prelevement_compte_dinars: "",
        transfert_libre_prelevement_compte_devise: ""
    })

    const [financement_externe_ent , set_financement_externe_ent] = useState<financement_externe>({
        encaissement_cheque_etranger: "",
        virement_recu: "",
        virement_emis: "",
        exportation_domiciliation: "",
        importation_domiciliation: "",
        transfert_libre_prelevement_compte_dinars: "",
        transfert_libre_prelevement_compte_devise: ""
    })


    const [banque,setBanque] = useState<infosBanque>({
        id_banque : generateRandomID(),
        nom_banque : "", 
        adresse : "",
        num_tel : "",
        num_fax : "",
        adresse_mail : "",
        logo : "",
        site_web : ""
    })
    function handleNomChange(value : string){
        setBanque({
            ...banque,
            nom_banque : value,
        })
    }
    function handleAdresseChange(value : string){
        setBanque({
            ...banque,
            adresse : value,
        })
    }
    function handleNumTelChange(value : string){
        setBanque({
            ...banque,
            num_tel : value,
        })
    }
    function handleNumFaxChange(value : string){
        setBanque({
            ...banque,
            num_fax : value,
        })
    }
    function handleSiteWebChange(value : string){
        setBanque({
            ...banque,
            site_web : value,
        })
    }
    function handleAdresseMailChange(value : string){
        setBanque({
            ...banque,
            adresse_mail : value,
        })
    }
    function handleLogoChange(value : string){
        setBanque({
            ...banque,
            logo : value,
        })
    }

    async function onSubmitPresation(event : React.FormEvent<HTMLFormElement>){
        event.preventDefault();
        const prestationPersonnel : personnel = {
            gestion_de_compte : gestion_de_compte_perso,
            gestion_a_distance : gestion_a_distance_perso,
            option_de_payment : option_de_payment_perso,
            moyens_de_payment : moyens_de_payment_perso,
            prets_et_credits : prets_et_credits_perso,
            placement : placement_perso,
            epargne : epargne_perso,
            coffre_fort : coffre_fort_perso,
            financement_externe : financement_externe_perso,
        } 
        const prestationProfessionnel : professionnel = {
            gestion_de_compte : gestion_de_compte_pro,
            gestion_a_distance : gestion_a_distance_pro,
            option_de_payment : option_de_payment_pro,
            moyens_de_payment : moyens_de_payment_pro,
            prets_et_credits : prets_et_credits_pro,
            placement : placement_pro,
            epargne : epargne_pro,
            coffre_fort : coffre_fort_pro,
            financement_externe : financement_externe_pro,
        }
        const prestationEntreprise : entreprise = {
            gestion_de_compte : gestion_de_compte_ent,
            gestion_a_distance : gestion_a_distance_ent,
            option_de_payment : option_de_payment_ent,
            moyens_de_payment : moyens_de_payment_ent,
            prets_et_credits : prets_et_credits_ent,
            placement : placement_ent,
            epargne : epargne_ent,
            coffre_fort : coffre_fort_ent,
            financement_externe : financement_externe_ent,
        }
        const prestation : prestation = {
            id_banque : banque.id_banque,
            personnel : prestationPersonnel,
            professionnel : prestationProfessionnel,
            entreprise : prestationEntreprise,
        }
        const token = localStorage.getItem('token');
        try {
            console.log("I'm sending this : ",JSON.stringify(banque))
            const response = await axios.post(
                ADMIN_AOUTER_BANQUE_URL,
                JSON.stringify(banque),
                {
                    headers: {
                        "Content-Type": "application/json" ,
                        'Authorization': 'Bearer ' + token,
                    },
                }
            );
            console.log("Ajout banque response : ",response);
            setBanque({
                ...banque,
                id_banque : generateRandomID()
            });
        }catch (error){
            console.log(error);
        }
        try {
            console.log("I'm sending this : ",JSON.stringify(prestation))
            const responsePrestation = await axios.post(
                ADMIN_AJOUTER_PRESTATION_URL,
                JSON.stringify(prestation),
                {
                    headers: {
                        "Content-Type": "application/json" ,
                        'Authorization': 'Bearer ' + token,
                    },
                }
            );
            console.log("Ajout prestation response : ",responsePrestation);

        }catch (error){
            console.log(error);
        }
        finally
        {
            setBanque({
                ...banque,
                id_banque : generateRandomID()
            });
        }
    }
    async function handleBnaqueSubmission(event : React.FormEvent<HTMLFormElement>){
        event.preventDefault();
        const token = localStorage.getItem('token');
        
    }
    return(
        <div className="bg-Gray33">
            <p className="pl-48 text-[84px] font-semibold text-BlueDark">Ajouter une Banque</p>
            <p className="pl-24 text-[48px] font-semibold text-[#000000]">Information Banque :</p>
            {/*Section Infos Banque*/}
            <div className="flex flex-col pl-20 mt-8">
                <form onSubmit={handleBnaqueSubmission}>
                    <label className="text-[30px] font-semibold pl-6">Nom :</label>
                    <div className="bg-white w-[500px] h-[60px] flex items-center rounded-md mt-4 mb-6">
                        <input placeholder=". . . ." required onChange={(e)=>{handleNomChange(e.target.value)}} value={banque.nom_banque} className="bg-[#ffffff] text-[20px] rounded-md w-[470px] font-semibold pl-6"></input>
                    </div>
                    <label className="text-[30px] font-semibold pl-6">Adresse :</label>
                    <div className="bg-white w-[500px] h-[60px] flex items-center rounded-md mt-4 mb-6">
                        <input placeholder="....." required onChange={(e)=>{handleAdresseChange(e.target.value)}} value={banque.adresse} className="bg-[#ffffff] text-[20px] rounded-md w-[470px] font-semibold pl-6"></input>
                    </div>
                    <label className="text-[30px] font-semibold pl-6">Numéro de telephone :</label>
                    <div className="bg-white w-[500px] h-[60px] flex items-center rounded-md mt-4 mb-6">
                        <input placeholder="..." required onChange={(e)=>{handleNumTelChange(e.target.value)}} value={banque.num_tel} className="bg-[#ffffff] text-[20px] rounded-md w-[470px] font-semibold pl-6"></input>
                    </div>
                    <label className="text-[30px] font-semibold pl-6">Numéro FAX :</label>
                    <div className="bg-white w-[500px] h-[60px] flex items-center rounded-md mt-4 mb-6">
                        <input placeholder="..." required onChange={(e)=>{handleNumFaxChange(e.target.value)}} value={banque.num_fax} className="bg-[#ffffff] text-[20px] rounded-md w-[470px] font-semibold pl-6"></input>
                    </div>
                    <label className="text-[30px] font-semibold pl-6">Adresse Mail :</label>
                    <div className="bg-white w-[500px] h-[60px] flex items-center rounded-md mt-4 mb-6">
                        <input placeholder="..." required onChange={(e)=>{handleAdresseMailChange(e.target.value)}} value={banque.adresse_mail} className="bg-[#ffffff] text-[20px] rounded-md w-[470px] font-semibold pl-6"></input>
                    </div>
                    <label className="text-[30px] font-semibold pl-6">Lien du Logo :</label>
                    <div className="bg-white w-[500px] h-[60px] flex items-center rounded-md mt-4 mb-6">
                        <input placeholder="..." required onChange={(e)=>{handleLogoChange(e.target.value)}} value={banque.logo} className="bg-[#ffffff] text-[20px] rounded-md w-[470px] font-semibold pl-6"></input>
                    </div>
                    <label className="text-[30px] font-semibold pl-6">Site web :</label>
                    <div className="bg-white w-[500px] h-[60px] flex items-center rounded-md mt-4 mb-6">
                        <input placeholder="..." required onChange={(e)=>{handleSiteWebChange(e.target.value)}} value={banque.site_web} className="bg-[#ffffff] text-[20px] rounded-md w-[470px] font-semibold pl-6"></input>
                    </div>
                    <button>Submit Banque INFO</button>
                </form>
            </div>
            <p className="pl-24 text-[48px] font-semibold text-[#000000]">Information Prestation :</p>
            <div className="flex flex-col pl-20 mt-8">




                <form onSubmit={onSubmitPresation}>
                {/*GESTION COMPTE*/}

                    <label className="text-[40px] font-semibold pl-6">Gestion de Compte : </label><br />
                    <label className="text-[30px] font-semibold pl-6">Overture de compte courant :</label> <br/>
                    <label className="text-[30px] font-semibold pl-6">Personnel :</label>
                    <div className="bg-white w-[500px] h-[60px] flex items-center rounded-md mt-4 mb-6">
                        <input placeholder=". . . ."  onChange={(e)=>{set_gestion_de_compte_perso({...gestion_de_compte_perso, ouverture_compte_courant : e.target.value})}} value={gestion_de_compte_perso.ouverture_compte_courant} className="bg-[#ffffff] text-[20px] rounded-md w-[470px] font-semibold pl-6"></input>
                    </div>
                    <label className="text-[30px] font-semibold pl-6">Professionnel : </label>
                    <div className="bg-white w-[500px] h-[60px] flex items-center rounded-md mt-4 mb-6">
                        <input placeholder="....."  onChange={(e)=>{set_gestion_de_compte_pro({...gestion_de_compte_pro , ouverture_compte_courant : e.target.value})}} value={gestion_de_compte_pro.ouverture_compte_courant} className="bg-[#ffffff] text-[20px] rounded-md w-[470px] font-semibold pl-6"></input>
                    </div>
                    <label className="text-[30px] font-semibold pl-6">Entreprise :</label>
                    <div className="bg-white w-[500px] h-[60px] flex items-center rounded-md mt-4 mb-6">
                        <input placeholder="..."  onChange={(e)=>{set_gestion_de_compte_ent({...gestion_de_compte_ent , ouverture_compte_courant : e.target.value})}} value={gestion_de_compte_ent.ouverture_compte_courant} className="bg-[#ffffff] text-[20px] rounded-md w-[470px] font-semibold pl-6"></input>
                    </div>





                    <hr/>





                    <label className="text-[30px] font-semibold pl-6">Tenue compte courant :</label> <br/>
                    <label className="text-[30px] font-semibold pl-6">Personnel :</label>
                    <div className="bg-white w-[500px] h-[60px] flex items-center rounded-md mt-4 mb-6">
                        <input placeholder=". . . ."  onChange={(e)=>{set_gestion_de_compte_perso({...gestion_de_compte_perso, tenue_compte_courant : e.target.value})}} value={gestion_de_compte_perso.tenue_compte_courant} className="bg-[#ffffff] text-[20px] rounded-md w-[470px] font-semibold pl-6"></input>
                    </div>
                    <label className="text-[30px] font-semibold pl-6">Professionnel : </label>
                    <div className="bg-white w-[500px] h-[60px] flex items-center rounded-md mt-4 mb-6">
                        <input placeholder="....."  onChange={(e)=>{set_gestion_de_compte_pro({...gestion_de_compte_pro , tenue_compte_courant : e.target.value})}} value={gestion_de_compte_pro.tenue_compte_courant} className="bg-[#ffffff] text-[20px] rounded-md w-[470px] font-semibold pl-6"></input>
                    </div>
                    <label className="text-[30px] font-semibold pl-6">Entreprise :</label>
                    <div className="bg-white w-[500px] h-[60px] flex items-center rounded-md mt-4 mb-6">
                        <input placeholder="..."  onChange={(e)=>{set_gestion_de_compte_ent({...gestion_de_compte_ent , tenue_compte_courant : e.target.value})}} value={gestion_de_compte_ent.tenue_compte_courant} className="bg-[#ffffff] text-[20px] rounded-md w-[470px] font-semibold pl-6"></input>
                    </div>



                    <hr/>



                    <label className="text-[30px] font-semibold pl-6">Ouverture compte cheque :</label> <br/>
                    <label className="text-[30px] font-semibold pl-6">Personnel :</label>
                    <div className="bg-white w-[500px] h-[60px] flex items-center rounded-md mt-4 mb-6">
                        <input placeholder=". . . ."  onChange={(e)=>{set_gestion_de_compte_perso({...gestion_de_compte_perso, ouverture_compte_cheque : e.target.value})}} value={gestion_de_compte_perso.ouverture_compte_cheque} className="bg-[#ffffff] text-[20px] rounded-md w-[470px] font-semibold pl-6"></input>
                    </div>
                    <label className="text-[30px] font-semibold pl-6">Professionnel : </label>
                    <div className="bg-white w-[500px] h-[60px] flex items-center rounded-md mt-4 mb-6">
                        <input placeholder="....."  onChange={(e)=>{set_gestion_de_compte_pro({...gestion_de_compte_pro , ouverture_compte_cheque : e.target.value})}} value={gestion_de_compte_pro.ouverture_compte_cheque} className="bg-[#ffffff] text-[20px] rounded-md w-[470px] font-semibold pl-6"></input>
                    </div>
                    <label className="text-[30px] font-semibold pl-6">Entreprise :</label>
                    <div className="bg-white w-[500px] h-[60px] flex items-center rounded-md mt-4 mb-6">
                        <input placeholder="..."  onChange={(e)=>{set_gestion_de_compte_ent({...gestion_de_compte_ent , ouverture_compte_cheque : e.target.value})}} value={gestion_de_compte_ent.ouverture_compte_cheque} className="bg-[#ffffff] text-[20px] rounded-md w-[470px] font-semibold pl-6"></input>
                    </div>


                    <hr/>




                    <label className="text-[30px] font-semibold pl-6">Tenue compte cheque :</label> <br/>
                    <label className="text-[30px] font-semibold pl-6">Personnel :</label>
                    <div className="bg-white w-[500px] h-[60px] flex items-center rounded-md mt-4 mb-6">
                        <input placeholder=". . . ."  onChange={(e)=>{set_gestion_de_compte_perso({...gestion_de_compte_perso, tenue_compte_cheque : e.target.value})}} value={gestion_de_compte_perso.tenue_compte_cheque} className="bg-[#ffffff] text-[20px] rounded-md w-[470px] font-semibold pl-6"></input>
                    </div>
                    <label className="text-[30px] font-semibold pl-6">Professionnel : </label>
                    <div className="bg-white w-[500px] h-[60px] flex items-center rounded-md mt-4 mb-6">
                        <input placeholder="....."  onChange={(e)=>{set_gestion_de_compte_pro({...gestion_de_compte_pro , tenue_compte_cheque : e.target.value})}} value={gestion_de_compte_pro.tenue_compte_cheque} className="bg-[#ffffff] text-[20px] rounded-md w-[470px] font-semibold pl-6"></input>
                    </div>
                    <label className="text-[30px] font-semibold pl-6">Entreprise :</label>
                    <div className="bg-white w-[500px] h-[60px] flex items-center rounded-md mt-4 mb-6">
                        <input placeholder="..."  onChange={(e)=>{set_gestion_de_compte_ent({...gestion_de_compte_ent , tenue_compte_cheque : e.target.value})}} value={gestion_de_compte_ent.tenue_compte_cheque} className="bg-[#ffffff] text-[20px] rounded-md w-[470px] font-semibold pl-6"></input>
                    </div>



                    <hr/>



                    <label className="text-[30px] font-semibold pl-6">Ouverture compte epargne :</label> <br/>
                    <label className="text-[30px] font-semibold pl-6">Personnel :</label>
                    <div className="bg-white w-[500px] h-[60px] flex items-center rounded-md mt-4 mb-6">
                        <input placeholder=". . . ." required onChange={(e)=>{set_gestion_de_compte_perso({...gestion_de_compte_perso, ouverture_compte_epargne : e.target.value})}} value={gestion_de_compte_perso.ouverture_compte_epargne} className="bg-[#ffffff] text-[20px] rounded-md w-[470px] font-semibold pl-6"></input>
                    </div>
                    <label className="text-[30px] font-semibold pl-6">Professionnel : </label>
                    <div className="bg-white w-[500px] h-[60px] flex items-center rounded-md mt-4 mb-6">
                        <input placeholder="....."  onChange={(e)=>{set_gestion_de_compte_pro({...gestion_de_compte_pro , ouverture_compte_epargne : e.target.value})}} value={gestion_de_compte_pro.ouverture_compte_epargne} className="bg-[#ffffff] text-[20px] rounded-md w-[470px] font-semibold pl-6"></input>
                    </div>
                    <label className="text-[30px] font-semibold pl-6">Entreprise :</label>
                    <div className="bg-white w-[500px] h-[60px] flex items-center rounded-md mt-4 mb-6">
                        <input placeholder="..."  onChange={(e)=>{set_gestion_de_compte_ent({...gestion_de_compte_ent , ouverture_compte_epargne : e.target.value})}} value={gestion_de_compte_ent.ouverture_compte_epargne} className="bg-[#ffffff] text-[20px] rounded-md w-[470px] font-semibold pl-6"></input>
                    </div>


                    <hr/>




                    <label className="text-[30px] font-semibold pl-6">Tenue compte epargne :</label> <br/>
                    <label className="text-[30px] font-semibold pl-6">Personnel :</label>
                    <div className="bg-white w-[500px] h-[60px] flex items-center rounded-md mt-4 mb-6">
                        <input placeholder=". . . ."  onChange={(e)=>{set_gestion_de_compte_perso({...gestion_de_compte_perso, tenue_compte_epargne : e.target.value})}} value={gestion_de_compte_perso.tenue_compte_epargne} className="bg-[#ffffff] text-[20px] rounded-md w-[470px] font-semibold pl-6"></input>
                    </div>
                    <label className="text-[30px] font-semibold pl-6">Professionnel : </label>
                    <div className="bg-white w-[500px] h-[60px] flex items-center rounded-md mt-4 mb-6">
                        <input placeholder="....."  onChange={(e)=>{set_gestion_de_compte_pro({...gestion_de_compte_pro , tenue_compte_epargne : e.target.value})}} value={gestion_de_compte_pro.tenue_compte_epargne} className="bg-[#ffffff] text-[20px] rounded-md w-[470px] font-semibold pl-6"></input>
                    </div>
                    <label className="text-[30px] font-semibold pl-6">Entreprise :</label>
                    <div className="bg-white w-[500px] h-[60px] flex items-center rounded-md mt-4 mb-6">
                        <input placeholder="..."  onChange={(e)=>{set_gestion_de_compte_ent({...gestion_de_compte_ent , tenue_compte_epargne : e.target.value})}} value={gestion_de_compte_ent.tenue_compte_epargne} className="bg-[#ffffff] text-[20px] rounded-md w-[470px] font-semibold pl-6"></input>
                    </div>


                    <hr/>




                    <label className="text-[30px] font-semibold pl-6">Overture compte devise :</label> <br/>
                    <label className="text-[30px] font-semibold pl-6">Personnel :</label>
                    <div className="bg-white w-[500px] h-[60px] flex items-center rounded-md mt-4 mb-6">
                        <input placeholder=". . . ."  onChange={(e)=>{set_gestion_de_compte_perso({...gestion_de_compte_perso, ouverture_compte_devise : e.target.value})}} value={gestion_de_compte_perso.ouverture_compte_devise} className="bg-[#ffffff] text-[20px] rounded-md w-[470px] font-semibold pl-6"></input>
                    </div>
                    <label className="text-[30px] font-semibold pl-6">Professionnel : </label>
                    <div className="bg-white w-[500px] h-[60px] flex items-center rounded-md mt-4 mb-6">
                        <input placeholder="....."  onChange={(e)=>{set_gestion_de_compte_pro({...gestion_de_compte_pro , ouverture_compte_devise : e.target.value})}} value={gestion_de_compte_pro.ouverture_compte_devise} className="bg-[#ffffff] text-[20px] rounded-md w-[470px] font-semibold pl-6"></input>
                    </div>
                    <label className="text-[30px] font-semibold pl-6">Entreprise :</label>
                    <div className="bg-white w-[500px] h-[60px] flex items-center rounded-md mt-4 mb-6">
                        <input placeholder="..."  onChange={(e)=>{set_gestion_de_compte_ent({...gestion_de_compte_ent , ouverture_compte_devise : e.target.value})}} value={gestion_de_compte_ent.ouverture_compte_devise} className="bg-[#ffffff] text-[20px] rounded-md w-[470px] font-semibold pl-6"></input>
                    </div>


                    <hr/>





                    <label className="text-[30px] font-semibold pl-6">Tenue compte devise :</label> <br/>
                    <label className="text-[30px] font-semibold pl-6">Personnel :</label>
                    <div className="bg-white w-[500px] h-[60px] flex items-center rounded-md mt-4 mb-6">
                        <input placeholder=". . . ."  onChange={(e)=>{set_gestion_de_compte_perso({...gestion_de_compte_perso, tenue_compte_devise : e.target.value})}} value={gestion_de_compte_perso.tenue_compte_devise} className="bg-[#ffffff] text-[20px] rounded-md w-[470px] font-semibold pl-6"></input>
                    </div>
                    <label className="text-[30px] font-semibold pl-6">Professionnel : </label>
                    <div className="bg-white w-[500px] h-[60px] flex items-center rounded-md mt-4 mb-6">
                        <input placeholder="....."  onChange={(e)=>{set_gestion_de_compte_pro({...gestion_de_compte_pro , tenue_compte_devise : e.target.value})}} value={gestion_de_compte_pro.tenue_compte_devise} className="bg-[#ffffff] text-[20px] rounded-md w-[470px] font-semibold pl-6"></input>
                    </div>
                    <label className="text-[30px] font-semibold pl-6">Entreprise :</label>
                    <div className="bg-white w-[500px] h-[60px] flex items-center rounded-md mt-4 mb-6">
                        <input placeholder="..."  onChange={(e)=>{set_gestion_de_compte_ent({...gestion_de_compte_ent , tenue_compte_devise : e.target.value})}} value={gestion_de_compte_ent.tenue_compte_devise} className="bg-[#ffffff] text-[20px] rounded-md w-[470px] font-semibold pl-6"></input>
                    </div>



                    <hr/>



                    <label className="text-[30px] font-semibold pl-6">Fermeture de compte :</label> <br/>
                    <label className="text-[30px] font-semibold pl-6">Personnel :</label>
                    <div className="bg-white w-[500px] h-[60px] flex items-center rounded-md mt-4 mb-6">
                        <input placeholder=". . . ."  onChange={(e)=>{set_gestion_de_compte_perso({...gestion_de_compte_perso, fermeture_de_compte : e.target.value})}} value={gestion_de_compte_perso.fermeture_de_compte} className="bg-[#ffffff] text-[20px] rounded-md w-[470px] font-semibold pl-6"></input>
                    </div>
                    <label className="text-[30px] font-semibold pl-6">Professionnel : </label>
                    <div className="bg-white w-[500px] h-[60px] flex items-center rounded-md mt-4 mb-6">
                        <input placeholder="....."  onChange={(e)=>{set_gestion_de_compte_pro({...gestion_de_compte_pro , fermeture_de_compte : e.target.value})}} value={gestion_de_compte_pro.fermeture_de_compte} className="bg-[#ffffff] text-[20px] rounded-md w-[470px] font-semibold pl-6"></input>
                    </div>
                    <label className="text-[30px] font-semibold pl-6">Entreprise :</label>
                    <div className="bg-white w-[500px] h-[60px] flex items-center rounded-md mt-4 mb-6">
                        <input placeholder="..."  onChange={(e)=>{set_gestion_de_compte_ent({...gestion_de_compte_ent , fermeture_de_compte : e.target.value})}} value={gestion_de_compte_ent.fermeture_de_compte} className="bg-[#ffffff] text-[20px] rounded-md w-[470px] font-semibold pl-6"></input>
                    </div>



                    {/*E BANKING-------------------------------++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++--------------------*/}



                    <label className="text-[40px] font-semibold pl-6">Gestion a distance : </label><br />
                    <label className="text-[30px] font-semibold pl-6">E-Banking abonnement :</label> <br/>
                    <label className="text-[30px] font-semibold pl-6">Personnel :</label>
                    <div className="bg-white w-[500px] h-[60px] flex items-center rounded-md mt-4 mb-6">
                        <input placeholder=". . . ."  onChange={(e)=>{set_gestion_a_distance_perso({...gestion_a_distance_perso ,e_banking_abonnement : e.target.value})}} value={gestion_a_distance_perso.e_banking_abonnement} className="bg-[#ffffff] text-[20px] rounded-md w-[470px] font-semibold pl-6"></input>
                    </div>
                    <label className="text-[30px] font-semibold pl-6">Professionnel : </label>
                    <div className="bg-white w-[500px] h-[60px] flex items-center rounded-md mt-4 mb-6">
                        <input placeholder="....."  onChange={(e)=>{set_gestion_a_distance_pro({...gestion_a_distance_pro ,e_banking_abonnement : e.target.value})}} value={gestion_a_distance_pro.e_banking_abonnement} className="bg-[#ffffff] text-[20px] rounded-md w-[470px] font-semibold pl-6"></input>
                    </div>
                    <label className="text-[30px] font-semibold pl-6">Entreprise :</label>
                    <div className="bg-white w-[500px] h-[60px] flex items-center rounded-md mt-4 mb-6">
                        <input placeholder="..."  onChange={(e)=>{set_gestion_a_distance_ent({...gestion_a_distance_ent,e_banking_abonnement : e.target.value})}} value={gestion_a_distance_ent.e_banking_abonnement} className="bg-[#ffffff] text-[20px] rounded-md w-[470px] font-semibold pl-6"></input>
                    </div>





                    <hr/>





                    <label className="text-[30px] font-semibold pl-6">E-Banking consultation solde :</label> <br/>
                    <label className="text-[30px] font-semibold pl-6">Personnel :</label>
                    <div className="bg-white w-[500px] h-[60px] flex items-center rounded-md mt-4 mb-6">
                        <input placeholder=". . . ."  onChange={(e)=>{set_gestion_a_distance_perso({...gestion_a_distance_perso ,e_banking_consultation_solde : e.target.value})}} value={gestion_a_distance_perso.e_banking_consultation_solde} className="bg-[#ffffff] text-[20px] rounded-md w-[470px] font-semibold pl-6"></input>
                    </div>
                    <label className="text-[30px] font-semibold pl-6">Professionnel : </label>
                    <div className="bg-white w-[500px] h-[60px] flex items-center rounded-md mt-4 mb-6">
                        <input placeholder="....."  onChange={(e)=>{set_gestion_a_distance_pro({...gestion_a_distance_pro ,e_banking_consultation_solde : e.target.value})}} value={gestion_a_distance_pro.e_banking_consultation_solde} className="bg-[#ffffff] text-[20px] rounded-md w-[470px] font-semibold pl-6"></input>
                    </div>
                    <label className="text-[30px] font-semibold pl-6">Entreprise :</label>
                    <div className="bg-white w-[500px] h-[60px] flex items-center rounded-md mt-4 mb-6">
                        <input placeholder="..."  onChange={(e)=>{set_gestion_a_distance_ent({...gestion_a_distance_ent,e_banking_consultation_solde : e.target.value})}} value={gestion_a_distance_ent.e_banking_consultation_solde} className="bg-[#ffffff] text-[20px] rounded-md w-[470px] font-semibold pl-6"></input>
                    </div>



                    <hr/>



                    <label className="text-[30px] font-semibold pl-6">E-Banking virement:</label> <br/>
                    <label className="text-[30px] font-semibold pl-6">Personnel :</label>
                    <div className="bg-white w-[500px] h-[60px] flex items-center rounded-md mt-4 mb-6">
                        <input placeholder=". . . ."  onChange={(e)=>{set_gestion_a_distance_perso({...gestion_a_distance_perso ,e_banking_virement : e.target.value})}} value={gestion_a_distance_perso.e_banking_virement} className="bg-[#ffffff] text-[20px] rounded-md w-[470px] font-semibold pl-6"></input>
                    </div>
                    <label className="text-[30px] font-semibold pl-6">Professionnel : </label>
                    <div className="bg-white w-[500px] h-[60px] flex items-center rounded-md mt-4 mb-6">
                        <input placeholder="....."  onChange={(e)=>{set_gestion_a_distance_pro({...gestion_a_distance_pro ,e_banking_virement : e.target.value})}} value={gestion_a_distance_pro.e_banking_virement} className="bg-[#ffffff] text-[20px] rounded-md w-[470px] font-semibold pl-6"></input>
                    </div>
                    <label className="text-[30px] font-semibold pl-6">Entreprise :</label>
                    <div className="bg-white w-[500px] h-[60px] flex items-center rounded-md mt-4 mb-6">
                        <input placeholder="..."  onChange={(e)=>{set_gestion_a_distance_ent({...gestion_a_distance_ent,e_banking_virement : e.target.value})}} value={gestion_a_distance_ent.e_banking_virement} className="bg-[#ffffff] text-[20px] rounded-md w-[470px] font-semibold pl-6"></input>
                    </div>


                    <hr/>




                    <label className="text-[30px] font-semibold pl-6">E-Banking paiment:</label> <br/>
                    <label className="text-[30px] font-semibold pl-6">Personnel :</label>
                    <div className="bg-white w-[500px] h-[60px] flex items-center rounded-md mt-4 mb-6">
                        <input placeholder=". . . ."  onChange={(e)=>{set_gestion_a_distance_perso({...gestion_a_distance_perso ,e_banking_paiment : e.target.value})}} value={gestion_a_distance_perso.e_banking_paiment} className="bg-[#ffffff] text-[20px] rounded-md w-[470px] font-semibold pl-6"></input>
                    </div>
                    <label className="text-[30px] font-semibold pl-6">Professionnel : </label>
                    <div className="bg-white w-[500px] h-[60px] flex items-center rounded-md mt-4 mb-6">
                        <input placeholder="....."  onChange={(e)=>{set_gestion_a_distance_pro({...gestion_a_distance_pro ,e_banking_paiment : e.target.value})}} value={gestion_a_distance_pro.e_banking_paiment} className="bg-[#ffffff] text-[20px] rounded-md w-[470px] font-semibold pl-6"></input>
                    </div>
                    <label className="text-[30px] font-semibold pl-6">Entreprise :</label>
                    <div className="bg-white w-[500px] h-[60px] flex items-center rounded-md mt-4 mb-6">
                        <input placeholder="..."  onChange={(e)=>{set_gestion_a_distance_ent({...gestion_a_distance_ent,e_banking_paiment : e.target.value})}} value={gestion_a_distance_ent.e_banking_paiment} className="bg-[#ffffff] text-[20px] rounded-md w-[470px] font-semibold pl-6"></input>
                    </div>



                    <hr/>



                    <label className="text-[30px] font-semibold pl-6">SMS Banking abonnement :</label> <br/>
                    <label className="text-[30px] font-semibold pl-6">Personnel :</label>
                    <div className="bg-white w-[500px] h-[60px] flex items-center rounded-md mt-4 mb-6">
                        <input placeholder=". . . ."  onChange={(e)=>{set_gestion_a_distance_perso({...gestion_a_distance_perso ,sms_banking_abonnement : e.target.value})}} value={gestion_a_distance_perso.sms_banking_abonnement} className="bg-[#ffffff] text-[20px] rounded-md w-[470px] font-semibold pl-6"></input>
                    </div>
                    <label className="text-[30px] font-semibold pl-6">Professionnel : </label>
                    <div className="bg-white w-[500px] h-[60px] flex items-center rounded-md mt-4 mb-6">
                        <input placeholder="....."  onChange={(e)=>{set_gestion_a_distance_pro({...gestion_a_distance_pro ,sms_banking_abonnement : e.target.value})}} value={gestion_a_distance_pro.sms_banking_abonnement} className="bg-[#ffffff] text-[20px] rounded-md w-[470px] font-semibold pl-6"></input>
                    </div>
                    <label className="text-[30px] font-semibold pl-6">Entreprise :</label>
                    <div className="bg-white w-[500px] h-[60px] flex items-center rounded-md mt-4 mb-6">
                        <input placeholder="..."  onChange={(e)=>{set_gestion_a_distance_ent({...gestion_a_distance_ent,sms_banking_abonnement : e.target.value})}} value={gestion_a_distance_ent.sms_banking_abonnement} className="bg-[#ffffff] text-[20px] rounded-md w-[470px] font-semibold pl-6"></input>
                    </div>


                    <hr/>




                    <label className="text-[30px] font-semibold pl-6">SMS Banking virement en agence :</label> <br/>
                    <label className="text-[30px] font-semibold pl-6">Personnel :</label>
                    <div className="bg-white w-[500px] h-[60px] flex items-center rounded-md mt-4 mb-6">
                        <input placeholder=". . . ."  onChange={(e)=>{set_gestion_a_distance_perso({...gestion_a_distance_perso ,sms_banking_virement_en_agence : e.target.value})}} value={gestion_a_distance_perso.sms_banking_virement_en_agence} className="bg-[#ffffff] text-[20px] rounded-md w-[470px] font-semibold pl-6"></input>
                    </div>
                    <label className="text-[30px] font-semibold pl-6">Professionnel : </label>
                    <div className="bg-white w-[500px] h-[60px] flex items-center rounded-md mt-4 mb-6">
                        <input placeholder="....."  onChange={(e)=>{set_gestion_a_distance_pro({...gestion_a_distance_pro ,sms_banking_virement_en_agence : e.target.value})}} value={gestion_a_distance_pro.sms_banking_virement_en_agence} className="bg-[#ffffff] text-[20px] rounded-md w-[470px] font-semibold pl-6"></input>
                    </div>
                    <label className="text-[30px] font-semibold pl-6">Entreprise :</label>
                    <div className="bg-white w-[500px] h-[60px] flex items-center rounded-md mt-4 mb-6">
                        <input placeholder="..."  onChange={(e)=>{set_gestion_a_distance_ent({...gestion_a_distance_ent,sms_banking_virement_en_agence : e.target.value})}} value={gestion_a_distance_ent.sms_banking_virement_en_agence} className="bg-[#ffffff] text-[20px] rounded-md w-[470px] font-semibold pl-6"></input>
                    </div>


                    <hr/>




                    <label className="text-[30px] font-semibold pl-6">SMS Banking virement hors agence :</label> <br/>
                    <label className="text-[30px] font-semibold pl-6">Personnel :</label>
                    <div className="bg-white w-[500px] h-[60px] flex items-center rounded-md mt-4 mb-6">
                        <input placeholder=". . . ."  onChange={(e)=>{set_gestion_a_distance_perso({...gestion_a_distance_perso , sms_banking_virement_hors_agence : e.target.value})}} value={gestion_a_distance_perso.sms_banking_virement_hors_agence} className="bg-[#ffffff] text-[20px] rounded-md w-[470px] font-semibold pl-6"></input>
                    </div>
                    <label className="text-[30px] font-semibold pl-6">Professionnel : </label>
                    <div className="bg-white w-[500px] h-[60px] flex items-center rounded-md mt-4 mb-6">
                        <input placeholder="....."  onChange={(e)=>{set_gestion_a_distance_pro({...gestion_a_distance_pro ,sms_banking_virement_hors_agence : e.target.value})}} value={gestion_a_distance_pro.sms_banking_virement_hors_agence} className="bg-[#ffffff] text-[20px] rounded-md w-[470px] font-semibold pl-6"></input>
                    </div>
                    <label className="text-[30px] font-semibold pl-6">Entreprise :</label>
                    <div className="bg-white w-[500px] h-[60px] flex items-center rounded-md mt-4 mb-6">
                        <input placeholder="..."  onChange={(e)=>{set_gestion_a_distance_ent({...gestion_a_distance_ent,sms_banking_virement_hors_agence : e.target.value})}} value={gestion_a_distance_ent.sms_banking_virement_hors_agence} className="bg-[#ffffff] text-[20px] rounded-md w-[470px] font-semibold pl-6"></input>
                    </div>




                    <hr/>





                    <label className="text-[30px] font-semibold pl-6">Service Contact :</label> <br/>
                    <label className="text-[30px] font-semibold pl-6">Personnel :</label>
                    <div className="bg-white w-[500px] h-[60px] flex items-center rounded-md mt-4 mb-6">
                        <input placeholder=". . . ."  onChange={(e)=>{set_gestion_a_distance_perso({...gestion_a_distance_perso ,service_contact : e.target.value})}} value={gestion_a_distance_perso.service_contact} className="bg-[#ffffff] text-[20px] rounded-md w-[470px] font-semibold pl-6"></input>
                    </div>
                    <label className="text-[30px] font-semibold pl-6">Professionnel : </label>
                    <div className="bg-white w-[500px] h-[60px] flex items-center rounded-md mt-4 mb-6">
                        <input placeholder="....."  onChange={(e)=>{set_gestion_a_distance_pro({...gestion_a_distance_pro ,service_contact : e.target.value})}} value={gestion_a_distance_pro.service_contact} className="bg-[#ffffff] text-[20px] rounded-md w-[470px] font-semibold pl-6"></input>
                    </div>
                    <label className="text-[30px] font-semibold pl-6">Entreprise :</label>
                    <div className="bg-white w-[500px] h-[60px] flex items-center rounded-md mt-4 mb-6">
                        <input placeholder="..."  onChange={(e)=>{set_gestion_a_distance_ent({...gestion_a_distance_ent, service_contact : e.target.value})}} value={gestion_a_distance_ent.service_contact} className="bg-[#ffffff] text-[20px] rounded-md w-[470px] font-semibold pl-6"></input>
                    </div>







                    {/*OPTION DE PAIMENT ++++++++++++++++++++++++++++++++++++------------------------------------------------------++++++++++++++++++++++++++++++++++++++++++++++ */}

                    <label className="text-[40px] font-semibold pl-6">Option de paiment : </label><br />
                    <label className="text-[30px] font-semibold pl-6">Verssement en agence :</label> <br/>
                    <label className="text-[30px] font-semibold pl-6">Personnel :</label>
                    <div className="bg-white w-[500px] h-[60px] flex items-center rounded-md mt-4 mb-6">
                        <input placeholder=". . . ."  onChange={(e)=>{set_option_de_payment_perso({...option_de_payment_perso ,versement_en_agence : e.target.value})}} value={option_de_payment_perso.versement_en_agence} className="bg-[#ffffff] text-[20px] rounded-md w-[470px] font-semibold pl-6"></input>
                    </div>
                    <label className="text-[30px] font-semibold pl-6">Professionnel : </label>
                    <div className="bg-white w-[500px] h-[60px] flex items-center rounded-md mt-4 mb-6">
                        <input placeholder="....."  onChange={(e)=>{set_option_de_payment_pro({...option_de_payment_pro , versement_en_agence : e.target.value})}} value={option_de_payment_pro.versement_en_agence} className="bg-[#ffffff] text-[20px] rounded-md w-[470px] font-semibold pl-6"></input>
                    </div>
                    <label className="text-[30px] font-semibold pl-6">Entreprise :</label>
                    <div className="bg-white w-[500px] h-[60px] flex items-center rounded-md mt-4 mb-6">
                        <input placeholder="..."  onChange={(e)=>{set_option_de_payment_ent({...option_de_payment_ent, versement_en_agence : e.target.value})}} value={option_de_payment_ent.versement_en_agence} className="bg-[#ffffff] text-[20px] rounded-md w-[470px] font-semibold pl-6"></input>
                    </div>





                    <hr/>





                    <label className="text-[30px] font-semibold pl-6">Verssement hors agence :</label> <br/>
                    <label className="text-[30px] font-semibold pl-6">Personnel :</label>
                    <div className="bg-white w-[500px] h-[60px] flex items-center rounded-md mt-4 mb-6">
                        <input placeholder=". . . ."  onChange={(e)=>{set_option_de_payment_perso({...option_de_payment_perso ,versement_hors_agence : e.target.value})}} value={option_de_payment_perso.versement_hors_agence} className="bg-[#ffffff] text-[20px] rounded-md w-[470px] font-semibold pl-6"></input>
                    </div>
                    <label className="text-[30px] font-semibold pl-6">Professionnel : </label>
                    <div className="bg-white w-[500px] h-[60px] flex items-center rounded-md mt-4 mb-6">
                        <input placeholder="....."  onChange={(e)=>{set_option_de_payment_pro({...option_de_payment_pro , versement_hors_agence : e.target.value})}} value={option_de_payment_pro.versement_hors_agence} className="bg-[#ffffff] text-[20px] rounded-md w-[470px] font-semibold pl-6"></input>
                    </div>
                    <label className="text-[30px] font-semibold pl-6">Entreprise :</label>
                    <div className="bg-white w-[500px] h-[60px] flex items-center rounded-md mt-4 mb-6">
                        <input placeholder="..."  onChange={(e)=>{set_option_de_payment_ent({...option_de_payment_ent, versement_hors_agence : e.target.value})}} value={option_de_payment_ent.versement_hors_agence} className="bg-[#ffffff] text-[20px] rounded-md w-[470px] font-semibold pl-6"></input>
                    </div>



                    <hr/>



                    <label className="text-[30px] font-semibold pl-6">Virement en agence :</label> <br/>
                    <label className="text-[30px] font-semibold pl-6">Personnel :</label>
                    <div className="bg-white w-[500px] h-[60px] flex items-center rounded-md mt-4 mb-6">
                        <input placeholder=". . . ."  onChange={(e)=>{set_option_de_payment_perso({...option_de_payment_perso ,virement_en_agence : e.target.value})}} value={option_de_payment_perso.virement_en_agence} className="bg-[#ffffff] text-[20px] rounded-md w-[470px] font-semibold pl-6"></input>
                    </div>
                    <label className="text-[30px] font-semibold pl-6">Professionnel : </label>
                    <div className="bg-white w-[500px] h-[60px] flex items-center rounded-md mt-4 mb-6">
                        <input placeholder="....."  onChange={(e)=>{set_option_de_payment_pro({...option_de_payment_pro , virement_en_agence : e.target.value})}} value={option_de_payment_pro.virement_en_agence} className="bg-[#ffffff] text-[20px] rounded-md w-[470px] font-semibold pl-6"></input>
                    </div>
                    <label className="text-[30px] font-semibold pl-6">Entreprise :</label>
                    <div className="bg-white w-[500px] h-[60px] flex items-center rounded-md mt-4 mb-6">
                        <input placeholder="..."  onChange={(e)=>{set_option_de_payment_ent({...option_de_payment_ent, virement_en_agence : e.target.value})}} value={option_de_payment_ent.virement_en_agence} className="bg-[#ffffff] text-[20px] rounded-md w-[470px] font-semibold pl-6"></input>
                    </div>


                    <hr/>




                    <label className="text-[30px] font-semibold pl-6">Virement hors agence :</label> <br/>
                    <label className="text-[30px] font-semibold pl-6">Personnel :</label>
                    <div className="bg-white w-[500px] h-[60px] flex items-center rounded-md mt-4 mb-6">
                        <input placeholder=". . . ."  onChange={(e)=>{set_option_de_payment_perso({...option_de_payment_perso ,virement_hors_agence : e.target.value})}} value={option_de_payment_perso.virement_hors_agence} className="bg-[#ffffff] text-[20px] rounded-md w-[470px] font-semibold pl-6"></input>
                    </div>
                    <label className="text-[30px] font-semibold pl-6">Professionnel : </label>
                    <div className="bg-white w-[500px] h-[60px] flex items-center rounded-md mt-4 mb-6">
                        <input placeholder="....."  onChange={(e)=>{set_option_de_payment_pro({...option_de_payment_pro , virement_hors_agence : e.target.value})}} value={option_de_payment_pro.virement_hors_agence} className="bg-[#ffffff] text-[20px] rounded-md w-[470px] font-semibold pl-6"></input>
                    </div>
                    <label className="text-[30px] font-semibold pl-6">Entreprise :</label>
                    <div className="bg-white w-[500px] h-[60px] flex items-center rounded-md mt-4 mb-6">
                        <input placeholder="..."  onChange={(e)=>{set_option_de_payment_ent({...option_de_payment_ent, virement_hors_agence : e.target.value})}} value={option_de_payment_ent.virement_hors_agence} className="bg-[#ffffff] text-[20px] rounded-md w-[470px] font-semibold pl-6"></input>
                    </div>



                    <hr/>



                    <label className="text-[30px] font-semibold pl-6">Prelevement en agence :</label> <br/>
                    <label className="text-[30px] font-semibold pl-6">Personnel :</label>
                    <div className="bg-white w-[500px] h-[60px] flex items-center rounded-md mt-4 mb-6">
                        <input placeholder=". . . ."  onChange={(e)=>{set_option_de_payment_perso({...option_de_payment_perso ,prelevement_en_agence : e.target.value})} }value={option_de_payment_perso.prelevement_en_agence} className="bg-[#ffffff] text-[20px] rounded-md w-[470px] font-semibold pl-6"></input>
                    </div>
                    <label className="text-[30px] font-semibold pl-6">Professionnel : </label>
                    <div className="bg-white w-[500px] h-[60px] flex items-center rounded-md mt-4 mb-6">
                        <input placeholder="....."  onChange={(e)=>{set_option_de_payment_pro({...option_de_payment_pro , prelevement_en_agence : e.target.value})}} value={option_de_payment_pro.prelevement_en_agence} className="bg-[#ffffff] text-[20px] rounded-md w-[470px] font-semibold pl-6"></input>
                    </div>
                    <label className="text-[30px] font-semibold pl-6">Entreprise :</label>
                    <div className="bg-white w-[500px] h-[60px] flex items-center rounded-md mt-4 mb-6">
                        <input placeholder="..."  onChange={(e)=>{set_option_de_payment_ent({...option_de_payment_ent, prelevement_en_agence : e.target.value})}} value={option_de_payment_ent.prelevement_en_agence} className="bg-[#ffffff] text-[20px] rounded-md w-[470px] font-semibold pl-6"></input>
                    </div>


                    <hr/>




                    <label className="text-[30px] font-semibold pl-6">Prelevement hors agence :</label> <br/>
                    <label className="text-[30px] font-semibold pl-6">Personnel :</label>
                    <div className="bg-white w-[500px] h-[60px] flex items-center rounded-md mt-4 mb-6">
                        <input placeholder=". . . ."  onChange={(e)=>{set_option_de_payment_perso({...option_de_payment_perso ,prelevement_hors_agence : e.target.value})}} value={option_de_payment_perso.prelevement_hors_agence} className="bg-[#ffffff] text-[20px] rounded-md w-[470px] font-semibold pl-6"></input>
                    </div>
                    <label className="text-[30px] font-semibold pl-6">Professionnel : </label>
                    <div className="bg-white w-[500px] h-[60px] flex items-center rounded-md mt-4 mb-6">
                        <input placeholder="....."  onChange={(e)=>{set_option_de_payment_pro({...option_de_payment_pro , prelevement_hors_agence : e.target.value})}} value={option_de_payment_pro.prelevement_hors_agence} className="bg-[#ffffff] text-[20px] rounded-md w-[470px] font-semibold pl-6"></input>
                    </div>
                    <label className="text-[30px] font-semibold pl-6">Entreprise :</label>
                    <div className="bg-white w-[500px] h-[60px] flex items-center rounded-md mt-4 mb-6">
                        <input placeholder="..."  onChange={(e)=>{set_option_de_payment_ent({...option_de_payment_ent, prelevement_hors_agence : e.target.value})}} value={option_de_payment_ent.prelevement_hors_agence} className="bg-[#ffffff] text-[20px] rounded-md w-[470px] font-semibold pl-6"></input>
                    </div>


                    <hr/>




                    <label className="text-[30px] font-semibold pl-6">Retrait en agence :</label> <br/>
                    <label className="text-[30px] font-semibold pl-6">Personnel :</label>
                    <div className="bg-white w-[500px] h-[60px] flex items-center rounded-md mt-4 mb-6">
                        <input placeholder=". . . ."  onChange={(e)=>{set_option_de_payment_perso({...option_de_payment_perso ,retraits_en_agence : e.target.value})}} value={option_de_payment_perso.retraits_en_agence} className="bg-[#ffffff] text-[20px] rounded-md w-[470px] font-semibold pl-6"></input>
                    </div>
                    <label className="text-[30px] font-semibold pl-6">Professionnel : </label>
                    <div className="bg-white w-[500px] h-[60px] flex items-center rounded-md mt-4 mb-6">
                        <input placeholder="....."  onChange={(e)=>{set_option_de_payment_pro({...option_de_payment_pro , retraits_en_agence : e.target.value})}} value={option_de_payment_pro.retraits_en_agence} className="bg-[#ffffff] text-[20px] rounded-md w-[470px] font-semibold pl-6"></input>
                    </div>
                    <label className="text-[30px] font-semibold pl-6">Entreprise :</label>
                    <div className="bg-white w-[500px] h-[60px] flex items-center rounded-md mt-4 mb-6">
                        <input placeholder="..."  onChange={(e)=>{set_option_de_payment_ent({...option_de_payment_ent, retraits_en_agence : e.target.value})}} value={option_de_payment_ent.retraits_en_agence} className="bg-[#ffffff] text-[20px] rounded-md w-[470px] font-semibold pl-6"></input>
                    </div>




                    <hr/>





                    <label className="text-[30px] font-semibold pl-6">Retrait hors agence :</label> <br/>
                    <label className="text-[30px] font-semibold pl-6">Personnel :</label>
                    <div className="bg-white w-[500px] h-[60px] flex items-center rounded-md mt-4 mb-6">
                        <input placeholder=". . . ."  onChange={(e)=>{set_option_de_payment_perso({...option_de_payment_perso ,retraits_hors_agence : e.target.value})}} value={option_de_payment_perso.retraits_hors_agence} className="bg-[#ffffff] text-[20px] rounded-md w-[470px] font-semibold pl-6"></input>
                    </div>
                    <label className="text-[30px] font-semibold pl-6">Professionnel : </label>
                    <div className="bg-white w-[500px] h-[60px] flex items-center rounded-md mt-4 mb-6">
                        <input placeholder="....."  onChange={(e)=>{set_option_de_payment_pro({...option_de_payment_pro , retraits_hors_agence : e.target.value})}} value={option_de_payment_pro.retraits_hors_agence} className="bg-[#ffffff] text-[20px] rounded-md w-[470px] font-semibold pl-6"></input>
                    </div>
                    <label className="text-[30px] font-semibold pl-6">Entreprise :</label>
                    <div className="bg-white w-[500px] h-[60px] flex items-center rounded-md mt-4 mb-6">
                        <input placeholder="..."  onChange={(e)=>{set_option_de_payment_ent({...option_de_payment_ent, retraits_hors_agence : e.target.value})}} value={option_de_payment_ent.retraits_hors_agence} className="bg-[#ffffff] text-[20px] rounded-md w-[470px] font-semibold pl-6"></input>
                    </div>




                                        <hr/>




                    <label className="text-[30px] font-semibold pl-6">Paiment cheque en agence :</label> <br/>
                    <label className="text-[30px] font-semibold pl-6">Personnel :</label>
                    <div className="bg-white w-[500px] h-[60px] flex items-center rounded-md mt-4 mb-6">
                        <input placeholder=". . . ."  onChange={(e)=>{set_option_de_payment_perso({...option_de_payment_perso ,payment_cheque_en_agence : e.target.value})}} value={option_de_payment_perso.payment_cheque_en_agence} className="bg-[#ffffff] text-[20px] rounded-md w-[470px] font-semibold pl-6"></input>
                    </div>
                    <label className="text-[30px] font-semibold pl-6">Professionnel : </label>
                    <div className="bg-white w-[500px] h-[60px] flex items-center rounded-md mt-4 mb-6">
                        <input placeholder="....."  onChange={(e)=>{set_option_de_payment_pro({...option_de_payment_pro , payment_cheque_en_agence : e.target.value})}} value={option_de_payment_pro.payment_cheque_en_agence} className="bg-[#ffffff] text-[20px] rounded-md w-[470px] font-semibold pl-6"></input>
                    </div>
                    <label className="text-[30px] font-semibold pl-6">Entreprise :</label>
                    <div className="bg-white w-[500px] h-[60px] flex items-center rounded-md mt-4 mb-6">
                        <input placeholder="..."  onChange={(e)=>{set_option_de_payment_ent({...option_de_payment_ent, payment_cheque_en_agence : e.target.value})}} value={option_de_payment_ent.payment_cheque_en_agence} className="bg-[#ffffff] text-[20px] rounded-md w-[470px] font-semibold pl-6"></input>
                    </div>



                    <hr/>



                    <label className="text-[30px] font-semibold pl-6">Paiment cheque hors agence :</label> <br/>
                    <label className="text-[30px] font-semibold pl-6">Personnel :</label>
                    <div className="bg-white w-[500px] h-[60px] flex items-center rounded-md mt-4 mb-6">
                        <input placeholder=". . . ." onChange={(e)=>{set_option_de_payment_perso({...option_de_payment_perso ,payment_cheque_hors_agence : e.target.value})}} value={option_de_payment_perso.payment_cheque_hors_agence} className="bg-[#ffffff] text-[20px] rounded-md w-[470px] font-semibold pl-6"></input>
                    </div>
                    <label className="text-[30px] font-semibold pl-6">Professionnel : </label>
                    <div className="bg-white w-[500px] h-[60px] flex items-center rounded-md mt-4 mb-6">
                        <input placeholder="....."  onChange={(e)=>{set_option_de_payment_pro({...option_de_payment_pro , payment_cheque_hors_agence : e.target.value})}} value={option_de_payment_pro.payment_cheque_hors_agence} className="bg-[#ffffff] text-[20px] rounded-md w-[470px] font-semibold pl-6"></input>
                    </div>
                    <label className="text-[30px] font-semibold pl-6">Entreprise :</label>
                    <div className="bg-white w-[500px] h-[60px] flex items-center rounded-md mt-4 mb-6">
                        <input placeholder="..."  onChange={(e)=>{set_option_de_payment_ent({...option_de_payment_ent, payment_cheque_hors_agence : e.target.value})}} value={option_de_payment_ent.payment_cheque_hors_agence} className="bg-[#ffffff] text-[20px] rounded-md w-[470px] font-semibold pl-6"></input>
                    </div>


                    <hr/>




                    <label className="text-[30px] font-semibold pl-6">Vente devise :</label> <br/>
                    <label className="text-[30px] font-semibold pl-6">Personnel :</label>
                    <div className="bg-white w-[500px] h-[60px] flex items-center rounded-md mt-4 mb-6">
                        <input placeholder=". . . ."  onChange={(e)=>{set_option_de_payment_perso({...option_de_payment_perso ,vente_devise : e.target.value})}} value={option_de_payment_perso.vente_devise} className="bg-[#ffffff] text-[20px] rounded-md w-[470px] font-semibold pl-6"></input>
                    </div>
                    <label className="text-[30px] font-semibold pl-6">Professionnel : </label>
                    <div className="bg-white w-[500px] h-[60px] flex items-center rounded-md mt-4 mb-6">
                        <input placeholder="....."  onChange={(e)=>{set_option_de_payment_pro({...option_de_payment_pro , vente_devise : e.target.value})}} value={option_de_payment_pro.vente_devise} className="bg-[#ffffff] text-[20px] rounded-md w-[470px] font-semibold pl-6"></input>
                    </div>
                    <label className="text-[30px] font-semibold pl-6">Entreprise :</label>
                    <div className="bg-white w-[500px] h-[60px] flex items-center rounded-md mt-4 mb-6">
                        <input placeholder="..."  onChange={(e)=>{set_option_de_payment_ent({...option_de_payment_ent, vente_devise : e.target.value})}} value={option_de_payment_ent.vente_devise} className="bg-[#ffffff] text-[20px] rounded-md w-[470px] font-semibold pl-6"></input>
                    </div>


                    <hr/>




                    <label className="text-[30px] font-semibold pl-6">Achat devise :</label> <br/>
                    <label className="text-[30px] font-semibold pl-6">Personnel :</label>
                    <div className="bg-white w-[500px] h-[60px] flex items-center rounded-md mt-4 mb-6">
                        <input placeholder=". . . ."  onChange={(e)=>{set_option_de_payment_perso({...option_de_payment_perso ,achat_devise : e.target.value})}} value={option_de_payment_perso.achat_devise} className="bg-[#ffffff] text-[20px] rounded-md w-[470px] font-semibold pl-6"></input>
                    </div>
                    <label className="text-[30px] font-semibold pl-6">Professionnel : </label>
                    <div className="bg-white w-[500px] h-[60px] flex items-center rounded-md mt-4 mb-6">
                        <input placeholder="....."  onChange={(e)=>{set_option_de_payment_pro({...option_de_payment_pro , achat_devise : e.target.value})}} value={option_de_payment_pro.achat_devise} className="bg-[#ffffff] text-[20px] rounded-md w-[470px] font-semibold pl-6"></input>
                    </div>
                    <label className="text-[30px] font-semibold pl-6">Entreprise :</label>
                    <div className="bg-white w-[500px] h-[60px] flex items-center rounded-md mt-4 mb-6">
                        <input placeholder="..."  onChange={(e)=>{set_option_de_payment_ent({...option_de_payment_ent, achat_devise : e.target.value})}} value={option_de_payment_ent.achat_devise} className="bg-[#ffffff] text-[20px] rounded-md w-[470px] font-semibold pl-6"></input>
                    </div>



                    {/**MOEYN DE PAIMENT */}
                    

                    <label className="text-[40px] font-semibold pl-6">Moyen de paiment : </label><br />
                    <label className="text-[30px] font-semibold pl-6"></label>Creation carte bancaire : <br/>
                    <label className="text-[30px] font-semibold pl-6">Personnel :</label>
                    <div className="bg-white w-[500px] h-[60px] flex items-center rounded-md mt-4 mb-6">
                        <input placeholder=". . . ."  onChange={(e)=>{set_moyen_de_paiment_perso({...moyens_de_payment_perso ,creation_bank_card : e.target.value })}} value={moyens_de_payment_perso.creation_bank_card} className="bg-[#ffffff] text-[20px] rounded-md w-[470px] font-semibold pl-6"></input>
                    </div>
                    <label className="text-[30px] font-semibold pl-6">Professionnel : </label>
                    <div className="bg-white w-[500px] h-[60px] flex items-center rounded-md mt-4 mb-6">
                        <input placeholder="....."  onChange={(e)=>{set_moyen_de_paiment_pro({...moyens_de_payment_pro ,creation_bank_card : e.target.value })}} value={moyens_de_payment_pro.creation_bank_card} className="bg-[#ffffff] text-[20px] rounded-md w-[470px] font-semibold pl-6"></input>
                    </div>
                    <label className="text-[30px] font-semibold pl-6">Entreprise :</label>
                    <div className="bg-white w-[500px] h-[60px] flex items-center rounded-md mt-4 mb-6">
                        <input placeholder="..."  onChange={(e)=>{set_moyen_de_paiment_ent({...moyens_de_payment_ent,creation_bank_card : e.target.value})}} value={moyens_de_payment_ent.creation_bank_card} className="bg-[#ffffff] text-[20px] rounded-md w-[470px] font-semibold pl-6"></input>
                    </div>



                    <hr/>

                    <label className="text-[30px] font-semibold pl-6"></label>Renouvelement carte bancaire : <br/>
                    <label className="text-[30px] font-semibold pl-6">Personnel :</label>
                    <div className="bg-white w-[500px] h-[60px] flex items-center rounded-md mt-4 mb-6">
                        <input placeholder=". . . ."  onChange={(e)=>{set_moyen_de_paiment_perso({...moyens_de_payment_perso ,renouvelement_bank_card : e.target.value})}} value={moyens_de_payment_perso.renouvelement_bank_card} className="bg-[#ffffff] text-[20px] rounded-md w-[470px] font-semibold pl-6"></input>
                    </div>
                    <label className="text-[30px] font-semibold pl-6">Professionnel : </label>
                    <div className="bg-white w-[500px] h-[60px] flex items-center rounded-md mt-4 mb-6">
                        <input placeholder="....."  onChange={(e)=>{set_moyen_de_paiment_pro({...moyens_de_payment_pro ,renouvelement_bank_card : e.target.value })}} value={moyens_de_payment_pro.renouvelement_bank_card} className="bg-[#ffffff] text-[20px] rounded-md w-[470px] font-semibold pl-6"></input>
                    </div>
                    <label className="text-[30px] font-semibold pl-6">Entreprise :</label>
                    <div className="bg-white w-[500px] h-[60px] flex items-center rounded-md mt-4 mb-6">
                        <input placeholder="..."  onChange={(e)=>{set_moyen_de_paiment_ent({...moyens_de_payment_ent,renouvelement_bank_card : e.target.value})}} value={moyens_de_payment_ent.renouvelement_bank_card} className="bg-[#ffffff] text-[20px] rounded-md w-[470px] font-semibold pl-6"></input>
                    </div>




                    <hr/>

                    <label className="text-[30px] font-semibold pl-6"></label>Remplacement carte bancaire : <br/>
                    <label className="text-[30px] font-semibold pl-6">Personnel :</label>
                    <div className="bg-white w-[500px] h-[60px] flex items-center rounded-md mt-4 mb-6">
                        <input placeholder=". . . ."  onChange={(e)=>{set_moyen_de_paiment_perso({...moyens_de_payment_perso ,remplacement_bank_card : e.target.value})}} value={moyens_de_payment_perso.remplacement_bank_card} className="bg-[#ffffff] text-[20px] rounded-md w-[470px] font-semibold pl-6"></input>
                    </div>
                    <label className="text-[30px] font-semibold pl-6">Professionnel : </label>
                    <div className="bg-white w-[500px] h-[60px] flex items-center rounded-md mt-4 mb-6">
                        <input placeholder="....."  onChange={(e)=>{set_moyen_de_paiment_pro({...moyens_de_payment_pro ,remplacement_bank_card : e.target.value })}} value={moyens_de_payment_pro.remplacement_bank_card} className="bg-[#ffffff] text-[20px] rounded-md w-[470px] font-semibold pl-6"></input>
                    </div>
                    <label className="text-[30px] font-semibold pl-6">Entreprise :</label>
                    <div className="bg-white w-[500px] h-[60px] flex items-center rounded-md mt-4 mb-6">
                        <input placeholder="..."  onChange={(e)=>{set_moyen_de_paiment_ent({...moyens_de_payment_ent,remplacement_bank_card : e.target.value})}} value={moyens_de_payment_ent.remplacement_bank_card} className="bg-[#ffffff] text-[20px] rounded-md w-[470px] font-semibold pl-6"></input>
                    </div>



                    <hr/>

                    <label className="text-[30px] font-semibold pl-6"></label>Edition code confidentiel carte bancaire : <br/>
                    <label className="text-[30px] font-semibold pl-6">Personnel :</label>
                    <div className="bg-white w-[500px] h-[60px] flex items-center rounded-md mt-4 mb-6">
                        <input placeholder=". . . ."  onChange={(e)=>{set_moyen_de_paiment_perso({...moyens_de_payment_perso ,edition_code_confidentiel_bank_card : e.target.value})}} value={moyens_de_payment_perso.edition_code_confidentiel_bank_card} className="bg-[#ffffff] text-[20px] rounded-md w-[470px] font-semibold pl-6"></input>
                    </div>
                    <label className="text-[30px] font-semibold pl-6">Professionnel : </label>
                    <div className="bg-white w-[500px] h-[60px] flex items-center rounded-md mt-4 mb-6">
                        <input placeholder="....."  onChange={(e)=>{set_moyen_de_paiment_pro({...moyens_de_payment_pro ,edition_code_confidentiel_bank_card : e.target.value })}} value={moyens_de_payment_pro.edition_code_confidentiel_bank_card} className="bg-[#ffffff] text-[20px] rounded-md w-[470px] font-semibold pl-6"></input>
                    </div>
                    <label className="text-[30px] font-semibold pl-6">Entreprise :</label>
                    <div className="bg-white w-[500px] h-[60px] flex items-center rounded-md mt-4 mb-6">
                        <input placeholder="..."  onChange={(e)=>{set_moyen_de_paiment_ent({...moyens_de_payment_ent,edition_code_confidentiel_bank_card : e.target.value})}} value={moyens_de_payment_ent.edition_code_confidentiel_bank_card} className="bg-[#ffffff] text-[20px] rounded-md w-[470px] font-semibold pl-6"></input>
                    </div>




                    <hr/>

                    <label className="text-[30px] font-semibold pl-6"></label>Retrait intra-bancaire <br/>
                    <label className="text-[30px] font-semibold pl-6">Personnel :</label>
                    <div className="bg-white w-[500px] h-[60px] flex items-center rounded-md mt-4 mb-6">
                        <input placeholder=". . . ."  onChange={(e)=>{set_moyen_de_paiment_perso({...moyens_de_payment_perso ,retrait_intra_bancaire : e.target.value})}} value={moyens_de_payment_perso.retrait_intra_bancaire} className="bg-[#ffffff] text-[20px] rounded-md w-[470px] font-semibold pl-6"></input>
                    </div>
                    <label className="text-[30px] font-semibold pl-6">Professionnel : </label>
                    <div className="bg-white w-[500px] h-[60px] flex items-center rounded-md mt-4 mb-6">
                        <input placeholder="....."  onChange={(e)=>{set_moyen_de_paiment_pro({...moyens_de_payment_pro ,retrait_intra_bancaire : e.target.value })}} value={moyens_de_payment_pro.retrait_intra_bancaire} className="bg-[#ffffff] text-[20px] rounded-md w-[470px] font-semibold pl-6"></input>
                    </div>
                    <label className="text-[30px] font-semibold pl-6">Entreprise :</label>
                    <div className="bg-white w-[500px] h-[60px] flex items-center rounded-md mt-4 mb-6">
                        <input placeholder="..."  onChange={(e)=>{set_moyen_de_paiment_ent({...moyens_de_payment_ent,retrait_intra_bancaire : e.target.value})}} value={moyens_de_payment_ent.retrait_intra_bancaire} className="bg-[#ffffff] text-[20px] rounded-md w-[470px] font-semibold pl-6"></input>
                    </div>






                    <hr/>

                    <label className="text-[30px] font-semibold pl-6"></label>Retrait inter-bancaire <br/>
                    <label className="text-[30px] font-semibold pl-6">Personnel :</label>
                    <div className="bg-white w-[500px] h-[60px] flex items-center rounded-md mt-4 mb-6">
                        <input placeholder=". . . ."  onChange={(e)=>{set_moyen_de_paiment_perso({...moyens_de_payment_perso ,retrait_inter_bancaire : e.target.value})}} value={moyens_de_payment_perso.retrait_inter_bancaire} className="bg-[#ffffff] text-[20px] rounded-md w-[470px] font-semibold pl-6"></input>
                    </div>
                    <label className="text-[30px] font-semibold pl-6">Professionnel : </label>
                    <div className="bg-white w-[500px] h-[60px] flex items-center rounded-md mt-4 mb-6">
                        <input placeholder="....."  onChange={(e)=>{set_moyen_de_paiment_pro({...moyens_de_payment_pro ,retrait_inter_bancaire : e.target.value })}} value={moyens_de_payment_pro.retrait_inter_bancaire} className="bg-[#ffffff] text-[20px] rounded-md w-[470px] font-semibold pl-6"></input>
                    </div>
                    <label className="text-[30px] font-semibold pl-6">Entreprise :</label>
                    <div className="bg-white w-[500px] h-[60px] flex items-center rounded-md mt-4 mb-6">
                        <input placeholder="..."  onChange={(e)=>{set_moyen_de_paiment_ent({...moyens_de_payment_ent, retrait_inter_bancaire : e.target.value})}} value={moyens_de_payment_ent.retrait_inter_bancaire} className="bg-[#ffffff] text-[20px] rounded-md w-[470px] font-semibold pl-6"></input>
                    </div>





                    <hr/>

                    <label className="text-[30px] font-semibold pl-6"></label>Creation carete VISA <br/>
                    <label className="text-[30px] font-semibold pl-6">Personnel :</label>
                    <div className="bg-white w-[500px] h-[60px] flex items-center rounded-md mt-4 mb-6">
                        <input placeholder=". . . ."  onChange={(e)=>{set_moyen_de_paiment_perso({...moyens_de_payment_perso , creation_visa: e.target.value})}} value={moyens_de_payment_perso.creation_visa} className="bg-[#ffffff] text-[20px] rounded-md w-[470px] font-semibold pl-6"></input>
                    </div>
                    <label className="text-[30px] font-semibold pl-6">Professionnel : </label>
                    <div className="bg-white w-[500px] h-[60px] flex items-center rounded-md mt-4 mb-6">
                        <input placeholder="....."  onChange={(e)=>{set_moyen_de_paiment_pro({...moyens_de_payment_pro ,creation_visa : e.target.value })}} value={moyens_de_payment_pro.creation_visa} className="bg-[#ffffff] text-[20px] rounded-md w-[470px] font-semibold pl-6"></input>
                    </div>
                    <label className="text-[30px] font-semibold pl-6">Entreprise :</label>
                    <div className="bg-white w-[500px] h-[60px] flex items-center rounded-md mt-4 mb-6">
                        <input placeholder="..."  onChange={(e)=>{set_moyen_de_paiment_ent({...moyens_de_payment_ent,creation_visa : e.target.value})}} value={moyens_de_payment_ent.creation_visa} className="bg-[#ffffff] text-[20px] rounded-md w-[470px] font-semibold pl-6"></input>
                    </div>





                    <hr/>

                    <label className="text-[30px] font-semibold pl-6"></label>Renouvelement de la carte VISA <br/>
                    <label className="text-[30px] font-semibold pl-6">Personnel :</label>
                    <div className="bg-white w-[500px] h-[60px] flex items-center rounded-md mt-4 mb-6">
                        <input placeholder=". . . ."  onChange={(e)=>{set_moyen_de_paiment_perso({...moyens_de_payment_perso ,renouvelement_visa : e.target.value})}} value={moyens_de_payment_perso.renouvelement_visa} className="bg-[#ffffff] text-[20px] rounded-md w-[470px] font-semibold pl-6"></input>
                    </div>
                    <label className="text-[30px] font-semibold pl-6">Professionnel : </label>
                    <div className="bg-white w-[500px] h-[60px] flex items-center rounded-md mt-4 mb-6">
                        <input placeholder="....."  onChange={(e)=>{set_moyen_de_paiment_pro({...moyens_de_payment_pro ,renouvelement_visa : e.target.value })}} value={moyens_de_payment_pro.renouvelement_visa} className="bg-[#ffffff] text-[20px] rounded-md w-[470px] font-semibold pl-6"></input>
                    </div>
                    <label className="text-[30px] font-semibold pl-6">Entreprise :</label>
                    <div className="bg-white w-[500px] h-[60px] flex items-center rounded-md mt-4 mb-6">
                        <input placeholder="..."  onChange={(e)=>{set_moyen_de_paiment_ent({...moyens_de_payment_ent,renouvelement_visa : e.target.value})}} value={moyens_de_payment_ent.renouvelement_visa} className="bg-[#ffffff] text-[20px] rounded-md w-[470px] font-semibold pl-6"></input>
                    </div>




                    <hr/>

                    <label className="text-[30px] font-semibold pl-6"></label>Remplacement de la carte VISA<br/>
                    <label className="text-[30px] font-semibold pl-6">Personnel :</label>
                    <div className="bg-white w-[500px] h-[60px] flex items-center rounded-md mt-4 mb-6">
                        <input placeholder=". . . ."  onChange={(e)=>{set_moyen_de_paiment_perso({...moyens_de_payment_perso ,remplacement_visa : e.target.value})}} value={moyens_de_payment_perso.remplacement_visa} className="bg-[#ffffff] text-[20px] rounded-md w-[470px] font-semibold pl-6"></input>
                    </div>
                    <label className="text-[30px] font-semibold pl-6">Professionnel : </label>
                    <div className="bg-white w-[500px] h-[60px] flex items-center rounded-md mt-4 mb-6">
                        <input placeholder="....."  onChange={(e)=>{set_moyen_de_paiment_pro({...moyens_de_payment_pro ,remplacement_visa : e.target.value })}} value={moyens_de_payment_pro.remplacement_visa} className="bg-[#ffffff] text-[20px] rounded-md w-[470px] font-semibold pl-6"></input>
                    </div>
                    <label className="text-[30px] font-semibold pl-6">Entreprise :</label>
                    <div className="bg-white w-[500px] h-[60px] flex items-center rounded-md mt-4 mb-6">
                        <input placeholder="..."  onChange={(e)=>{set_moyen_de_paiment_ent({...moyens_de_payment_ent,remplacement_visa : e.target.value})}} value={moyens_de_payment_ent.remplacement_visa} className="bg-[#ffffff] text-[20px] rounded-md w-[470px] font-semibold pl-6"></input>
                    </div>





                    <hr/>

                    <label className="text-[30px] font-semibold pl-6"></label>Edition code confidentiel carte VISA <br/>
                    <label className="text-[30px] font-semibold pl-6">Personnel :</label>
                    <div className="bg-white w-[500px] h-[60px] flex items-center rounded-md mt-4 mb-6">
                        <input placeholder=". . . ."  onChange={(e)=>{set_moyen_de_paiment_perso({...moyens_de_payment_perso ,edition_code_confidentiel_visa : e.target.value})}} value={moyens_de_payment_perso.edition_code_confidentiel_visa} className="bg-[#ffffff] text-[20px] rounded-md w-[470px] font-semibold pl-6"></input>
                    </div>
                    <label className="text-[30px] font-semibold pl-6">Professionnel : </label>
                    <div className="bg-white w-[500px] h-[60px] flex items-center rounded-md mt-4 mb-6">
                        <input placeholder="....."  onChange={(e)=>{set_moyen_de_paiment_pro({...moyens_de_payment_pro ,edition_code_confidentiel_visa : e.target.value })}} value={moyens_de_payment_pro.edition_code_confidentiel_visa} className="bg-[#ffffff] text-[20px] rounded-md w-[470px] font-semibold pl-6"></input>
                    </div>
                    <label className="text-[30px] font-semibold pl-6">Entreprise :</label>
                    <div className="bg-white w-[500px] h-[60px] flex items-center rounded-md mt-4 mb-6">
                        <input placeholder="..."  onChange={(e)=>{set_moyen_de_paiment_ent({...moyens_de_payment_ent,edition_code_confidentiel_visa : e.target.value})}} value={moyens_de_payment_ent.edition_code_confidentiel_visa} className="bg-[#ffffff] text-[20px] rounded-md w-[470px] font-semibold pl-6"></input>
                    </div>


                    {/*PRET ET CREDIT---------------------------------------------------------------------------------------------------------------------------*/}
                    <label className="text-[40px] font-semibold pl-6">Prèt et Crédits : </label><br />
                    <label className="text-[30px] font-semibold pl-6"></label>Découvert durée : <br/>
                    <label className="text-[30px] font-semibold pl-6">Perssonnel :</label>
                    <div className="bg-white w-[500px] h-[60px] flex items-center rounded-md mt-4 mb-6">
                        <input placeholder=". . . ."  onChange={(e)=>{set_prets_et_credits_perso({...prets_et_credits_perso ,decouvert_duree : e.target.value})}} value={prets_et_credits_perso.decouvert_duree} className="bg-[#ffffff] text-[20px] rounded-md w-[470px] font-semibold pl-6"></input>
                    </div>
                    <label className="text-[30px] font-semibold pl-6">Professionnel : </label>
                    <div className="bg-white w-[500px] h-[60px] flex items-center rounded-md mt-4 mb-6">
                        <input placeholder="....."  onChange={(e)=>{set_prets_et_credits_pro({...prets_et_credits_pro ,decouvert_duree : e.target.value})}} value={prets_et_credits_pro.decouvert_duree} className="bg-[#ffffff] text-[20px] rounded-md w-[470px] font-semibold pl-6"></input>
                    </div>
                    <label className="text-[30px] font-semibold pl-6">Entreprise :</label>
                    <div className="bg-white w-[500px] h-[60px] flex items-center rounded-md mt-4 mb-6">
                        <input placeholder="..."  onChange={(e)=>{set_prets_et_credits_ent({...prets_et_credits_ent,decouvert_duree : e.target.value})}} value={prets_et_credits_ent.decouvert_duree} className="bg-[#ffffff] text-[20px] rounded-md w-[470px] font-semibold pl-6"></input>
                    </div> 
                    
                    
                    
                    
                    <hr/>





                    <label className="text-[30px] font-semibold pl-6"></label>Découvert taux : <br/>
                    <label className="text-[30px] font-semibold pl-6">Perssonnel :</label>
                    <div className="bg-white w-[500px] h-[60px] flex items-center rounded-md mt-4 mb-6">
                        <input placeholder=". . . ."  onChange={(e)=>{set_prets_et_credits_perso({...prets_et_credits_perso ,decouvert_taux : e.target.value})}} value={prets_et_credits_perso.decouvert_taux} className="bg-[#ffffff] text-[20px] rounded-md w-[470px] font-semibold pl-6"></input>
                    </div>
                    <label className="text-[30px] font-semibold pl-6">Professionnel : </label>
                    <div className="bg-white w-[500px] h-[60px] flex items-center rounded-md mt-4 mb-6">
                        <input placeholder="....."  onChange={(e)=>{set_prets_et_credits_pro({...prets_et_credits_pro ,decouvert_taux : e.target.value})}} value={prets_et_credits_pro.decouvert_taux} className="bg-[#ffffff] text-[20px] rounded-md w-[470px] font-semibold pl-6"></input>
                    </div>
                    <label className="text-[30px] font-semibold pl-6">Entreprise :</label>
                    <div className="bg-white w-[500px] h-[60px] flex items-center rounded-md mt-4 mb-6">
                        <input placeholder="..."  onChange={(e)=>{set_prets_et_credits_ent({...prets_et_credits_ent,decouvert_taux : e.target.value})}} value={prets_et_credits_ent.decouvert_taux} className="bg-[#ffffff] text-[20px] rounded-md w-[470px] font-semibold pl-6"></input>
                    </div> 
                    
                    
                    
                    
                    <hr/>





                    <label className="text-[30px] font-semibold pl-6"></label>Taux crédit a court terme : <br/>
                    <label className="text-[30px] font-semibold pl-6">Perssonnel :</label>
                    <div className="bg-white w-[500px] h-[60px] flex items-center rounded-md mt-4 mb-6">
                        <input placeholder=". . . ."  onChange={(e)=>{set_prets_et_credits_perso({...prets_et_credits_perso ,credit_court_terme_taux : e.target.value})}} value={prets_et_credits_perso.credit_court_terme_taux} className="bg-[#ffffff] text-[20px] rounded-md w-[470px] font-semibold pl-6"></input>
                    </div>
                    <label className="text-[30px] font-semibold pl-6">Professionnel : </label>
                    <div className="bg-white w-[500px] h-[60px] flex items-center rounded-md mt-4 mb-6">
                        <input placeholder="....."  onChange={(e)=>{set_prets_et_credits_pro({...prets_et_credits_pro ,credit_court_terme_taux : e.target.value})}} value={prets_et_credits_pro.credit_court_terme_taux} className="bg-[#ffffff] text-[20px] rounded-md w-[470px] font-semibold pl-6"></input>
                    </div>
                    <label className="text-[30px] font-semibold pl-6">Entreprise :</label>
                    <div className="bg-white w-[500px] h-[60px] flex items-center rounded-md mt-4 mb-6">
                        <input placeholder="..."  onChange={(e)=>{set_prets_et_credits_ent({...prets_et_credits_ent,credit_court_terme_taux : e.target.value})}} value={prets_et_credits_ent.credit_court_terme_taux} className="bg-[#ffffff] text-[20px] rounded-md w-[470px] font-semibold pl-6"></input>
                    </div> 
                    
                    
                    
                    
                    <hr/>






                    <label className="text-[30px] font-semibold pl-6"></label>Taux crédit a terme moyen : <br/>
                    <label className="text-[30px] font-semibold pl-6">Perssonnel :</label>
                    <div className="bg-white w-[500px] h-[60px] flex items-center rounded-md mt-4 mb-6">
                        <input placeholder=". . . ."  onChange={(e)=>{set_prets_et_credits_perso({...prets_et_credits_perso ,credit_moyen_terme_taux : e.target.value})}} value={prets_et_credits_perso.credit_moyen_terme_taux} className="bg-[#ffffff] text-[20px] rounded-md w-[470px] font-semibold pl-6"></input>
                    </div>
                    <label className="text-[30px] font-semibold pl-6">Professionnel : </label>
                    <div className="bg-white w-[500px] h-[60px] flex items-center rounded-md mt-4 mb-6">
                        <input placeholder="....."  onChange={(e)=>{set_prets_et_credits_pro({...prets_et_credits_pro ,credit_moyen_terme_taux : e.target.value})}} value={prets_et_credits_pro.credit_moyen_terme_taux} className="bg-[#ffffff] text-[20px] rounded-md w-[470px] font-semibold pl-6"></input>
                    </div>
                    <label className="text-[30px] font-semibold pl-6">Entreprise :</label>
                    <div className="bg-white w-[500px] h-[60px] flex items-center rounded-md mt-4 mb-6">
                        <input placeholder="..."  onChange={(e)=>{set_prets_et_credits_ent({...prets_et_credits_ent,credit_moyen_terme_taux : e.target.value})}} value={prets_et_credits_ent.credit_moyen_terme_taux} className="bg-[#ffffff] text-[20px] rounded-md w-[470px] font-semibold pl-6"></input>
                    </div> 
                    
                    
                    
                    
                    <hr/>








                    <label className="text-[30px] font-semibold pl-6"></label>Taux crédit long terme : <br/>
                    <label className="text-[30px] font-semibold pl-6">Perssonnel :</label>
                    <div className="bg-white w-[500px] h-[60px] flex items-center rounded-md mt-4 mb-6">
                        <input placeholder=". . . ."  onChange={(e)=>{set_prets_et_credits_perso({...prets_et_credits_perso ,credit_long_terme_taux : e.target.value})}} value={prets_et_credits_perso.credit_long_terme_taux} className="bg-[#ffffff] text-[20px] rounded-md w-[470px] font-semibold pl-6"></input>
                    </div>
                    <label className="text-[30px] font-semibold pl-6">Professionnel : </label>
                    <div className="bg-white w-[500px] h-[60px] flex items-center rounded-md mt-4 mb-6">
                        <input placeholder="....."  onChange={(e)=>{set_prets_et_credits_pro({...prets_et_credits_pro ,credit_long_terme_taux : e.target.value})}} value={prets_et_credits_pro.credit_long_terme_taux} className="bg-[#ffffff] text-[20px] rounded-md w-[470px] font-semibold pl-6"></input>
                    </div>
                    <label className="text-[30px] font-semibold pl-6">Entreprise :</label>
                    <div className="bg-white w-[500px] h-[60px] flex items-center rounded-md mt-4 mb-6">
                        <input placeholder="..."  onChange={(e)=>{set_prets_et_credits_ent({...prets_et_credits_ent,credit_long_terme_taux : e.target.value})}} value={prets_et_credits_ent.credit_long_terme_taux} className="bg-[#ffffff] text-[20px] rounded-md w-[470px] font-semibold pl-6"></input>
                    </div> 
                    
                    
                    
                    
                    <hr/>








                    <label className="text-[30px] font-semibold pl-6"></label>Option possible :<br/>
                    <label className="text-[30px] font-semibold pl-6">Perssonnel :</label>
                    <div className="bg-white w-[500px] h-[60px] flex items-center rounded-md mt-4 mb-6">
                        <input placeholder=". . . ."  onChange={(e)=>{set_prets_et_credits_perso({...prets_et_credits_perso ,options_possibles : e.target.value})}} value={prets_et_credits_perso.options_possibles} className="bg-[#ffffff] text-[20px] rounded-md w-[470px] font-semibold pl-6"></input>
                    </div>
                    <label className="text-[30px] font-semibold pl-6">Professionnel : </label>
                    <div className="bg-white w-[500px] h-[60px] flex items-center rounded-md mt-4 mb-6">
                        <input placeholder="....."  onChange={(e)=>{set_prets_et_credits_pro({...prets_et_credits_pro ,options_possibles : e.target.value})}} value={prets_et_credits_pro.options_possibles} className="bg-[#ffffff] text-[20px] rounded-md w-[470px] font-semibold pl-6"></input>
                    </div>
                    <label className="text-[30px] font-semibold pl-6">Entreprise :</label>
                    <div className="bg-white w-[500px] h-[60px] flex items-center rounded-md mt-4 mb-6">
                        <input placeholder="..."  onChange={(e)=>{set_prets_et_credits_ent({...prets_et_credits_ent,options_possibles : e.target.value})}} value={prets_et_credits_ent.options_possibles} className="bg-[#ffffff] text-[20px] rounded-md w-[470px] font-semibold pl-6"></input>
                    </div> 
                    
                    
                    
                    
                    <hr/>



                    {/*PLACEMENT---------------------------------------------------------------------------------------------------------------------------*/}
                    <label className="text-[40px] font-semibold pl-6">Placement : </label><br />
                    <label className="text-[30px] font-semibold pl-6"></label> <br/>
                    <label className="text-[30px] font-semibold pl-6">Perssonnel :</label>
                    <div className="bg-white w-[500px] h-[60px] flex items-center rounded-md mt-4 mb-6">
                        <input placeholder=". . . ."  onChange={(e)=>{set_placement_perso({...placement_perso ,depots_a_court_terme : e.target.value})}} value={placement_perso.depots_a_court_terme} className="bg-[#ffffff] text-[20px] rounded-md w-[470px] font-semibold pl-6"></input>
                    </div>
                    <label className="text-[30px] font-semibold pl-6">Professionnel : </label>
                    <div className="bg-white w-[500px] h-[60px] flex items-center rounded-md mt-4 mb-6">
                        <input placeholder="....."  onChange={(e)=>{set_placement_pro({...placement_pro ,depots_a_court_terme : e.target.value})}} value={placement_pro.depots_a_court_terme} className="bg-[#ffffff] text-[20px] rounded-md w-[470px] font-semibold pl-6"></input>
                    </div>
                    <label className="text-[30px] font-semibold pl-6">Entreprise :</label>
                    <div className="bg-white w-[500px] h-[60px] flex items-center rounded-md mt-4 mb-6">
                        <input placeholder="..."  onChange={(e)=>{set_placement_ent({...placement_ent,depots_a_court_terme : e.target.value})}} value={placement_ent.depots_a_court_terme} className="bg-[#ffffff] text-[20px] rounded-md w-[470px] font-semibold pl-6"></input>
                    </div> 
                    
                    
                    
                    
                    <hr/>


                    <label className="text-[30px] font-semibold pl-6"></label> <br/>
                    <label className="text-[30px] font-semibold pl-6">Perssonnel :</label>
                    <div className="bg-white w-[500px] h-[60px] flex items-center rounded-md mt-4 mb-6">
                        <input placeholder=". . . ."  onChange={(e)=>{set_placement_perso({...placement_perso ,depots_a_moyen_terme : e.target.value})}} value={placement_perso.depots_a_moyen_terme} className="bg-[#ffffff] text-[20px] rounded-md w-[470px] font-semibold pl-6"></input>
                    </div>
                    <label className="text-[30px] font-semibold pl-6">Professionnel : </label>
                    <div className="bg-white w-[500px] h-[60px] flex items-center rounded-md mt-4 mb-6">
                        <input placeholder="....."  onChange={(e)=>{set_placement_pro({...placement_pro ,depots_a_moyen_terme : e.target.value})}} value={placement_pro.depots_a_moyen_terme} className="bg-[#ffffff] text-[20px] rounded-md w-[470px] font-semibold pl-6"></input>
                    </div>
                    <label className="text-[30px] font-semibold pl-6">Entreprise :</label>
                    <div className="bg-white w-[500px] h-[60px] flex items-center rounded-md mt-4 mb-6">
                        <input placeholder="..."  onChange={(e)=>{set_placement_ent({...placement_ent,depots_a_moyen_terme : e.target.value})}} value={placement_ent.depots_a_moyen_terme} className="bg-[#ffffff] text-[20px] rounded-md w-[470px] font-semibold pl-6"></input>
                    </div> 
                    
                    
                    
                    
                    <hr/>



                    <label className="text-[30px] font-semibold pl-6"></label> <br/>
                    <label className="text-[30px] font-semibold pl-6">Perssonnel :</label>
                    <div className="bg-white w-[500px] h-[60px] flex items-center rounded-md mt-4 mb-6">
                        <input placeholder=". . . ."  onChange={(e)=>{set_placement_perso({...placement_perso ,depots_a_long_terme : e.target.value})}} value={placement_perso.depots_a_long_terme} className="bg-[#ffffff] text-[20px] rounded-md w-[470px] font-semibold pl-6"></input>
                    </div>
                    <label className="text-[30px] font-semibold pl-6">Professionnel : </label>
                    <div className="bg-white w-[500px] h-[60px] flex items-center rounded-md mt-4 mb-6">
                        <input placeholder="....."  onChange={(e)=>{set_placement_pro({...placement_pro ,depots_a_long_terme : e.target.value})}} value={placement_pro.depots_a_long_terme} className="bg-[#ffffff] text-[20px] rounded-md w-[470px] font-semibold pl-6"></input>
                    </div>
                    <label className="text-[30px] font-semibold pl-6">Entreprise :</label>
                    <div className="bg-white w-[500px] h-[60px] flex items-center rounded-md mt-4 mb-6">
                        <input placeholder="..."  onChange={(e)=>{set_placement_ent({...placement_ent,depots_a_long_terme : e.target.value})}} value={placement_ent.depots_a_long_terme} className="bg-[#ffffff] text-[20px] rounded-md w-[470px] font-semibold pl-6"></input>
                    </div> 
                    
                    
                    {/*EPARGNE---------------------------------------------------------------------------------------------------------------------------*/}
                    <label className="text-[40px] font-semibold pl-6">Epargne : </label><br />                   
                    <label className="text-[30px] font-semibold pl-6"></label>Epargne duree taux 01 : <br/>
                    <label className="text-[30px] font-semibold pl-6">Perssonnel :</label>
                    <div className="bg-white w-[500px] h-[60px] flex items-center rounded-md mt-4 mb-6">
                        <input placeholder=". . . ."  onChange={(e)=>{set_epargne_perso({...epargne_perso , epargne_duree_taux_01 : e.target.value})}} value={epargne_perso.epargne_duree_taux_01} className="bg-[#ffffff] text-[20px] rounded-md w-[470px] font-semibold pl-6"></input>
                    </div>
                    <label className="text-[30px] font-semibold pl-6">Professionnel : </label>
                    <div className="bg-white w-[500px] h-[60px] flex items-center rounded-md mt-4 mb-6">
                        <input placeholder="....."  onChange={(e)=>{set_epargne_pro({...epargne_pro , epargne_duree_taux_01 : e.target.value})}} value={epargne_pro.epargne_duree_taux_01} className="bg-[#ffffff] text-[20px] rounded-md w-[470px] font-semibold pl-6"></input>
                    </div>
                    <label className="text-[30px] font-semibold pl-6">Entreprise :</label>
                    <div className="bg-white w-[500px] h-[60px] flex items-center rounded-md mt-4 mb-6">
                        <input placeholder="..."  onChange={(e)=>{set_epargne_ent({...epargne_ent , epargne_duree_taux_01 : e.target.value})}} value={epargne_ent.epargne_duree_taux_01} className="bg-[#ffffff] text-[20px] rounded-md w-[470px] font-semibold pl-6"></input>
                    </div> 
                    
                    
                    
                    
                    <hr/>




                    <label className="text-[30px] font-semibold pl-6"></label>Epargne duree taux 02 :  <br/>
                    <label className="text-[30px] font-semibold pl-6">Perssonnel :</label>
                    <div className="bg-white w-[500px] h-[60px] flex items-center rounded-md mt-4 mb-6">
                        <input placeholder=". . . ."  onChange={(e)=>{set_epargne_perso({...epargne_perso , epargne_duree_taux_02 : e.target.value})}} value={epargne_perso.epargne_duree_taux_02} className="bg-[#ffffff] text-[20px] rounded-md w-[470px] font-semibold pl-6"></input>
                    </div>
                    <label className="text-[30px] font-semibold pl-6">Professionnel : </label>
                    <div className="bg-white w-[500px] h-[60px] flex items-center rounded-md mt-4 mb-6">
                        <input placeholder="....."  onChange={(e)=>{set_epargne_pro({...epargne_pro , epargne_duree_taux_02 : e.target.value})}} value={epargne_pro.epargne_duree_taux_02} className="bg-[#ffffff] text-[20px] rounded-md w-[470px] font-semibold pl-6"></input>
                    </div>
                    <label className="text-[30px] font-semibold pl-6">Entreprise :</label>
                    <div className="bg-white w-[500px] h-[60px] flex items-center rounded-md mt-4 mb-6">
                        <input placeholder="..."  onChange={(e)=>{set_epargne_ent({...epargne_ent , epargne_duree_taux_02 : e.target.value})}} value={epargne_ent.epargne_duree_taux_02} className="bg-[#ffffff] text-[20px] rounded-md w-[470px] font-semibold pl-6"></input>
                    </div> 
                    
                    
                    
                    
                    <hr/>




                    <label className="text-[30px] font-semibold pl-6"></label>Epargne duree taux 03 : <br/>
                    <label className="text-[30px] font-semibold pl-6">Perssonnel :</label>
                    <div className="bg-white w-[500px] h-[60px] flex items-center rounded-md mt-4 mb-6">
                        <input placeholder=". . . ."  onChange={(e)=>{set_epargne_perso({...epargne_perso , epargne_duree_taux_03 : e.target.value})}} value={epargne_perso.epargne_duree_taux_03} className="bg-[#ffffff] text-[20px] rounded-md w-[470px] font-semibold pl-6"></input>
                    </div>
                    <label className="text-[30px] font-semibold pl-6">Professionnel : </label>
                    <div className="bg-white w-[500px] h-[60px] flex items-center rounded-md mt-4 mb-6">
                        <input placeholder="....."  onChange={(e)=>{set_epargne_pro({...epargne_pro , epargne_duree_taux_03 : e.target.value})}} value={epargne_pro.epargne_duree_taux_03} className="bg-[#ffffff] text-[20px] rounded-md w-[470px] font-semibold pl-6"></input>
                    </div>
                    <label className="text-[30px] font-semibold pl-6">Entreprise :</label>
                    <div className="bg-white w-[500px] h-[60px] flex items-center rounded-md mt-4 mb-6">
                        <input placeholder="..."  onChange={(e)=>{set_epargne_ent({...epargne_ent , epargne_duree_taux_03 : e.target.value})}} value={epargne_ent.epargne_duree_taux_03} className="bg-[#ffffff] text-[20px] rounded-md w-[470px] font-semibold pl-6"></input>
                    </div> 
                    
                    
                    
                    
                    <hr/>




                    <label className="text-[30px] font-semibold pl-6"></label>Epargne duree taux 04 :  <br/>
                    <label className="text-[30px] font-semibold pl-6">Perssonnel :</label>
                    <div className="bg-white w-[500px] h-[60px] flex items-center rounded-md mt-4 mb-6">
                        <input placeholder=". . . ."  onChange={(e)=>{set_epargne_perso({...epargne_perso , epargne_duree_taux_04 : e.target.value})}} value={epargne_perso.epargne_duree_taux_04} className="bg-[#ffffff] text-[20px] rounded-md w-[470px] font-semibold pl-6"></input>
                    </div>
                    <label className="text-[30px] font-semibold pl-6">Professionnel : </label>
                    <div className="bg-white w-[500px] h-[60px] flex items-center rounded-md mt-4 mb-6">
                        <input placeholder="....."  onChange={(e)=>{set_epargne_pro({...epargne_pro , epargne_duree_taux_04 : e.target.value})}} value={epargne_pro.epargne_duree_taux_04} className="bg-[#ffffff] text-[20px] rounded-md w-[470px] font-semibold pl-6"></input>
                    </div>
                    <label className="text-[30px] font-semibold pl-6">Entreprise :</label>
                    <div className="bg-white w-[500px] h-[60px] flex items-center rounded-md mt-4 mb-6">
                        <input placeholder="..."  onChange={(e)=>{set_epargne_ent({...epargne_ent , epargne_duree_taux_04 : e.target.value})}} value={epargne_ent.epargne_duree_taux_04} className="bg-[#ffffff] text-[20px] rounded-md w-[470px] font-semibold pl-6"></input>
                    </div> 
                    
                    
                    
                    
                    <hr/>





                    <label className="text-[30px] font-semibold pl-6"></label>Epargne duree taux 05 :  <br/>
                    <label className="text-[30px] font-semibold pl-6">Perssonnel :</label>
                    <div className="bg-white w-[500px] h-[60px] flex items-center rounded-md mt-4 mb-6">
                        <input placeholder=". . . ."  onChange={(e)=>{set_epargne_perso({...epargne_perso , epargne_duree_taux_05 : e.target.value})}} value={epargne_perso.epargne_duree_taux_05} className="bg-[#ffffff] text-[20px] rounded-md w-[470px] font-semibold pl-6"></input>
                    </div>
                    <label className="text-[30px] font-semibold pl-6">Professionnel : </label>
                    <div className="bg-white w-[500px] h-[60px] flex items-center rounded-md mt-4 mb-6">
                        <input placeholder="....."  onChange={(e)=>{set_epargne_pro({...epargne_pro , epargne_duree_taux_05 : e.target.value})}} value={epargne_pro.epargne_duree_taux_05} className="bg-[#ffffff] text-[20px] rounded-md w-[470px] font-semibold pl-6"></input>
                    </div>
                    <label className="text-[30px] font-semibold pl-6">Entreprise :</label>
                    <div className="bg-white w-[500px] h-[60px] flex items-center rounded-md mt-4 mb-6">
                        <input placeholder="..."  onChange={(e)=>{set_epargne_ent({...epargne_ent , epargne_duree_taux_05 : e.target.value})}} value={epargne_ent.epargne_duree_taux_05} className="bg-[#ffffff] text-[20px] rounded-md w-[470px] font-semibold pl-6"></input>
                    </div> 
                    
                    
                    
                    
                    <hr/>






                    <label className="text-[30px] font-semibold pl-6"></label>Epargne duree taux 06 :  <br/>
                    <label className="text-[30px] font-semibold pl-6">Perssonnel :</label>
                    <div className="bg-white w-[500px] h-[60px] flex items-center rounded-md mt-4 mb-6">
                        <input placeholder=". . . ."  onChange={(e)=>{set_epargne_perso({...epargne_perso , epargne_duree_taux_06 : e.target.value})}} value={epargne_perso.epargne_duree_taux_06} className="bg-[#ffffff] text-[20px] rounded-md w-[470px] font-semibold pl-6"></input>
                    </div>
                    <label className="text-[30px] font-semibold pl-6">Professionnel : </label>
                    <div className="bg-white w-[500px] h-[60px] flex items-center rounded-md mt-4 mb-6">
                        <input placeholder="....."  onChange={(e)=>{set_epargne_pro({...epargne_pro , epargne_duree_taux_06 : e.target.value})}} value={epargne_pro.epargne_duree_taux_06} className="bg-[#ffffff] text-[20px] rounded-md w-[470px] font-semibold pl-6"></input>
                    </div>
                    <label className="text-[30px] font-semibold pl-6">Entreprise :</label>
                    <div className="bg-white w-[500px] h-[60px] flex items-center rounded-md mt-4 mb-6">
                        <input placeholder="..."  onChange={(e)=>{set_epargne_ent({...epargne_ent , epargne_duree_taux_06 : e.target.value})}} value={epargne_ent.epargne_duree_taux_06} className="bg-[#ffffff] text-[20px] rounded-md w-[470px] font-semibold pl-6"></input>
                    </div> 
                    
                    
                    
                    
                    <hr/>





                    <label className="text-[30px] font-semibold pl-6"></label>Epargne duree taux 07 :  <br/>
                    <label className="text-[30px] font-semibold pl-6">Perssonnel :</label>
                    <div className="bg-white w-[500px] h-[60px] flex items-center rounded-md mt-4 mb-6">
                        <input placeholder=". . . ."  onChange={(e)=>{set_epargne_perso({...epargne_perso , epargne_duree_taux_07 : e.target.value})}} value={epargne_perso.epargne_duree_taux_07} className="bg-[#ffffff] text-[20px] rounded-md w-[470px] font-semibold pl-6"></input>
                    </div>
                    <label className="text-[30px] font-semibold pl-6">Professionnel : </label>
                    <div className="bg-white w-[500px] h-[60px] flex items-center rounded-md mt-4 mb-6">
                        <input placeholder="....."  onChange={(e)=>{set_epargne_pro({...epargne_pro , epargne_duree_taux_07 : e.target.value})}} value={epargne_pro.epargne_duree_taux_07} className="bg-[#ffffff] text-[20px] rounded-md w-[470px] font-semibold pl-6"></input>
                    </div>
                    <label className="text-[30px] font-semibold pl-6">Entreprise :</label>
                    <div className="bg-white w-[500px] h-[60px] flex items-center rounded-md mt-4 mb-6">
                        <input placeholder="..."  onChange={(e)=>{set_epargne_ent({...epargne_ent , epargne_duree_taux_07 : e.target.value})}} value={epargne_ent.epargne_duree_taux_07} className="bg-[#ffffff] text-[20px] rounded-md w-[470px] font-semibold pl-6"></input>
                    </div> 
                    
                    
                    
                    
                    <hr/>





                    <label className="text-[30px] font-semibold pl-6"></label>Epargne duree taux 08 :  <br/>
                    <label className="text-[30px] font-semibold pl-6">Perssonnel :</label>
                    <div className="bg-white w-[500px] h-[60px] flex items-center rounded-md mt-4 mb-6">
                        <input placeholder=". . . ."  onChange={(e)=>{set_epargne_perso({...epargne_perso , epargne_duree_taux_08 : e.target.value})}} value={epargne_perso.epargne_duree_taux_08} className="bg-[#ffffff] text-[20px] rounded-md w-[470px] font-semibold pl-6"></input>
                    </div>
                    <label className="text-[30px] font-semibold pl-6">Professionnel : </label>
                    <div className="bg-white w-[500px] h-[60px] flex items-center rounded-md mt-4 mb-6">
                        <input placeholder="....."  onChange={(e)=>{set_epargne_pro({...epargne_pro , epargne_duree_taux_08 : e.target.value})}} value={epargne_pro.epargne_duree_taux_08} className="bg-[#ffffff] text-[20px] rounded-md w-[470px] font-semibold pl-6"></input>
                    </div>
                    <label className="text-[30px] font-semibold pl-6">Entreprise :</label>
                    <div className="bg-white w-[500px] h-[60px] flex items-center rounded-md mt-4 mb-6">
                        <input placeholder="..."  onChange={(e)=>{set_epargne_ent({...epargne_ent , epargne_duree_taux_08 : e.target.value})}} value={epargne_ent.epargne_duree_taux_08} className="bg-[#ffffff] text-[20px] rounded-md w-[470px] font-semibold pl-6"></input>
                    </div> 
                    
                    
                    
                    
                    <hr/>






                    <label className="text-[30px] font-semibold pl-6"></label>Epargne duree taux 09 :  <br/>
                    <label className="text-[30px] font-semibold pl-6">Perssonnel :</label>
                    <div className="bg-white w-[500px] h-[60px] flex items-center rounded-md mt-4 mb-6">
                        <input placeholder=". . . ."  onChange={(e)=>{set_epargne_perso({...epargne_perso , epargne_duree_taux_09 : e.target.value})}} value={epargne_perso.epargne_duree_taux_09} className="bg-[#ffffff] text-[20px] rounded-md w-[470px] font-semibold pl-6"></input>
                    </div>
                    <label className="text-[30px] font-semibold pl-6">Professionnel : </label>
                    <div className="bg-white w-[500px] h-[60px] flex items-center rounded-md mt-4 mb-6">
                        <input placeholder="....."  onChange={(e)=>{set_epargne_pro({...epargne_pro , epargne_duree_taux_09 : e.target.value})}} value={epargne_pro.epargne_duree_taux_09} className="bg-[#ffffff] text-[20px] rounded-md w-[470px] font-semibold pl-6"></input>
                    </div>
                    <label className="text-[30px] font-semibold pl-6">Entreprise :</label>
                    <div className="bg-white w-[500px] h-[60px] flex items-center rounded-md mt-4 mb-6">
                        <input placeholder="..."  onChange={(e)=>{set_epargne_ent({...epargne_ent , epargne_duree_taux_09 : e.target.value})}} value={epargne_ent.epargne_duree_taux_09} className="bg-[#ffffff] text-[20px] rounded-md w-[470px] font-semibold pl-6"></input>
                    </div> 
                    
                    
                    
                    
                    <hr/>







                    <label className="text-[30px] font-semibold pl-6"></label>Epargne duree taux 10 :  <br/>
                    <label className="text-[30px] font-semibold pl-6">Perssonnel :</label>
                    <div className="bg-white w-[500px] h-[60px] flex items-center rounded-md mt-4 mb-6">
                        <input placeholder=". . . ."  onChange={(e)=>{set_epargne_perso({...epargne_perso , epargne_duree_taux_10 : e.target.value})}} value={epargne_perso.epargne_duree_taux_10} className="bg-[#ffffff] text-[20px] rounded-md w-[470px] font-semibold pl-6"></input>
                    </div>
                    <label className="text-[30px] font-semibold pl-6">Professionnel : </label>
                    <div className="bg-white w-[500px] h-[60px] flex items-center rounded-md mt-4 mb-6">
                        <input placeholder="....."  onChange={(e)=>{set_epargne_pro({...epargne_pro , epargne_duree_taux_10 : e.target.value})}} value={epargne_pro.epargne_duree_taux_10} className="bg-[#ffffff] text-[20px] rounded-md w-[470px] font-semibold pl-6"></input>
                    </div>
                    <label className="text-[30px] font-semibold pl-6">Entreprise :</label>
                    <div className="bg-white w-[500px] h-[60px] flex items-center rounded-md mt-4 mb-6">
                        <input placeholder="..."  onChange={(e)=>{set_epargne_ent({...epargne_ent , epargne_duree_taux_10 : e.target.value})}} value={epargne_ent.epargne_duree_taux_10} className="bg-[#ffffff] text-[20px] rounded-md w-[470px] font-semibold pl-6"></input>
                    </div> 
                    
                    
                    
                    
                    {/*EPARGNE---------------------------------------------------------------------------------------------------------------------------*/}
                    <label className="text-[40px] font-semibold pl-6">Coffre Fort : </label><br />     
                    <label className="text-[30px] font-semibold pl-6"></label>Petit : <br/>
                    <label className="text-[30px] font-semibold pl-6">Perssonnel :</label>
                    <div className="bg-white w-[500px] h-[60px] flex items-center rounded-md mt-4 mb-6">
                        <input placeholder=". . . ."  onChange={(e)=>{set_coffre_fort_perso({...coffre_fort_perso ,petit : e.target.value})}} value={coffre_fort_perso.petit} className="bg-[#ffffff] text-[20px] rounded-md w-[470px] font-semibold pl-6"></input>
                    </div>
                    <label className="text-[30px] font-semibold pl-6">Professionnel : </label>
                    <div className="bg-white w-[500px] h-[60px] flex items-center rounded-md mt-4 mb-6">
                        <input placeholder="....."  onChange={(e)=>{set_coffre_fort_pro({...coffre_fort_pro ,petit : e.target.value})}} value={coffre_fort_pro.petit} className="bg-[#ffffff] text-[20px] rounded-md w-[470px] font-semibold pl-6"></input>
                    </div>
                    <label className="text-[30px] font-semibold pl-6">Entreprise :</label>
                    <div className="bg-white w-[500px] h-[60px] flex items-center rounded-md mt-4 mb-6">
                        <input placeholder="..."  onChange={(e)=>{set_coffre_fort_ent({...coffre_fort_ent ,petit : e.target.value})}} value={coffre_fort_ent.petit} className="bg-[#ffffff] text-[20px] rounded-md w-[470px] font-semibold pl-6"></input>
                    </div> 
                    
                    
                    
                    
                    <hr/>


                    <label className="text-[30px] font-semibold pl-6"></label>Moyen : <br/>
                    <label className="text-[30px] font-semibold pl-6">Perssonnel :</label>
                    <div className="bg-white w-[500px] h-[60px] flex items-center rounded-md mt-4 mb-6">
                        <input placeholder=". . . ."  onChange={(e)=>{set_coffre_fort_perso({...coffre_fort_perso ,moyen : e.target.value})}} value={coffre_fort_perso.moyen} className="bg-[#ffffff] text-[20px] rounded-md w-[470px] font-semibold pl-6"></input>
                    </div>
                    <label className="text-[30px] font-semibold pl-6">Professionnel : </label>
                    <div className="bg-white w-[500px] h-[60px] flex items-center rounded-md mt-4 mb-6">
                        <input placeholder="....."  onChange={(e)=>{set_coffre_fort_pro({...coffre_fort_pro ,moyen : e.target.value})}} value={coffre_fort_pro.moyen} className="bg-[#ffffff] text-[20px] rounded-md w-[470px] font-semibold pl-6"></input>
                    </div>
                    <label className="text-[30px] font-semibold pl-6">Entreprise :</label>
                    <div className="bg-white w-[500px] h-[60px] flex items-center rounded-md mt-4 mb-6">
                        <input placeholder="..."  onChange={(e)=>{set_coffre_fort_ent({...coffre_fort_ent ,moyen : e.target.value})}} value={coffre_fort_ent.moyen} className="bg-[#ffffff] text-[20px] rounded-md w-[470px] font-semibold pl-6"></input>
                    </div> 
                    
                    
                    
                    
                    <hr/>



                    <label className="text-[30px] font-semibold pl-6"></label>Grand :<br/>
                    <label className="text-[30px] font-semibold pl-6">Perssonnel :</label>
                    <div className="bg-white w-[500px] h-[60px] flex items-center rounded-md mt-4 mb-6">
                        <input placeholder=". . . ."  onChange={(e)=>{set_coffre_fort_perso({...coffre_fort_perso ,grand : e.target.value})}} value={coffre_fort_perso.grand} className="bg-[#ffffff] text-[20px] rounded-md w-[470px] font-semibold pl-6"></input>
                    </div>
                    <label className="text-[30px] font-semibold pl-6">Professionnel : </label>
                    <div className="bg-white w-[500px] h-[60px] flex items-center rounded-md mt-4 mb-6">
                        <input placeholder="....."  onChange={(e)=>{set_coffre_fort_pro({...coffre_fort_pro ,grand : e.target.value})}} value={coffre_fort_pro.grand} className="bg-[#ffffff] text-[20px] rounded-md w-[470px] font-semibold pl-6"></input>
                    </div>
                    <label className="text-[30px] font-semibold pl-6">Entreprise :</label>
                    <div className="bg-white w-[500px] h-[60px] flex items-center rounded-md mt-4 mb-6">
                        <input placeholder="..."  onChange={(e)=>{set_coffre_fort_ent({...coffre_fort_ent ,grand : e.target.value})}} value={coffre_fort_ent.grand} className="bg-[#ffffff] text-[20px] rounded-md w-[470px] font-semibold pl-6"></input>
                    </div> 
                    
                    
                    
                    
                    <hr/>



                    <label className="text-[30px] font-semibold pl-6"></label>Cautionnement :<br/>
                    <label className="text-[30px] font-semibold pl-6">Perssonnel :</label>
                    <div className="bg-white w-[500px] h-[60px] flex items-center rounded-md mt-4 mb-6">
                        <input placeholder=". . . ."  onChange={(e)=>{set_coffre_fort_perso({...coffre_fort_perso ,cautionnement : e.target.value})}} value={coffre_fort_perso.cautionnement} className="bg-[#ffffff] text-[20px] rounded-md w-[470px] font-semibold pl-6"></input>
                    </div>
                    <label className="text-[30px] font-semibold pl-6">Professionnel : </label>
                    <div className="bg-white w-[500px] h-[60px] flex items-center rounded-md mt-4 mb-6">
                        <input placeholder="....."  onChange={(e)=>{set_coffre_fort_pro({...coffre_fort_pro ,cautionnement : e.target.value})}} value={coffre_fort_pro.cautionnement} className="bg-[#ffffff] text-[20px] rounded-md w-[470px] font-semibold pl-6"></input>
                    </div>
                    <label className="text-[30px] font-semibold pl-6">Entreprise :</label>
                    <div className="bg-white w-[500px] h-[60px] flex items-center rounded-md mt-4 mb-6">
                        <input placeholder="..."  onChange={(e)=>{set_coffre_fort_ent({...coffre_fort_ent ,cautionnement : e.target.value})}} value={coffre_fort_ent.cautionnement} className="bg-[#ffffff] text-[20px] rounded-md w-[470px] font-semibold pl-6"></input>
                    </div> 
                    
                    
                    
                    
                    {/*EPARGNE---------------------------------------------------------------------------------------------------------------------------*/}
                    <label className="text-[40px] font-semibold pl-6">Financement externe : </label><br />     
                    <label className="text-[30px] font-semibold pl-6"></label>Encaissement cheque etranger : <br/>
                    <label className="text-[30px] font-semibold pl-6">Perssonnel :</label>
                    <div className="bg-white w-[500px] h-[60px] flex items-center rounded-md mt-4 mb-6">
                        <input placeholder=". . . ."  onChange={(e)=>{set_financement_externe_perso({...financement_externe_perso ,encaissement_cheque_etranger : e.target.value})}} value={financement_externe_perso.encaissement_cheque_etranger} className="bg-[#ffffff] text-[20px] rounded-md w-[470px] font-semibold pl-6"></input>
                    </div>
                    <label className="text-[30px] font-semibold pl-6">Professionnel : </label>
                    <div className="bg-white w-[500px] h-[60px] flex items-center rounded-md mt-4 mb-6">
                        <input placeholder="....."  onChange={(e)=>{set_financement_externe_pro({...financement_externe_pro , encaissement_cheque_etranger: e.target.value})}} value={financement_externe_pro.encaissement_cheque_etranger} className="bg-[#ffffff] text-[20px] rounded-md w-[470px] font-semibold pl-6"></input>
                    </div>
                    <label className="text-[30px] font-semibold pl-6">Entreprise :</label>
                    <div className="bg-white w-[500px] h-[60px] flex items-center rounded-md mt-4 mb-6">
                        <input placeholder="..."  onChange={(e)=>{set_financement_externe_ent({...financement_externe_ent ,encaissement_cheque_etranger : e.target.value })}} value={financement_externe_ent.encaissement_cheque_etranger} className="bg-[#ffffff] text-[20px] rounded-md w-[470px] font-semibold pl-6"></input>
                    </div> 
                    
                    
                    
                    
                    <hr/>
    


                    <label className="text-[30px] font-semibold pl-6"></label>Virement reçu<br/>
                    <label className="text-[30px] font-semibold pl-6">Perssonnel :</label>
                    <div className="bg-white w-[500px] h-[60px] flex items-center rounded-md mt-4 mb-6">
                        <input placeholder=". . . ."  onChange={(e)=>{set_financement_externe_perso({...financement_externe_perso ,virement_recu : e.target.value})}} value={financement_externe_perso.virement_recu} className="bg-[#ffffff] text-[20px] rounded-md w-[470px] font-semibold pl-6"></input>
                    </div>
                    <label className="text-[30px] font-semibold pl-6">Professionnel : </label>
                    <div className="bg-white w-[500px] h-[60px] flex items-center rounded-md mt-4 mb-6">
                        <input placeholder="....."  onChange={(e)=>{set_financement_externe_pro({...financement_externe_pro , virement_recu: e.target.value})}} value={financement_externe_pro.virement_recu} className="bg-[#ffffff] text-[20px] rounded-md w-[470px] font-semibold pl-6"></input>
                    </div>
                    <label className="text-[30px] font-semibold pl-6">Entreprise :</label>
                    <div className="bg-white w-[500px] h-[60px] flex items-center rounded-md mt-4 mb-6">
                        <input placeholder="..."  onChange={(e)=>{set_financement_externe_ent({...financement_externe_ent ,virement_recu : e.target.value })}} value={financement_externe_ent.virement_recu} className="bg-[#ffffff] text-[20px] rounded-md w-[470px] font-semibold pl-6"></input>
                    </div> 
                    
                    
                    
                    
                    <hr/>




                    <label className="text-[30px] font-semibold pl-6"></label>Virement emis<br/>
                    <label className="text-[30px] font-semibold pl-6">Perssonnel :</label>
                    <div className="bg-white w-[500px] h-[60px] flex items-center rounded-md mt-4 mb-6">
                        <input placeholder=". . . ."  onChange={(e)=>{set_financement_externe_perso({...financement_externe_perso ,virement_emis : e.target.value})}} value={financement_externe_perso.virement_emis} className="bg-[#ffffff] text-[20px] rounded-md w-[470px] font-semibold pl-6"></input>
                    </div>
                    <label className="text-[30px] font-semibold pl-6">Professionnel : </label>
                    <div className="bg-white w-[500px] h-[60px] flex items-center rounded-md mt-4 mb-6">
                        <input placeholder="....."  onChange={(e)=>{set_financement_externe_pro({...financement_externe_pro ,virement_emis : e.target.value})}} value={financement_externe_pro.virement_emis} className="bg-[#ffffff] text-[20px] rounded-md w-[470px] font-semibold pl-6"></input>
                    </div>
                    <label className="text-[30px] font-semibold pl-6">Entreprise :</label>
                    <div className="bg-white w-[500px] h-[60px] flex items-center rounded-md mt-4 mb-6">
                        <input placeholder="..."  onChange={(e)=>{set_financement_externe_ent({...financement_externe_ent ,virement_emis : e.target.value })}} value={financement_externe_ent.virement_emis} className="bg-[#ffffff] text-[20px] rounded-md w-[470px] font-semibold pl-6"></input>
                    </div> 
                    
                    
                    
                    
                    <hr/>





                    <label className="text-[30px] font-semibold pl-6"></label>Exportation domiciliation <br/>
                    <label className="text-[30px] font-semibold pl-6">Perssonnel :</label>
                    <div className="bg-white w-[500px] h-[60px] flex items-center rounded-md mt-4 mb-6">
                        <input placeholder=". . . ."  onChange={(e)=>{set_financement_externe_perso({...financement_externe_perso ,exportation_domiciliation : e.target.value})}} value={financement_externe_perso.exportation_domiciliation} className="bg-[#ffffff] text-[20px] rounded-md w-[470px] font-semibold pl-6"></input>
                    </div>
                    <label className="text-[30px] font-semibold pl-6">Professionnel : </label>
                    <div className="bg-white w-[500px] h-[60px] flex items-center rounded-md mt-4 mb-6">
                        <input placeholder="....."  onChange={(e)=>{set_financement_externe_pro({...financement_externe_pro ,exportation_domiciliation : e.target.value})}} value={financement_externe_pro.exportation_domiciliation} className="bg-[#ffffff] text-[20px] rounded-md w-[470px] font-semibold pl-6"></input>
                    </div>
                    <label className="text-[30px] font-semibold pl-6">Entreprise :</label>
                    <div className="bg-white w-[500px] h-[60px] flex items-center rounded-md mt-4 mb-6">
                        <input placeholder="..."  onChange={(e)=>{set_financement_externe_ent({...financement_externe_ent ,exportation_domiciliation : e.target.value })}} value={financement_externe_ent.exportation_domiciliation} className="bg-[#ffffff] text-[20px] rounded-md w-[470px] font-semibold pl-6"></input>
                    </div> 
                    
                    
                    
                    
                    <hr/>




                    <label className="text-[30px] font-semibold pl-6"></label>Importation domiciliation<br/>
                    <label className="text-[30px] font-semibold pl-6">Perssonnel :</label>
                    <div className="bg-white w-[500px] h-[60px] flex items-center rounded-md mt-4 mb-6">
                        <input placeholder=". . . ."  onChange={(e)=>{set_financement_externe_perso({...financement_externe_perso , importation_domiciliation: e.target.value})}} value={financement_externe_perso.importation_domiciliation} className="bg-[#ffffff] text-[20px] rounded-md w-[470px] font-semibold pl-6"></input>
                    </div>
                    <label className="text-[30px] font-semibold pl-6">Professionnel : </label>
                    <div className="bg-white w-[500px] h-[60px] flex items-center rounded-md mt-4 mb-6">
                        <input placeholder="....."  onChange={(e)=>{set_financement_externe_pro({...financement_externe_pro , importation_domiciliation: e.target.value})}} value={financement_externe_pro.importation_domiciliation} className="bg-[#ffffff] text-[20px] rounded-md w-[470px] font-semibold pl-6"></input>
                    </div>
                    <label className="text-[30px] font-semibold pl-6">Entreprise :</label>
                    <div className="bg-white w-[500px] h-[60px] flex items-center rounded-md mt-4 mb-6">
                        <input placeholder="..."  onChange={(e)=>{set_financement_externe_ent({...financement_externe_ent ,importation_domiciliation : e.target.value })}} value={financement_externe_ent.importation_domiciliation} className="bg-[#ffffff] text-[20px] rounded-md w-[470px] font-semibold pl-6"></input>
                    </div> 
                    
                    
                    
                    
                    <hr/>




                    <label className="text-[30px] font-semibold pl-6"></label>Transfert libre prelevement compte dinars<br/>
                    <label className="text-[30px] font-semibold pl-6">Perssonnel :</label>
                    <div className="bg-white w-[500px] h-[60px] flex items-center rounded-md mt-4 mb-6">
                        <input placeholder=". . . ."  onChange={(e)=>{set_financement_externe_perso({...financement_externe_perso ,transfert_libre_prelevement_compte_dinars : e.target.value})}} value={financement_externe_perso.transfert_libre_prelevement_compte_dinars} className="bg-[#ffffff] text-[20px] rounded-md w-[470px] font-semibold pl-6"></input>
                    </div>
                    <label className="text-[30px] font-semibold pl-6">Professionnel : </label>
                    <div className="bg-white w-[500px] h-[60px] flex items-center rounded-md mt-4 mb-6">
                        <input placeholder="....."  onChange={(e)=>{set_financement_externe_pro({...financement_externe_pro ,transfert_libre_prelevement_compte_dinars : e.target.value})}} value={financement_externe_pro.transfert_libre_prelevement_compte_dinars} className="bg-[#ffffff] text-[20px] rounded-md w-[470px] font-semibold pl-6"></input>
                    </div>
                    <label className="text-[30px] font-semibold pl-6">Entreprise :</label>
                    <div className="bg-white w-[500px] h-[60px] flex items-center rounded-md mt-4 mb-6">
                        <input placeholder="..."  onChange={(e)=>{set_financement_externe_ent({...financement_externe_ent ,transfert_libre_prelevement_compte_dinars : e.target.value })}} value={financement_externe_ent.transfert_libre_prelevement_compte_dinars} className="bg-[#ffffff] text-[20px] rounded-md w-[470px] font-semibold pl-6"></input>
                    </div> 
                    
                    
                    
                    
                    <hr/>





                    <label className="text-[30px] font-semibold pl-6"></label>Transfert libre prelevement compte devise :<br/>
                    <label className="text-[30px] font-semibold pl-6">Perssonnel :</label>
                    <div className="bg-white w-[500px] h-[60px] flex items-center rounded-md mt-4 mb-6">
                        <input placeholder=". . . ."  onChange={(e)=>{set_financement_externe_perso({...financement_externe_perso ,transfert_libre_prelevement_compte_devise : e.target.value})}} value={financement_externe_perso.transfert_libre_prelevement_compte_devise} className="bg-[#ffffff] text-[20px] rounded-md w-[470px] font-semibold pl-6"></input>
                    </div>
                    <label className="text-[30px] font-semibold pl-6">Professionnel : </label>
                    <div className="bg-white w-[500px] h-[60px] flex items-center rounded-md mt-4 mb-6">
                        <input placeholder="....."  onChange={(e)=>{set_financement_externe_pro({...financement_externe_pro ,transfert_libre_prelevement_compte_devise : e.target.value})}} value={financement_externe_pro.transfert_libre_prelevement_compte_devise} className="bg-[#ffffff] text-[20px] rounded-md w-[470px] font-semibold pl-6"></input>
                    </div>
                    <label className="text-[30px] font-semibold pl-6">Entreprise :</label>
                    <div className="bg-white w-[500px] h-[60px] flex items-center rounded-md mt-4 mb-6">
                        <input placeholder="..."  onChange={(e)=>{set_financement_externe_ent({...financement_externe_ent ,transfert_libre_prelevement_compte_devise : e.target.value })}} value={financement_externe_ent.transfert_libre_prelevement_compte_devise} className="bg-[#ffffff] text-[20px] rounded-md w-[470px] font-semibold pl-6"></input>
                    </div> 
                    
                    
                    
                    
                    <hr/>

                    <button>submit</button>
                </form>
            </div>
        </div>
    )
}

export default AdminAjouterBanque;