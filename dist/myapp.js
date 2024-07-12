export function initApp(ui) {
    var startButton = ui.createButton("startButton", "start", onStartClick);
    var stopButton = ui.createButton("stopButton", "stop", onStopClick);
    ui.createButton("startChangeStrategySimulationButton", "changeSimulation", function () { return changeStrategySimulation(ui); });
}
function onStartClick() {
    console.log("start clicked");
}
function onStopClick() {
    console.log("stop clicked");
}
function changeStrategySimulation(ui) {
    ui.createSomeElement();
}
