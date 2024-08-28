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
    UI.prototype.createInput = function (id, type) {
        var input = document.createElement("input");
        input.type = type;
        input.id = id;
        input.className = "stdInput";
        document.body.appendChild(input);
        return input;
    };
    UI.prototype.createSimulationResults = function (runs, strategy) {
        var paragraph = this.createParagraph("Ran ".concat(runs, " simulations with the ").concat(strategy, " strategy"));
        paragraph.id = "changeStrategySimulationResults";
    };
    UI.prototype.createParagraph = function (text) {
        var paragraph = document.createElement("p");
        paragraph.innerHTML = text;
        document.body.appendChild(paragraph);
        return paragraph;
    };
    return UI;
}());
export { UI };
