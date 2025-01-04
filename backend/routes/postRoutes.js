import express from 'express';
import { createPost, getAllPosts, getPostById, updatePost, deletePost } from '../controllers/postController.js';

const router = express.Router();

// Create a new post
router.post('/', createPost);

// Get all posts
router.get('/', getAllPosts);

// Get a single post by ID
router.get('/:id', getPostById);

// Update a post by ID
router.put('/:id', updatePost);

// Delete a post by ID
router.delete('/:id', deletePost);

export default router;