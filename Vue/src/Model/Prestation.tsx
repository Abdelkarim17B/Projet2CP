interface gestionDeCompte{
    ouverture_compte_courant:{personnel:String;professionnel:String;entreprise:String};
    tenue_compte_courant:{personnel:String;professionnel:String;entreprise:String};
    ouverture_compte_cheque:{personnel:String;professionnel:String;entreprise:String};
    tenue_compte_cheque:{personnel:String;professionnel:String;entreprise:String};
    ouverture_compte_epargne:{personnel:String;professionnel:String;entreprise:String};
    tenue_compte_epargne:{personnel:String;professionnel:String;entreprise:String};
    ouverture_compte_devise:{personnel:String;professionnel:String;entreprise:String};
    tenue_compte_devise:{personnel:String;professionnel:String;entreprise:String};
    fermeture_de_compte:{personnel:String;professionnel:String;entreprise:String};
}

interface gestionaDistance{
    e_banking_abonnement:{personnel:String;professionnel:String;entreprise:String};
    e_banking_consultation_solde:{personnel:String;professionnel:String;entreprise:String};
    e_banking_virement:{personnel:String;professionnel:String;entreprise:String};
    e_banking_paiment:{personnel:String;professionnel:String;entreprise:String};
    sms_banking_abonnement:{personnel:String;professionnel:String;entreprise:String};
    sms_banking_virement_en_agence:{personnel:String;professionnel:String;entreprise:String};
    sms_banking_virement_hors_agence:{personnel:String;professionnel:String;entreprise:String};
    service_contact:{personnel:String;professionnel:String;entreprise:String};
}

interface optionDePayment{
    versement_en_agence:{personnel:String;professionnel:String;entreprise:String};
    versement_hors_agence:{personnel:String;professionnel:String;entreprise:String};
    virement_en_agence:{personnel:String;professionnel:String;entreprise:String};
    virement_hors_agence:{personnel:String;professionnel:String;entreprise:String};
    prelevement_en_agence:{personnel:String;professionnel:String;entreprise:String};
    prelevement_hors_agence:{personnel:String;professionnel:String;entreprise:String};
    retraits_en_agence:{personnel:String;professionnel:String;entreprise:String};
    retraits_hors_agence:{personnel:String;professionnel:String;entreprise:String};
    payment_cheque_en_agence:{personnel:String;professionnel:String;entreprise:String};
    payment_cheque_hors_agence:{personnel:String;professionnel:String;entreprise:String};
    vente_devise:{personnel:String;professionnel:String;entreprise:String};
    achat_devise:{personnel:String;professionnel:String;entreprise:String};
}

interface moyensDePayment{
    creation_bank_card:{personnel:String;professionnel:String;entreprise:String};
    renouvelement_bank_card:{personnel:String;professionnel:String;entreprise:String};
    remplacement_bank_card:{personnel:String;professionnel:String;entreprise:String};
    edition_code_confidentiel_bank_card:{personnel:String;professionnel:String;entreprise:String};
    retrait_intra_bancaire:{personnel:String;professionnel:String;entreprise:String};
    retrait_inter_bancaire:{personnel:String;professionnel:String;entreprise:String};
    creation_visa:{personnel:String;professionnel:String;entreprise:String};
    renouvelement_visa:{personnel:String;professionnel:String;entreprise:String};
    remplacement_visa:{personnel:String;professionnel:String;entreprise:String};
    edition_code_confidentiel_visa:{personnel:String;professionnel:String;entreprise:String};
}

interface pretsEtCredits{
    decouvert_duree:{personnel:String;professionnel:String;entreprise:String};
    decouvert_taux:{personnel:String;professionnel:String;entreprise:String};
    credit_court_terme_taux:{personnel:String;professionnel:String;entreprise:String};
    credit_moyen_terme_taux:{personnel:String;professionnel:String;entreprise:String};
    credit_long_terme_taux:{personnel:String;professionnel:String;entreprise:String};
    options_possibles:{personnel:String;professionnel:String;entreprise:String};
}

interface placement{
    depots_a_court_terme:{personnel:String;professionnel:String;entreprise:String};
    depots_a_moyen_terme:{personnel:String;professionnel:String;entreprise:String};
    depots_a_long_terme:{personnel:String;professionnel:String;entreprise:String};
}

interface epargne{
    epargne_duree_taux_01:{personnel:String;professionnel:String;entreprise:String};
    epargne_duree_taux_02:{personnel:String;professionnel:String;entreprise:String};
    epargne_duree_taux_03:{personnel:String;professionnel:String;entreprise:String};
    epargne_duree_taux_04:{personnel:String;professionnel:String;entreprise:String};
    epargne_duree_taux_05:{personnel:String;professionnel:String;entreprise:String};
    epargne_duree_taux_06:{personnel:String;professionnel:String;entreprise:String};
    epargne_duree_taux_07:{personnel:String;professionnel:String;entreprise:String};
    epargne_duree_taux_08:{personnel:String;professionnel:String;entreprise:String};
    epargne_duree_taux_09:{personnel:String;professionnel:String;entreprise:String};
    epargne_duree_taux_10:{personnel:String;professionnel:String;entreprise:String};
}

interface coffreFort{
    petit:{personnel:String;professionnel:String;entreprise:String};
    moyen:{personnel:String;professionnel:String;entreprise:String};
    grand:{personnel:String;professionnel:String;entreprise:String};
    cautionnement:{personnel:String;professionnel:String;entreprise:String};
}

interface financementExterne{
    encaissement_cheque_etranger:{personnel:String;professionnel:String;entreprise:String};
    virement_recu:{personnel:String;professionnel:String;entreprise:String};
    virement_emis:{personnel:String;professionnel:String;entreprise:String};
    exportation_domiciliation:{personnel:String;professionnel:String;entreprise:String};
    importation_domiciliation:{personnel:String;professionnel:String;entreprise:String};
    transfert_libre_prelevement_compte_dinars:{personnel:String;professionnel:String;entreprise:String};
    transfert_libre_prelevement_compte_devise:{personnel:String;professionnel:String;entreprise:String};
}

export interface PrestationModel{
    id_banque: number;
    nom_banque: String;
    gestion_de_compte : gestionDeCompte;
    gestion_a_distance : gestionaDistance;
    option_de_payment: optionDePayment;
    moyens_de_payment: moyensDePayment;
    prets_et_credits: pretsEtCredits;
    placement: placement;
    epargne: epargne;
    coffre_fort: coffreFort;
    financement_externe: financementExterne;
}