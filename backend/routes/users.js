import express from "express";
import {
  deleteUser,
  getAuthenticatedUser,
  getUser,
  getUsers,
  logIn,
  signUp,
} from "../controllers/users.js";
import {
  authorizeAdmin,
  authorizeUser,
  verifyToken,
} from "../middlewares/auth.js";

const router = express.Router();

router.get("/currentUser", verifyToken, getAuthenticatedUser);

router.get("/", verifyToken, authorizeUser, getUsers);
router.get("/:id", verifyToken, authorizeUser, getUser);

router.delete("/:id", verifyToken, authorizeAdmin, deleteUser);

router.post("/signup", signUp);
router.post("/login", logIn);

export default router;
