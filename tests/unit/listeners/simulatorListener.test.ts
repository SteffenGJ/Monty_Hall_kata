import { SimulatorListener } from "../../../src/listener";
import { Simulator } from "../../../src/simulator";
import { ChangeDoorStrategy } from "../../../src/strategies";

describe("SimulatorListener", () => {
    describe("onSimulatorRun", () => {
        it("should run simulator with the given number of runs", () => {
            let simulator = new Simulator();
            let listener = new SimulatorListener(simulator);
            let strategy = new ChangeDoorStrategy();

            listener.onSimulatorRun(1, strategy);

            expect(simulator.getRuns()).toBe(1);
        })
    })
})