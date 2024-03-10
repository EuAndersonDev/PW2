import inquirer from "inquirer"
import chalk from "chalk"

/* Criar um programa que solicite ao usuário um número inteiro de 1 a 7, e devolva o dia da
semana correspondente, sendo:
1 – Domingo
2 – Segunda-feira
3 – Terça-feira
4- Quarta-feira
5- Quinta-feira
6- Sexta-feira
7- Sábado
 */

inquirer
    .prompt([
        {
            type: "list",
            message: "Informe um número de 1 à 7", 
            name: "num",
            choices: ["1", "2", "3", "4", "5", "6", "7", "SAIR"]
        }
    ])
    .then((answers) => {
        switch (answers["num"]) {
            case "1":
                console.log(chalk.bgCyan("Domingo"))
                break;
            case "2":
                console.log(chalk.bgGray("Segunda-Feira"))
                break;
            case "3":
                console.log(chalk.bgGreen("Terça-Feira"))
                break;
            case "4":
                console.log(chalk.bgCyanBright("Quarta-Feira"))
                break;
            case "5":
                console.log(chalk.bgCyanBright("Quinta-Feira"))
                break;
            case "6":
                console.log(chalk.bgCyanBright("Sexta-Feira"))
                break;
            case "7":
                console.log(chalk.bgGray("Sábado"))
                break;
            case "SAIR":
                console.log(chalk.bgGreen.bold("Obrigado"))
                break;
            default:
                console.log(chalk.bgRed.bold("Digite uma opção válida"))
                break;
        }
    })
    .catch((error) => {
        console.log(error)
    });