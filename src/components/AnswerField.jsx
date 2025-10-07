import '../App.css';

const AnswerField = ({ answer, setAnswer, onSubmit, onClear, feedback, isFront = true, guessSubmitted }) => {
  // const [answer, setAnswer] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isFront) return; // Only allow the user to submit if the card is on the front

    if (onSubmit) onSubmit();
  }

  return (
    <div>
      <p>Guess the answer below</p>
      <form onSubmit={handleSubmit}>
        <input className="answer-text-box"
          value={answer}
          onChange = {e => setAnswer(e.target.value)} // Display keyboard input in text-field in real time
          disabled = {!isFront}
        />
      </form>
      <button onClick={onClear} style={{marginRight: 4}} disabled={!isFront}> Clear Guess</button>
      <button onClick={handleSubmit} style={{marginLeft: 4}} disabled={!isFront || guessSubmitted}>Submit Guess</button>
      {feedback && <div style={{marginTop: 8}}>{feedback}</div>}
      {!isFront && <div style={{marginTop:8}}>Flip the card to answer</div>}
    </div>
  )
}

export default AnswerField;