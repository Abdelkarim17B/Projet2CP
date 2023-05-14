const {getBankNameById} = require('./getBankNameById');

function prestationObjectConstructor(id_banque, categories, types ,prestationTemplate) {
    const prestationObject = {}
    prestationObject["id_banque"] = id_banque
    console.log("the ID : ",id_banque);
    for (let category of categories) {
        prestationObject[category] = {}
        const prestationNames = Object.keys(prestationTemplate["personnel"][category])
        console.log("l7a9na lahna");
        console.log(prestationTemplate);
        for (let prestationName of prestationNames) {
            prestationObject[category][prestationName] = {}
            for (let type of types) {
                prestationObject[category][prestationName][type] = prestationTemplate[type][category][prestationName];
            }
        }
    }
    console.log("l7a9na lahna");
    return prestationObject
}

module.exports = {prestationObjectConstructor};