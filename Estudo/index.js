const express = require("express");
const app = express();

app.get("/", function(req, res){
    res.send("Seja bem vindo")
});

app.get("/sobre",function(req, res){
    res.send("Minha pag sobre")
});

app.get("/blog", function(req, res){
    res.send("Bem vindo ao blog")
});

//Parâmetros
app.get("/ola/:nome/:cargo/:cor",function(req, res){
    res.send("Ola "+req.params.nome+"Sua cor favorita é: "+req.params.cor+"Seu cargo é: "+req.params.cargo)
});


app.listen(8980,function(){
    console.log("Servidor rodando na porta 8981");
});