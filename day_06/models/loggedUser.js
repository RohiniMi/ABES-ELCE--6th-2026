import mongoose from "mongoose";
const loggedUserDetailsSchema = new mongoose.Schema({
    ip: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    method: {
        type: String,
        required: true
    },
    header: {
        type: String,
        required: true
    },
    timestamps: {
        type: Date,
        default: Date.now()
    }
})
const LoggedUser = mongoose.model("loggedUser",loggedUserDetailsSchema);
export default LoggedUser;