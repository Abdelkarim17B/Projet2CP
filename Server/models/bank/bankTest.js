const {client} = require('../client');
const { connectDB } = require('../connectDatabase');
const { disconnectDB } = require('../disconnectDatabase');

const {createBank} = require('./createBank');
const {deleteBank} = require('./deleteBank');
const {updateBank} = require('./updateBank');
const {getBank} = require('./getBank');

/* Bank Test */
const bankObject = {
    id_banque : 2,
    nom_banque: 'banque_02',
    adresse: 'kais',
    num_tel: '0515484625',
    num_fax: '033548422',
    adresse_mail: 'banque_01@gmail.com',
    logo: 'logo.png',
    site_web: 'banque_01.com',
};

async function bankTest(client, bankObject, test_type){
    try{
        await connectDB(client);
        switch(test_type){
            case 'create':
                await createBank(client, bankObject);
                console.log('Bank created! with id : ', bankObject.id_banque);
                break;

            case 'delete':
                await deleteBank(client, bankObject.id_banque);
                console.log('Bank deleted!');
                break;

            case 'update':
                await updateBank(client, bankObject);
                console.log('Bank updated! with id : ', bankObject.id_banque);
                break;
            
            case 'get':
                const resultBank = await getBank(client, bankObject.id_banque);
                if(resultBank == null){
                    console.log('Bank does not exist');
                }
                else{
                    console.log('Bank exists :', resultBank);
                }
                break;
        }
    }
    catch(err){
        console.error('Error Testing Bank', err);
    }
    finally{
        await disconnectDB(client);
    }
}

bankTest(client, bankObject, 'create');