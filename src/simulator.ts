import { Strategy } from './strategies';
import { Game } from './game';

export class Simulator {
    private runs: number = 0;

    run(runs: number, strategy: Strategy) {
        for (let i = 0; i < runs; i++) {
            this.runs++;
            let game = new Game(strategy);
            game.play();
        }
    }

    getRuns() {
        return this.runs;
    }
}