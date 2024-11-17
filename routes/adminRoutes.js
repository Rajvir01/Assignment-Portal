const express = require('express');
const { getAssignments, updateAssignmentStatus } = require('../controllers/adminController');
const router = express.Router();

router.get('/assignments', getAssignments);
router.post('/assignments/:id/:action', updateAssignmentStatus);

module.exports = router;
