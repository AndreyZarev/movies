const router = require('express').Router()

router.get('/cast/create', (req, res) => {
    res.render('create')
})

module.exports = router