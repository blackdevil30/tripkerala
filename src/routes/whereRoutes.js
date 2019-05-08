const express = require('express');

const wheresRouter = express.Router();
const mongoose = require('mongoose');
const WhereToGo = require('../model/wheretogo1');
var advtype;
const assert = require('assert');
const ejsLint = require('ejs-lint');


wheresRouter.route('/')
    .get((req, res) => {
        res.render('offers')
    });


wheresRouter.route('/:id')
    .get((req, res) => {

        const id = req.params.id;
        console.log(id);
        var advtype = " ";
        switch (id) {
            case 0:
                advtype = "backwater"

                break;
            case 1:
                advtype = "beaches"
                break;
            case 2:
                advtype = "hills"
                break;
            case 3:
                advtype = "wildlife"
                break;
            case 4:
                advtype = "fort"
                break;
            case 5:
                advtype = "waterfall"
                break;
            case 6:
                advtype = "museum"
                break;
            case 7:
                advtype = "pilgrimcenter"
                break;
            case 8:
                advtype = "placeofinterest"
                break;
            case 9:
                advtyp = "picnic"
                break;
            case 10:
                advtype = "monuments"
                break;
        }
        console.log(advtype);
        // var query = { "advtype": typ }
        // WhereToGo.find(query, 'advtype name img', function(err, WhereToGo) {
        //     // assert.equal(err, null);
        //     if (err) throw err;
        //     console.log("popcorn");
        //     console.log(WhereToGo.length);
        //     console.log('%s %s is a %s.', WhereToGo.advtype, WhereToGo.name,
        //         WhereToGo.img);
        //     res.render('wheretogo.ejs', { WhereToGo })

        // })

        // where.find({ "advtype": typ }).then((err, Hill) => {
        //     if (err)
        //         console.log(handleError(err));

        //     res.render('wheretogo.ejs', { Hill });
        // });
        // where.find({}).toArray(function(err, Hill) {
        //     assert.equal(err, null);
        //     console.log("Found the following records");
        //     res.render('wheretogo.ejs', { wheretogo1: Hill });
        // })



        WhereToGo.find({}).then(function

            (WhereToGo) {

                res.render('wheretogo.ejs', { WhereToGo });
            })
    })
module.exports = wheresRouter;