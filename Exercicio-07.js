const prompt = require('prompt-sync')();
const CustoFabrica = Number(prompt("Digite o custo de fábrica: "));

// cálculo
const ComissaoRevendedor = CustoFabrica * 0.25;
const Impostos = CustoFabrica * 0.45;
const PrecoFinal = CustoFabrica + ComissaoRevendedor + Impostos;

// saída
console.log(`\nCusto de fábrica: R$${CustoFabrica.toFixed(2)}\nComissão do revendedor: R$${ComissaoRevendedor.toFixed(2)}\nImpostos: R$${Impostos.toFixed(2)}\nPreço final: R$${PrecoFinal.toFixed(2)}`);
