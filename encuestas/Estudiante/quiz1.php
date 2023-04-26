<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../../css/encuesta.css">
    <link rel="stylesheet" href="../../css/btn.css">
    <title>ADIVINA LA RESPUESTA</title>
</head>
<body>
    <h1>ADIVINA LA RESPUESTA</h1>
    <!-- Pantalla inicial -->
    <div id="pantalla-inicial">
        <p>¿Puedes adivinar la respuesta correcta?</p>
        <button class="btn btn-comenzar" onclick="comenzarJuego()">COMENZAR A JUGAR</button>
    </div>
    <!-- Pantalla juego -->
    <div class="pantalla-juego" id="pantalla-juego" style="display: none;">
        <h2 id="pregunta"></h2>
        <div class="opciones">
            <button id="op0" onclick="comprobarRespuesta(0)">A</button>
            <span id="n0"></span>
            <br>
            <button id="op1" onclick="comprobarRespuesta(1)">B</button>
            <span id="n1"></span>
            <br>
            <button id="op2" onclick="comprobarRespuesta(2)">C</button>
            <span id="n2"></span>
        </div>
    </div>
    <!-- Pantalla final -->
    <div id="pantalla-final" style="display: none;">
        <h2>CORRECTAS: <span id="numCorrectas">0</span></h2>
        <h2>INCORRECTAS: <span id="numIncorrectas">0</span></h2>
    </div>
    <script src="script.js"></script>
</body>
</html>