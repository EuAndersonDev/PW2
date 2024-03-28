import http from 'http';

// Define um número fixo para a contagem regressiva
const numeroInicial = 10;

http.createServer((req, res) => {
    if (numeroInicial < 0) {
        res.end('O número fornecido não é válido. Por favor, forneça um número inteiro positivo.');
    } else {
        let numero = numeroInicial;
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        res.write('<h2>Contagem Regressiva:</h2>');
        
        const interval = setInterval(() => {
            if (numero >= 0) {
                res.write(`<p>${numero}</p>`);
                numero--;
            } else {
                clearInterval(interval);
                res.end('<p>Fim da contagem.</p>');
            }
        }, 1000);
    }
}).listen(5000, () => console.log('Servidor rodando na porta 5000'));
