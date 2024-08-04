import { connection } from "../database/connection.js"

const connect=connection()
import bcrypt from 'bcrypt';
export const checkEmail =(req,res,next)=>{
    connect.execute(`select email from customer where email ='${req.body.email}'`,(err,data)=>{
        if(data.length !=0 ){
           return res.status(409).json({message:"Already register,please signIn"})
        }else{
req.body.password= bcrypt.hashSync(req.body.password,8);
// console.log(hashedPassword);

            next()
        }
    })

}