const router = require('express').Router()

const castService = require('../service/castService')
router.get('/create', (req, res) => {
    console.log("castController" );
   
   
   res.render('cast/create')
})

router.post('/create', async (req, res) => {
  
    const movieCast = await castService.create(req.body)
    res.redirect("/")
});

module.exports = router