var UI = /** @class */ (function () {
    function UI() {
    }
    UI.prototype.createButton = function (id, name, onClick) {
        var button = document.createElement("input");
        button.value = name;
        button.type = "button";
        button.id = id;
        button.className = "stdButton";
        button.addEventListener("click", function () {
            onClick();
        });
        document.body.appendChild(button);
        return button;
    };
    UI.prototype.createSomeElement = function () {
        var element = document.createElement("div");
        element.id = "changeStrategySimulationResults";
        element.innerHTML = "Ran 1000 simulations with this strategy.";
        document.body.appendChild(element);
    };
    return UI;
}());
export { UI };
