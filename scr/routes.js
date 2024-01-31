const router = require('express').Router();

const homeController = require('./controllers/homeController')

const aboutController = require('./controllers/aboutController')

const createController = require('./controllers/createController')

const castController = require('./controllers/castController')

router.use(aboutController)

router.use(homeController)

router.use(createController)

router.use(castController)






router.get('/*', (req, res) => {
    res.render("404", { layout: false });
});



module.exports = router