const router = require('express').Router();

router.post('/', (req, res) => {
    res.redirect('../');
});

module.exports = router;