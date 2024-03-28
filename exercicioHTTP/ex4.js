import http from 'http';

// Definindo um número fixo para contagem regressiva
const numeroInicial = 10; 

http.createServer((req, res) => {
    let numero = numeroInicial;
    
    // Verifica se o número é positivo antes de começar a contagem
    if (numero < 0) {
        res.end('O número fornecido não é válido. Por favor, forneça um número inteiro positivo.');
        return;
    }
    
    res.writeHead(200, {'Content-Type': 'text/plain'});
    const intervalo = setInterval(() => {
        res.write(`${numero}\n`); // Escreve o número atual na resposta
        
        if (numero === 0) {
            clearInterval(intervalo);
            res.end('Fim da contagem regressiva.'); // Finaliza a resposta quando a contagem chega a 0
        }
        
        numero--;
    }, 1000); // Intervalo de 1 segundo entre cada número
}).listen(5000, () => {
    console.log("Servidor rodando na porta 5000. Iniciando contagem regressiva de:", numeroInicial);
});
