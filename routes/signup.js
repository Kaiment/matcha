const router = require('express').Router();
const controller = require('../controller/user/controller.js')

router.post('/', (req, res) => {
    try {
        controller.signup(req.body);
        res.send({'yo': 'hey'});
    } catch(e) {
        res.send(e);
    }
});

module.exports = router;