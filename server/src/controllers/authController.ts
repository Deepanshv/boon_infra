const { User } = require("../models/User");
const { hashPassword, comparePassword } = require("../utils/password");
const { generateToken } = require("../utils/jwt");
const { sendResponse, sendError } = require("../utils/response");

const register = async (req, res) => {
  try {
    const { name, email, password, phone } = req.body;

    // Check if user exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return sendError(res, 400, "Email already registered");
    }

    // Hash password
    const hashedPassword = await hashPassword(password);

    // Create user
    const user = new User({
      name,
      email,
      password: hashedPassword,
      phone,
    });

    await user.save();

    const token = generateToken(user._id.toString(), user.role);
    sendResponse(res, 201, "User registered successfully", {
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
      token,
    });
  } catch (error) {
    sendError(res, 500, "Error registering user");
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find user
    const user = await User.findOne({ email }).select("+password");
    if (!user) {
      return sendError(res, 401, "Invalid credentials");
    }

    // Compare password
    const isPasswordValid = await comparePassword(password, user.password);
    if (!isPasswordValid) {
      return sendError(res, 401, "Invalid credentials");
    }

    const token = generateToken(user._id.toString(), user.role);
    sendResponse(res, 200, "Login successful", {
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
      token,
    });
  } catch (error) {
    sendError(res, 500, "Error logging in");
  }
};

export const getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.userId);
    if (!user) {
      return sendError(res, 404, "User not found");
    }

    sendResponse(res, 200, "Profile fetched", {
      id: user._id,
      name: user.name,
      email: user.email,
      phone: user.phone,
      role: user.role,
    });
  } catch (error) {
    sendError(res, 500, "Error fetching profile");
  }
};

module.exports = { register, login, getProfile };
