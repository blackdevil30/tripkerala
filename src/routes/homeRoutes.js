const express = require('express');

const homesRouter = express.Router();

const WhereToGo = require('../model/wheretogo1');
const ejsLint = require('ejs-lint');
homesRouter.route('/')
    .get((req, res) => {
        res.render('index')
    });

// homeRouter.router('/:id')
//     .get((req, res) => {
//         res.render('wheretogosingle'
//             // ,{
//             //     nav,title:"where To Go",
//             // }
//         )
//     })
//     return homeRouter;
// }
module.exports = homesRouter;