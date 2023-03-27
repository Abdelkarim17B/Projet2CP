const connection = require('./connect.js');

connection.query(`CREATE TABLE personnel (
    id SERIAL PRIMARY KEY,
    id_gestion_compte INT,
    id_gestion_distance INT,
    id_option_paiement INT,
    id_moyens_paiement INT,
    id_prets_credits INT,
    id_placement INT,
    id_epargne INT,
    id_assurance INT,
    id_coffre_forts INT,
    id_financement_externe INT,
    id_special INT,
    FOREIGN KEY (id_gestion_compte) REFERENCES gestion_compte_personnel(id),
    FOREIGN KEY (id_gestion_distance) REFERENCES gestion_distance_personnel(id),
    FOREIGN KEY (id_option_paiement) REFERENCES option_paiement_personnel(id),
    FOREIGN KEY (id_moyens_paiement) REFERENCES moyens_paiement_personnel(id),
    FOREIGN KEY (id_prets_credits) REFERENCES prets_credits_personnel(id),
    FOREIGN KEY (id_placement) REFERENCES placement_personnel(id),
    FOREIGN KEY (id_epargne) REFERENCES epargne_personnel(id),
    FOREIGN KEY (id_assurance) REFERENCES assurance_personnel(id),
    FOREIGN KEY (id_coffre_forts) REFERENCES coffre_forts_personnel(id),
    FOREIGN KEY (id_financement_externe) REFERENCES financement_externe_personnel(id),
    FOREIGN KEY (id_special) REFERENCES special_personnel(id)
    )`
    , (err, result) => {
        if (err) {
          console.error('Error creating personnal index table:', err);
        } else {
          console.log('Personal Index Table created successfully.');
        }
      });


connection.query(`CREATE TABLE professionel (
    id SERIAL PRIMARY KEY,
    id_gestion_compte INT,
    id_gestion_distance INT,
    id_option_paiement INT,
    id_moyens_paiement INT,
    id_prets_credits INT,
    id_placement INT,
    id_epargne INT,
    id_assurance INT,
    id_coffre_forts INT,
    id_financement_externe INT,
    id_special INT,
    FOREIGN KEY (id_gestion_compte) REFERENCES gestion_compte_professionnel(id),
    FOREIGN KEY (id_gestion_distance) REFERENCES gestion_distance_professionnel(id),
    FOREIGN KEY (id_option_paiement) REFERENCES option_paiement_professionnel(id),
    FOREIGN KEY (id_moyens_paiement) REFERENCES moyens_paiement_professionnel(id),
    FOREIGN KEY (id_prets_credits) REFERENCES prets_credits_professionnel(id),
    FOREIGN KEY (id_placement) REFERENCES placement_professionnel(id),
    FOREIGN KEY (id_epargne) REFERENCES epargne_professionnel(id),
    FOREIGN KEY (id_assurance) REFERENCES assurance_professionnel(id),
    FOREIGN KEY (id_coffre_forts) REFERENCES coffre_forts_professionnel(id),
    FOREIGN KEY (id_financement_externe) REFERENCES financement_externe_professionnel(id),
    FOREIGN KEY (id_special) REFERENCES special_professionnel(id)
    )`
    , (err, result) => {
        if (err) {
          console.error('Error creating proffessional index table:', err);
        } else {
          console.log('Professional Index Table created successfully.');
        }
      });

connection.query(`CREATE TABLE entreprise (
    id SERIAL PRIMARY KEY,
    id_gestion_compte INT,
    id_gestion_distance INT,
    id_option_paiement INT,
    id_moyens_paiement INT,
    id_prets_credits INT,
    id_placement INT,
    id_epargne INT,
    id_assurance INT,
    id_coffre_forts INT,
    id_financement_externe INT,
    id_special INT,
    FOREIGN KEY (id_gestion_compte) REFERENCES gestion_compte_entreprise(id),
    FOREIGN KEY (id_gestion_distance) REFERENCES gestion_distance_entreprise(id),
    FOREIGN KEY (id_option_paiement) REFERENCES option_paiement_entreprise(id),
    FOREIGN KEY (id_moyens_paiement) REFERENCES moyens_paiement_entreprise(id),
    FOREIGN KEY (id_prets_credits) REFERENCES prets_credits_entreprise(id),
    FOREIGN KEY (id_placement) REFERENCES placement_entreprise(id),
    FOREIGN KEY (id_epargne) REFERENCES epargne_entreprise(id),
    FOREIGN KEY (id_assurance) REFERENCES assurance_entreprise(id),
    FOREIGN KEY (id_coffre_forts) REFERENCES coffre_forts_entreprise(id),
    FOREIGN KEY (id_financement_externe) REFERENCES financement_externe_entreprise(id),
    FOREIGN KEY (id_special) REFERENCES special_entreprise(id)
    )`
    , (err, result) => {
        if (err) {
          console.error('Error creating conmany index table:', err);
        } else {
          console.log('Company Index Table created successfully.');
        }
      });