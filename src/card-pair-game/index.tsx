import Card from "./components/card";

import AudioController from "./audio-controller";
import { useGame } from "../hooks/useGame";

import cn from "classnames";
import styles from "./styles.module.css";

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
    <div className={styles["card-pair-game-container"]}>
      <div className={styles.title}>Match the cards!!!</div>
      <div className={styles["game-info"]}>
        <div className={styles["time-left"]}>Time left: {timeLeft}s</div>
        <div className={styles.flips}>Flips: {flips}</div>
      </div>
      <div className={styles["cards-container"]}>
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
        className={cn(styles["overlay-text"], showStart && styles.visible)}
        onClick={() => {
          setShowStart(false);
          startGame();
        }}
      >
        Click to Start
      </div>
      <div
        className={cn(styles["overlay-text"], showGameOver && styles.visible)}
        onClick={() => {
          setShowGameOver(false);
          startGame();
        }}
      >
        GAME OVER
        <span className={styles["overlay-text-small"]}>Click to Restart</span>
      </div>
      <div
        className={cn(styles["overlay-text"], showVictory && styles.visible)}
        onClick={() => {
          setShowVictory(false);
          startGame();
        }}
      >
        VICTORY
        <span className={styles["overlay-text-small"]}>Click to Restart</span>
      </div>
    </div>
  );
}

export default CardPairGame;
