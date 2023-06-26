import mongoose from "mongoose";

const URL = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/whatsappUsers";
export const mongoConnection = async () => {
  try {
    await mongoose.connect(URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB Connected");
  } catch (err) {
    console.log(err.message);
  }
};
