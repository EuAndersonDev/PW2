import http from 'http';

// Função para verificar se é um número
function verificarNum(input) {
    if (isNaN(input)) {
      return 'Por favor, insira um número.';
    } else {
      return true;
    }
}

http.createServer((req, res) => {
    const vetor = [10, 20, 30]; // Vetor de exemplo

    let soma = 0;
    for (let i = 0; i < vetor.length; i++) {
        soma += vetor[i];
    }

    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end(`A soma dos valores do vetor resultou em: ${soma}`);
}).listen(5000, () => {
    console.log('Servidor rodando na porta 5000');
});
