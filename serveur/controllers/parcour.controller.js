const Parcour = require("../models/parcours.model");
const httpStatusText = require("../utils/httpStatusText");
const asyncWrapper = require("../middleware/asyncWrapper");
const appError = require("../utils/appError");

const getParcours = asyncWrapper(async (req, res) => {
    const parcours = await Parcour.find().populate("course");
    res.status(200).json({status: httpStatusText.SUCCESS, data: {parcours}});
})

const getParcour = asyncWrapper(async (req, res) => {
    const parcour = await Parcour.findById(req.params.parID);
    res.status(200).json({status: httpStatusText.SUCCESS, data: {parcour}});
})

const addParcour = asyncWrapper(async (req, res, next) => {
    const {title} = req.body
    const check = await Parcour.findOne({title: title});
    if (check) {
        const error = appError.create("existe deja", 409, httpStatusText.FAIL);
        return next(error);
    }
    const newParcour = await Parcour.create(req.body);
    res
        .status(201)
        .json({status: httpStatusText.SUCCESS, data: {course: newParcour}});
});

const deleteParcour = asyncWrapper(async (req, res) => {
    await Parcour.deleteOne({_id: req.params.parID});
    res.status(200).json({status: httpStatusText.SUCCESS, data: null});
});

module.exports = {
    getParcours,
    getParcour,
    addParcour,
    deleteParcour
}