import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./Game.css";

export default function Game() {
  const [name, setName] = useState("");
  const [time, setTime] = useState(10);
  const [start, setStart] = useState(false);
  const [clicks, setClicks] = useState(0);

  const clicksRef = useRef(0);
  const navigate = useNavigate();

  const result = JSON.parse(localStorage.getItem("results")) || [];

  function startTimer() {
    if (name.length < 4) return;
    setStart(true);
    setTime(10);
    setClicks(0);
    clicksRef.current = 0;

    const t = setInterval(() => {
      setTime((prev) => {
        if (prev === 0) {
          clearInterval(t);
          setStart(false);

          result.push({ name, finalScore: clicksRef.current });
          localStorage.setItem("results", JSON.stringify(result));

          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  }

  function handleClick() {
    if (!start) return;
    setClicks((c) => {
      clicksRef.current = c + 1;
      return c + 1;
    });
  }

  function scoreboard() {
    navigate("/score");
  }

  return (
    <div>
      <h1>Click Speed Game</h1>

      <input
        type="text"
        placeholder="Enter name"
        onChange={(e) => setName(e.target.value)}
      />

      <h2>Time: {time}</h2>
      <h2>Clicks: {clicks}</h2>

      <button className="start-btn" onClick={startTimer}>Start Game</button>
      <button className="click-btn" onClick={handleClick}>Click Me!</button>
      <button className="score-btn" onClick={scoreboard}>View Scores</button>
    </div>
  );
}
