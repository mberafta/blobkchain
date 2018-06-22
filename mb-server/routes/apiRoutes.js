const express = require('express'),
    router = express.Router(),
    cryptoHelper = require('../helpers/cryptoHelper'),
    responseHelper = require('../helpers/responseHelper');

router.get('/sha256', function (req, res) {
    let param = req.query.tohash;
    if (param) {
        try {
            let sha256Hash = cryptoHelper.getSHA256(param);
            console.log(sha256Hash);
            responseHelper.sendResponse(res, 200,
                { hash: sha256Hash }
            );
        }
        catch (e) {
            console.log(e);
        }
    }
});

router.get('/mine', function (req, res) {
    let constantPart = req.query.constantPart;
    let nonce = 0;
    let hashResult;
    while (cryptoHelper.getSHA256(constantPart + nonce.toString()).substring(0, 4) != '0000') {
        nonce++;
    }
    hashResult = cryptoHelper.getSHA256(constantPart + nonce.toString());
    responseHelper.sendResponse(res, 200, { hash: hashResult, nonce:nonce });
});

module.exports = router;


