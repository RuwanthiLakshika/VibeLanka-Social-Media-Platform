const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const postService = require('../services/postService');

async function createPost(req, res) {
  const { title, content, imageUrl, location, authorId } = req.body;
  try {
    const post = await postService.createPost({
      title,
      content,
      imageUrl,
      location,
      authorId,
    });
    res.status(201).json(post);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

async function getAllPosts(req, res) {
  try {
    const posts = await postService.getAllPosts();
    res.status(200).json(posts);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

async function getPostById(req, res) {
  const { id } = req.params;
  try {
    const post = await postService.getPostById(Number(id));
    if (!post) {
      return res.status(404).json({ error: 'Post not found' });
    }
    res.status(200).json(post);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

async function updatePost(req, res) {
  const { id } = req.params;
  const { title, content, imageUrl, location } = req.body;
  try {
    const post = await postService.updatePost({
      id: Number(id),
      title,
      content,
      imageUrl,
      location,
    });
    res.status(200).json(post);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

async function deletePost(req, res) {
  const { id } = req.params;
  try {
    await postService.deletePost(Number(id));
    res.status(204).end();
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

module.exports = {
  createPost,
  getAllPosts,
  getPostById,
  updatePost,
  deletePost,
};
