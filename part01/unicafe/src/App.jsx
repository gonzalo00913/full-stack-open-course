import { useState } from "react";
import Button from "./components/Button";
import Total from "./components/Total";

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGoodButton = () => {
    setGood(good + 1);
  };

  const handleNeutralButton = () => {
    setNeutral(neutral + 1);
  };

  const handleBadButton = () => {
    setBad(bad + 1);
  };

  return (
    <div>
      <h1>give feedback</h1>
      <div>
        <Button onClick={handleGoodButton} text="good" />
        <Button onClick={handleNeutralButton} text="neutral" />
        <Button onClick={handleBadButton} text="bad" />
      </div>
      <h2>statistics</h2>
      <Total good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;
