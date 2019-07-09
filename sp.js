console.log('sp.js called...');
const { sp } = require('@pnp/sp');
const { SPFetchClient } = require('@pnp/nodejs');
const { spTenantUrl, spId, spSecret } = require('./config');
sp.setup({
    sp: {
        fetchClientFactory: () => {
            return new SPFetchClient(spTenantUrl, spId, spSecret);
        },
        headers: {
            'Accept': 'application/json; odata=nometadata'
        }
    },
});

exports.sp = sp;