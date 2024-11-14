const express = require('express');
const router = express.Router();
const controller = require('./controller');

router.get('/users', controller.getUsers);
router.post('/adduser', controller.addUser); // Corrected from 'createuser' to 'addUser'
router.put('/updateuser', controller.updateUser);
router.delete('/deleteuser', controller.deleteUser);

module.exports = router;
