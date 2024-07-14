const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function createPost({ title, content, imageUrl, location, authorId }) {
  const post = await prisma.post.create({
    data: {
      title,
      content,
      imageUrl,
      location,
      authorId,
    },
  });
  return post;
}

async function getAllPosts() {
  const posts = await prisma.post.findMany({
    include: { author: true },
  });
  return posts;
}

async function getPostById(id) {
  const post = await prisma.post.findUnique({
    where: { id },
    include: { author: true },
  });
  return post;
}

async function updatePost({ id, title, content, imageUrl, location }) {
  const post = await prisma.post.update({
    where: { id },
    data: {
      title,
      content,
      imageUrl,
      location,
    },
  });
  return post;
}

async function deletePost(id) {
  await prisma.post.delete({
    where: { id },
  });
}

module.exports = {
  createPost,
  getAllPosts,
  getPostById,
  updatePost,
  deletePost,
};
