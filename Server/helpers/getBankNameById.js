const bankIds = require('../models/template/bank_id.json');

function getBankNameById(id) {
    return bankIds[id];
}

module.exports = {getBankNameById};