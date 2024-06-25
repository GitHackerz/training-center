const express = require('express');

const parcourController = require('../controllers/parcour.controller');
const userRoles = require('../utils/userRoles');
const verifyToken = require('../middleware/verfiyToken');
const allowedTo = require('../middleware/allowedTo');

const router = express.Router();

router.get(
    '/',
    verifyToken, allowedTo([userRoles.ADMIN, userRoles.FORMATEUR, userRoles.CONCEPTEUR, userRoles.SCOLARITE]),
    parcourController.getParcours
);
router.get(
    '/:parID',
    verifyToken, allowedTo([userRoles.ADMIN, userRoles.FORMATEUR, userRoles.CONCEPTEUR, userRoles.SCOLARITE]),
    parcourController.getParcour
);
router.post(
    '/',
    verifyToken, allowedTo([userRoles.ADMIN, userRoles.CONCEPTEUR]),
    parcourController.addParcour
);
router.delete(
    '/:parID',
    verifyToken, allowedTo([userRoles.ADMIN, userRoles.CONCEPTEUR]),
    parcourController.deleteParcour
);

module.exports = router;