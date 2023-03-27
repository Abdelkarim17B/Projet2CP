const connection = require('./connect.js');

// Offre personnel //
connection.query(`
  CREATE TABLE gestion_compte_personnel (
    id SERIAL PRIMARY KEY,
    ouverture VARCHAR(255),
    tenue_cheque VARCHAR(255),
    tenue_epargne VARCHAR(255),
    fermeture VARCHAR(255)
  );

  CREATE TABLE gestion_distance_personnel (
    id SERIAL PRIMARY KEY,
    e_banking VARCHAR(255),
    e_payment VARCHAR(255),
    service_contact VARCHAR(255)
  );

  CREATE TABLE option_paiement_personnel (
    id SERIAL PRIMARY KEY,
    versement VARCHAR(255),
    virement VARCHAR(255),
    prelevement VARCHAR(255),
    retraits VARCHAR(255),
    cheques VARCHAR(255)
  );

  CREATE TABLE moyens_paiement_personnel (
    id SERIAL PRIMARY KEY,
    creation_card VARCHAR(255),
    renouvelement_card VARCHAR(255),
    remplacement_card VARCHAR(255)
  );

  CREATE TABLE prets_credits_personnel (
    id SERIAL PRIMARY KEY,
    taux_interet VARCHAR(255),
    periode VARCHAR(255),
    utilisation VARCHAR(255)
  );

  CREATE TABLE placement_personnel (
    id SERIAL PRIMARY KEY,
    depots_terme VARCHAR(255),
    bons_caisse VARCHAR(255)
  );

  CREATE TABLE epargne_personnel (
    id SERIAL PRIMARY KEY,
    par_somme VARCHAR(255),
    par_duree VARCHAR(255)
  );

  CREATE TABLE assurance_personnel (
    id SERIAL PRIMARY KEY,
    duree VARCHAR(255)
  );

  CREATE TABLE coffre_forts_personnel (
    id SERIAL PRIMARY KEY,
    petit VARCHAR(255),
    moyen VARCHAR(255),
    grand VARCHAR(255)
  );

  CREATE TABLE financement_externe_personnel (
    id SERIAL PRIMARY KEY,
    exportation VARCHAR(255),
    importation VARCHAR(255),
    echange_device VARCHAR(255)
  );

  CREATE TABLE special_personnel (
    id SERIAL PRIMARY KEY,
    offre_1 VARCHAR(255),
    offre_2 VARCHAR(255),
    offre_3 VARCHAR(255)
  );
`, (err, result) => {
  if (err) {
    console.error('Error creating personnel offers tables:', err);
  } else {
    console.log('Personnel Offers Tables created successfully.');
  }
});

// Offre professionnel //
connection.query(`
  CREATE TABLE gestion_compte_professionnel (
    id SERIAL PRIMARY KEY,
    ouverture VARCHAR(255),
    tenue_cheque VARCHAR(255),
    tenue_epargne VARCHAR(255),
    fermeture VARCHAR(255)
  );

  CREATE TABLE gestion_distance_professionnel (
    id SERIAL PRIMARY KEY,
    e_banking VARCHAR(255),
    e_payment VARCHAR(255),
    service_contact VARCHAR(255)
  );

  CREATE TABLE option_paiement_professionnel (
    id SERIAL PRIMARY KEY,
    versement VARCHAR(255),
    virement VARCHAR(255),
    prelevement VARCHAR(255),
    retraits VARCHAR(255),
    cheques VARCHAR(255)
  );

  CREATE TABLE moyens_paiement_professionnel (
    id SERIAL PRIMARY KEY,
    creation_card VARCHAR(255),
    renouvelement_card VARCHAR(255),
    remplacement_card VARCHAR(255)
  );

  CREATE TABLE prets_credits_professionnel (
    id SERIAL PRIMARY KEY,
    taux_interet VARCHAR(255),
    periode VARCHAR(255),
    utilisation VARCHAR(255)
  );

  CREATE TABLE placement_professionnel (
    id SERIAL PRIMARY KEY,
    depots_terme VARCHAR(255),
    bons_caisse VARCHAR(255)
  );

  CREATE TABLE epargne_professionnel (
    id SERIAL PRIMARY KEY,
    par_somme VARCHAR(255),
    par_duree VARCHAR(255)
  );

  CREATE TABLE assurance_professionnel (
    id SERIAL PRIMARY KEY,
    duree VARCHAR(255)
  );

  CREATE TABLE coffre_forts_professionnel (
    id SERIAL PRIMARY KEY,
    petit VARCHAR(255),
    moyen VARCHAR(255),
    grand VARCHAR(255)
  );

  CREATE TABLE financement_externe_professionnel (
    id SERIAL PRIMARY KEY,
    exportation VARCHAR(255),
    importation VARCHAR(255),
    echange_device VARCHAR(255)
  );

  CREATE TABLE special_professionnel (
    id SERIAL PRIMARY KEY,
    offre_1 VARCHAR(255),
    offre_2 VARCHAR(255),
    offre_3 VARCHAR(255)
  );
`, (err, result) => {
  if (err) {
    console.error('Error creating professional offers tables:', err);
  } else {
    console.log('Proffessional Offers Tables created successfully.');
  }
});

// Offre entreprise //
connection.query(`
  CREATE TABLE gestion_compte_entreprise (
    id SERIAL PRIMARY KEY,
    ouverture VARCHAR(255),
    tenue_cheque VARCHAR(255),
    tenue_epargne VARCHAR(255),
    fermeture VARCHAR(255)
  );

  CREATE TABLE gestion_distance_entreprise (
    id SERIAL PRIMARY KEY,
    e_banking VARCHAR(255),
    e_payment VARCHAR(255),
    service_contact VARCHAR(255)
  );

  CREATE TABLE option_paiement_entreprise (
    id SERIAL PRIMARY KEY,
    versement VARCHAR(255),
    virement VARCHAR(255),
    prelevement VARCHAR(255),
    retraits VARCHAR(255),
    cheques VARCHAR(255)
  );

  CREATE TABLE moyens_paiement_entreprise (
    id SERIAL PRIMARY KEY,
    creation_card VARCHAR(255),
    renouvelement_card VARCHAR(255),
    remplacement_card VARCHAR(255)
  );

  CREATE TABLE prets_credits_entreprise (
    id SERIAL PRIMARY KEY,
    taux_interet VARCHAR(255),
    periode VARCHAR(255),
    utilisation VARCHAR(255)
  );

  CREATE TABLE placement_entreprise (
    id SERIAL PRIMARY KEY,
    depots_terme VARCHAR(255),
    bons_caisse VARCHAR(255)
  );

  CREATE TABLE epargne_entreprise (
    id SERIAL PRIMARY KEY,
    par_somme VARCHAR(255),
    par_duree VARCHAR(255)
  );

  CREATE TABLE assurance_entreprise (
    id SERIAL PRIMARY KEY,
    duree VARCHAR(255)
  );

  CREATE TABLE coffre_forts_entreprise (
    id SERIAL PRIMARY KEY,
    petit VARCHAR(255),
    moyen VARCHAR(255),
    grand VARCHAR(255)
  );

  CREATE TABLE financement_externe_entreprise (
    id SERIAL PRIMARY KEY,
    exportation VARCHAR(255),
    importation VARCHAR(255),
    echange_device VARCHAR(255)
  );

  CREATE TABLE special_entreprise (
    id SERIAL PRIMARY KEY,
    offre_1 VARCHAR(255),
    offre_2 VARCHAR(255),
    offre_3 VARCHAR(255)
  );
`, (err, result) => {
  if (err) {
    console.error('Error creating companies offers tables:', err);
  } else {
    console.log('Comapnies Offers Tables created successfully.');
  }
});