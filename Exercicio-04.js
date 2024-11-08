const prompt = require('prompt-sync')();
const num = prompt("Digite um número: ");

// saída
if (num % 10 === 0 || num % 5 === 0 || num % 2 === 0) {
  let divisores = [];
  if (num % 10 === 0) divisores.push(10);
  if (num % 5 === 0) divisores.push(5);
  if (num % 2 === 0) divisores.push(2);
  console.log(`O número pode ser dividido por ${divisores.join(', ')}`);
} else {
  console.log("O número não pode ser dividido nem por 10, nem por 5, nem por 2");
}
