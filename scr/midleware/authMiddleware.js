const {SECRET} = require('../config/config')
exports.auth = async (req, res, next) => {

    const token = req.cookies["auth"];

    if (!token) {
return next()
    }

try {
    const decodedToken = await jwt.verify(token, SECRET)
    regexp.user = decodedToken
    next()
} catch  {

return res.redirect("/auth/login")

}
};