const express = require('express');

const wheresRouter = express.Router();
const mongoose = require('mongoose');
const WhereToGo = require('../model/wheretogo1');
var typ;
const assert = require('assert');
const ejsLint = require('ejs-lint');


wheresRouter.route('/')
    .get((req, res) => {
        res.render('offers')
    });


wheresRouter.route('/:id')
    .get((req, res) => {

        const id = req.params.id;

        switch (id) {
            case 0:
                typ = "backwater"
                break;
            case 1:
                typ = "beaches"
                break;
            case 2:
                typ = "hills"
                break;
            case 3:
                typ = "wildlife"
                break;
            case 4:
                typ = "fort"
                break;
            case 5:
                typ = "waterfall"
                break;
            case 6:
                typ = "museum"
                break;
            case 7:
                typ = "pilgrimcenter"
                break;
            case 8:
                typ = "placeofinterest"
                break;
            case 9:
                typ = "picnic"
                break;
            case 10:
                typ = "monuments"
                break;
        }
        console.log(typ);
        var query = { "advtype": typ }
        WhereToGo.find(query, 'advtype name img', function(err, WhereToGo) {
            // assert.equal(err, null);
            if (err) throw err;
            console.log("popcorn");
            console.log(WhereToGo.length);
            console.log('%s %s is a %s.', WhereToGo.advtype, WhereToGo.name,
                WhereToGo.img);
            res.render('wheretogo.ejs', { WhereToGo })

        })

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



        // where.find().toArray((err, Hill) => {
        //     assery.equal(err, null);
        //     console.log(Hill);
        //     res.sendfile('wheretogo.ejs', { Hill });
        // })
    })
module.exports = wheresRouter;