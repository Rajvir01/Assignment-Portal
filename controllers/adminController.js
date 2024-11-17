const Assignment = require('../models/Assignment');

exports.getAssignments = async (req, res) => {
  const { adminId } = req.query;
  try {
    const assignments = await Assignment.find({ adminId }).populate('userId', 'name');
    res.status(200).json(assignments);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateAssignmentStatus = async (req, res) => {
  const { id, action } = req.params;
  if (!['accept', 'reject'].includes(action)) {
    return res.status(400).json({ error: 'Invalid action' });
  }
  try {
    const assignment = await Assignment.findByIdAndUpdate(
      id,
      { status: action === 'accept' ? 'Accepted' : 'Rejected' },
      { new: true }
    );
    res.status(200).json({ message: `Assignment ${action}ed`, assignment });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
