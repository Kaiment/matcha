const router = require('express').Router();
const signup = require('./signup');
const signin = require('./signin');
const setup = require('./setup');

router.get('/', (req, res) => {
    res.render(__dirname + "/../views/index.pug");
});
router.post('/', (req, res) => {
    res.redirect('/');
});

router.get('/soundboard', (req, res) => {
    res.render(__dirname + '/../views/soundboard.pug');
})

router.use('/signup', signup);
router.use('/signin', signin);
router.use('/setup', setup);

module.exports = router;