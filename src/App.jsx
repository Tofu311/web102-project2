import { useState } from "react";
import "./App.css";
import Card from "./components/Card";

const cards =
  [
    {
      id: 0,
      frontText: "0 Front Text",
      backText: "0 Back Text"
    },
    {
      id: 1,
      frontText: "1 Front Text",
      backText: "1 Back Text"
    },
    {
      id: 2,
      frontText: "2 Front Text",
      backText: "2 Back Text"
    },
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
      <button className="prevCard" type="next" onClick={decrementCardIndex}>
        &larr;
      </button>
      <button className="nextCard" type="next" onClick={incrementCardIndex}>
        &rarr;
      </button>
    </div>
  );
};

export default App;
