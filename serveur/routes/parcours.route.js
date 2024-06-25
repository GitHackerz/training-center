
const express = require('express');

const router = express.Router();

const parcourController = require('../controllers/parcour.controller');


const verifyToken = require('../middleware/verfiyToken');
const userRoles = require('../utils/userRoles');
const allowedTo = require('../middleware/allowedTo');


router.route('/')
            .get(parcourController)
            .post(verifyToken, /* allowedTo(userRoles.MANGER), */ parcourController.addParcour);


router.route('/:courseId')
            .get(parcourController.getCourse)
            .delete(verifyToken, /* allowedTo(userRoles.ADMIN, userRoles.MANGER), */ parcourController.deleteParcour);


module.exports = router;