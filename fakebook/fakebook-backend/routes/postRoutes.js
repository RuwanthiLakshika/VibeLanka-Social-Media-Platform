const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');

// POST /posts
router.post('/', postController.createPost);

// GET /posts
router.get('/', postController.getAllPosts);

// GET /posts/:id
router.get('/:id', postController.getPostById);

// PUT /posts/:id
router.put('/:id', postController.updatePost);

// DELETE /posts/:id
router.delete('/:id', postController.deletePost);

module.exports = router;
