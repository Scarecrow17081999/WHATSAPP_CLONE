import User from "../model/userModel.js";

// CREATE USER//
export const addUser = async (req, res) => {
  try {
    const isPresent = await User.findOne({ sub: req.body.sub });
    if (isPresent) {
      return res.status(400).json({ error: "User already exists" });
    }
    const user = await User.create(req.body);
    return res.status(201).json({ user, message: "User created" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
// CREATE USER//
export const getUsers = async (req, res) => {
  try {
    const users = await User.find({});
    return res.status(201).json(users);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
