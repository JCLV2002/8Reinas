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
         for (let i = 0; i < 8; i++) {
            if (columna != i) {
               tablero.rows[renglon].cells[i].removeAttribute("onclick");
            }
            if (renglon != i) {
               tablero.rows[i].cells[columna].removeAttribute("onclick");
            }
         } 

         //recoremos diagonales de izquierda y derecha 
         var r = renglon;
         var c = columna;

         while (r >= 0 && c < 8) {
            tablero.rows[r].cells[c].style.backgroundColor = "#ff0000";
            r -- ;
            c++ ;
         }
         r = renglon + 1;
         c = columna -1 ;
         while (c >= 0 && r < 8) {
            tablero.rows[r].cells[c].style.backgroundColor = "#ff0000";
            r ++ ;
            c --;
         }
         

         reinasPorColocar--;
         reinascolocadas++;
      }
   } else {
      celda.style = " background-image: none;";
      var renglon = celda.parentElement.rowIndex;
         var columna = celda.cellIndex;
         /*Bloqueamos renglon */
         var tablero = document.getElementById("tabla");
         alert(renglon + "" + columna);
         for (let i = 0; i < 8; i++) {
            tablero.rows[renglon].cells[i].setAttribute("onclick","colocarReina(this)");
            tablero.rows[i].cells[columna].setAttribute("onclick","colocarReina(this)");
         }
      reinasPorColocar++;
      reinascolocadas--;
   }
   document.getElementById("RC").innerHTML = "Reinas por colocar" + reinasPorColocar;
   document.getElementById("RCS").innerHTML = "Reinas colocadas:" + reinascolocadas;
}
