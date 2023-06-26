import Conversation from "../model/conversationModel.js";

// create conversation //
export const newConversation = async (req, res) => {
  const { senderId, receiverId } = req.body;
  try {
    const isPresent = await Conversation.findOne({
      members: { $all: [senderId, receiverId] },
    });
    if (isPresent) {
      return res.status(400).json({ error: "Conversaation already exists" });
    }

    const conv = await Conversation.create({ members: [senderId, receiverId] });
    return res.status(201).json({ conv, message: "Conversation created" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const getConversation = async (req, res) => {
  const { senderId, receiverId } = req.body;

  try {
    const conv = await Conversation.findOne({
      members: { $all: [senderId, receiverId] },
    });
    if (!conv) {
      return res.status(400).json({ error: "Conversation not found" });
    }
    return res.status(200).json({ conv });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
