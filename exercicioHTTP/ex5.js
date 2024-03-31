import http from 'http';

// Define um número fixo para a contagem regressiva
const numeroInicial = 10;

http.createServer((req, res) => {
    let numero = numeroInicial;

    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.write('<h2>Contagem Regressiva:</h2>');

    // Verifica se o número é positivo antes de começar a contagem
    do {
        res.write(`<p>${numero}</p>`);
        numero--;
    } while (numero >= 0);

    res.end('<p>Fim da contagem.</p>');
}).listen(5000, () => console.log('Servidor rodando na porta 5000'));
