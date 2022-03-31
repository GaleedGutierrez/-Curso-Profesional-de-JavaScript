// Boolean
var muted = true;
muted = false;
// Números
var numerador = 42;
var denominador = 6;
var resultado = numerador / denominador;
// String
var nombre = 'Galeed';
var saludo = "Mi nombres es " + nombre + ".";
// Arreglos
var people = [];
people = ['Isabel', 'Nicole', 'Raul'];
var peopleAndNumber = [];
peopleAndNumber.push(nombre);
peopleAndNumber.push(100);
// enum
var Color;
(function (Color) {
    Color["Rojo"] = "Rojo";
    Color["Verde"] = "Verder";
    Color["Azul"] = "Azul";
    Color["Amarrillo"] = "Amarrillo";
})(Color || (Color = {}));
var colorFavorito = Color.Verde;
console.log("Mi color favorito es " + colorFavorito);
// any
var comodin = 'Joker';
comodin = { type: 'Wildcard' };
// Object
var someObject = { type: 'Wildcard' };
