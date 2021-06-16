const express=require('express');
const router=express.Router();
const ctrl=require('../controllers')

router.get('/all',ctrl.items.showAll)
router.get('/:indx',ctrl.items.getItem);
router.put('/:indx',ctrl.items.editItem);
router.post('/newitem',ctrl.items.createItem);
router.delete('/:indx',ctrl.items.deleteItem);


module.exports=router;