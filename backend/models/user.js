import { Schema, model } from "mongoose";

const UserSchema = new Schema(
  {
    userId: {
      type: String,
      required: true,
      unique: true,
    },
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    address: {
      type: Object,
      default: [],
    },
    orders: {
      type: Array,
      default: [],
    },
  },
  { timestamps: true }
);

const UserModel = model("User", UserSchema);
export default UserModel;
