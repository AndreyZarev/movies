const router = require('express').Router()
const { getErrorMessage } = require("../utils/errorsHandler")
const authService = require('../service/authService')

router.get('/register', (req, res) => {
    res.render('auth/register')
});


router.post('/register', async (req, res) => {

    const userData = req.body;

    try {
        await authService.register(userData);

        res.redirect('/auth/login');
    } catch (err) {
        const message = getErrorMessage(err);

        res.render('auth/register', { ...userData, error: message });
    }
});

router.get('/login', (req, res) => {
    res.render('auth/login')
});

router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {

        const token = await authService.login(email, password);
        // we have a token
        res.cookie('auth', token);

        res.redirect('/');
    } catch {


        res.status(400).render('auth/login', { error: "message" });
    }

})
router.get("/logout", async (req, res) => {
    res.clearCookie('auth');
    res.redirect('/');
});

module.exports = router