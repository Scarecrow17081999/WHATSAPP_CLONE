import Message from "../model/messageModel.js";
import Conversation from "../model/conversationModel.js";
// ADD NEW CONVERSATION //
export const newMessage = async (req, res) => {
  const { conversationId, text } = req.body;
  try {
    const message = await Message.create(req.body);
    await Conversation.findByIdAndUpdate(conversationId, {
      message: text,
    });
    return res.status(200).json(message);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

// GET USER MESSAGES //
export const getMessage = async (req, res) => {
  try {
    const messages = await Message.find({ conversationId: req.params.id });
    if (!messages) {
      return res.status(404).json({ error: "No messages found" });
    }
    return res.status(200).json(messages);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
