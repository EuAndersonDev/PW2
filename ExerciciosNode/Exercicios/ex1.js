import inquirer from "inquirer"
import chalk from "chalk"

//Fazer um programa que o usuario insira um número e o programa retorne o número e se ele é par ou impare

inquirer
  .prompt([
    {
        message: "Informe um número", 
        name: "num"
    }
  ])
  .then((answers) => {
    if(answers["num"] % 2 == 0) {
        console.log(chalk.bgBlue(`${answers["num"]} é um número par`))
    } else {
        console.log(chalk.bgBlue(`${answers["num"]} é um número ímpar`))
    }
  })
  .catch((error) => {
    console.log(error)
  });