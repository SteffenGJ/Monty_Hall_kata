import { SimulatorListener, UiListener } from "./listener";
import { Publisher } from "./publisher";
import { Simulator } from "./simulator";
import { ChangeDoorStrategy } from "./strategies";
export function initApp(ui) {
    var publisher = new Publisher();
    var simulatorListener = new SimulatorListener(new Simulator());
    simulatorListener.subscribe(publisher);
    var uiListener = new UiListener(ui);
    uiListener.subscribe(publisher);
    var startButton = ui.createButton("startButton", "start", onStartClick);
    var stopButton = ui.createButton("stopButton", "stop", onStopClick);
    var input = ui.createInput("changeStrategyInput", "text");
    ui.createButton("startChangeStrategySimulationButton", "changeSimulation", function () { return publisher.runSimulator(Number(input.value), new ChangeDoorStrategy()); });
}
function onStartClick() {
    console.log("start clicked");
}
function onStopClick() {
    console.log("stop clicked");
}
