import mongoose from "mongoose";
const MONGO_URI = "mongodb+srv://user:admin@crud.rdkygtu.mongodb.net/users?appName=crud";

const dbConnect = async () => {
    try {
        await mongoose.connect(MONGO_URI);
        console.log("DB connecton established successfully");
    } catch (error) {
        console.log("Connection Error");
    }
}
export default dbConnect;