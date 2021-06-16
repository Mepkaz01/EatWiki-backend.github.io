const express=require('express');
const router=express.Router();
const ctrl=require('../controllers')

router.get('/all',ctrl.items.showAll)
router.get('/:indx',ctrl.items.getItem)

module.exports=router;