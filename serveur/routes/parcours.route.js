const express = require('express');

const parcourController = require('../controllers/parcour.controller');
const userRoles = require('../utils/userRoles');
const verifyToken = require('../middleware/verfiyToken');
const allowedTo = require('../middleware/allowedTo');

const router = express.Router();

router.get('/', parcourController.getParcours);
router.post('/', parcourController.addParcour);
router.put('/:parID', parcourController.updateParcour);
router.get('/:parID', parcourController.getParcour)
router.delete('/:parID', parcourController.deleteParcour);
router.get('/:parID/courses/:courseID', parcourController.getCourse);
router.post('/:parID/courses', parcourController.addCourse);
router.delete('/:parID/courses/:courseID', parcourController.deleteCourse);

module.exports = router;