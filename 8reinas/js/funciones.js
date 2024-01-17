var reinasPorColocar = 8;
var reinascolocadas = 0;


function colocarReina(celda) {
   /* alert("le dieron click a la celda" + celda);*/
   if (window.getComputedStyle(celda).backgroundImage == "none") {
      if (reinascolocadas < 8) {
         celda.style = " background-image: url(./img/reina.png); background-size: cover;";
         var renglon = celda.parentElement.rowIndex;
         var columna = celda.cellIndex;
         alert(renglon + "" + columna);
         reinasPorColocar--;
         reinascolocadas++;
      }
   } else {
      celda.style = " background-image: none;";
      reinasPorColocar++;
      reinascolocadas--;
   }

   document.getElementById("RC").innerHTML = "Reinas por colocar" + reinasPorColocar;

   document.getElementById("RCS").innerHTML = "Reinas colocadas:" + reinascolocadas;
}
