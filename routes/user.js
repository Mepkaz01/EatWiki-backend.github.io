const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');
const { createProfile } = require('../controllers/user');


router.get('/all', ctrl.user.getProfileAll);
router.get('/:id', ctrl.user.getProfile);
router.put('/:index', ctrl.user.editProfile);
router.post('/signup', ctrl.user.createProfile);
router.delete('/:index', ctrl.user.deleteProfile);




module.exports = router;