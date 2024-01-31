const router = require('express').Router()


router.get('/cast/create', (req, res) => {
    console.log("castController" );
   
   
   res.render('cast/createCast')
})

module.exports = router