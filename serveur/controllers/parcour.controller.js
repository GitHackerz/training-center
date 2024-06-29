const Parcour = require("../models/parcours.model");
const httpStatusText = require("../utils/httpStatusText");
const asyncWrapper = require("../middleware/asyncWrapper");
const appError = require("../utils/appError");

const getParcours = asyncWrapper(async (req, res) => {
    const parcours = await Parcour.find().populate("courses");
    res.status(200).json({status: httpStatusText.SUCCESS, parcours});
})

const getParcour = asyncWrapper(async (req, res) => {
    const parcour = await Parcour.findById(req.params.parID);
    res.status(200).json({status: httpStatusText.SUCCESS, parcour});
})

const addParcour = asyncWrapper(async (req, res, next) => {
    const {title} = req.body
    const check = await Parcour.findOne({title: title});
    if (check) {
        const error = appError.create("Already exists", 409, httpStatusText.FAIL);
        return next(error);
    }
    const newParcour = await Parcour.create(req.body);
    res
        .status(201)
        .json({status: httpStatusText.SUCCESS, parcour: newParcour});
});

const deleteParcour = asyncWrapper(async (req, res) => {
    await Parcour.deleteOne({_id: req.params.parID});
    res.status(200).json({status: httpStatusText.SUCCESS});
});

const updateParcour = asyncWrapper(async (req, res) => {
    const parcour = await Parcour.findByIdAndUpdate(req.params.parID, req.body, {
        new: true,
        runValidators: true,
    });
    res.status(200).json({status: httpStatusText.SUCCESS, parcour});
})

const getCourse = asyncWrapper(async (req, res) => {
    const parcour = await Parcour.findById(req.params.parID);
    const course = parcour.courses.id(req.params.courseID);
    if (!course) {
        const error = appError.create("Not found", 404, httpStatusText.FAIL);
        return next(error);
    }
    res.status(200).json({status: httpStatusText.SUCCESS, course});
})

const addCourse = asyncWrapper(async (req, res) => {
    const parcour = await Parcour.findById(req.params.parID);
    if (!parcour) {
        const error = appError.create("Not found", 404, httpStatusText.FAIL);
        return next(error);
    }
    parcour.courses.push(req.body);
    await parcour.save();
    res.status(201).json({status: httpStatusText.SUCCESS, parcour});
})

const deleteCourse = asyncWrapper(async (req, res) => {
    const parcour = await Parcour.findById(req.params.parID);
    if (!parcour) {
        const error = appError.create("Not found", 404, httpStatusText.FAIL);
        return next(error);
    }
    parcour.courses.pull({_id: req.params.courseID});
    await parcour.save();
    res.status(200).json({status: httpStatusText.SUCCESS, parcour});
})

module.exports = {
    getParcours,
    getParcour,
    addParcour,
    deleteParcour,
    updateParcour,
    getCourse,
    addCourse,
    deleteCourse
}