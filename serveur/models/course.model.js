const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const courseSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    parcour:{
        type: ObjectId,
        ref: "group",
    }, 
    file:{
        type: String,
       default:"uploads/course.pdf"
    }
},
{
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  },)

module.exports = mongoose.model('course', courseSchema);