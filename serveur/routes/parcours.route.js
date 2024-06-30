const express = require('express');

const parcourController = require('../controllers/parcour.controller');
const userRoles = require('../utils/userRoles');
const verifyToken = require('../middleware/verfiyToken');
const allowedTo = require('../middleware/allowedTo');
const multer = require("multer");
const path = require("path");
const fs = require("fs");

const router = express.Router();


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        //original file name
        cb(null, file.originalname + '-' + Date.now() + path.extname(file.originalname));
    }
});

// Initialize multer with storage configuration
const upload = multer({storage: storage});

// Create 'uploads' directory if it doesn't exist
if (!fs.existsSync('uploads')) {
    fs.mkdirSync('uploads');
}

router.get('/', parcourController.getParcours);
router.post('/', parcourController.addParcour);
router.put('/:parID', parcourController.updateParcour);
router.get('/:parID', parcourController.getParcour)
router.delete('/:parID', parcourController.deleteParcour);
router.get('/:parID/courses/:courseID', parcourController.getCourse);
router.post('/:parID/courses', upload.single('fileUpload'), parcourController.addCourse);
router.put('/:parID/courses/:courseID', parcourController.updateCourse);
router.delete('/:parID/courses/:courseID', parcourController.deleteCourse);
router.get('/download/:filename', parcourController.downloadCourseFile);
module.exports = router;