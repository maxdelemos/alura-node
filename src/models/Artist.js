import mongoose from "mongoose";
const { Schema, model } = mongoose;

const artistShema = new Schema(
  {
    id: { type: String, require: true },
    name: { type: String, require: true },
  },
  {
    versionKey: false,
  }
);

const artist = model("artist", artistShema);

export default artist;
