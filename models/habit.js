const mongoose = require('mongoose');


const habitSchema = new mongoose.Schema({
  habit: {
    type: String,
    required: true
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  priority: {
    type: String,
    required: true
  }, 
  date: {
    type: String,
    required: true
  },
  days: [],
  completed:{
    type: Number
  },
  streak:{
    type: Number
  }
}, {
  timestamps: true
});

const Habit = mongoose.model('Habit', habitSchema);
module.exports = Habit;