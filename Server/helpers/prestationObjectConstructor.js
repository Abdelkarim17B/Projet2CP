const prestationTemplate = require('../models/template/prestation.json');
const {getBankNameById} = require('./getBankNameById');

function prestationObjectConstructor(id_banque, categories, types) {
    const prestationObject = {}
    prestationObject["id_banque"] = id_banque
    prestationObject["nom_banque"] = getBankNameById(id_banque)
    for (let category of categories) {
        prestationObject[category] = {}
        const prestationNames = Object.keys(prestationTemplate["personnel"][category])
        for (let prestationName of prestationNames) {
            prestationObject[category][prestationName] = {}
            for (let type of types) {
                prestationObject[category][prestationName][type] = "someValue"
            }
        }
    }
    return prestationObject
}

module.exports = {prestationObjectConstructor};