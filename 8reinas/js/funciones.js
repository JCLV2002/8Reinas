var contador=0;

function celdaclick(queen){
    //Este if valida si la celda tiene imagen de fondo o no
    if((window.getComputedStyle(queen).backgroundImage)=="none" ) {
        if(contador != 8){
            contador++; 
            queen.style="background-image:url(./Queen.png); background-size: cover;";
        } 
    }
    else {
        contador--;
        queen.style="background-image:none;";
    }
    document.getElementById("div_contador").innerHTML="Reinas colocadas: "+ contador;
}

function simulacion(){
    if(contador == 8){

        var celdas= document.getElementById("tabla_ajedrez").getElementsByTagName("td");

        var queens = [];

        var countqueens = 0;

        var win = true;

        for (let i = 0; i < celdas.length; i++) {


            if(celdas[i].style.backgroundImage=="url(\"./Queen.png\")") {

                queens[countqueens] = i+1;

                countqueens++;

            }
        
        }

        for (let i = 0; i < 8; i++) {

            for (let j = i+1; j < 8; j++) {

                var qR = Math.ceil(queens[i]/8)
                var oR = Math.ceil(queens[j]/8)

                var qC = queens[i] - qR;
                var oC = queens[j] - qR;

                if (queenattack(qR, qC, oR, oC)){
                    i=8;
                    j=8;
                    win=false;
                }
            }
        }

        if (win==true) {
            alert("Solucion correcta")
        }
        else{
            alert("Solucion incorrecta")
        }
    }
    else {
        alert("Faltan reinas por colocar");
    }
}

function queenattack(qR, qC, oR, oC)
{
    if (qR == oR)
        return true;
    if (qC == oC)
        return true;
    if (Math.abs(qR - oR) == Math.abs(qC - oC))
        return true;
    return false;
}

function reiniciar(cont){
    var celdas=document.getElementById("tabla_ajedrez").getElementsByTagName("td");
    for (let i = 0; i < celdas.length; i++) {
        celdas[i].style="backgroundImage:none";    
    }
    contador = cont;
    document.getElementById("div_contador").innerHTML="Reinas colocadas: "+ contador;
}

function solucion1(){
    reiniciar(8);
    var celdas=document.getElementById("tabla_ajedrez");
    celdas.rows[0].cells[4].style="background-image:url(./Queen.png); background-repeat:no-repeat; background-size: cover;";
    celdas.rows[1].cells[1].style="background-image:url(./Queen.png); background-repeat:no-repeat; background-size: cover;";
    celdas.rows[2].cells[3].style="background-image:url(./Queen.png); background-repeat:no-repeat; background-size: cover;";
    celdas.rows[3].cells[6].style="background-image:url(./Queen.png); background-repeat:no-repeat; background-size: cover;";
    celdas.rows[4].cells[2].style="background-image:url(./Queen.png); background-repeat:no-repeat; background-size: cover;";
    celdas.rows[5].cells[7].style="background-image:url(./Queen.png); background-repeat:no-repeat; background-size: cover;";
    celdas.rows[6].cells[5].style="background-image:url(./Queen.png); background-repeat:no-repeat; background-size: cover;";
    celdas.rows[7].cells[0].style="background-image:url(./Queen.png); background-repeat:no-repeat; background-size: cover;";
    
}

function solucion2(){
    reiniciar(8);
    var celdas=document.getElementById("tabla_ajedrez");
    celdas.rows[0].cells[4].style="background-image:url(./Queen.png); background-repeat:no-repeat; background-size: cover;";
    celdas.rows[1].cells[2].style="background-image:url(./Queen.png); background-repeat:no-repeat; background-size: cover;";
    celdas.rows[2].cells[7].style="background-image:url(./Queen.png); background-repeat:no-repeat; background-size: cover;";
    celdas.rows[3].cells[3].style="background-image:url(./Queen.png); background-repeat:no-repeat; background-size: cover;";
    celdas.rows[4].cells[6].style="background-image:url(./Queen.png); background-repeat:no-repeat; background-size: cover;";
    celdas.rows[5].cells[0].style="background-image:url(./Queen.png); background-repeat:no-repeat; background-size: cover;";
    celdas.rows[6].cells[5].style="background-image:url(./Queen.png); background-repeat:no-repeat; background-size: cover;";
    celdas.rows[7].cells[1].style="background-image:url(./Queen.png); background-repeat:no-repeat; background-size: cover;";
    
}