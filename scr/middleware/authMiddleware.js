const {SECRET} = require('../config/config')
const jwt = require('../lib/jwt')
exports.auth = async (req, res, next) => {

// works now

    const token = req.cookies["auth"];

    if (!token) {
       
return next()
    }

try {
    const decodedToken = await jwt.verify(token, SECRET)

    req.user = decodedToken

    next()
} catch  {
res.clearCookie("auth")
return res.redirect("/auth/login")

}
};


exports.isAuth =  (req, res, next) => {
   

    if(!req.user){
      return  res.redirect("/auth/login")
    }
   
    next()
}