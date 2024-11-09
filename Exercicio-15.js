console.clear();

// Variáveis
let Populacao_A = 5000000;
let Populacao_B = 7000000;
const TaxaDeNatalidadeA = 0.03;
const TaxaDeNatalidadeB = 0.02;
let anos = 0;

// Lógica
while (Populacao_A <= Populacao_B) {
    Populacao_A += Populacao_A * TaxaDeNatalidadeA;
    Populacao_B += Populacao_B * TaxaDeNatalidadeB;
    anos++;
}

// Saída
console.log(`Serão necessários ${anos} anos para que a população do País A ultrapasse a população do País B.`);
