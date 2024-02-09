const User = require('../models/User')
const bcrypt = require('bcrypt');
const jwt = require('../lib/jwt');
const { SECRET } = require('../config/config');
const { email } = require('is');


exports.register = (userData) => {

    const user = User.findOne({ email: userData.email })

    if (user) {
        throw new Error(`User already exists`);
    }
    User.create(userData)
};



exports.login = async (email, password) => {

    const user = await User.findOne({ email })

    if (!user) {

        throw new Error('Username or password,is incorrect')

    }

    const isValid = await bcrypt.compare(password, user.password)

    if (!isValid) {
        throw new Error('Email or password, is incorrect')
    }


    const playload = {
        _id: user._id,
        email: user.email
    }

    const token = await jwt.sign(playload, SECRET, { expiresIn: "2h" })

    return token;
};