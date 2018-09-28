const journals = require('../models/journalSchema');
const moment = require('moment');
const express = require('express');
var router = express.Router();

module.exports = function(router) {

  //Just creating this for test purpose
    /* GET All journals. */
    router.get('/', function (req, res, next) {

      //seed database
        const firstJournals = [
            {
                username: 'cmadisonne',
                title: 'Love',
                entry: 'Love is the cure to all of our pain.',
                date: new Date('September 26, 2018 03:24:00')
            }
        ];
        journals.create(firstJournals, function (err, results) {
            res.send(results);
        });
    });
};

