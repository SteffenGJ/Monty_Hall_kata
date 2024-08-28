export interface Strategy {
    name(): string;
}

export class ChangeDoorStrategy implements Strategy {
    name(): string {
        return "Change Door";
    }
}

export class KeepDoorStrategy implements Strategy {
    name(): string {
        return "Keep Door";
    }
}