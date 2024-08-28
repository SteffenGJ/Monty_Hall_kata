import { Publisher } from "./publisher";
import { Simulator } from "./simulator";
import { Strategy } from "./strategies";
import { UI } from "./ui";

export interface Listener {
    subscribe(publisher: Publisher): void;
    onSimulatorRun(runs: number, strategy: Strategy): void;
}

export class SimulatorListener implements Listener{
    constructor(private simulator: Simulator) {}

    subscribe(publisher: Publisher) {
        publisher.subscribe(this);
    }

    // onSomething() {
    //     this.hasBeenCalled = true;
    // }
    // eventCalled() {
    //     return this.hasBeenCalled;
    // }

    onSimulatorRun(runs: number, strategy: Strategy) {
        this.simulator.run(runs, strategy);
    }
}

export class UiListener implements Listener {
    constructor(private ui: UI) {}

    subscribe(publisher: Publisher) {
        publisher.subscribe(this);
    }

    onSimulatorRun(runs: number, strategy: Strategy) {
        this.ui.createSimulationResults(runs, strategy.name());
    }
}