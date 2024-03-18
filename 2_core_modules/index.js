import http from "http"
//create server object
http.createServer((req, res)=>{
    let prof = "Everson Baceli"
    for(let i=0; i<=10; i++){
        res.write(`<h1>${prof}</h1>`)
        res.write(`<br></br>`)
    }
    res.end()
}).listen(5000,()=>{console.log("App rodando na porta 5000")})