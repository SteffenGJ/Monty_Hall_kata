/**
 * @jest-environment jsdom
 */

import { UiListener } from "../../../src/listener";
import { ChangeDoorStrategy } from "../../../src/strategies";
import { UI } from "../../../src/ui";

describe("UiListener", () => {
    describe("onSimulatorRun", () => {
        it("should show on the results of the simulations", () => {
            let ui = new UI();
            let listener = new UiListener(ui);
            let strategy = new ChangeDoorStrategy();

            listener.onSimulatorRun(1, strategy);

            let currentBody = document.body.innerHTML;
            expect(currentBody.includes("Ran 1 simulations with the Change Door strategy")).toBe(true);
        })
    })
})