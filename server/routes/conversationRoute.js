import express from "express";
import {
  newConversation,
  getConversation,
} from "../controller/conversationController.js";
import { newMessage, getMessage } from "../controller/MessageController.js";
import { uploadFile, getFile } from "../controller/imageController.js";

import upload from "../utils/upload.js";
const router = express.Router();

router.post("/conversation/new", newConversation);
router.post("/conversation/get", getConversation);
router.post("/message/add", newMessage);
router.get("/message/get/:id", getMessage);
router.post("/file/upload", upload.single("file"), uploadFile);
router.get("/file/:filename", getFile);

export default router;
