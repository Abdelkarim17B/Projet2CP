const {client} = require('pg')
const { connectDB } = require('../connectDatabase');
const { disconnectDB } = require('../disconnectDatabase');

const {adminNumber} = require('./adminNumber');
const {annonceNumber} = require('./annonceNumber');
const {bankNumber} = require('./bankNumber');
const {getComparaisonNumber, incrementComparaisonNumber} = require('./comparaisonNumber')

async function statTest(test_type){
    try{
        await connectDB(client);
        switch(test_type){
            case 'adminNumber':
                const admins = await adminNumber(client);
                console.log('Number of admins : ', admins);
                break;

            case 'annonceNumber':
                const annonces = await annonceNumber(client);
                console.log('Number of annonces : ', annonces);
                break;

            case 'bankNumber':
                const banks = await bankNumber(client);
                console.log('Number of banks : ', banks);
                break;
            
            case 'comparaisonNumber':
                const comparaisons = await getComparaisonNumber(client);
                console.log('Number of comparaisons : ', comparaisons);
                break;

            case 'incrementComparaisonNumber':
                const currentComparaisons = await getComparaisonNumber(client);
                console.log('Number of comparaisons : ', comparaisons);
                break;
        }
    }
    catch(err){
        console.error('Error Testing admin', err);
    }
    finally{
        await disconnectDB(client);
    }
}

adminTest(client, adminObject, 'get');