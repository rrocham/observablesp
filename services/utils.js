exports.responseToJson = function responseToJson(context) {
    return function (data) {
        context.res = {
            body: {
                data
            }
        };
    }
}

const errorMessage = error => error && error.message ? error.message : 'Unknown error.';

exports.responseToError = function responseToError(context) {
    return function (error) {
        context.log.error(error);
        context.res = {
            status: 500,
            body: {
                error: errorMessage(error)
            }
        };
    }
}