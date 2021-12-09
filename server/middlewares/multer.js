
const multer = require('multer'); 
const multerS3 = require('multer-s3'); 
// const path = require('path'); 
const aws = require("aws-sdk"); 

require("dotenv").config();

const s3 = new aws.S3({
accessKeyId: process.env.ACCESS_KEY_ID,
secretAccessKey: process.env.SECRET_KEY_ID,
region: 'ap-northeast-2'


})



const upload =multer({


storage : multerS3({
    s3:s3,
    bucket:'fp-2',
    contentType: multerS3.AUTO_CONTENT_TYPE, 
    acl:'public-read-write',
    key: (req,file,cb)=>{
       cb(null,`${Data.now()}${file.originalname}`)

    },
}),

})

module.exports= upload;

