const authenticateService = require('./authenticate.service.js');


exports.signin = (req, res, next) => {
    authenticateService.authenticate(req.body)
        .then(user => res.json(user))
        .catch(next);
};

exports.signout = (req, res, next) => {
    authenticateService.authenticate(req.body)
        .then(user => res.json(user))
        .catch(next);
};

