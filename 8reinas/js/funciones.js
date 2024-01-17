var reinasPorColocar = 8;
var reinascolocadas = 0;
function colocarReina(celda) {
   /* alert("le dieron click a la celda" + celda);*/
   if (window.getComputedStyle(celda).backgroundImage == "none") {
      if (reinascolocadas < 8) {
         celda.style = " background-image: url(./img/reina.png); background-size: cover;";
         var renglon = celda.parentElement.rowIndex;
         var columna = celda.cellIndex;
         /*Bloqueamos renglon */
         var tablero = document.getElementById("tabla");
         alert(renglon + "" + columna);
         for (let index = 0; index < 8; index++) {
            if (columna != index) {
               tablero.rows[renglon].cells[index].removeAttribute("onclick");
            }
         } 
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
