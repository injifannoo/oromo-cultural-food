import mongoose from "mongoose";

const UsersSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    role:{type:String, enum: ['user', 'admin'], default: 'user'},
    password: { type: String, required: true },
    profilePicture: { type: String, default: '' },
    bio: { type: String, default: '' },
    favoriteFood: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Recipe' }],
  },
  { timestamps: true }
);
export default mongoose.model("Users", UsersSchema);