const prompt = require('prompt-sync')();
const { getFullYear, getDate, getMonth } = new Date();

// entrada
console.log(`${"=".repeat(12)} Idade em dias ${"=".repeat(12)}\n`);
let [dia, mes, ano] = prompt("Data de Nascimento (dd-mm-aaaa): ").split("-").map(Number);

// cálculo
let idadeEmDias = (getFullYear() - ano) * 365.25 + (getMonth() - mes) * 30 + getDate() - dia;

// saída
console.log(`\nSua idade em dias: ${idadeEmDias.toFixed(0)} dias`);
