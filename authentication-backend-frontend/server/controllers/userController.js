import UserModel from "../models/User.js";
import bcrypt from "bcrypt";
import Jwt from "jsonwebtoken";

class UserController {
  static userRegistration = async (req, res) => {
    const { name, email, password, password_confirmation, tc } = req.body;
    const user = await UserModel.findOne({ email: email });
    if (user) {
      res.status(400).json({ status: "failed", message: "Email already exists" });
    } else {
      if (name && email && password && password_confirmation && tc) {
        if (password === password_confirmation) {
          try {
            const salt = await bcrypt.genSalt(10);
            const hashPassword = await bcrypt.hash(password,salt)
            const doc = new UserModel({
              name: name,
              email: email,
              password: hashPassword,
              tc: tc,
            });
            await doc.save();
            const saved_user  = await UserModel.findOne({
                email:email
            })

            // Generate jwt token
            const token = Jwt.sign({userID:saved_user._id}, process.env.JWT_SECRET_KEY, {expiresIn: '5d'})
            res.status(201).json({
                "status": "Success",
                "message": "Successfully Registered",
                "token":token
              });
          } catch (error) {
            console.log(error)
            res.status(500).json({
                status: "failed",
                message: "unable to register",
              });
          }
        } else {
          res.status(400).json({
            status: "failed",
            message: "Password and confirm password didn't match",
          });
        }
      } else {
        res.status(400).json({ status: "failed", message: "All fields are required" });
      }
    }
  };

  static userLogin = async (req,res) => {
    const {email , password} = req.body
    try {
        if (email && password) {
            const user = await UserModel.findOne({ email: email });
            if(user != null){
                const isMatch =  await bcrypt.compare(password, user.password)
                if((user.email === email) && isMatch){
                    // Generate jwt token
            const token = Jwt.sign({userID:user._id}, process.env.JWT_SECRET_KEY, {expiresIn: '5d'})
                    res.status(201).json({ status: "success", message: "Login Successfully!!!" ,token:token});
                }else{
                    res.status(400).json({ status: "failed", message: "User credentials didn't matched!!!" });
                }
            }
            else{
                res.status(400).json({ status: "failed", message: "You are not a registered user" });
            }
        } else {
            res.status(400).json({ status: "failed", message: "All fields are required" });
        }        
    } catch (error) {
        console.log(error)
        res.status(500).json({ status: "failed", message: "Unable to login" });
    }
  }
}

export default UserController;

// now import it in routes folder in routes file
