const svc = require('../services/dataService');
const { responseToJson, responseToError } = require('../services/utils');
module.exports = async function (context, req) {

    return svc.getWebInfo()
            .then(responseToJson(context))
            .catch(responseToError(context));
};