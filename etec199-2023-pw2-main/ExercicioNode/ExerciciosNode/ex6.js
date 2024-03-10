import inquirer from "inquirer";
import chalk from "chalk";

inquirer
  .prompt([
    {
      message: "Informe um número: ",
      name: "num1",
    },
    {
      message: "Informe o segundo número: ",
      name: "num2",
    },
  ])
  .then((answers) => {
    // Convertendo as entradas para números
    const num1 = parseFloat(answers.num1);
    const num2 = parseFloat(answers.num2);

    // fazendo a função
    function soma(num1, num2) {
      return num1 + num2;
    }

    // Calculando a soma e exibindo o resultado
    const resultado = soma(num1, num2);
    console.log(`A soma é: ${resultado}`);
  })
  .catch((error) => {
    console.log(chalk.bgRed(error.message));
  });