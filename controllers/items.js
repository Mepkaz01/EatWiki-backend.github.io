const Item=require('../models').Item

const showAll= (req,res)=>{
    Item.findAll().then(items =>{
        console.log(items)
        res.json(items)
    })
}


const getItem = (req,res) => {
    Item.findByPk(req.params.indx).then(item =>{
        res.json(item)
    })
}   

const editItem= (req,res) =>{
    Item.update(req.body,{
        where:{
            id:req.params.indx
        },
        returning: true
    }).then(updatedItem =>{
        res.json(updatedItem)
    })
}

const createItem= (req,res) =>{
    Item.create(req.body).then(
        newitem =>{
            res.json(newitem)

        }
    )
}

const deleteItem = (req,res) =>{
    Item.destroy({where:{id:req.params.indx}}).then(
        deletedItem =>{
            console.log("Item Deleted ")
        }

    )
 
    }

    



module.exports={
    showAll,
    getItem,
    editItem,
    createItem,
    deleteItem
}