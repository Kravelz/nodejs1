const express= require("express")
const app = express()
require("dotenv").config({path:__dirname+"/.env"})

const port = process.env.PORT || 3000;

//DB connection
const mongoose = require("mongoose")

const uri=`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.w29m5.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`

mongoose.connect(uri,
{
    useNewUrlParser:true,useUnifiedTopology: true
}).then(()=> console.log("DB conected")).catch(e=>console.log(e))

app.set("view engine", "ejs")
app.set("views", __dirname+"/views")

app.use(express.static(__dirname+"/public"))

app.use("/", require("./router/rutasweb"));
app.use("/mascotas", require("./router/mascotas"));


app.use((req,res,next)=>{
    res.render("404",{message:"Lost", descripcion:"la ruta escrita no existe"})
})

app.listen(port, ()=>{
    console.log("Corriendo")
})