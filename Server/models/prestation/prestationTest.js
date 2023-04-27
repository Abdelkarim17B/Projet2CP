const {client} = require('../client');

const {prestationObjectConstructor} = require('../../helpers/prestationObjectConstructor.js');

const {createPrestation} = require('./createPrestation');
const {deletePrestation} = require('./deletePrestation');
const {updatePrestation} = require('./updatePrestation');
const {getPrestation} = require('./getPrestation');

/* client */
//  console.log('Client : ', client);

/* Retrive input */
const filledBanksIds = ["186", "278", "175", "205", "736"]
const categoriesList = ['gestion_de_compte', 'gestion_a_distance', 'option_de_payment', 'moyens_de_payment', 'prets_et_credits', 'placement', 'epargne', 'coffre_fort', 'financement_externe']
const typesList = ['personnel','professionnel', 'entreprise']

/* Input */
const id_banque = "2"
const categories = ["gestion_de_compte", "gestion_a_distance"]
const types = ["personnel", "entreprise"]
const prestationObjectExample = prestationObjectConstructor(id_banque, categories, types)

//  console.log('Prestation Object : ', prestationObjectExample);

async function PrestationTest(client, PrestationObject, categoriesList, categories, typesList, types,  test_type){
    try{
        switch(test_type){
            case 'create':
                await createPrestation(client, PrestationObject, categories, types);
                console.log(`Prestation created in category ${categories} and type ${types}! with bank_id : ${PrestationObject.id_banque}`);
                break;

            case 'get':
                const resultPrestation = await getPrestation(client, 186, categories, types);
                if(resultPrestation == null){
                    console.log('Prestation does not exist');
                }
                else{
                    console.log('Prestations exists :', resultPrestation);
                }
                break;

            case 'delete':
                await deletePrestation(client, PrestationObject.id_banque, categoriesList);
                console.log('Prestation deleted!');
                break;
            
            case 'update':
                await updatePrestation(client, prestationObject, categories, types);
                console.log('Prestation updated! with id : ', PrestationObject.id_banque);
                break;
            
        }
    }
    catch(err){
        console.error('Error Testing Prestation', err);
    }
    finally{
        console.log('Done Testing Prestation');
    }
}

PrestationTest(client, prestationObjectExample, categoriesList, categories, typesList, types, 'get');


/* PrestationObject :
Prestation Object :  {
  id_banque: '2',
  nom_banque: undefined,
  gestion_de_compte: {
    ouverture_compte_courant: { personnel: 'someValue', entreprise: 'someValue' },
    tenue_compte_courant: { personnel: 'someValue', entreprise: 'someValue' },
    ouverture_compte_cheque: { personnel: 'someValue', entreprise: 'someValue' },
    tenue_compte_cheque: { personnel: 'someValue', entreprise: 'someValue' },
    ouverture_compte_epargne: { personnel: 'someValue', entreprise: 'someValue' },
    tenue_compte_epargne: { personnel: 'someValue', entreprise: 'someValue' },
    ouverture_compte_devise: { personnel: 'someValue', entreprise: 'someValue' },
    tenue_compte_devise: { personnel: 'someValue', entreprise: 'someValue' },
    fermeture_de_compte: { personnel: 'someValue', entreprise: 'someValue' }
  },
  gestion_a_distance: {
    e_banking_abonnement: { personnel: 'someValue', entreprise: 'someValue' },
    e_banking_consultation_solde: { personnel: 'someValue', entreprise: 'someValue' },
    e_banking_virement: { personnel: 'someValue', entreprise: 'someValue' },
    e_banking_paiment: { personnel: 'someValue', entreprise: 'someValue' },
    sms_banking_abonnement: { personnel: 'someValue', entreprise: 'someValue' },
    sms_banking_virement_en_agence: { personnel: 'someValue', entreprise: 'someValue' },
    sms_banking_virement_hors_agence: { personnel: 'someValue', entreprise: 'someValue' },
    service_contact: { personnel: 'someValue', entreprise: 'someValue' }
  }
}
*/
