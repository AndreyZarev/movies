const router = require('express').Router()


router.get('/create', (req, res) => {
    console.log("castController" );
   
   
   res.render('cast/create')
})

module.exports = router