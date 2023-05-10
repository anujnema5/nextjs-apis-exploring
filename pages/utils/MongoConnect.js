import mongoose from "mongoose";

export const connectMongoDB = async ()=>{
    if(mongoose.connection.readyState === 1) {
        return mongoose.connection.asPromise()
    } else {
        return await mongoose.connect("mongodb+srv://nextjs:anujnema@cluster0.dgqxfas.mongodb.net/monoNext?retryWrites=true&w=majority")
    }
}

