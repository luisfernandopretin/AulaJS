document.write("<h1>Aula 1 - Exercicio 3</h1>")

var valor = Number (prompt("Digite o valor da prestação em atraso:"));
var taxa = Number (prompt("Digite a taxa de juros: "));
var tempo = Number (prompt("Digite o tempo de dias de atraso: "));



var resultado = valor +  ( valor * (taxa * taxa /100) * tempo);
document.write("<P>O valor da parcela é de" + resultado + "</p>");




