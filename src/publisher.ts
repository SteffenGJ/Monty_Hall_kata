import { Listener } from "./listener";
import { Strategy } from "./strategies";


export class Publisher {
    private listeners: Listener[] = [];

    subscribe(listener: Listener) {
        this.listeners.push(listener);
    }

    runSimulator(runs: number, strategy: Strategy) {
        this.listeners.forEach(listener => listener.onSimulatorRun(runs, strategy));
    }
}