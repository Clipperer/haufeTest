/**
 * Created by Clipperer on 05-Apr-17.
 */
var express = require('express');
var app = express();
var router = express.Router();
var clients = require('./clients.json');
var clientDetails = require('./clientsDetails.json');
var _ = require('lodash');

app.use(express.static('dist'));

app.listen(8000, function () {
    console.log('Haufe test app listening on port 8000!')
})

app.get('/client/:id', function (req, res, next) {
    let id = parseInt(req.params.id);
    res.json(_.find(clientDetails, ["id", id]));
    next();
});

app.get('/clients', function (req, res, next) {
    res.json(clients);
    next();
});