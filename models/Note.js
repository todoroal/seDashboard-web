const mongoose = require('mongoose');

const NotesSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users'
  },
  note: {
    type: String,
    required: true
  },
});

module.exports = mongoose.model('notes', NotesSchema);
