import mongoose from "mongoose";

//Connecting MongoDB
export const connectDB = async () => {
    mongoose.connect(process.env.MONGO_URI, {
    dbName: 'backendAPI',
})
.then(() => console.log("Database Connected"))
.catch((e)=> console.log(e));
}