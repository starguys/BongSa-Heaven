const express = require('express')
const app = express()
const cors = require('cors')
const cookieParser = require('cookie-parser');

const corsOptions = {origin:['http://localhost:3000'],
methods: ["GET", "POST", "OPTIONS", "PATCH", "DELETE"],
credentials:true
}

require('dotenv').config();

app.use(espress.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors(corsOptions))

const PORT = process.env.PORT || 8080;
//app.use ()  router들





app.listen(PORT,() =>{
console.log(`server is starting ${port}`);

})

module.exports=app

