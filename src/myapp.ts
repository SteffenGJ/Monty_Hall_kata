import { SimulatorListener, UiListener } from "./listener";
import { Publisher } from "./publisher";
import { Simulator } from "./simulator";
import { ChangeDoorStrategy } from "./strategies";
import { UI } from "./ui";

export function initApp(ui: UI) {
    let publisher = new Publisher();
    let simulatorListener = new SimulatorListener(new Simulator());
    simulatorListener.subscribe(publisher);
    let uiListener = new UiListener(ui);
    uiListener.subscribe(publisher);

    let startButton = ui.createButton("startButton", "start", onStartClick);
    let stopButton = ui.createButton("stopButton", "stop", onStopClick);
    let input = ui.createInput("changeStrategyInput", "text");
    ui.createButton("startChangeStrategySimulationButton", "changeSimulation", () => publisher.runSimulator(Number(input.value), new ChangeDoorStrategy()));
}

function onStartClick() {
    console.log("start clicked");
}

function onStopClick() {
    console.log("stop clicked");
}

