const express = require('express')
const app = express()
const cors = require('cors')
const cookieParser = require('cookie-parser');
const mongoose =require('mongoose')
const userRouter = require('./routes/user')

const corsOptions = {origin:['http://localhost:3000'],
methods: ["GET", "POST", "OPTIONS", "PATCH", "DELETE"],
credentials:true
}

require('dotenv').config();

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors(corsOptions))

const PORT = process.env.PORT || 8080;
//app.use ()  router들

//mongoose mongodb node.js 연결
mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    console.log('connected to mongo')
})
.catch(err =>{
    console.log(err)
})
//mongoose 부터는 Promise를 사용할 수 있습니다.

app.use('/auth',userRouter)



app.listen(PORT,() =>{
console.log(`server is starting ${PORT}`);

})

module.exports=app

