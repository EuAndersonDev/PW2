import inquirer from "inquirer"
import chalk from "chalk"

/* Faça um programa que solicita ao usuário um número inteiro positivo, 
(se o numero for negativo retorne uma mensagem falando que o numero nao é valido)
e realize uma contagem regressiva desse número até 0. 
A cada passo, o programa deve imprimir o número atual da contagem. */


inquirer
    .prompt([
        {
        message: "Informe um número para a contagem: ",
        name: "num",
        validate: function(value) {
            // Verifica se a entrada é um número inteiro positivo
            var verificarpos = Math.sign(value);

            if(verificarpos == 1){
            // Se for um número inteiro, retorna true para passar a validação
            return true;
            } else{
            // Se não for um número inteiro, retorna uma mensagem de erro
            return 'Por favor, insira um número inteiro positivo. Não é necessario executar o programa novamente';
            }
        }
        }
    ])
    .then((answers) => {
        let numero = answers["num"];

        while(numero >= 0 ){
            console.log(chalk.bgGray(numero))
            numero--;
        }

    })
    .catch((error) => {
        console.log(chalk.bgBlue(error));
    });