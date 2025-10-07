import { useState } from "react";
import '../App.css';

const AnswerField = ({ answer, setAnswer, onSubmit, onClear, feedback }) => {
  // const [answer, setAnswer] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();

    if (onSubmit) onSubmit();
  }

  return (
    <div>
      <p>Guess the answer below</p>
      <form onSubmit={handleSubmit}>
        <input className="answer-text-box"
          value={answer}
          onChange = {e => setAnswer(e.target.value)} // Display keyboard input in text-field in real time
        />
      </form>
      <button onClick={onClear} style={{marginRight: 4}}>Clear Guess</button>
      <button onClick={handleSubmit} style={{marginLeft: 4}}>Submit Guess</button>
      {feedback && <div style={{marginTop: 8}}>{feedback}</div>}
    </div>
  )
}

export default AnswerField;

// return(
//     <div className="answerField-container">
//       <p>Guess the answer below</p>
//       <input className="answer-text-box"
//         value = {answer}
//         onChange = {e => setAnswer(e.target.value)}
//       />
//       <button>Submit Guess</button>
//     </div>
//   )