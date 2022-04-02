import Singleton from './singleton.js';
const a = Singleton.getInstance();
const b = Singleton.getInstance();
console.log(a, b);
console.log('¿A es igual a B?', a === b);
