const User = require('../models').User;
const constants = require('../constants');

const getProfileAll = (req, res) => {
    
    User.findAll()
       
    .then(users => {
    
        res.json(users)
    
    })
}

const getProfile = (req, res) => {
    User.findByPk(req.params.id).then(user => {
        res.json(user)
    })
}

// const createProfile = (req, res) => {
//     req.body.userId = req.user.id;
//     User.create(req.body)
//     .then(newUser => {
//         res.json(newUser)
//     })
// }

const editProfile = (req, res) => {
    User.update(req.body,{        
        where:{            
            id: req.params.id        
        },        
        returning: true    
    }).then(updatedUser => {        
        res.json(updatedUser)    })

    
    // User.findByPk(req.body, {
    //     where: {
    //         id: req.params.index
    //     },
    //     returning: true
    // })
    // .then(user => {
    //     console.log(user)
    //     res.json(user)
    // })
}

const deleteProfile = (req, res) => {
    User.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(deletedUser => {
        res.json(deletedUser)
        
    })
}

module.exports = {
    getProfileAll,
    getProfile,
    editProfile,
    // createProfile,
    deleteProfile
   

}