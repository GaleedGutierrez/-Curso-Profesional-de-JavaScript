// Funciones
function add(a, b) {
    return a + b;
}
var sum = add(4, 6);
function createAdder(a) {
    return function (b) {
        return b + a;
    };
}
var addFour = createAdder(4);
var fourPlusSix = addFour(6);
function fullName(fistName, lastName) {
    if (lastName === void 0) { lastName = 'Gutierez'; }
    return fistName + " " + lastName;
}
var galeed = fullName('Galeed');
console.log(galeed);
