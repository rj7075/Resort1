import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: { type: String, required: true }, // hashed password
    role: {
      type: String,
      enum: ["user", "admin"], // only allow valid roles
      default: "user",
    },
  },
  { timestamps: true }
);

// Export model as default
export default mongoose.model("User", userSchema);
