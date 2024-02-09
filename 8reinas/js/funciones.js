var reinasPorColocar = 8;
var reinasColocadas = 0;

function colocarReina(celda) {
  if (window.getComputedStyle(celda).backgroundImage == "none") {
    if (reinasColocadas < 8) {
      celda.style = "background-image: url(./img/reina.png); background-size:cover;";
      var renglon = celda.parentElement.rowIndex;
      var columna = celda.cellIndex;
      var tablero = document.getElementById("tabla");
      
      // Bloquear fila y columna
      for (let i = 0; i < 8; i++) {
        if (columna != i) {
          tablero.rows[renglon].cells[i].removeAttribute("onclick");
        }
        if (renglon != i) {
          tablero.rows[i].cells[columna].removeAttribute("onclick");
        }
      }
      
      // Bloquear diagonales
      for (let i = 1; i < 8; i++) {
        if (renglon - i >= 0 && columna - i >= 0) {
          tablero.rows[renglon - i].cells[columna - i].removeAttribute("onclick");
        }
        if (renglon - i >= 0 && columna + i < 8) {
          tablero.rows[renglon - i].cells[columna + i].removeAttribute("onclick");
        }
        if (renglon + i < 8 && columna - i >= 0) {
          tablero.rows[renglon + i].cells[columna - i].removeAttribute("onclick");
        }
        if (renglon + i < 8 && columna + i < 8) {
          tablero.rows[renglon + i].cells[columna + i].removeAttribute("onclick");
        }
      }

      reinasPorColocar--;
      reinasColocadas++;
    }
  } else {
    // Restaurar eventos onclick
    celda.style = "background-image: none";
    var renglon = celda.parentElement.rowIndex;
    var columna = celda.cellIndex;
    var tablero = document.getElementById("tabla");
    for (let i = 0; i < 8; i++) {
      tablero.rows[renglon].cells[i].setAttribute("onclick", "colocarReina(this)");
      tablero.rows[i].cells[columna].setAttribute("onclick", "colocarReina(this)");
    }

    // Restaurar diagonales
    for (let i = 1; i < 8; i++) {
      if (renglon - i >= 0 && columna - i >= 0) {
        tablero.rows[renglon - i].cells[columna - i].setAttribute("onclick", "colocarReina(this)");
      }
      if (renglon - i >= 0 && columna + i < 8) {
        tablero.rows[renglon - i].cells[columna + i].setAttribute("onclick", "colocarReina(this)");
      }
      if (renglon + i < 8 && columna - i >= 0) {
        tablero.rows[renglon + i].cells[columna - i].setAttribute("onclick", "colocarReina(this)");
      }
      if (renglon + i < 8 && columna + i < 8) {
        tablero.rows[renglon + i].cells[columna + i].setAttribute("onclick", "colocarReina(this)");
      }
    }

    reinasPorColocar++;
    reinasColocadas--;
  }
  
  document.getElementById("reinasColoca").innerHTML = "Reinas por colocar: " + reinasPorColocar;
  document.getElementById("reinasColoca1").innerHTML = "Reinas Colocadas: " + reinasColocadas;
}


function solucion(valor) {
  var celdas = document.getElementById("tabla");
  if (valor === 'solucion1') {
      celdas.rows[0].cells[3].style = "background-image: url(./img/reina.png); background-size:cover;";
      celdas.rows[1].cells[6].style = "background-image: url(./img/reina.png); background-size:cover;";
      celdas.rows[2].cells[2].style = "background-image: url(./img/reina.png); background-size:cover;";
      celdas.rows[3].cells[7].style = "background-image: url(./img/reina.png); background-size:cover;";
      celdas.rows[4].cells[1].style = "background-image: url(./img/reina.png); background-size:cover;";
      celdas.rows[5].cells[4].style = "background-image: url(./img/reina.png); background-size:cover;";
      celdas.rows[6].cells[0].style = "background-image: url(./img/reina.png); background-size:cover;";
      celdas.rows[7].cells[5].style = "background-image: url(./img/reina.png); background-size:cover;";
      // limpiar celdas
      celdas.rows[0].cells[4].style = "background-image:url(./img/);  background-size: cover;";
      celdas.rows[1].cells[2].style = "background-image:url(./img/);  background-size: cover;";
      celdas.rows[2].cells[7].style = "background-image:url(./img/);  background-size: cover;";
      celdas.rows[3].cells[3].style = "background-image:url(./img/);  background-size: cover;";
      celdas.rows[4].cells[6].style = "background-image:url(./img/);  background-size: cover;";
      celdas.rows[5].cells[0].style = "background-image:url(./img/);  background-size: cover;";
      celdas.rows[6].cells[5].style = "background-image:url(./img/);  background-size: cover;";
      celdas.rows[7].cells[1].style = "background-image:url(./img/);  background-size: cover;";
  
      
  } else if (valor === 'solucion2') {
    celdas.rows[0].cells[4].style = "background-image:url(./img/reina.png);  background-size: cover;";
    celdas.rows[1].cells[2].style = "background-image:url(./img/reina.png);  background-size: cover;";
    celdas.rows[2].cells[7].style = "background-image:url(./img/reina.png);  background-size: cover;";
    celdas.rows[3].cells[3].style = "background-image:url(./img/reina.png);  background-size: cover;";
    celdas.rows[4].cells[6].style = "background-image:url(./img/reina.png);  background-size: cover;";
    celdas.rows[5].cells[0].style = "background-image:url(./img/reina.png);  background-size: cover;";
    celdas.rows[6].cells[5].style = "background-image:url(./img/reina.png);  background-size: cover;";
    celdas.rows[7].cells[1].style = "background-image:url(./img/reina.png);  background-size: cover;";

    //cubrir las otras celdas
    celdas.rows[0].cells[3].style = "background-image: url(); background-size:cover;";
    celdas.rows[1].cells[6].style = "background-image: url(./img/); background-size:cover;";
    celdas.rows[2].cells[2].style = "background-image: url(./img/; background-size:cover;";
    celdas.rows[3].cells[7].style = "background-image: url(./img/); background-size:cover;";
    celdas.rows[4].cells[1].style = "background-image: url(./img/); background-size:cover;";
    celdas.rows[5].cells[4].style = "background-image: url(./img/); background-size:cover;";
    celdas.rows[6].cells[0].style = "background-image: url(./img/); background-size:cover;";
    celdas.rows[7].cells[5].style = "background-image: url(./img/); background-size:cover;";
  }
}



