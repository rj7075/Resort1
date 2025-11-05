import express from "express";
// note the .js extension
import {
  logoutUser,
  registerUser,
  loginUser,
} from "../controller/authController.js";

const router = express.Router();

// Routes
router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/logout", logoutUser);

// Export router as default
export default router;
