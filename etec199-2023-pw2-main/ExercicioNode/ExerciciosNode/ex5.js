import inquirer from "inquirer";
import chalk from "chalk";

const TAM = 10;
let a = new Array(TAM);
let b = new Array(TAM);

// Loop para ler o vetor A e calcular o quadrado
let i = 0;
const lerVetorA = () => {
  if (i < TAM) {
    inquirer
      .prompt([
        {
          name: "num",
          message: `Digite o ${i + 1}º valor do vetor A:`,
        },
      ])
      .then((answers) => {
        a[i] = parseInt(answers.num);
        b[i] = a[i] * a[i];
        i++;
        lerVetorA();
      })
      .catch((error) => {
        console.log(chalk.bgRed(error.message));
      });
  } else {
    apresentarVetorB();
  }
};


const apresentarVetorB = () => {
  console.log("B = [ " + b.join(" ") + " ]");
};


