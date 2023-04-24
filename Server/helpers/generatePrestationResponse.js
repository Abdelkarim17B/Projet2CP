const {getBankNameById} = require('./getBankNameById');

function generatePrestationResponse (id_banque, categoriesList, typesList, prestationTemplate) {
    console.log(categoriesList, typesList);
    response = {}
    response.id_banque = id_banque;
    response.nom_banque = getBankNameById(id_banque.toString());
    for (let category of categoriesList){
        response[category] = {}
        const categoryPrestation = Object.keys(prestationTemplate["personnel"][category])
        for (let prestation of categoryPrestation){
            response[category][prestation] = {}
            for (let type of typesList) {
                response[category][prestation][type] = "undefined";
            }
        }
    }

    return response;
}

module.exports = {generatePrestationResponse};