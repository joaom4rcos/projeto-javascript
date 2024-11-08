// Início do algoritmo de conversão cambial
const prompt = require('prompt-sync')();
console.clear();

// Declaração de variáveis
const taxaDolar = 5.50;
let valorReais, valorConvertido;

// Introdução
console.log(`${"=".repeat(10)} Conversor de Real para Dólar ${"=".repeat(10)}\n`);

// Entrada de dados
valorReais = parseFloat(prompt("Digite o valor em Reais (R$): "));

// Processamento da conversão
valorConvertido = valorReais / taxaDolar;

// Saída formatada
console.log(`\nO valor R$${valorReais.toFixed(2)} convertido para dólar é aproximadamente: US$${valorConvertido.toFixed(2)}`);
