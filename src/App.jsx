import { Routes, Route } from "react-router-dom";
import Game from "./Game";
import Score from "./Score";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Game />} />
      <Route path="/score" element={<Score />} />
    </Routes>
  );
}
