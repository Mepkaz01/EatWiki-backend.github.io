const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');


router.get('/all', ctrl.user.getProfileAll);
router.get('/profile/:id', ctrl.user.getProfile);
router.put('/profile/:index', ctrl.user.editProfile);
router.delete('/:index', ctrl.user.deleteProfile);



module.exports = router;