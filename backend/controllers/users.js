import UserModel from "../models/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { customAlphabet } from "nanoid";

export const signUp = async (req, res, next) => {
  const { firstName, lastName, phone, email, password: passwordRaw } = req.body;

  try {
    const isPhoneExist = await UserModel.findOne({ phone });
    if (isPhoneExist)
      return res
        .status(400)
        .json("Phone number is already registered. Please login");

    const isEmailExist = await UserModel.findOne({ email });
    if (isEmailExist)
      return res.status(400).json("Email is already registered. Please login");

    const hashedPassword = await bcrypt.hash(passwordRaw, 10);
    const nanoid = customAlphabet("1234567890", 5);

    await UserModel.create({
      userId: nanoid(),
      firstName,
      lastName,
      phone,
      email,
      password: hashedPassword,
    });

    res.status(201).json("Registration is successful");
  } catch (error) {
    console.log(error);
  }
};

export const logIn = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const user = await UserModel.findOne({ email });
    if (!user)
      return res.status(400).json("Таны оруулсан мэдээлэл буруу байна!");

    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch)
      return res.status(400).json("Таны оруулсан мэдээлэл буруу байна!");

    const token = jwt.sign({ ...user }, "Kingenroseking123~~~", {
      expiresIn: "1h",
    });
    res.status(200).json(token);
  } catch (error) {
    console.log(error);
  }
};
