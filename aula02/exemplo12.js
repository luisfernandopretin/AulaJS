function Exemplo12()
{

let km = Number (document.getElementById("km").value);
let kmp = Number (document.getElementById("kmp").value);
let qm = Number (document.getElementById("qm").value);

  
    total= (km*kmp) +(qm*0.50);

   

 document.getElementById("total").innerHTML = "<p> O valor total da corrida é de: " + total +"</p>";
};


