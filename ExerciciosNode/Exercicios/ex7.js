import inquirer from "inquirer"
import chalk from "chalk"

//VETOR E FUNÇÃO
/* Criar um programa que leia um vetor A com 5 posições de inteiro e imprima na tela a soma de todos os valores */

function verificarNum(input) {
    //validar se é um numero
    if (isNaN(input)) {
      return 'Por favor, insira um número.';
    } else {
      return true;
    }
}

inquirer
    .prompt([
        {
            message:"Insira o valor 1 do vetor:",
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
            message:"Insira o valor 2 do vetor:",
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
        {
            message:"Insira o valor 3 do vetor:",
            name: "num3",
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
        const num1 = parseInt(answers.num1);
        const num2 = parseInt(answers.num2);
        const num3 = parseInt(answers.num3);

        var vetor = new Array() 

        vetor.push(num1);
        vetor.push(num2);
        vetor.push(num3);

        let soma = 0;
        for (let i = 0; i < vetor.length; i++) {
            soma += vetor[i];
        }

        console.log(chalk.bgGreen(`A soma dos valores do vetor resultou em: ${soma}`))
    })
    .catch((error) => {
        console.log(chalk.bgBlue(error));
    });