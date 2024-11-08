// Início do algoritmo para calcular a idade em dias
const prompt = require('prompt-sync')();
console.clear();

// Variáveis
const dataAtual = new Date();
const anoAtual = dataAtual.getFullYear();
let idadeEmDias = 0;
let anoNascimento, mesNascimento, diaNascimento;
let idadeAnos, idadeMeses, idadeDias;

// Entrada de dados
console.log(`${"=".repeat(12)} Algoritmo que exibe sua idade em dias ${"=".repeat(12)}\n`);
console.log("Digite sua data de nascimento no formato 'dd-mm-aaaa' (por exemplo: 01-01-2000)\n");

const dataNascimento = prompt("Data de Nascimento: ");
const [dia, mes, ano] = dataNascimento.split("-").map(Number);

// Cálculos para idade
idadeAnos = anoAtual - ano;
mesNascimento = 12 - mes;
diaNascimento = dia;

// Calculo total de idade em dias
idadeEmDias = (idadeAnos * 365.25) + (mesNascimento * 30) + diaNascimento;

console.log(`\nSua idade aproximada em dias é: ${idadeEmDias.toFixed(0)} dias`);
