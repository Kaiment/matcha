const router = require('express').Router();
const Mongo_setup = require('../config/mongo_setup');

router.get('/', (req, res) => {
    let db_name = 'Matcha_db';
    try {
        Mongo_setup.create_db(db_name);
        res.send('good');
    } catch (e) {
        console.log(e);
    }
});

module.exports = router;