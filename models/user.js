const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: String,
  givenName: String,
  email: String,
  reminders: Array,
  recipient: String
});

mongoose.model('users', userSchema);
