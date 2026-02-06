import flip from "./assets/audio/flip.wav";
import victory from "./assets/audio/victory.wav";
import match from "./assets/audio/match.wav";
import gameover from "./assets/audio/gameOver.wav";

class AudioController {
  constructor(volumen = 50) {
    this.volumen = volumen;
    this.flipSound = new Audio(flip);
    this.flipSound.volume = this.volumen / 100;
    this.victorySound = new Audio(victory);
    this.victorySound.volume = this.volumen / 100;
    this.matchSound = new Audio(match);
    this.matchSound.volume = this.volumen / 100;
    this.gameOverSound = new Audio(gameover);
    this.gameOverSound.volume = this.volumen / 100;
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
