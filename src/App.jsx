import "./App.css";
import Card from "./components/Card";

const App = () => {
  return (
    <div className="app">
      <div>
        <h2>Bowling Midterm Practice</h2>
        <h4>Practice questions for PEL2111 Midterm at UCF</h4>
        <h5>Number of Cards: 10</h5>
      </div>
      <Card />
      <button className="nextCard" type="next">
        &rarr;
      </button>
    </div>
  );
};

export default App;
