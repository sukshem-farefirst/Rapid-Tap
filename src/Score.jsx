import "./Score.css";
import { Link } from "react-router-dom";

export default function Score() {
  const results = JSON.parse(localStorage.getItem("results")) || [];

  if (results.length === 0) {
    return <h1>No results found</h1>;
  }

  const sorted = [...results].sort((a, b) => b.finalScore - a.finalScore);

  return (
    <div className="score-container">
      <h1>Leaderboard</h1>

      <Link to="/" className="back-link">Back to Game</Link>

      <div className="table-box">
        <table className="score-table">
          <thead>
            <tr>
              <th>Rank</th>
              <th>Name</th>
              <th>Score</th>
            </tr>
          </thead>

          <tbody>
            {sorted.map((r, i) => (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{r.name}</td>
                <td>{r.finalScore}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
