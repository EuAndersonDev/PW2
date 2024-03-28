import http from 'http';

function calcularSoma(vetor) {
    let soma = 0;
    for (let i = 0; i < vetor.length; i++) {
        soma += vetor[i];
    }
    return soma;
}

const vetor = [3, 6, 9]; // Vetor fixo com 3 posições de exemplo

http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });

    const soma = calcularSoma(vetor);

    res.end(`<h1>A soma dos valores do vetor é: ${soma}</h1>`);
}).listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});
