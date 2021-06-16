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


module.exports={
    showAll,
    getItem
}