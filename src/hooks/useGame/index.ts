import { useState, useEffect } from "react";
import { symbols } from "./constants";
import AudioController from "../../card-pair-game/audio-controller";

interface Card {
  value: string;
  color: string;
  id: number;
  visible?: boolean;
}

const NUMBER_OF_CARDS = (symbols.length - 1) * 2;
const TIME_TO_PLAY = 150;

let timer: number;

export function useGame(audio: AudioController) {
  const [cards, setCards] = useState<Card[]>([]);
  const [cardToCheck, setCardToCheck] = useState<Card[]>([]);
  const [matchedCards, setMatchedCards] = useState<Card[]>([]);
  const [busy, setBusy] = useState(false);
  const [flips, setFlips] = useState(0);
  const [timeLeft, setTimeLeft] = useState(TIME_TO_PLAY);
  const [showStart, setShowStart] = useState(true);
  const [showGameOver, setShowGameOver] = useState(false);
  const [showVictory, setShowVictory] = useState(false);

  function shuffle(array: any[]) {
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
    const randomSymbols = shuffle(symbols);
    for (let i = 0; i < NUMBER_OF_CARDS; i += 2) {
      cardsToAdd.push({
        value: randomSymbols[symbolCounter].icon,
        color: randomSymbols[symbolCounter].color,
      });

      cardsToAdd.push({
        value: randomSymbols[symbolCounter].icon,
        color: randomSymbols[symbolCounter].color,
      });

      symbolCounter++;
    }

    setCards(shuffle(cardsToAdd.map((c, index) => ({ ...c, id: index }))));
  }

  function updateTimeLeft(timeLeft: number) {
    console.log(timeLeft);
    if (timeLeft === 0) {
      setShowGameOver(true);
      audio.gameOver();
      clearInterval(timer);
    } else {
      setTimeLeft(timeLeft - 1);
    }
  }

  function flipCard(card: Card) {
    if (busy) return;
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
        }),
      );
    } else {
      setBusy(true);
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
        setBusy(false);
        setFlips(flips + 1);
      }, 600);
    }
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => addCards(), []);

  useEffect(() => {
    if (cards.length === matchedCards.length && matchedCards.length !== 0) {
      clearInterval(timer);
      setShowVictory(true);
      audio.victory();
    }
  }, [cards, matchedCards, audio]);

  return {
    cards,
    startGame,
    setShowStart,
    timeLeft,
    showStart,
    showGameOver,
    showVictory,
    flips,
    flipCard,
    matchedCards,
    cardToCheck,
    setShowGameOver,
    setShowVictory,
  };
}
