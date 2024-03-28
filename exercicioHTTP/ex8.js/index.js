import http from "http";
import soma from "./soma.js";
import diferenca from "./diferenca.js";
import multiplicacao from "./multiplicacao.js";
import divisao from "./divisao.js";

http.createServer((req, res) => {
    let operacao = "soma"; // Mudar para executar outra operação!!
    let num1 = 10,
        num2 = 5;

    switch (operacao) {
        case "soma":
            res.write(String(soma(num1, num2))); // Convertendo para string antes de escrever na resposta
            break;
        case "diferenca":
            res.write(String(diferenca(num1, num2)));
            break;
        case "multiplicacao":
            res.write(String(multiplicacao(num1, num2)));
            break;
        case "divisao":
            res.write(String(divisao(num1, num2)));
            break;
        default:
            res.end();
            break;
    }
    res.end(); // Finalizar a resposta
})
.listen(5000, () => {
    console.log("App rodando na porta 5000");
});
