import soma from "./soma.js";
import diferenca from "./diferenca.js";
import multiplicacao from "./multiplicacao.js";
import divisao from "./divisao.js";
import inquirer from "inquirer";

//Crie um switch para escolher uma operação e depois peça dois numeros e use-os para fazer as operações utilizando modularização

inquirer
    .prompt([
        {
            type: "list",
            message: "Informe a operação", 
            name: "operacao",
            choices: ["Soma", "Subtracao", "Divisao", "Multiplicacao", "SAIR"]
        },
        {
            message:"Insira o valor 1: ",
            name: "num1",
            validate: function(value) {
                //validar se é um numero
                if (isNaN(value)) {
                  return 'Por favor, insira um número.';
                } else {
                  return true;
                }
              }
        },
        {
            message:"Insira o valor 2:",
            name: "num2",
            validate: function(value) {
                //validar se é um numero
                if (isNaN(value)) {
                  return 'Por favor, insira um número.';
                } else {
                  return true;
                }
              }
        },
    ])
    .then((answers) => {
        const num1 = parseFloat(answers.num1);
        const num2 = parseFloat(answers.num2);

        switch (answers["operacao"]) {
            case "Soma":
                console.log(soma(num1, num2));
                break;
            case "Subtracao":
                console.log(diferenca(num1, num2));
                break;
            case "Divisao":
                if (num2 === 0) {
                    console.log("Não é possível dividir por zero.");
                } else {
                    console.log(divisao(num1, num2));
                }
                break;
            case "Multiplicacao":
                console.log(multiplicacao(num1, num2));
                break;
            case "SAIR":
                console.log("Obrigado");
                break;
            default:
                console.log("Digite uma opção válida");
                break;
        }
    })
    .catch((error) => {
        console.log(error);
    });