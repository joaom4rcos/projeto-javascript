const prompt = require('prompt-sync')();
console.clear();

console.log(`${"=".repeat(12)} Cálculo de IMC ${"=".repeat(12)}\n`);

const peso = parseFloat(prompt("Digite seu peso (Kg): "));
const altura = parseFloat(prompt("Digite sua altura (M): "));
const imc = peso / (altura * altura);

console.log(`\nSeu IMC é aproximadamente: ${imc.toFixed(2)}`);

if (imc < 20) console.log("Você está abaixo do peso");
else if (imc <= 24) console.log("Você está saudável");
else if (imc <= 29) console.log("Você está com sobrepeso");
else if (imc <= 39) console.log("Você está obeso");
else console.log("Você está com obesidade mórbida");
