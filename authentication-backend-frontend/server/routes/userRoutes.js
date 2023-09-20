import express from "express"
const router = express.Router();

import UserController from "../controllers/userController.js";

// Public Routes
router.post('/register', UserController.userRegistration)
router.post('/login', UserController.userLogin)

//Protected Routes
router.post('/changepassword', UserController.changeUserPassword)
export default router;