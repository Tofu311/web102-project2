import "../App.css";

const Card = ({ card, flipped = false, setFlipped = () => { } }) => {
  if (!card) return null;

  const handleClick = () => {
    setFlipped(!flipped);
  };

  return (
    <div className={`card ${flipped ? "flipped" : ""}`} onClick={handleClick} id={card.id}>
      <div className="front" style={{ display: flipped ? "none" : "block" }}>
        {card.frontImg && <img src={card.frontImg} className="card-image" />}
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
