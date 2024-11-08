const prompt = require('prompt-sync')();
console.clear();

// Variáveis
const taxa_desconto = 0.11, desconto_maximo = 334.29;

// Entrada
console.log(`${"=".repeat(12)} Algoritmo que calcula o desconto previdenciário ${"=".repeat(12)}\n`);
let salario = parseFloat(prompt("Informe o Salário: "));

// Cálculo do desconto
let desconto = Math.min(salario * taxa_desconto, desconto_maximo);

// Saída
console.log(`\nO Desconto Previdenciário será de: R$ ${desconto.toFixed(2)}`);
