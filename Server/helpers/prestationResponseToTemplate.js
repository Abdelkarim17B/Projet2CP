
function responseToTemplate(response){
    let template = {};
    template.id_banque = response.id_banque;
    for(let type of ["personnel", "professionnel", "entreprise"]){
        template[type] = {};
        for(let category of Object.keys(response).filter(cat => cat !== "id_banque")){
            template[type][category] = {};
            for(let prestation of Object.keys(response[category])){
                template[type][category][prestation] = response[category][prestation][type];
            }
        }
    }
    return template;
}

module.exports = {responseToTemplate};