import { useState } from "react";
import "../App.css";

const cards = 
[
  {
    id: 0,
    frontText: "Front Text",
    backText: "Back Text"
  },
  {
    id: 1,
    frontText: "Front Text",
    backText: "Back Text"
  },
  {
    id: 2,
    frontText: "Front Text",
    backText: "Back Text"
  },
];

const Card = () => {
  const [flipped, setFlipped] = useState(false);

  const handleClick = () => {
    setFlipped(!flipped);
  };

        {
        // cards.map(card => (
        //   <div className="card" onClick={handleClick}>
        //     <div className="front">
        //       {card.frontText}
        //     </div>
        //   </div>
        // ))
      }

  return (
    // Conditionally render based on flipped state
    <>
    {flipped ? cards.map(card => (
      <div className="card" onClick={handleClick}>
        <div className="front">
          {card.frontText}
        </div>
      </div>
    )) : (
      <div className="card flipped" onClick={handleClick}>
        <div className="back">
          Back Demo Text
        </div>
      </div>
    )}
    </>
  );
};

export default Card;
