import flip from "./assets/audio/flip.wav";
import victory from "./assets/audio/victory.wav";
import match from "./assets/audio/match.wav";
import gameover from "./assets/audio/gameOver.wav";

class AudioController {
    constructor() {
        this.flipSound = new Audio(flip);
        this.victorySound = new Audio(victory);
        this.matchSound = new Audio(match);
        this.gameOverSound = new Audio(gameover);
    }

    flip() {
        this.flipSound.play();
    }

    victory() {
        this.victorySound.play();
    }

    match() {
        this.matchSound.play();
    }

    gameOver() {
        this.gameOverSound.play();
    }
}

export default AudioController;