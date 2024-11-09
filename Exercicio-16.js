const prompt = require('prompt-sync')();
console.clear();

// Variáveis
const indice_pluviometrico = [];
let dia_maior_indice = 0, dia_menor_indice = 0, PrimeraQuizena = 0, SegundaQuizena = 0;

// Entrada
console.log(`${"=".repeat(12)} Algoritmo Pluviométrico ${"=".repeat(12)}\n`);
for (let dia = 0; dia < 30; dia++) {
    indice_pluviometrico[dia] = parseFloat(prompt(`Dia ${dia + 1}: `));
    console.clear();
}

// Saída
for (let i = 1; i < 30; i++) {
    if (indice_pluviometrico[i] > indice_pluviometrico[dia_maior_indice]) dia_maior_indice = i;
    if (indice_pluviometrico[i] < indice_pluviometrico[dia_menor_indice]) dia_menor_indice = i;
}

PrimeraQuizena = indice_pluviometrico.slice(0, 15).reduce((a, b) => a + b) / 15;
SegundaQuizena = indice_pluviometrico.slice(15).reduce((a, b) => a + b) / 15;

console.log(`\nMaior índice: Dia ${dia_maior_indice + 1} (${indice_pluviometrico[dia_maior_indice]} mm)`);
console.log(`Menor índice: Dia ${dia_menor_indice + 1} (${indice_pluviometrico[dia_menor_indice]} mm)`);
console.log(`\nMédia da 1ª quinzena: ${PrimeraQuizena.toFixed(2)} mm`);
console.log(`Média da 2ª quinzena: ${SegundaQuizena.toFixed(2)} mm`);
