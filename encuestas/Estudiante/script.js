let preguntas = [
    "¿Cuál es la capital de España?",
    "¿Cuál es la moneda oficial de Japón?",
    "¿Cuál es el río más largo del mundo?",
  ];
  
  let correcta = [1, 2, 0];
  
  let opciones = [
    ["Lisboa", "Madrid", "Barcelona"],
    ["Dólar", "Euro", "Yen"],
    ["Nilo", "Amazonas", "Misisipi"],
  ];
  
  let posActual = 0;
  let cantidadAcertadas = 0;
  
  function comenzarJuego() {
    posActual = 0;
    cantidadAcertadas = 0;
    document.getElementById("pantalla-inicial").style.display = "none";
    document.getElementById("pantalla-juego").style.display = "block";
    cargarPregunta();
  }
  
  function cargarPregunta() {
    if (preguntas.length <= posActual) {
      terminarJuego();
    } else {
      document.getElementById("pregunta").innerHTML = preguntas[posActual];
      document.getElementById("n0").innerHTML = opciones[posActual][0];
      document.getElementById("n1").innerHTML = opciones[posActual][1];
      document.getElementById("n2").innerHTML = opciones[posActual][2];
    }
  }
  
  function comprobarRespuesta(opElegida) {
    if (opElegida == correcta[posActual]) {
      cantidadAcertadas++;
    }
    posActual++;
    setTimeout(cargarPregunta, 1000);
}

function terminarJuego() {
  document.getElementById("pantalla-juego").style.display = "none";
  document.getElementById("pantalla-final").style.display = "block";
  document.getElementById("numCorrectas").innerHTML = cantidadAcertadas;
  document.getElementById("numIncorrectas").innerHTML = preguntas.length - cantidadAcertadas;
}