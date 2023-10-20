import mongoose, { mongo } from "mongoose";

async function conectaNaDatabase() {
  console.log(process.env.DB_CONNECTION_STRING)
  mongoose.connect(process.env.DB_CONNECTION_STRING);
  return mongoose.connection;
};

export default conectaNaDatabase;