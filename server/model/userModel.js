import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  email_verified: {
    type: String,
    required: true,
  },

  picture: {
    type: String,
    required: true,
  },
  sub: {
    type: String,
    required: true,
  },
});

const User = mongoose.model("user", userSchema);

export default User;
