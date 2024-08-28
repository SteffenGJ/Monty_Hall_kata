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
        return input;
    }

    createSimulationResults(runs: number, strategy: string) {
        const paragraph = this.createParagraph(`Ran ${runs} simulations with the ${strategy} strategy`);
        paragraph.id = "changeStrategySimulationResults";
    }

    createParagraph(text: string) {
        const paragraph = document.createElement("p");
        paragraph.innerHTML = text;
        document.body.appendChild(paragraph);
        return paragraph;
    }
}