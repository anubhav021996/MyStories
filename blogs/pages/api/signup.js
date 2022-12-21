
import UserModel from "../../models/User";
import dbConnect from "../../lib/db";

 const handler = async(req,res) =>{
    try {
        if(req.method === "POST"){
            let user = new UserModel(req.body);
            await user.save();
            res.status(200).json({success:true , message: "User created successfully"})
            }else{
                res.status(400).json({success:false , message:"User creation failed"});
            }
        
    } catch (error) {
        res.status(500).json({success:false,message: "Internal server error"})
    }
}
    
export default dbConnect(handler)