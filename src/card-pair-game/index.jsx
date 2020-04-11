import React, { useState, useEffect } from "react";
import Card from "./components/card";
import symbols from "./symbols.json";
import AudioController from "./audio-controller";
import "./styles.css";
const NUMBER_OF_CARDS = 24;
const TIME_TO_PLAY = 120;
let timer;

function CardPairGame() {
  const [cards, setCards] = useState([]);
  const [cardToCheck, setCardToCheck] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);
  const [bussy, setBussy] = useState(false);
  const [flips, setFlips] = useState(0);
  const [timeLeft, setTimeLeft] = useState(TIME_TO_PLAY);
  const [showStart, setShowStart] = useState(true);
  const [showGameOver, setShowGameOver] = useState(false);
  const [showVictory, setShowVictory] = useState(false);
  const audio = new AudioController();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => addCards(), []);

  useEffect(() => {
    if (cards.length === matchedCards.length && matchedCards.length !== 0) {
      clearInterval(timer);
      setShowVictory(true);
      audio.victory();
    }
  }, [cards, matchedCards]);

  function shuffle(array) {
    return array
      .map((a) => ({ sort: Math.random(), value: a }))
      .sort((a, b) => a.sort - b.sort)
      .map((a) => a.value);
  }

  function startGame() {
    setMatchedCards([]);
    setCardToCheck([]);
    setFlips(0);
    setTimeLeft(0);
    setTimeLeft(TIME_TO_PLAY);
    let localTimeLeft = TIME_TO_PLAY;
    timer = setInterval(() => {
      updateTimeLeft(localTimeLeft);
      localTimeLeft--;
    }, 1000);

    addCards();
  }

  function addCards() {
    const cardsToAdd = [];
    let symbolCounter = 0;
    for (let i = 0; i < NUMBER_OF_CARDS; i += 2) {
      cardsToAdd.push({
        value: symbols[symbolCounter].icon,
        color: symbols[symbolCounter].color,
      });

      cardsToAdd.push({
        value: symbols[symbolCounter].icon,
        color: symbols[symbolCounter].color,
      });

      symbolCounter++;
    }

    setCards(shuffle(cardsToAdd.map((c, index) => ({ ...c, id: index }))));
  }

  function updateTimeLeft(timeLeft) {
    console.log(timeLeft);
    if (timeLeft === 0) {
      setShowGameOver(true);
      audio.gameOver();
      clearInterval(timer);
    } else {
      setTimeLeft(timeLeft - 1);
    }
  }

  function flipCard(card) {
    if (bussy) return;
    audio.flip();
    if (cardToCheck.length === 0) {
      setCardToCheck([card]);
      setCards(
        cards.map((c) => {
          if (c.id === card.id) {
            return { ...c, visible: true };
          } else {
            return c;
          }
        })
      );
    } else {
      setBussy(true);
      setCardToCheck([...cardToCheck, card]);
      setTimeout(() => {
        if (
          cardToCheck[0].id !== card.id &&
          cardToCheck[0].value === card.value
        ) {
          setMatchedCards([...matchedCards, cardToCheck[0], card]);
          setCardToCheck([]);
          audio.match();
        } else {
          setCardToCheck([]);
        }
        setBussy(false);
        setFlips(flips + 1);
      }, 1000);
    }
  }

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
