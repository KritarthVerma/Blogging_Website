const express = require('express');
const router = express.Router();

// Import sub-routers
const authRoutes = require('./authRoutes');
const userRoutes = require('./userRoutes');
const postRoutes = require('./postRoutes');
const commentRoutes = require('./commentRoutes');
const categoryRoutes = require('./categoryRoutes');
const tagRoutes = require('./tagRoutes');
const bookmarkRoutes = require('./bookmarkRoutes');
const mediaRoutes = require('./mediaRoutes');

// Mount resource routes
router.use('/auth', authRoutes);
router.use('/posts', postRoutes);
router.use('/comments', commentRoutes);
router.use('/categories', categoryRoutes);
router.use('/tags', tagRoutes);
router.use('/bookmarks', bookmarkRoutes);
router.use('/media', mediaRoutes);

module.exports = router;