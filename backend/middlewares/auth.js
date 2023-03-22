import jwt from "jsonwebtoken";
import UserModel from "../models/user.js";

export const verifyToken = (req, res, next) => {
  try {
    const token = req.header("Authorization");
    if (!token) return res.status(401).json("Unauthenticated user");

    const verified = jwt.verify(token, "Kingenroseking123~~~");
    req.user = verified;
    next();
  } catch (error) {
    res.json(error);
  }
};

export const authorizeUser = async (req, res, next) => {
  const userId = req.user.id;

  try {
    const currentUser = await UserModel.findById(userId);
    if (currentUser.role !== "Admin" && currentUser.role !== "Moderator")
      return res.status(403).json("Unauthorized user");

    next();
  } catch (error) {
    console.log(error);
  }
};

export const authorizeAdmin = async (req, res, next) => {
  const userId = req.user.id;

  try {
    const currentUser = await UserModel.findById(userId);
    if (currentUser.role !== "Admin")
      return res.status(403).json("Unauthorized user");

    next();
  } catch (error) {
    console.log(error);
  }
};
