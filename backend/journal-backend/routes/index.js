const journals = require('../models/journalSchema');
const express = require('express');
const moment = require('moment'); //not sure if I'll need but importing just in case
const bodyParser = require('body-parser');

var router = express.Router(); //same as app.get/put/post

//passing router into the function so that it is able to be used. Made exports a function
//full of endpoints

    router.use(bodyParser.json()); //Middleware
    router.use(bodyParser.urlencoded({extended: true}));

const journalModel = require('../models/journalSchema');


/* GET home page/ which shows the most previous journal entry. */
    // router.get('/', function (req, res) {
    //   if(err) {
    //     throw  err;
    //   }
    //   let mostRecent = new Date(Math.max.apply(null, journals.map(function (e) {
    //      return new Date(e.date)
    //   })));
    //     res.send(mostRecent);
    // });

    //Get All Journals
    router.get('/journals', function (req, res) {
        journalModel.find().then(items => res.json(items));
    });

    //Add New Journal Entry
    router.post('/journals/new', (req, res) =>{
        const newJournal = new journalModel ({
            username: req.body.username,
            title: req.body.title,
            entry: req.body.entry,
            date: new Date()
        });

        newJournal.save().then( ()=> res.send('POST request successful'))
    });

    router.delete('/journals/delete', function (req, res) {

        //console.log(req.body);
        journalModel.findByIdAndRemove(req.body.id, function (err) {
            if (err) {
                throw err; // If we get an error then bail
            }
            // Use Express to send a simple SUCCESS message
            res.json({result: 'OK'});
        })

    });


    // Grabs all entries by username
    // router.get('/:uname', (req, res) =>{
    //     journals.find({username: req.params.uname}, function (err, journals) {
    //         if (err) {
    //             throw err;
    //         }
    //         res.send(journals);
    //     })
    // });

module.exports = router;

