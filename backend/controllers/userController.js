import User from "../models/User.js";

// Create a new user
export const createUser = async (req, res) => {
	try {
		const newUser = await User.create(req.body);
		res.status(201).json({
			status: "success",
			data: {
				user: newUser,
			},
		});
	} catch (err) {
		res.status(400).json({
			status: "fail",
			message: err.message,
		});
	}
};

// Get all users
export const getAllUsers = async (req, res) => {
	try {
		const users = await User.find();
		res.status(200).json({
			status: "success",
			results: users.length,
			data: {
				users,
			},
		});
	} catch (err) {
		res.status(400).json({
			status: "fail",
			message: err.message,
		});
	}
};

// Get a single user by ID
export const getUserById = async (req, res) => {
	try {
		const user = await User.findById(req.params.id);
		if (!user) {
			return res.status(404).json({
				status: "fail",
				message: "No user found with that ID",
			});
		}
		res.status(200).json({
			status: "success",
			data: {
				user,
			},
		});
	} catch (err) {
		res.status(400).json({
			status: "fail",
			message: err.message,
		});
	}
};

// Update a user by ID
export const updateUser = async (req, res) => {
	try {
		const user = await User.findByIdAndUpdate(req.params.id, req.body, {
			new: true,
			runValidators: true,
		});
		if (!user) {
			return res.status(404).json({
				status: "fail",
				message: "No user found with that ID",
			});
		}
		res.status(200).json({
			status: "success",
			data: {
				user,
			},
		});
	} catch (err) {
		res.status(400).json({
			status: "fail",
			message: err.message,
		});
	}
};

// Delete a user by ID
export const deleteUser = async (req, res) => {
	try {
		const user = await User.findByIdAndDelete(req.params.id);
		if (!user) {
			return res.status(404).json({
				status: "fail",
				message: "No user found with that ID",
			});
		}
		res.status(204).json({
			status: "success",
			data: null,
		});
	} catch (err) {
		res.status(400).json({
			status: "fail",
			message: err.message,
		});
	}
};
