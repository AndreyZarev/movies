const router = require('express').Router()

const movieService = require('./../service/movieService')
const {isAuth} = require('../middleware/authMiddleware')



router.get('/movie/create',isAuth, (req, res) => {
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
    res.status(404)
    console.log(err.message);
    res.redirect('/movie/create')
   }
});


module.exports = router
