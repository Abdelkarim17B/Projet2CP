const {client} = require('pg')

async function getStat(client){
    stat = {}
    try{
        // adminNumber
        const adminResult = await client.query('SELECT COUNT(*) FROM admin');
        const adminNumber = adminResult.rows[0].count;
        console.log('Number of admins : ', adminNumber);
        // annonceNumber
        const annonceResult = await client.query('SELECT COUNT(*) FROM annonce');
        const annonceNumber = annonceResult.rows[0].count;
        console.log('Number of annonces : ', annonceNumber);
        // bankNumber
        const bankResult = await client.query('SELECT COUNT(*) FROM bank');
        const bankNumber = bankResult.rows[0].count;
        console.log('Number of banks : ', bankNumber);
        // comparaisonNumber
        const comparaisonResult = await client.query(`SELECT valeur_statistique FROM stat WHERE nom_statistique='nombre_comparaison'`);
        const comparaisonNumber = comparaisonResult.rows[0].valeur_statistique;
        console.log('Number of comparaisons : ', comparaisonNumber);
        // stat construction
        stat = {
            adminNumber: adminNumber,
            annonceNumber: annonceNumber,
            bankNumber: bankNumber,
            comparaisonNumber: String(comparaisonNumber)
        }
    }
    catch(err){
        console.error('Error getting stats', err);
    }
    finally{
        console.log('getStat Done');
    }
    return stat;
}

module.exports = {getStat}