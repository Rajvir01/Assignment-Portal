const express = require('express');
const { registerUser, getAdmins, uploadAssignment } = require('../controllers/userController');
const router = express.Router();

router.post('/register', registerUser);
router.get('/admins', getAdmins);
router.post('/upload', uploadAssignment);

module.exports = router;
