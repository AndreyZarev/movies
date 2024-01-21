const router = require('express').Router();

const homeController = require('./controllers/homeController')
router.get('/create', (req, res) => {
    res.render("create", { layout: false });
});




router.use(homeController)

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