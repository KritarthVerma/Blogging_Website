const mongoose = require('mongoose');

const bookmarkSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: [true, 'A bookmark must belong to a user'],
    },
    post: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Post',
      required: [true, 'A bookmark must belong to a post'],
    },
  },
  {
    timestamps: true,
  }
);

const Bookmark = mongoose.model('Bookmark', bookmarkSchema);

module.exports = Bookmark;