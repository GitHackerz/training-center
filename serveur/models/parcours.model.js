const {Schema, model} = require('mongoose');

const courseSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    file:{
        type: String,
        default:"uploads/course.pdf"
    }
})

const parcourSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    startDate: {
        type: Date,
        default: Date.now()
    },
    endDate: {
        type: Date,
        default: Date.now() + 1000*60*60*24*30
    },
    courses: [courseSchema]
})

module.exports = model('Parcour', parcourSchema);