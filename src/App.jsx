import { useState } from "react";
import "./App.css";
import Card from "./components/Card";

// Image imports
import approachImage from "./assets/bowling-approach.png";
import boards from "./assets/boards.png"

const cards =
  [
    {
      id: 0,
      frontText: "How many boards are there on a lane?",
      backText: "39",
      backImg: boards
    },
    {
      id: 1,
      frontText: "How many steps do you take from the approach to the foul line?",
      backText: "4 1/2",
      backImg: approachImage
    },
    {
      id: 2,
      frontText: "What is the distance from the head pin to the foul line?",
      backText: "60 ft"
    },
    {
      id: 3,
      frontText: "How many target arrows are there?",
      backText: "7"
    },
    {
      id: 4,
      frontText: "How long is the approach?",
      backText: "15 ft"
    },
    {
      id: 5,
      frontText: "What does each dot/arrow represent on the lane?",
      backText: "5 boards"
    }
  ];

const App = () => {
  const [cardIndex, setCardIndex] = useState(0);

  const incrementCardIndex = () => {
    setCardIndex(i => Math.min(cards.length - 1, i + 1));
  };

  const decrementCardIndex = () => {
    setCardIndex(i => Math.max(0, i - 1));
  };

  return (
    <div className="app">
      <div>
        <h2>Bowling Midterm Practice</h2>
        <h4>Practice questions for PEL2111 Midterm at UCF</h4>
        <h5>Number of Cards: {cards.length}</h5>
      </div>
      <Card card={cards[cardIndex]} />
      <div className="button-container">
        <button className="prevCard" type="next" onClick={decrementCardIndex} disabled={cardIndex === 0} aria-disabled={cardIndex === 0}>
          &larr;
        </button>
        <button className="nextCard" type="next" onClick={incrementCardIndex} disabled={cardIndex === cards.length - 1} aria-disabled={cardIndex === cards.length - 1}>
          &rarr;
        </button>
      </div>
    </div>
  );
};

export default App;
