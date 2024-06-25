const {Schema, model} = require('mongoose');

const parcourSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    course: [{
        title: {
            type: String,
            required: true
        },
        file:{
            type: String,
            default:"uploads/course.pdf"
        }
    }],

})

module.exports = model('Parcour', parcourSchema);