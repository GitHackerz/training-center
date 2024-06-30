const express = require('express');

const router = express.Router();

const usersController = require('../controllers/users.controller')

router.route('/')
    .get(usersController.getAllUsers)

router.route('/:userId/parcour/:parcourId')
    .put(usersController.addParcour)
    .delete(usersController.removeParcour)

router.route('/:id')
    .get(usersController.getUser)
    .put(usersController.updateUser)
    .delete(usersController.deleteUser)

router.route('/register')
    .post(usersController.register)

router.route('/login')
    .post(usersController.login)

module.exports = router;