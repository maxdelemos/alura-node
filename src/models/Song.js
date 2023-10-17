import mongoose from "mongoose";
const { Schema, model } = mongoose;

const songShema = new Schema({
  id: { type: String, require: true },
  name: { type: String, require: true },
  artist: { type: Schema.Types.ObjectId, ref: "artist", require: false },
});

const songs = model("songs", songShema);

export default songs;
