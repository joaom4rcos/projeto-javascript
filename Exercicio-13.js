const prompt = require('prompt-sync')();
console.clear();

// Entrada
console.log(`${"=".repeat(12)} Algoritmo que exibe se um dígito é uma vogal, consoante, número ou símbolo ${"=".repeat(12)}\n`);
let Caractere = prompt("Tecle um Digito: ");

// Verificação e saída
if (Caractere.length === 1) {
    if (!isNaN(Caractere)) {
        console.log(`\nO caractere: ${Caractere} é um Número.`);
    } else if ("aeiou".includes(Caractere.toLowerCase())) {
        console.log(`\nO caractere: ${Caractere} é uma Vogal.`);
    } else if (/[a-zA-Z]/.test(Caractere)) {
        console.log(`\nO caractere: ${Caractere} é uma Consoante.`);
    } else {
        console.log(`\nO caractere: ${Caractere} é um Símbolo.`);
    }
} else {
    console.log("\nInsira apenas um dígito!");
}
