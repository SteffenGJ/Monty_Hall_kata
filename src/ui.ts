export class UI {
    createButton(id: string, name: string, onClick: () => void) {
        const button = document.createElement("input");
        button.value = name;
        button.type = "button";
        button.id = id;
        button.className = "stdButton";
        button.addEventListener("click", () => {
            onClick();
        });
        document.body.appendChild(button);
        return button;
    }

    createInput(id: string, type: string) {
        const input = document.createElement("input");
        input.type = type;
        input.id = id;
        input.className = "stdInput";
        document.body.appendChild(input);
    }

    createSomeElement() {
        const element = document.createElement("div");
        element.id = "changeStrategySimulationResults";
        element.innerHTML = "Ran 1000 simulations with this strategy.";
        document.body.appendChild(element);
    }
}