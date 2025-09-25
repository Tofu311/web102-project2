import { useState } from "react";
import "../App.css";

const Card = () => {
  const [flipped, setFlipped] = useState(false);

  const handleClick = () => {
    setFlipped(!flipped);
  };

  return (
    // Conditionally render based on flipped state
    <>
    {flipped ? (
      <div className="card" onClick={handleClick}>
        <div className="front">
          Front Demo Text
        </div>
      </div>
    ) : (
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
