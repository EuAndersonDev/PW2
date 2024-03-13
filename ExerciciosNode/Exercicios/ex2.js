import inquirer from "inquirer"
import chalk from "chalk"

/* Criar um programa que leia uma nota de um usuário e em seguida uma mensagem segundo a condição da
média:
Se a nota for < 4: Reprovado
Se a nota for >=6: Aprovado.
Se a nota for >=4 e <6: Recuperação 
*/

inquirer
    .prompt([
        {
            message: "Informe a nota", 
            name: "nota"
        }
    ])
    .then((answers) => {
        if(answers["nota"] < 4) {
            console.log("Aluno reprovado!")
        } else if(answers["nota"] < 6){
            console.log("Aluno de recuperação")
        } else {
            console.log("Aluno aprovado!")
        }
    })
    .catch((error) => {
        console.log(error)
    });
