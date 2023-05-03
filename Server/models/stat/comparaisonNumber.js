const {client} = require('pg')

async function getComparaisonNumber(client){
    try{
        const result = await client.query(`SELECT valeur_statistique FROM stat WHERE nom_statistique='nombre_comparaison'`);
        console.log('Number of comparaisons : ', result.rows[0].valeur_statistique);
        return result.rows[0].valeur_statistique
    }
    catch(err){
        console.error('Error getting number of comparaisons', err);
    }
    finally{
        console.log('getComparaisonNumber Done');
    }
}

async function incrementComparaisonNumber(client){
    try{
        const resultBefore = await client.query(`SELECT valeur_statistique FROM stat WHERE nom_statistique='nombre_comparaison'`);
        console.log('Current number of comparaisons : ', resultBefore.rows[0].valeur_statistique);
        let newValue = resultBefore.rows[0].valeur_statistique + 1;
        await client.query(`UPDATE stat SET valeur_statistique=${newValue} WHERE nom_statistique='nombre_comparaison'`);
        const resultAfter = await client.query(`SELECT valeur_statistique FROM stat WHERE nom_statistique='nombre_comparaison'`);
        console.log('New number of comparaisons : ', resultAfter.rows[0].valeur_statistique);
        return resultAfter.rows[0].valeur_statistique
    }
    catch(err){
        console.error('Error getting number of comparaisons', err);
    }
    finally{
        console.log('incrementComparaisonNumber Done');
    }
}

module.exports = {getComparaisonNumber, incrementComparaisonNumber}