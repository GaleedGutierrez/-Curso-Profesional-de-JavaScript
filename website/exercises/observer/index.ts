interface Observer {
    update: (data: any) => void;
}

interface Subject {
    subscribe: (obsever: Observer) => void;
    unsuscribe: (obsever: Observer) => void;
}

class BitcoinPrice implements Subject {
    observers: Observer[] = [];

    constructor () {
        const element: HTMLInputElement = document.querySelector('#value');
        element.addEventListener('input', () => this.notify(element.value));
    }

    subscribe (obsever: Observer) {
        this.observers.push(obsever);
    }

    unsuscribe (obsever: Observer) {
        const index = this.observers.findIndex(obs => obs === obsever)
        this.observers.splice(index, 1);
    }

    notify (data: any) {
        this.observers.forEach(observer => observer.update(data));
    }
}

class PriceDisplay implements Observer {
    private element: HTMLElement;

    constructor () {
        this.element = document.querySelector('#price');
    }

    update (data: any) {
        this.element.innerText = data;
    }
}

const value = new BitcoinPrice();
const display = new PriceDisplay();

value.subscribe(display);
// setTimeout(
//     () => value.unsuscribe(display),
//     3000
// )