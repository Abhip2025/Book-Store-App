import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  fullName: {
    type: String,
    requred: true,
  },
  email: {
    type: String,
    required: true,
    uinque: true,
  },
  password: {
    type: String,
    required: true,
  },
});
const User = mongoose.model("User", userSchema);
export default User;
