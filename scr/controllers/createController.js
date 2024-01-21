const router = require('express').Router()

router.get('/movie/create', (req, res) => {
    res.render("create", { layout: false });
});

module.exports = router
