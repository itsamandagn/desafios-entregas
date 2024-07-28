const valorFrete = 2;
const valorUn = 15;
var pares = parseInt(prompt("Insira a quantidade de pares que deseja comprar"));
var calcularValorPedido = (pares,valorUn) => pares*valorUn;
var calcularIpi = (valorPedido) => valorPedido*0.0325;
var calcularVolumes = (pares) => pares/12;
var calcularFrete = (valorFrete,volumes) => valorFrete*volumes;
var precoFinal = (valorPedido,valorIpi) => valorPedido + valorIpi + frete;

var valorPedido = calcularValorPedido(pares,valorUn);
var valorIpi = calcularIpi(valorPedido);
var volumes = calcularVolumes(pares);
var frete = calcularFrete (valorFrete,volumes);
var total = precoFinal(valorPedido,valorIpi,frete);

alert("Preço do pedido" + " " + "R$" + valorPedido);
alert("Valor do imposto IPI" + " " + "R$" + valorIpi);
alert("Volumes" + volumes + " " + "un");
alert("Frete" + " " + "R$" + frete);
alert("Preço final" + " " + "R$" + total);