import http from "http";

let diaAtual = 0; // Variável para armazenar o índice do dia atual

const diasDaSemana = [
    "Domingo",
    "Segunda-Feira",
    "Terça-Feira",
    "Quarta-Feira",
    "Quinta-Feira",
    "Sexta-Feira",
    "Sábado"
];

http.createServer((req, res) => {
    
    // Mostra o dia da semana atual e incrementa o diaAtual
    res.end(`Hoje é ${diasDaSemana[diaAtual]}`);
    
    // Incrementa o diaAtual e reseta se passar de 6 (Sábado)
    diaAtual = (diaAtual + 1) % diasDaSemana.length;
}).listen(5000, () => {
    console.log("Servidor rodando na porta 5000");
});
