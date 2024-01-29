const router = require('express').Router()

const movieService = require('./../service/movieService')

router.get('/movie/create', (req, res) => {
    res.render("create");
});

router.post('/movie/create', async (req, res) => {
   const newMovie = req.body

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
