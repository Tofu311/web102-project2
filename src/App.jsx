import { useState, useEffect } from "react";
import "./App.css";

// Component imports
import Card from "./components/Card";
import AnswerField from "./components/AnswerField";
import Streak from "./components/Streak";

// Image imports
import approachImage from "./assets/bowling-approach.png";
import boards from "./assets/boards.png";
import targetArrows from "./assets/targetArrows.jpg";
import approachZone from "./assets/approachZone.jpg";
import detailedArrows from "./assets/detailedArrows.png";

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
      backText: "7",
      backImg: targetArrows
    },
    {
      id: 4,
      frontText: "How long is the approach?",
      backText: "15 ft",
      frontImg: approachZone
    },
    {
      id: 5,
      frontText: "What does each dot/arrow represent on the lane?",
      backText: "5 boards",
      backImg: detailedArrows
    },
    {
      id: 6,
      frontText: "What is the term for when a right-handed bowler hits the head pin on the left side?",
      backText: "Brooklyn"
    },
    {
      id: 7,
      frontText: "What is the highest score you can obtain?",
      backText: "300"
    },
    {
      id: 8,
      frontText: "How many strikes do you need to score a 300?",
      backText: 12
    },
    {
      id: 9,
      frontText: "What gets applied to bowlers in order to normalize their score in a league?",
      backText: "Handicap"
    }
  ];

const App = () => {
  // Create shuffled card set for random card selection
  const [shuffledCards] = useState(() => {
    const copy = [...cards];
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  });

  const [cardIndex, setCardIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [answer, setAnswer] = useState(''); // User-submitted answer
  const [feedback, setFeedback] = useState(''); // Correct/Incorrect result based on user-submitted answer
  const [currentStreak, setCurrentStreak] = useState(0);
  const [longestStreak, setLongestStreak] = useState(0);

  const incrementCardIndex = () => {
    setCardIndex(i => Math.min(shuffledCards.length - 1, i + 1));
  };

  const decrementCardIndex = () => {
    setCardIndex(i => Math.max(0, i - 1));
  };

  const handleSubmit = (e) => {
    if (e && e.preventDefault) e.preventDefault();

    // Get current card and extract the back text to compare against user's answer
    const currentCard = shuffledCards[cardIndex];
    if (!currentCard) return;

    // Remove whitespace using regex
    const expected = String(currentCard.backText).toLowerCase().replace(/\s+/g, '');
    const guess = String(answer).toLowerCase().replace(/\s+/g, '');

    if (guess === '') return;

    if (guess === expected) {
      setFeedback("Correct!");
      setCurrentStreak(prev => {
        const next = prev + 1;
        setLongestStreak(l => Math.max(l, next));
        return next;
      });
    } else {
      setFeedback(`Incorrect! The answer is "${currentCard.backText}"`)
      setCurrentStreak(0);
    }
  }

  // Reset the input and feedback whenever the card changes
  useEffect(() => {
    setAnswer("");
    setFeedback("");
    setFlipped(false);
  }, [cardIndex]);

  return (
    <div className="app">
      <div>
        <h2>Bowling Midterm Practice</h2>
        <h4>Practice questions for PEL2111 Midterm at UCF</h4>
        <h5>Number of Cards: {shuffledCards.length}</h5>
      </div>
      <Streak currentStreak={currentStreak} longestStreak={longestStreak}/>
      <Card card={shuffledCards[cardIndex]} flipped={flipped} setFlipped={setFlipped}/>
      <AnswerField
        answer = {answer}
        setAnswer = {setAnswer}
        onSubmit = {handleSubmit}
        onClear={() => { setAnswer(""); setFeedback(""); }}
        feedback = {feedback}
        isFront = {!flipped}
      />
      <div className="button-container">
        <button className="prevCard" type="next" onClick={decrementCardIndex} disabled={cardIndex === 0} aria-disabled={cardIndex === 0}>
          &larr;
        </button>
        <button className="nextCard" type="next" onClick={incrementCardIndex} disabled={cardIndex === shuffledCards.length - 1} aria-disabled={cardIndex === shuffledCards.length - 1}>
          &rarr;
        </button>
      </div>
    </div>
  );
};

export default App;
