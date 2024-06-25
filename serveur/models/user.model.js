const {Schema, model} = require('mongoose');
const userRoles = require('../utils/userRoles');
const ObjectId = Schema.Types.ObjectId;

const userSchema = new Schema({
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
    },
    password: {
        type: String,
        required: true
    },
    token: {
        type: String
    },
    role: {
        type: String,
        enum: [userRoles.APPRENANT, userRoles.ADMIN, userRoles.CONCEPTEUR, userRoles.FORMATEUR, userRoles.SCOLARITE],
        default: userRoles.APPRENANT
    },
    parcours: [
        {
            ref: "parcour",
            type: ObjectId,
        }
    ]
})

module.exports = model('user', userSchema);