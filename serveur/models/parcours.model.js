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
    duration: {
        type: Number,
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
    courses: [courseSchema],

})

module.exports = model('Parcour', parcourSchema);