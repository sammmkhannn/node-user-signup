import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  name: {
    type: String,
    //required:true
  },
  email: {
    type: String,
  },
  password: {
    type: String,
    //required:true
  },
  dob: {
    type: Date,
    //required:true
  },
  gender: {
    type: String,
    //required:true
  },
});

const User = mongoose.model("User", userSchema);
export default User;
