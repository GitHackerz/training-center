const Parcour = require("../models/parcours.model");
const httpStatusText = require("../utils/httpStatusText");
const asyncWrapper = require("../middleware/asyncWrapper");
const appError = require("../utils/appError");


const addParcour = asyncWrapper(async (req, res, next) => {
    const {title}=req.body
    const check = await Parcour.findOne({title: title });
    if (check) {
      const error = appError.create("existe deja", 409, httpStatusText.FAIL);
      return next(error);
    }
  const newparcour = await new (req.body).save();
    
  res
    .status(201)
    .json({ status: httpStatusText.SUCCESS, data: { course: newparcour } });
});
const deleteParcour = asyncWrapper(async (req, res) => {
    await Parcour.deleteOne({ _id: req.params.parID });
    res.status(200).json({ status: httpStatusText.SUCCESS, data: null });
  });
module.exports = {
   addParcour,
   deleteParcour
}