const User=require('../models').User;

const getProfile= (req,res) =>{
    User.findAll().then(users =>{
        console.log(users)
        res.json(users)
    })
}

module.exports ={
    getProfile
}