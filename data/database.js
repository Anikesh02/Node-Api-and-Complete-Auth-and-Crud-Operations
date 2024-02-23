import mongoose from "mongoose";

//Connecting MongoDB
export const connectDB = async () => {
    await mongoose.connect(process.env.MONGO_URI, {
    dbName: 'backendAPI',
})
.then((c) => console.log(`Database Connected with ${c.connection.host}`))
.catch((e)=> console.log(e));
}