const mongoose = require('mongoose');

const groupSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
},
{
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  },)
  groupSchema.virtual("Apprenants", {
    ref: "user",
    localField: "_id",
    foreignField: "groupe",
  });
module.exports = mongoose.model('group', groupSchema);