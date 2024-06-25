const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const parcourSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    course: [{
        type: ObjectId,
        ref: "course",
    }],
  
},
{
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  },)


module.exports = mongoose.model('parcour', parcourSchema);