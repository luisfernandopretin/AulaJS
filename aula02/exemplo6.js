function Exemplo6(){
let lado = Number (document.getElementById("lado").value);
 
let resultado;

 resultado = (lado*lado);

 document.getElementById("resultado").innerHTML = "<p> A area é " + resultado +"</p>";
};