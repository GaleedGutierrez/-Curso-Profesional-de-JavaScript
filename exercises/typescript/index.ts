// Boolean
let muted: boolean = true;
muted = false;

// Números
let numerador: number= 42;
let denominador: number = 6;
let resultado = numerador / denominador;

// String
let nombre: string = 'Galeed';
let saludo = `Mi nombres es ${nombre}.`;

// Arreglos
let people: string[] = [];
people = ['Isabel', 'Nicole', 'Raul'];

let peopleAndNumber: Array< string | number > = [];
peopleAndNumber.push(nombre);
peopleAndNumber.push(100);

// enum
enum Color {
    Rojo = "Rojo",
    Verde = "Verder",
    Azul = "Azul",
    Amarrillo = "Amarrillo",
}
let colorFavorito: Color = Color.Verde;
console.log(`Mi color favorito es ${colorFavorito}`);

// any
let comodin: any = 'Joker';
comodin = {type: 'Wildcard'}

// Object
let someObject: Object = {type: 'Wildcard'}