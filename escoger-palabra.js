let palabras = [
    "VARIABLE",
    "FUNCION",
    "OBJETO",
    "BOTON",
    "CODIGO",
    "EDITOR",
    "DISEÑO",
    "WEB",
    "COMANDO",
    "JAVA"  
];

function escogerPalabra() {
    var indice = Math.floor(Math.random() * palabras.length);
    return palabras[indice];
}