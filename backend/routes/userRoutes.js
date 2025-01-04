import express from 'express';
import { getAllUsers, getUserById, createUser, updateUser, deleteUser } from '../controllers/userController.js';

const router = express.Router();

// Route to get all users
router.get('/', getAllUsers);

// Route to get a single user by ID
router.get('/:id', getUserById);

// Route to create a new user
router.post('/', createUser);

// Route to update a user by ID
router.put('/:id', updateUser);

// Route to delete a user by ID
router.delete('/:id', deleteUser);

export default router;