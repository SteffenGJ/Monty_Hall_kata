import { UI } from "./ui";

export function initApp(ui: UI) {
    let startButton = ui.createButton("startButton", "start", onStartClick);
    let stopButton = ui.createButton("stopButton", "stop", onStopClick);
    ui.createButton("startChangeStrategySimulationButton", "changeSimulation", () => changeStrategySimulation(ui));
}

function onStartClick() {
    console.log("start clicked");
}

function onStopClick() {
    console.log("stop clicked");
}

function changeStrategySimulation(ui: UI) {
    ui.createSomeElement();
}