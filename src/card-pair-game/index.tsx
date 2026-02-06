import Card from "./components/card";

import AudioController from "./audio-controller";
import { useGame } from "../hooks/useGame";

import "./styles.css";

function CardPairGame() {
  const audio = new AudioController();

  const {
    cards,
    startGame,
    timeLeft,
    showStart,
    showGameOver,
    showVictory,
    flips,
    flipCard,
    matchedCards,
    cardToCheck,
    setShowStart,
    setShowGameOver,
    setShowVictory,
  } = useGame(audio);

  return (
    <div className="card-pair-game-container">
      <div className="title">Match the cards!!!</div>
      <div className="game-info">
        <div className="time-left">Time left: {timeLeft}s</div>
        <div className="flips">Flips: {flips}</div>
      </div>
      <div className="cards-container">
        {cards &&
          cards.map((card) => {
            return (
              <Card
                key={card.id}
                {...card}
                visible={
                  cardToCheck.some((ck) => ck.id === card.id) ||
                  matchedCards.some((mc) => mc.id === card.id)
                }
                onFlip={() => flipCard({ ...card })}
              />
            );
          })}
      </div>
      <div
        className={`overlay-text ${showStart ? "visible" : ""}`}
        onClick={() => {
          setShowStart(false);
          startGame();
        }}
      >
        Click to Start
      </div>
      <div
        className={`overlay-text ${showGameOver ? "visible" : ""}`}
        onClick={() => {
          setShowGameOver(false);
          startGame();
        }}
      >
        GAME OVER
        <span className="overlay-text-small">Click to Restart</span>
      </div>
      <div
        className={`overlay-text ${showVictory ? "visible" : ""}`}
        onClick={() => {
          setShowVictory(false);
          startGame();
        }}
      >
        VICTORY
        <span className="overlay-text-small">Click to Restart</span>
      </div>
    </div>
  );
}

export default CardPairGame;
