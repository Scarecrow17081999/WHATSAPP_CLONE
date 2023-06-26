import multer from "multer";

import { GridFsStorage } from "multer-gridfs-storage";
const URL = process.env.MONGO_URI;
const storage = new GridFsStorage({
  url: URL,
  options: {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  file: (req, file) => {
    const match = ["image/jpeg", "image/png"];

    if (match.indexOf(file.mimeType) === -1) {
      return `${Date.now()}-file-${file.originalname}`;
    }

    return {
      bucketName: "photos",
      filename: `${Date.now()}-file-${file.originalname}`,
    };
  },
});

export default multer({ storage });
