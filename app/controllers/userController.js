import User from "../models/User.js";
import crypto from "crypto";

//controller for user

export const create = (req, res) => {
  const repassword = req.body.repassword;
  const password = req.body.password;
  const userEmail = req.body.email;
  User.find({ email: userEmail }, (err, usr) => {
    if (usr.length > 0) {
      //Email Exists
      res.json("Email already exists");
      return;
    } else {
      //New Email

      //Check for same passwords
      if (password != repassword) {
        res.json("Passwords does not match");
        return;
      }
      //Generate Password hash based on sha1
      const shasum = crypto.createHash("sha1");
      shasum.update(req.body.password);
      const passwordHash = shasum.digest("hex");

      //Create User
      const user = new User();
      user.name = req.body.name;
      user.email = req.body.email;
      user.password = passwordHash;
      user.dob = Date.parse(req.body.dob) || "";
      user.gender = req.body.gender;

      //Validate the User

      user.validate((err) => {
        if (err) {
          res.json(err);
          return;
        } else {
          //Finally save the User
          user.save((err) => {
            if (err) {
              res.json(err);
              return;
            }

            //Remove Password before sending User details
            user.password = undefined;
            res.json(user);
            return;
          });
        }
      });
    }
  });
};

export const getUsers = (req, res) => {
  res.write("<h1>You Are Requesting for all the Users</h1>");
  res.send();
};
