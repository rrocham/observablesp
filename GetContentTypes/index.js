const svc = require('../services/dataService');
const { responseToJson, responseToError } = require('../services/utils');
module.exports = async function (context, req) {
    
    return svc.getContentTypes()
            .then(responseToJson(context))
            .catch(responseToError(context));
};