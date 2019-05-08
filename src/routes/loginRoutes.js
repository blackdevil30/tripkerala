const express = require('express');

const loginRouter = express.Router();
// const bodyParser = require('body-parser');
// loginRouter.use(bodyParser.urlencoded({ extended: true }));

loginRouter.route('/')
    .post((req, res) => {
        // console.log(req.body);
        var user = req.body.UserName;
        var passwd = req.body.pwd;
        console.log(user);
        console.log(passwd);

        if ((user == "admin") && (passwd == "admin")) {
            res.redirect('/addplace')
        } else {
            res.redirect('/login');
        }

    });

loginRouter.route('/addplace')
    .get((res, req) => {
        res.render("addplace.ejs")
    })
module.exports = loginRouter;