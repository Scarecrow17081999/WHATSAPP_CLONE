import express from "express";
import { addUser, getUsers } from "../controller/userController.js";
import { newConversation } from "../controller/conversationController.js";
const router = express.Router();

router.route("/add").post(addUser);
router.get("/users", getUsers);

export default router;
