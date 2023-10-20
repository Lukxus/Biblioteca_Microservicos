import mongoose from "mongoose";

async function conectaBanco(){
    mongoose.connect("mongodb+srv://admin:admin123@cluster0.gxmvymc.mongodb.net/livraria?retryWrites=true&w=majority");
    return mongoose.connection;
}

export default conectaBanco;