const {client} = require('pg')
const { connectDB } = require('../connectDatabase');
const { disconnectDB } = require('../disconnectDatabase');

async function getComparaisonNumber(client){
    const client = await connectDB(client)
    try{
        const result = await client.query('SELECT valeur_statistique FROM stat WHERE nom_statistique=nombre_comparaison');
        console.log('Number of comparaisons : ', result.rows[0]);
        return result.rows[0]
    }
    catch(err){
        console.error('Error getting number of comparaisons', err);
    }
    finally{
        await disconnectDB(client);
    }
}

async function incrementComparaisonNumber(client){
    const client = await connectDB(client)
    try{
        const result = await client.query('SELECT valeur_statistique FROM stat WHERE nom_statistique=nombre_comparaison');
        console.log('Number of comparaisons : ', result.rows[0]);
        return result.rows[0]
    }
    catch(err){
        console.error('Error getting number of comparaisons', err);
    }
    finally{
        await disconnectDB(client);
    }
}

module.exports = {getComparaisonNumber, incrementComparaisonNumber}