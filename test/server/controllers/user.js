const User = require('../models/User')


module.exports ={

 authSignup : async (req,res ) =>{
  const {email,password,nickname,sex,want_region,want_vol,age} =req.body

  User.create({email:email,password:password,nickname:nickname,sex:sex,
want_region:want_region,want_vol:want_vol,age:age}).then(data =>{

    console.log(data)

    if(!data){
     return   res.status(400).send('t')
    }
   return res.status(200).send(data)
    
  })
   



 },
 authSignin: async(req,res) =>{

  const {email, password} =req.body
  User.findOne({email:email,password:password}).then(data =>{

    if(!data){
      res.status(400).send('a')
    }
    res.status(200).send({accesstoken:accesstoken})
  })
 }



}