const router = require('express').Router();

router.get('/', (req, res) => {
    res.render("home", { layout: false });
});

router.get('/create', (req, res) => {
    res.render("create", { layout: false });
});

router.get('/search', (req, res) => {
    res.render("search", { layout: false });
});
router.get('/about', (req, res) => {
    res.render("about", { layout: false });
});
router.get('/*', (req, res) => {
    res.render("404", { layout: false });
});


module.exports = router