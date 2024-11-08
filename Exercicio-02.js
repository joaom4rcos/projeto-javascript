const prompt = require('prompt-sync')();
console.clear();

const hoje = new Date();
let [diaNasc, mesNasc, anoNasc] = prompt("Digite sua data de nascimento (DD-MM-AAAA): ").split("-").map(Number);
let idade = hoje.getFullYear() - anoNasc - ((hoje.getMonth() + 1 < mesNasc || (hoje.getMonth() + 1 === mesNasc && hoje.getDate() < diaNasc)) ? 1 : 0);

console.log(`\nVocê tem ${idade} anos.`);
console.log(idade >= 18 ? "Acesso Liberado" : "Acesso Negado");
