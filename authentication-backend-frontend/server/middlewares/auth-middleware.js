import jwt from "jsonwebtoken";
import UserModel from "../models/User";

var checkUserAuth = async (req,res,next) =>{
    let token
    const {authorization} = req.headers
    if(authorization && authorization.startswith('Bearer')){
        try {
            token = authorization.split(' ')[1]

            //Verify token
            const {userId} = jwt.verify(token.process.env.JWT_SECRET_KEY)
            
            // Get User from Token
            req.user = await UserModel.findById(userId).select(-password)
            next()
        } catch (error) {
            console.log(error)
            res.status(401).send({
                status:"failed",
                message:"Unauthorised User"
            })
        }
    }
}