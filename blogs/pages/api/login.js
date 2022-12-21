
import UserModel from "../../models/User";
import dbConnect from "../../lib/db";

 const handler = async(req,res) =>{
    try {
        if(req.method === "POST"){
            let user = UserModel.findOne({"email": req.body.email})
            if(user){
            if(req.body.email === user.email && req.body.password === user.password){
             res.status(200).json({success:true , message: "User Login Successfully", email:user.email , name:user.name})
            }else{
            res.status(400).json({success:false , message:"Invalid Credentials"});
            }
            
           }else{
            res.status(400).json({success:false , message:"No user found"});
           }
            }else{
                res.status(400).json({success:false , message:"User Login Failed"});
            }
        
    } catch (error) {
        res.status(500).json({success:false,message: "Internal server error"})
    }
}
    
export default dbConnect(handler)