import http from "http";
import soma from "./soma.js";
import diferenca from "./diferenca.js";
import multiplicacao from "./multiplicacao.js";
import divisao from "./divisao.js";

http
  .createServer((req, res) => {
    let operacao = soma; //mudar para executar outra operação!!
    let num1 = 10,
      num2 = 5;

    switch ("operacao") {
      case soma:
        res.write(soma(num1, num2));
        break;
      case diferenca:
        res.write(diferenca(num1, num2));
        break;
      case multiplicacao:
        res.write(multiplicacao(num1, num2));
        break;
      case divisao:
        res.write(divisao(num1, num2));
        break;
      default:
        res.end();
        break;
    }
  })
  .listen(5000, () => {
    console.log("App rodando na porta 5000");
  });
