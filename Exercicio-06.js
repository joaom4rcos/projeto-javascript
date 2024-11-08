const prompt = require('prompt-sync')();
const idade = Number(prompt("Digite sua idade: "));

// saída
if (idade < 16) {
  console.log("\nNão Eleitor");
} else if (idade < 18 || idade >= 65) {
  console.log("\nEleitor Facultativo");
} else {
  console.log("\nEleitor Obrigatório");
}
