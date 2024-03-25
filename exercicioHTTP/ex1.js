import http from "http"
//create server object

http.createServer((req, res)=>{
    let num = 5;
    if(num % 2 == 0) {
        res.write(`<h1>${num} e um numero par</h1>`)
    } else {
        res.write(`<h1>${num} e um numero impar</h1>`)
    }
    res.end()
}).listen(5000,()=>{console.log("App rodando na porta 5000")})