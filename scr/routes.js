const router = require('express').Router();

const homeController = require('./controllers/homeController')

const aboutController = require('./controllers/aboutControler')

router.use(aboutController)
router.use(homeController)




router.get('/create', (req, res) => {
    res.render("create", { layout: false });
});

router.get('/search', (req, res) => {
    res.render("search", { layout: false });
});

router.get('/*', (req, res) => {
    res.render("404", { layout: false });
});



module.exports = router