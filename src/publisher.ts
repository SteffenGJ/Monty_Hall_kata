import { Listener } from "./listener";


export class Publisher {
    private listeners: Listener[] = [];

    subscribe(listener: Listener) {
        this.listeners.push(listener);
    }

    doSomething() {
        this.listeners.forEach(listener => listener.onSomething());
    }
}