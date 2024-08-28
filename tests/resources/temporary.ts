import { UI } from "../../src/ui";
import { Publisher } from "../../src/publisher";
import { ChangeDoorStrategy } from "../../src/strategies";
import { UiListener } from "../../src/listener";

class TestApp {
    start(publisher: Publisher, ui: UI) {
        // let ui = new UI();
        // let listener = new UiListener(ui);
        // listener.subscribe(publisher);

        document.body.innerHTML = 
        '<h1>Home</h1>' +
        '<p>Welcome to the home page.</p>';

        ui.createInput("changeStrategyInput", "number");
        ui.createButton("startChangeStrategySimulationButton", "changeStrategyButton", () => publisher.runSimulator(1, new ChangeDoorStrategy()));
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
        let currentBody = document.body.innerHTML;
        //expect(document.getElementById("changeStrategySimulationResults")?.innerHTML).toContain(`Ran ${runs} simulations with this strategy.`);
        expect(currentBody.includes("Ran 1 simulations with the Change Door strategy")).toBe(true);
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