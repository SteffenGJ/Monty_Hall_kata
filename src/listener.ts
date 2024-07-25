import { Publisher } from "./publisher";

export class Listener {
    private hasBeenCalled = false;

    subscribe(publisher: Publisher) {
        publisher.subscribe(this);
    }
    onSomething() {
        this.hasBeenCalled = true;
    }
    eventCalled() {
        return this.hasBeenCalled;
    }
}