import { useState, useEffect } from "react";
import "../App.css";

const Card = ({card}) => {
  const [flipped, setFlipped] = useState(false);

  // Reset flipped state when card changes (so flipping one card doesn't leave the next on flipped)
  useEffect(() => {
    setFlipped(false);
  }, [card?.id]);

  if (!card) return null;

  const handleClick = () => {
    setFlipped(!flipped);
  };

  return (
    <div className={`card ${flipped ? "flipped" : ""}`} onClick={handleClick} id={card.id}>
      <div className="front" style={{ display: flipped ? "none" : "block" }}>
        {card.img && <img src={card.frontImg} className="card-image" />}
        <div className="card-text">{card.frontText}</div>
      </div>
      <div className="back" style={{ display: flipped ? "block" : "none" }}>
        {card.backImg && <img src={card.backImg} className="card-image" />}
        <div className="card-text">{card.backText}</div>
      </div>
    </div>
  );
};

export default Card;
