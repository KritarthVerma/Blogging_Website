const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    bio : {
        type: String,
    },
    profileImage : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Media',
        default: null,
    }
}, { timestamps: true });

const User = mongoose.model('User', userSchema);