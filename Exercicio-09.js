const prompt = require('prompt-sync')();
console.clear();

// Variáveis
const ValorTotal = 280000, Entrada = 2500, parcelas = 65, TaxaAnual = 0.12;

// Cálculos
const ValorFinanciado = ValorTotal - Entrada;
const TaxaMensal = Math.pow(1 + TaxaAnual, 1 / 12) - 1;
const parcela = ValorFinanciado * TaxaMensal / (1 - Math.pow(1 + TaxaMensal, -parcelas));
const ValorFinal = (parcela * parcelas) + Entrada;

// Saída
console.log(`O valor final que Paulo irá pagar é de: R$${ValorFinal.toFixed(2)}`);
