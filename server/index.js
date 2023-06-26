import express from "express";
import "dotenv/config";
import { mongoConnection } from "./db/db.js";
import conversationRoute from "./routes/conversationRoute.js";
import userRoute from "./routes/userRoutes.js";
import cors from "cors";
import bodyParser from "body-parser";
const app = express();
const PORT = process.env.PORT;

// databast connection //
mongoConnection();

//middlewares//
app.use(express.json());
app.use(cors({ origin: "*" }));
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

//using routes//
app.use("/api", userRoute);
app.use("/api", conversationRoute);

//listening to the server//
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
