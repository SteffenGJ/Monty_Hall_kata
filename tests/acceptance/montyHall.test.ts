/**
 * @jest-environment jsdom
 */

import { UI } from "../../src/ui";

class App {
    start(ui: UI) {
        document.body.innerHTML = 
        '<h1>Home</h1>' +
        '<p>Welcome to the home page.</p>';
        ui.createInput("changeStrategyInput", "number");
        ui.createButton("startChangeStrategySimulationButton", "changeStrategyButton", listener.onSimulatorRun(sometihng));
    }
}

class Driver {
    provideNumberOfSimulations(runs: number) {
        let input = document.getElementById("changeStrategyInput") as HTMLInputElement;
        input.value = runs.toString();
    }
    startSimulation() {
        let startButton = document.getElementById("startChangeStrategySimulationButton");
        startButton!.click();
    }
    assertSimulationsRan(runs: number) {
        expect(document.getElementById("changeStrategySimulationResults")).toContain(`Ran ${runs} simulations with this strategy.`);
    }

}

class Simulating {
    constructor(private driver: Driver) {}

    provideNumberOfSimulations(runs: number) {
        this.driver.provideNumberOfSimulations(runs);
    }

    startSimulation() {
        this.driver.startSimulation();
    }

    assertSimulationsRan(runs: number) {
        this.driver.assertSimulationsRan(runs);
    }
}

describe("Monty Hall App", () => {
    let simulating: Simulating;
    beforeEach(() => {
        let app = new App();
        app.start(new UI());
        simulating = new Simulating(new Driver());
    })

    it("should show the results of a given number of simulated games when simulated", () => {
        simulating.provideNumberOfSimulations(1);
        simulating.startSimulation();
        simulating.assertSimulationsRan(1);
    });
})