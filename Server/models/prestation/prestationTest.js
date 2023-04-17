const {client} = require('../client');
const { connectDB } = require('../connectDatabase');
const { disconnectDB } = require('../disconnectDatabase');

const {prestationObjectConstructor} = require('../../helpers/prestationObjectConstructor.js');

const {createPrestation} = require('./createPrestation');
const {deletePrestation} = require('./deletePrestation');
const {updatePrestation} = require('./updatePrestation');
const {getPrestation} = require('./getPrestation');

/* Input */
const id_banque = "0"
const categories = ["gestion_de_compte", "financement_externe"]
const types = ["personnel", "professionnel"]
const prestationObjectExample = prestationObjectConstructor(id_banque, categories, types)

console.log('Prestation Object : ', prestationObjectExample);

async function PrestationTest(client, PrestationObject, categories, types, test_type){
    try{
        await connectDB(client);
        switch(test_type){
            case 'create':
                await createPrestation(client, PrestationObject, categories, types);
                console.log(`Prestation created in category ${categories} and type ${types}! with bank_id : ${PrestationObject.id_banque}`);
                break;

            case 'delete':
                await deletePrestation(client, PrestationObject.id_banque);
                console.log('Prestation deleted!');
                break;

            case 'update':
                await updatePrestation(client, PrestationObject);
                console.log('Prestation updated! with id : ', PrestationObject.id_banque);
                break;
            
            case 'get':
                const resultPrestation = await getPrestation(client, PrestationObject.id_banque);
                if(resultPrestation == null){
                    console.log('Prestation does not exist');
                }
                else{
                    console.log('Prestation exists :', resultPrestation);
                }
                break;
        }
    }
    catch(err){
        console.error('Error Testing Prestation', err);
    }
    finally{
        await disconnectDB(client);
    }
}

PrestationTest(client, prestationObjectExample, 'create');