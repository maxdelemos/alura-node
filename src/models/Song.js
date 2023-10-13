import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const songShema = new Schema({
    // id: {type: String, require: true},
    name: String
    // artist: {type: String, require: false},
});

const songs = model('songs', songShema);

export default songs;