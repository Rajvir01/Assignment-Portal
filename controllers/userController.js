const User = require('../models/User');
const Assignment = require('../models/Assignment');

exports.registerUser = async (req, res) => {
  const { name, isAdmin } = req.body;
  try {
    const user = new User({ name, isAdmin });
    await user.save();
    res.status(201).json({ message: 'User registered', user });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getAdmins = async (req, res) => {
  try {
    const admins = await User.find({ isAdmin: true });
    res.status(200).json(admins);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.uploadAssignment = async (req, res) => {
  const { userId, task, adminId } = req.body;
  try {
    const assignment = new Assignment({ userId, task, adminId });
    await assignment.save();
    res.status(201).json({ message: 'Assignment uploaded', assignment });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
