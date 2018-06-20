var sendResponse = function (res, status, data) {
    try {
        if (res.status && typeof (res.status) === 'function') {
            res.status(status);
        }
        if (res.json && typeof (res.json) === 'function') {
            res.json(data);
        }
    }
    catch (e) {
        console.log(e);
    }
}

module.exports = {
    sendResponse: sendResponse
};