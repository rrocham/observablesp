const svc = require('../services/dataService');
const { responseToJson, responseToError } = require('../services/utils');

module.exports = async function (context, req) {
    return svc.getSiteGroups()
                .then(responseToJson(context))
                .catch(responseToError(context));
};