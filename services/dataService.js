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

exports.searchWeb = function (search) {
    return sp.search({ Querytext: search, TrimDuplicates: true });
}