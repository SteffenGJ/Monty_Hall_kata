import { UI } from "../../src/ui";
import { Publisher } from "../../src/publisher";

class TestApp {
    start(publisher: Publisher) {
        let ui = new UI();

        document.body.innerHTML = 
        '<h1>Home</h1>' +
        '<p>Welcome to the home page.</p>';

        ui.createInput("changeStrategyInput", "number");
        ui.createButton("startChangeStrategySimulationButton", "changeStrategyButton", () => console.log("")/*() => publisher.runSimulator()*/);
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
        expect(document.getElementById("changeStrategySimulationResults")?.innerHTML).toContain(`Ran ${runs} simulations with this strategy.`);
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

export { TestApp, Driver, Simulating };