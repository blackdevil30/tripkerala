const express = require('express');

const loginRouter = express.Router();

function router() {
    loginRouter.route('/')
        .get((res, req) => {
            var user = req.param('UserName').toString();
            var pwd = req.param('pwd').toString();
            if ((user == "njay") && (pwd == "njay")) {
                res.redirect('index')
            } else {

                res.render('/');
            }
        });
    loginRouter.route('/id')
        .get((req, res) => {
            res.render('signup');
            loginRouter.route('/')
                .get((req, res) => {
                    res.redirect('login');
                })

        })

    return loginRouter;
}
module.exports = router;