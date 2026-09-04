const mongoose = require('mongoose');

const mediaSchema = new mongoose.Schema(
  {
    url: {
      type: String,
      required: [true, 'Media URL is required'],
    },
    type: {
      type: String,
      enum: {
        values: ['image', 'video', 'audio', 'document'],
        message: 'Type must be image, video, audio, or document',
      },
      required: true,
    },
    filename: {
      type: String,
      required: true,
    },
    mimeType: {
      type: String,
      required: true, // e.g., 'image/png', 'video/mp4'
    },
    altText: {
        type: String,
        default: '',
    },
    size: {
      type: Number, // File size in bytes
      required: true,
      min: 0,
    },
    width: {
      type: Number, // Applicable for images/videos
      default: null,
    },
    height: {
      type: Number, // Applicable for images/videos
      default: null,
    },
    uploadedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: [true, 'Media must have an uploader'],
    },
  },
  {
    timestamps: { createdAt: true, updatedAt: false },
  }
);

const Media = mongoose.model('Media', mediaSchema);

module.exports = Media;