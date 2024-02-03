const router = require('express').Router();

const homeController = require('./controllers/homeController')

const aboutController = require('./controllers/aboutController')

const createController = require('./controllers/createController')

const castController = require('./controllers/castController')

const authController = require('./controllers/authController')

router.use(aboutController)

router.use(homeController)

router.use(createController)

router.use("/cast", castController)

router.use("/auth", authController)





router.get('/*', (req, res) => {
    res.render("404", { layout: false });
});



module.exports = router