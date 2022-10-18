const express = require("express")
const app = express()
const mongoose = require("mongoose")
app.use(express.json())
mongoose.connect (
"mongodb+srv://khaled1:97854264@cluster0.nia6ds3.mongodb.net/?retryWrites=true&w=majority"
)


.then(()=>console.log('connected in mongo'))
.catch(e=>console.log(e))




app.use('/',require("./routes/useRoutes"))
const port = 4058
app.listen(port,error=>{
    if (error) throw error
    else{
        console.log("sucess connexion " )
    }
})