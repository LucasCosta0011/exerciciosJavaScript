function exibirMenssagem(){
    //
}
/* USANDO FUNCAO NO HTML
function lerNome(entrada){
   
    var nome = document.getElementById("nome");
    
    entrada.addEventListener("change", function(){
        nome.innerHTML = entrada.value;
    });
}
*/
// SEM HTML

var entrada = document.getElementById("entrada");

//dps que se tem o objeto, coloca o nome do evento para ser capturado.
entrada.onchange = function(){
     lerNome(this);
}
function lerNome(input){
   var nome = document.getElementById("nome");

   nome.innerHTML = input.value;
}


var blocos = document.getElementsByClassName("bloco");


for (let x=0; x<blocos.length; x++ )
{
    blocos[x].onmouseover = function(){
        aplicarEstilo(this);
    }
    blocos[x].onmouseout = function(){
        removerEstilo(this);
    }
}

function aplicarEstilo(e){
    //colocar os parâmetros da borda certo.
    e.style.border = "3px solid red";
}

function removerEstilo(e){
    e.style.border = "1px solid #222";
}