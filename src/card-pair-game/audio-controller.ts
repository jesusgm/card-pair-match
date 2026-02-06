import flip from "./assets/audio/flip.wav";
import victory from "./assets/audio/victory.wav";
import match from "./assets/audio/match.wav";
import gameOver from "./assets/audio/gameOver.wav";

class AudioController {
  volume: number;
  flipSound: HTMLAudioElement;
  victorySound: HTMLAudioElement;
  matchSound: HTMLAudioElement;
  gameOverSound: HTMLAudioElement;

  constructor(volume = 50) {
    this.volume = volume;
    this.flipSound = new Audio(flip);
    this.flipSound.volume = this.volume / 100;
    this.victorySound = new Audio(victory);
    this.victorySound.volume = this.volume / 100;
    this.matchSound = new Audio(match);
    this.matchSound.volume = this.volume / 100;
    this.gameOverSound = new Audio(gameOver);
    this.gameOverSound.volume = this.volume / 100;
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
