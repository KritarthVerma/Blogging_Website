const mongoose = require('mongoose');

const tagSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Tag name is required'],
      unique: true,
      maxlength: [30, 'Tag name cannot exceed 30 characters'],
    },
    slug: {
      type: String,
      unique: true,
      lowercase: true,
    },
  },
  {
    timestamps: true,
  }
);

const Tag = mongoose.model('Tag', tagSchema);

module.exports = Tag;