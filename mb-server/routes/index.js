var express = require('express');
var router = express.Router();
const apiRoutes = require('./apiRoutes');

/**
 * Catch all routes
 * @param {any} app 
 */
module.exports = function(app){

    app.use('/api', apiRoutes);

    app.get('*', function(req, res){
      res.sendFile('./public/index.html');
    }); 

    app.get('/favicon.ico', function(req, res){
      res.sendStatus(204);
    });
};
