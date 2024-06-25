const mongoose = require('mongoose');
const validator = require('validator');
const userRoles = require('../utils/userRoles');
const ObjectId = mongoose.Schema.Types.ObjectId;
const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
    /*     validate: [validator.isEmail , 'filed must be a valid email address'] */
    },
    password: {
        type: String,
        required: true
    },
    token: {
        type: String
    },
    role: {
        type: String, // ["USER", "ADMIN", "MANAGER"]
        enum: [userRoles.APPRENANT, userRoles.ADMIN, userRoles.CONCEPTEUR, userRoles.FORMATEUR, userRoles.SCOLARITE],
        default: userRoles.APPRENANT
    },
    groupe:{
        type: ObjectId,
        ref: "group",
    },
    parcour:{
        type: ObjectId,
        ref: "parcour",
    },
    

})

module.exports = mongoose.model('user', userSchema);