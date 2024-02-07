const router = require('express').Router()

const castService = require('../service/castService')
const {isAuth} = require('../middleware/authMiddleware')

router.get('/create', isAuth, (req, res) => {
    console.log("castController" );
   
   
   res.render('cast/create')
})

router.post('/create', isAuth, async (req, res) => {
  
   await castService.create(req.body)
    res.redirect("/")
});

module.exports = router