const router = require('express').Router()

router.get('/create', (req, res) => {
    res.render("create", { layout: false });
});

module.exports = router
