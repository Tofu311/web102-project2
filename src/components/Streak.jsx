import '../App.css';

const Streak = ({currentStreak, longestStreak}) => {
  return(
    <div className="streak-container">
      <p>Current Streak: {currentStreak}</p>
      <p>Longest Streak: {longestStreak}</p>
    </div>
  )
}

export default Streak;