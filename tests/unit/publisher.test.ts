/**
 * @jest-environment jsdom
 */
import { Listener, UiListener, SimulatorListener } from "../../src/listener";
import { Publisher } from "../../src/publisher";
import { Simulator } from "../../src/simulator";
import { ChangeDoorStrategy } from "../../src/strategies";
import { UI } from "../../src/ui";
import { TestApp } from "../resources/temporary";


describe("Publisher", () => {
    // it("should send out a message to its listeners", () => {
    //     let publisher = new Publisher();
    //     let listener = new Listener();
    //     listener.subscribe(publisher);

    //     publisher.doSomething();

    //     expect(listener.eventCalled()).toBe(true);
    // })

    describe("runSimulator", () => {
        it("should run simulator with the given number of runs", () => {
            let publisher = new Publisher();
            let simulator = new Simulator();
            let strategy = new ChangeDoorStrategy();
            let simulatorListener = new SimulatorListener(simulator);

            simulatorListener.subscribe(publisher);

            publisher.runSimulator(1, strategy);

            expect(simulator.getRuns()).toBe(1);
        })

        it("should show the results of the simulations", () => {
            let app = new TestApp();
            let publisher = new Publisher();
            let ui = new UI();
            let uiListener = new UiListener(ui);
            uiListener.subscribe(publisher);

            app.start(publisher, ui);

            publisher.runSimulator(1, new ChangeDoorStrategy());

            

            let currentBody = document.body.innerHTML;
            console.log(currentBody);
            expect(currentBody.includes("Ran 1 simulations with the Change Door strategy")).toBe(true);
        })
    })

})