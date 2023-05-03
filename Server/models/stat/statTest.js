const {client} = require('pg')
const { connectDB } = require('../connectDatabase');
const { disconnectDB } = require('../disconnectDatabase');

const {adminNumber} = require('./adminNumber');
const {annonceNumber} = require('./annonceNumber');
const {bankNumber} = require('./bankNumber');
const {getComparaisonNumber, incrementComparaisonNumber} = require('./comparaisonNumber')
const {getStat} = require('./getStat')

async function statTest(test_type){
    const client = await connectDB();
    try{
        switch(test_type){
            case 'adminNumber':
                const admins = await adminNumber(client);
                console.log('Number of admins (test) : ', admins);
                break;

            case 'annonceNumber':
                const annonces = await annonceNumber(client);
                console.log('Number of annonces (test) : ', annonces);
                break;

            case 'bankNumber':
                const banks = await bankNumber(client);
                console.log('Number of banks (test) : ', banks);
                break;
            
            case 'comparaisonNumber':
                const comparaisons = await getComparaisonNumber(client);
                console.log('Number of comparaisons (test) : ', comparaisons);
                break;

            case 'incrementComparaisonNumber':
                const newComparaisonNumber = await incrementComparaisonNumber(client);
                console.log('New Number of comparaisons (test) : ', newComparaisonNumber);
                break;

            case 'getStat':
                const stat = await getStat(client);
                console.log('Stat (test) : ', stat);
                break;
        }
    }
    catch(err){
        console.error('Error Testing stats', err);
    }
    finally{
        await disconnectDB(client);
    }
}

statTest('getStat')