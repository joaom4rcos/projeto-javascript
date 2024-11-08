function conversaoCambial() {
    const dolar = 5.50;
    const reais = parseFloat(prompt("Digite a quantidade de Reais que deseja converter para Dólar: "));
    const valorConvertido = reais / dolar;
    console.log(O valor em Dólares é: $${valorConvertido.toFixed(2)});
}
conversaoCambial();
