const express = require("express");

const router = express.Router();

const courseController = require("../controllers/courses.controller");

const { validationSchema } = require("../middleware/validationSchema");
const verifyToken = require("../middleware/verfiyToken");
const userRoles = require("../utils/userRoles");
const allowedTo = require("../middleware/allowedTo");

const multer = require("multer");

const diskStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads");
  },
  filename: function (req, file, cb) {
    const ext = file.mimetype.split("/")[1];
    const fileName = `user-${Date.now()}.${ext}`;
    cb(null, fileName);
  },
});

const fileFilter = (req, file, cb) => {
  const imageType = file.mimetype.split("/")[1];

  if (imageType === "pdf") {
    return cb(null, true);
  } else {
    return cb(appError.create("file must be an image", 400), false);
  }
};

const upload = multer({
  storage: diskStorage,
  fileFilter,
});

router.route("/").get(courseController.getAllCourses);

router
  .route("/add")
  .post(
    upload.single("file"),
    /* verifyToken, */
    /* allowedTo(userRoles.MANGER), */ courseController.addCourse
  );

module.exports = router;
