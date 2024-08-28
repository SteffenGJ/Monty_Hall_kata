import { Simulator } from "../../src/simulator";
import { ChangeDoorStrategy } from "../../src/strategies";

describe("Simulator", () => {
    describe("run", () => {
        it("should run a given number of simulations of a game", () => {
            let simulator = new Simulator();
            let strategy = new ChangeDoorStrategy();
            simulator.run(1, strategy);
            expect(simulator.getRuns()).toBe(1);
        })

        it("should run simulations given any game strategy", () => {
            let simulator = new Simulator();
            let strategy = new ChangeDoorStrategy();
            simulator.run(1, strategy);
            expect(simulator.getRuns()).toBe(1);
        })
    })
})