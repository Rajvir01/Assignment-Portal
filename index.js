const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');
const adminRoutes = require('./routes/adminRoutes');

const app = express();
app.use(bodyParser.json());
app.use('/user', userRoutes);
app.use('/admin', adminRoutes);

mongoose
  .connect('', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('Database connection error:', err));

mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB Atlas successfully!');
});

mongoose.connection.on('error', (err) => {
  console.error('Error connecting to MongoDB Atlas:', err.message);
});


app.listen(3000, () => console.log('Server is running on port 3000'));
