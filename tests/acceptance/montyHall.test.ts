/**
 * @jest-environment jsdom
 */

import { Listener, SimulatorListener, UiListener } from "../../src/listener";
import { Publisher } from "../../src/publisher";
import { Simulator } from "../../src/simulator";
import { UI } from "../../src/ui";
import { TestApp, Driver, Simulating } from "../resources/temporary";

// class Listener {
//     onSimulatorRun() {
//         let ui = new UI();
//         ui.createSomeElement();
//     }
// }

// class Publisher {
//     constructor(private listener: Listener) {}

//     runSimulator() {
//         this.listener.onSimulatorRun();
//     }
// }

// class App {
//     start(ui: UI, publisher: Publisher) {
//         document.body.innerHTML = 
//         '<h1>Home</h1>' +
//         '<p>Welcome to the home page.</p>';
//         ui.createInput("changeStrategyInput", "number");
//         ui.createButton("startChangeStrategySimulationButton", "changeStrategyButton", () => publisher.runSimulator());
//     }
// }

// class Driver {
//     provideNumberOfSimulations(runs: number) {
//         let input = document.getElementById("changeStrategyInput") as HTMLInputElement;
//         input.value = runs.toString();
//     }
//     startSimulation() {
//         let startButton = document.getElementById("startChangeStrategySimulationButton");
//         startButton!.click();
//     }
//     assertSimulationsRan(runs: number) {
//         expect(document.getElementById("changeStrategySimulationResults")?.innerHTML).toContain(`Ran ${runs} simulations with this strategy.`);
//     }

// }

// class Simulating {
//     constructor(private driver: Driver) {}

//     provideNumberOfSimulations(runs: number) {
//         this.driver.provideNumberOfSimulations(runs);
//     }

//     startSimulation() {
//         this.driver.startSimulation();
//     }

//     assertSimulationsRan(runs: number) {
//         this.driver.assertSimulationsRan(runs);
//     }
// }

describe("Monty Hall Simulator", () => {
    let publisher: Publisher;
    let simulating: Simulating;
    let app: TestApp;
    beforeEach(() => {
        app = new TestApp();
        publisher = new Publisher();
        let simulator = new Simulator();
        let simulationListener = new SimulatorListener(simulator);
        let ui = new UI();
        let uiListener = new UiListener(ui);
        simulationListener.subscribe(publisher);
        uiListener.subscribe(publisher);
        simulating = new Simulating(new Driver());
        app.start(publisher, ui);
    })

    it("should show the results of a given number of simulated games when simulated", () => {
        simulating.provideNumberOfSimulations(1);
        simulating.startSimulation();
        simulating.assertSimulationsRan(1);
    });
})