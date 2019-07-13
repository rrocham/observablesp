const svc = require('../services/dataService');
const { responseToJson, responseToError } = require('../services/utils');

module.exports = async function (context, req) {

    const listTitle = req.query.listTitle;
    const orderBy = req.query.orderBy;
    const ascending = req.query.ascending && req.query.ascending.toLowerCase() !== 'false';
    const top = req.query.top;

    return svc.getListItems(listTitle, { orderBy, top, ascending })
                .then(responseToJson(context))
                .catch(responseToError(context));
};