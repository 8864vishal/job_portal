import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    },
    profile: {
        bio: { type: String, default: "" },
        skills: { type: [String], default: [] }
    }
}, { timestamps: true });

// ✅ This line is key:
export default mongoose.model("User", userSchema);
