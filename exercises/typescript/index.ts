// Funciones
function add (a: number, b:number): number {
    return a + b;
}

const sum = add(4, 6);

function createAdder (a: number): (number) => number {
    return function (b: number) {
        return b + a;
    }
}

const addFour = createAdder(4);
const fourPlusSix = addFour(6);

function fullName (fistName: string, lastName: string = 'Gutierez'): string {
    return `${fistName} ${lastName}`;
}

const galeed = fullName('Galeed')
console.log(galeed)