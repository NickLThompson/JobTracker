const mongoose = require('mongoose');

// this is establishing our connection to the mongoose server
mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/jobTrackerDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// exporting the connection
module.exports = mongoose.connection;