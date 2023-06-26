import grid from "gridfs-stream";
import mongoose from "mongoose";
const URL = process.env.URL;

const conn = mongoose.connection;
let gfs;
let gridFsBucket;

conn.once("open", () => {
  gridFsBucket = new mongoose.mongo.GridFSBucket(conn.db, {
    bucketName: "fs",
  });

  gfs = grid(conn.db, mongoose.mongo);
  gfs.collection("fs");
});

// UPLOAD FILE //
export const uploadFile = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(404).json({ error: "File not found" });
    }

    const imageUrl = `${URL}/file/${req.file.filename}`;
    return res.status(200).json(imageUrl);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

// GET FILE //
export const getFile = async (req, res) => {
  try {
    const file = await gfs.files.findOne({ filename: req.params.filename });
    const readStream = gridFsBucket.openDownloadStream(file._id);
    readStream.pipe(res);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
