const express = require('express');
const placeRouter = express.Router();


const WhereToGo = require('../model/wheretogo1');

placeRouter.route('/addplace')
    .get((req, res) => {
        res.render("addplace.ejs");
    });

module.exports = placeRouter;