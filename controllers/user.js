
const User = require('../models').User;

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
            id: req.params.index        
        },        
        returning: true    
    }).then(updatedUser =>{        
        res.jason(updatedUser)    })

    
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
            id: req.params.index
        }
    })
    .then(() => {
        console.log("user deleted")
    })
}

module.exports = {
    getProfileAll,
    getProfile,
    editProfile,
    // createProfile,
    deleteProfile
   

}