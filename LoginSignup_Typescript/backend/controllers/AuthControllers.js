const user = require("../models/userModel")
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt');



const signup = async  (req,res)=>{
   
    try{
         const {name , email , password} = req.body
        const data =  await  user.findOne({email})

    if(data){
        return res.status(409).json({
            message:"Email is already exist ",
            success:false
        })
    }


        const Newuser = new user({ name, email, password });
        Newuser.password = await bcrypt.hash(password, 10);
        await Newuser.save()

        return res.status(201).json({
            message:"Signup Successfully ",
            success:true,
        })



    }catch(error){

        return res.status(500).json({
            message:"internal server error ",
            success:false
        })

    }
}




const login = async  (req,res)=>{
   
    try{
         const {email , password} = req.body
        //  console.log(email , password)
         const data =  await  user.findOne({email})
        //   console.log(data);

         if(!data){
            return res.status(403).json({
                message:"Invalid Email and Password",
                success:false,
            })
         }

        const compPsw =  await bcrypt.compare(password , data.password)
        if(!compPsw){
            return res.status(403).json({
                message:"Invalid Email and Password",
                success:false,
            })
        }

            const jwtToken = jwt.sign(
            { email: data.email, userId: data._id },
            process.env.JWT_SECRET,
            { expiresIn: '24h' }
            
        )

        return res.status(200).json({
            message:"Login Successfully",
            success:true,
            email,
            name: data.name,
            jwtToken,
        })



    }catch(error){

        return res.status(500).json({
            message:"internal server error",
            success:false
        })

    }

}

module.exports = {
    login,
    signup,
}