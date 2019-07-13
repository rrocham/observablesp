const { sp } = require('../sp');

exports.getWebInfo = function () {
    const selector = [
        'Created',
        'Description',
        'Id',
        'LastItemModifiedDate',
        'LastItemUserModifiedDate',
        'Title',
        'Url',
        'WelcomePage'
    ];
    return sp.web.select(...selector).get();
    //Promise.reject(new Error('Something bad happened...'))
}

exports.getWebLists = function () {
    const selector = [
        'BaseTemplate',
        'BaseType',
        'Description',
        'DefaultViewUrl',
        'Hidden',
        'ItemCount',
        'Id',
        'LastItemDeletedDate',
        'LastItemModifiedDate',
        'LastItemUserModifiedDate',
        'Title',
        'ParentWebUrl'
    ];
    return sp.web.lists.select(...selector).get();
}

exports.getContentTypes = function () {
    const selector = [
        'Description',
        'Group',
        'Hidden',
        'Name',
        'ReadOnly',
        'StringId'
    ];
    return sp.web.contentTypes.select(...selector).get();
}

exports.getListItems = function (listTitle, options = {}) {
    const { orderBy = 'Id', ascending = true, top = null } = options;
    const listItems = sp.web.lists.getByTitle(listTitle).items.orderBy(orderBy, ascending);
    if (top) {
        return listItems.top(top).get();
    } else {
        return listItems.getAll();
    }
}

exports.searchWeb = function (search) {
    return sp.search({ Querytext: search, TrimDuplicates: true });
}