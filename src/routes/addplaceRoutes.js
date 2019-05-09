const express = require('express');
const placeRouter = express.Router();
const mongoose = require('mongoose')

const WhereToGo = require('../model/wheretogo1');

// const methodOverride = require('method-override');
const multer = require('multer');
const fs = require('fs');

//storage
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        let dest = path.join(__dirname, '../../public/placeimages/');
        cb(null, dest);
    },
    filename: function(req, file, cb) {
        cb(null, new Date().toISOString().replace(/:/g, '-') + file.originalname);
    }
});

const fileFilter = (req, file, cb) => {
    // reject a file 
    if (file.mimetype == 'image/jpeg' || file.mimetype == 'image/png')
        cb(null, true);
    else {
        cb(null, false);
    }
}

const upload = multer({
    storage: storage,
    limits: {
        fileSize: 1024 * 1024 * 5
    },
    fileFilter: fileFilter
}).single('placeimages');

// placeRouter.use(methodOverride('_method'));

function router() {
    placeRouter.route('/addplace')
        .post(upload, (req, res, (err) => {
            if (err) {
                res.render('addplace', {
                    msg: err

                })
            } else {

                console.log(req.file);

                var stringer = "placeimages/"
                WhereToGo.create({
                    advtype: req.body.advtyp,
                    place: req.body.plc,
                    district: req.body.dist,
                    description: req.body.descript,
                    Img: stringer + req.file.path.replace('N:\miniproject\public\placeimages\\', '')
                }, (err, WhereToGo) => {
                    if (err)
                        console.log(handleError(err));
                    WhereToGo.find((err, WhereToGo) => {
                        if (err) {
                            console.log(handleError(err));
                            res.render('addplace.ejs');
                        } else {
                            res.render('wheretogo', { WhereToGo })
                        }
                    });
                });
            }
            res.redirect('/addplace')
        }));
    return placeRouter;
}
module.exports = router;