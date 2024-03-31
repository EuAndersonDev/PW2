import http from "http";

// Cria o servidor HTTP
http.createServer((req, res) => {
    // Define uma nota fixa
    let nota = 5; // Nota definida diretamente no código

    // Aplica a lógica para determinar o status do aluno baseado na nota
    if(nota < 4) {
        res.end("<h1>Aluno reprovado!</h1>");
    } else if(nota >= 4 && nota < 6) {
        res.end("<h1>Aluno de recuperacao</h1>");
    } else {
        res.end("<h1>Aluno aprovado!</h1>");
    }

}).listen(5000, () => {
    console.log("Servidor rodando na porta 5000");
});
