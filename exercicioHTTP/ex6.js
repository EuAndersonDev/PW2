import http from 'http';

// Definindo intervalo fixo de números
const inicio = 1;
const fim = 10;

http.createServer((req, res) => {
    res.write('<h2>Quadrados dos números no intervalo [' + inicio + ', ' + fim + ']:</h2>');
    
    if (inicio >= fim) {
        res.end('<p style="color:red;">O número de início deve ser menor que o número de fim.</p>');
    } else {
        for (let num = inicio; num <= fim; num++) {
            res.write(`<p>${num}^2 = ${num * num}</p>`);
        }
        res.end();
    }
}).listen(5000, () => console.log('Servidor rodando na porta 5000'));
