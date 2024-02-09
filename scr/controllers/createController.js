const router = require('express').Router()
const { getErrorMessage } = require('../utils/errorsHandler')
const movieService = require('./../service/movieService')
const { isAuth } = require('../middleware/authMiddleware')



router.get('/movie/create', isAuth, (req, res) => {
    res.render("create");
});

router.post('/movie/create', async (req, res) => {
    const newMovie = {
        ...req.body,
        owner: req.user._id
    }
    try {
        await movieService.create(newMovie);
        res.redirect('/')
    } catch (err) {
        const message = getErrorMessage(err)
        res.status(400).render('create', { error: message, ...newMovie })
    }
});


module.exports = router
