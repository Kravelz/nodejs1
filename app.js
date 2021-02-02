const express= require("express")
const app = express()
const port = process.env.PORT || 3000;
app.set("view engine", "ejs")
app.set("views", __dirname+"/views")

app.use(express.static(__dirname+"/public"))

app.get("/", (req, res)=>{
    res.render("index", {message:"Pagina de inicio"})
})

app.get("/servicios", (req, res)=>{
    res.render("index", {message:"Pagina de servicios"})
})

app.use((req,res,next)=>{
    res.render("404",{message:"Lost", descripcion:"la ruta escrita no existe"})
})

app.listen(port, ()=>{
    console.log("Corriendo")
})