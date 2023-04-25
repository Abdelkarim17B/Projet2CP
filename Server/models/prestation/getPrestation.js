const {client} = require('pg');
const { connectDB } = require('../connectDatabase');
const { disconnectDB } = require('../disconnectDatabase');

const {generatePrestationResponse} = require('../../helpers/generatePrestationResponse');
const prestationTemplate = require('../template/prestation.json');


async function getPrestation(client, id_banque, categoriesList, typesList) {

    try{
        await connectDB(client) ;

        response = generatePrestationResponse(id_banque, categoriesList, typesList, prestationTemplate)
        for (let category of categoriesList){
            for (let type of typesList) {
                try {
                    const retriveQuery = `SELECT * FROM ${category} WHERE id_banque = ${id_banque} AND type = '${type}' ;`
                    //  console.log('retrive Query : ', retriveQuery);
                    const queryResponse = await client.query(retriveQuery);
                    if(queryResponse.rows.length == 0){
                        //console.log(`Data does not exist in ${category} table of ${type} type`);
                    }
                    else{
                        //console.log(`Data retrieved successfully into ${category} table of ${type} type`);
                        //console.log('Query Response : ', queryResponse.rows[0]);
                        for (let prestation of Object.keys(response[category])){
                            if (queryResponse.rows[0].prestation != ''){
                                response[category][prestation][type] = queryResponse.rows[0][prestation];
                            }

                        }
                    }
                }
                catch (err) {
                    console.error(`Error retrieving data into ${category} table of ${type} type`, err);
                }
            }
        }
    }
    catch(err){
        console.log('Error retrieving process in prestation :', err);
    }
    finally{
        await disconnectDB(client) ;
    }
    

    return response;
}

module.exports = {getPrestation};