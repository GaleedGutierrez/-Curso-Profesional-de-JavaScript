class BitcoinPrice {
    observers = [];
    constructor() {
        const element = document.querySelector('#value');
        element.addEventListener('input', () => this.notify(element.value));
    }
    subscribe(obsever) {
        this.observers.push(obsever);
        console.log(this.observers);
    }
    unsuscribe(obsever) {
        const index = this.observers.findIndex(obs => obs === obsever);
        this.observers.splice(index, 1);
    }
    notify(data) {
        this.observers.forEach(observer => observer.update(data));
    }
}
class PriceDisplay {
    element;
    constructor() {
        this.element = document.querySelector('#price');
    }
    update(data) {
        this.element.innerText = data;
    }
}
const value = new BitcoinPrice();
const display = new PriceDisplay();
value.subscribe(display);
setTimeout(() => value.unsuscribe(display), 3000);
