const router = require('express').Router()

const authService = require('../service/authService')

router.get('/register',  (req, res) => {
res.render('auth/register')
});


router.post('/register', async (req, res) => {

    const userData = req.body
    const user = await authService.register(userData)
//    const registerInfo = await 
    });

module.exports = router