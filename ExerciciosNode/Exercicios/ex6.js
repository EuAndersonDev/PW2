import inquirer from "inquirer"
import chalk from "chalk"

/*Escreva um programa que solicite ao usuário dois números inteiros, 
inicio e fim (onde inicio < fim), e imprima o quadrado de todos os 
números no intervalo [inicio, fim].*/

inquirer
  .prompt([
      {
        message: "Escreva o número de ínicio: ",
        name: "inicio",
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
        message: "Escreva o número de fim: ",
        name: "fim",
        validate: function(value) {
            if (isNaN(value)) {
              return 'Por favor, insira um número.';
            } else {
              return true;
            }
          }
      }
  ])
  .then((answers)  => {
      //Transforma os inputs para numeros inteiros para realizar calculos
      const inicio = parseInt(answers.inicio);
      const fim = parseInt(answers.fim);

      if(inicio >= fim) {
          console.log(chalk.bgRed("O número de início deve ser menor que o número de fim. Por favor, tente novamente."));
      } else{
          for (let num = inicio; num <= fim; num++) {
              console.log(`${num}^2 = ${num * num}`);
            }
      }
  })
  .catch((error) => {
      console.log(chalk.bgBlue(error));
  });