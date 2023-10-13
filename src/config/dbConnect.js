import mongoose from 'mongoose';

mongoose.connect("mongodb+srv://user:user@cluster0.zxsgxq9.mongodb.net/alura-node");

let db = mongoose.connection;

export default db;