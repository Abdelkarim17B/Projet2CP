const connection = require('./connect.js');

connection.query(`CREATE TABLE banks (
    id SERIAL PRIMARY KEY,
    bank_name VARCHAR(255) NOT NULL,
    address VARCHAR(255) NOT NULL,
    numero_tel VARCHAR(20) NOT NULL,
    numero_fax VARCHAR(20) NOT NULL,
    address_mail VARCHAR(255) NOT NULL,
    logo BYTEA,
    site_web VARCHAR(255) NOT NULL,
    id_personnel INT,
    id_professionel INT,
    id_entreprise INT,
    FOREIGN KEY (id_personnel) REFERENCES personnel(id),
    FOREIGN KEY (id_professionel) REFERENCES professionel(id),
    FOREIGN KEY (id_entreprise) REFERENCES entreprise(id)
  )`
  , (err, result) => {
    if (err) {
      console.error('Error creating banks table:', err);
    } else {
      console.log('Banks Table created successfully.');
    }
  });