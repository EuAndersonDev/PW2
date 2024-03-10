import inquirer from "inquirer"
import chalk from "chalk"

/* Criar um programa que leia duas notas de um usuário, calcule e
apresente a sua média, e em seguida uma mensagem segundo a condição da
média:
Se a média for < 4: Reprovado
Se a média for >=6: Aprovado.
Se a média for >=4 e <6: Recuperação 
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