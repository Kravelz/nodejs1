const express = require("express")
const router = express.Router()

router.get("/", (req, res)=>{
    res.render("index", {message:"Pagina de inicio"})
})

router.get("/servicios", (req, res)=>{
    res.render("index", {message:"Pagina de servicios"})
})

module.exports = router;