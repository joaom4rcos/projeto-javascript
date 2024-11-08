// Início do algoritmo de conversão cambial
const prompt = require('prompt-sync')();
console.clear();

// Declaração de variáveis
const taxaDolar = 5.50;
let valorReais, valorConvertido;

// Introdução
console.log(`${"=".repeat(12)} Conversor de Reais para Dólar ${"=".repeat(12)}\n`);

// Entrada de dados
valorReais = parseFloat(prompt("Digite o valor em Reais (R$): "));

// Processamento da conversão
valorConvertido = valorReais / taxaDolar;

// Saída formatada com arredondamento
console.log(`\nO valor R$${valorReais.toFixed(2)} convertido para dólar é aproximadamente: US$${valorConvertido.toFixed(2)}`);

