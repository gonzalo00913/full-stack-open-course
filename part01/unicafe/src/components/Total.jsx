import Statistics from "./Statistics";

const Total = ({ good, neutral, bad }) => {
  const total = good + neutral + bad;
  if (total === 0) {
    return <div>No feedback given</div>;
  }

  return (
    <div>
      <Statistics text="good" value={good} />
      <Statistics text="neutral" value={neutral} />
      <Statistics text="bad" value={bad} />
      <Statistics text="all" value={total} />
      <Statistics text="average" value={((good - bad) / total).toFixed(2)} />
      <Statistics text="positive" value={((100 * good) / total).toFixed(2)} />
    </div>
  );
};

export default Total;
