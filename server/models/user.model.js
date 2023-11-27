import mongoose from "mongoose";

const userSchema = new mongoose.Schema ({
    username: {
        type: String,
        require: true,
        trim: true
    },
    email: {
        type: String,
        require: true,
        trim: true
    },
    gender: {
        type: String,
        require: true,
    },
    area: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true,
        trim: true
    },
    role: {
        type: String,
        require: true
    }
}); 
export default mongoose.model("user", userSchema); 