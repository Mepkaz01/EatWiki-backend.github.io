const User = require('../models').User;

const signup = (req,res) => {
    User.create(req.body)
    .then(newUser => {
        // res.redirect(`/user/${user.id}`)
        res.json(newUser)
    })
}

const login = (req,res) => {
    User.findOne({
        where: {
            username: req.body.username,
            password: req.body.password
        }
    })
    .then(foundUser => {
        res.json(foundUser)
    })
}

module.exports = {
    signup,
    login
}