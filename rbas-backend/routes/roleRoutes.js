const express = require('express');
const { getRoles, addRole, deleteRole } = require('../controllers/roleController');

const router = express.Router();

router.get('/', getRoles);
router.post('/', addRole);
router.delete('/:id', deleteRole);

module.exports = router;
