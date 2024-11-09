const prompt = require('prompt-sync')();
console.clear();

// Entrada
console.log(`${"=".repeat(12)} Algoritmo que informa se um empréstimo pode ser concedido ${"=".repeat(12)}\n`);

let renda_mensal = Number(prompt("Renda Mensal: "));
let valor_emprestimo = Number(prompt("Valor do empréstimo: "));
let numero_prestacoes = Number(prompt("N° de Prestações: "));

// Lógica de validação
let valor_prestacao = valor_emprestimo / numero_prestacoes;

if (valor_emprestimo > 10 * renda_mensal) {
    console.log("\nO valor do empréstimo excede o limite permitido.");
} else if (valor_prestacao > 0.3 * renda_mensal) {
    console.log("\nO valor da prestação excede 30% da renda mensal.");
} else {
    console.log("\nO empréstimo pode ser concedido.");
}
