const svc = require('../services/dataService');
const { responseToJson, responseToError } = require('../services/utils');
module.exports = async function (context, req) {
    const search = req.query.q || req.body.q;
    return svc.searchWeb(search)
            .then(responseToJson(context))
            .catch(responseToError(context));
};