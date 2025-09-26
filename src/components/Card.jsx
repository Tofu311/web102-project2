import { useState } from "react";
import "../App.css";

const Card = ({card}) => {
  const [flipped, setFlipped] = useState(false);

  const handleClick = () => {
    setFlipped(!flipped);
  };

  return (
    <div className={`card ${flipped ? "flipped" : ""}`} onClick={handleClick} id={card.id}>
      <div className="front" style={{ display: flipped ? "none" : "block" }}>
        {card.frontText}
      </div>
      <div className="back" style={{ display: flipped ? "block" : "none" }}>
        {card.backText}
      </div>
    </div>
  );
};

export default Card;
