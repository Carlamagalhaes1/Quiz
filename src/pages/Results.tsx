import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { RankingEntry } from "../types/results";



export default function Results() {
  const location = useLocation();
  const navigate = useNavigate();

  const score = location.state?.score ?? 0;
  const playerName = location.state?.playerName ?? "Anônimo";

  const [ranking, setRanking] = useState<RankingEntry[]>([]);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("quiz-ranking");
    if (stored) setRanking(JSON.parse(stored));
  }, []);

  useEffect(() => {
    if (!saved) {
      const newRanking = [...ranking, { name: playerName, score }];
      newRanking.sort((a, b) => b.score - a.score);
      if (newRanking.length > 5) newRanking.length = 5;

      localStorage.setItem("quiz-ranking", JSON.stringify(newRanking));
      setRanking(newRanking);
      setSaved(true);
    }
  }, [saved, playerName, score, ranking]);

  const playAgain = () => {
    navigate("/");
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-black px-4">
      
      <div
        className="absolute inset-0 bg-cover bg-center filter blur-lg opacity-90"
        style={{ backgroundImage: "url('/images/escolahp.jpg')" }}
      />

      
      <div className="relative max-w-lg w-full p-6 sm:p-8 bg-black/70 backdrop-blur-lg rounded-3xl shadow-lg border border-yellow-400 z-10">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-yellow-400 mb-5 drop-shadow-lg text-center">
          Sua Pontuação
        </h1>

        <div className="text-white text-center text-5xl sm:text-6xl font-harryPotter font-bold mb-8 drop-shadow-xl">
          {score}
        </div>

        <h2 className="text-xl sm:text-2xl text-yellow-400 font-semibold mb-3 border-b border-yellow-600 pb-2">
          Ranking Top 10
        </h2>

        <ol className="list-decimal list-inside space-y-2 max-h-56 sm:max-h-64 overflow-y-auto pr-3 sm:pr-4 text-white text-base sm:text-lg font-medium">
          {ranking.map(({ name, score }, i) => (
            <li
              key={i}
              className={`flex justify-between px-3 py-2 rounded-lg text-sm sm:text-base ${
                i === 0
                  ? "bg-yellow-400/30 text-yellow-400 font-bold shadow-md"
                  : "bg-yellow-400/10"
              }`}
            >
              <span className="truncate max-w-[65%]">{name}</span>
              <span>
                {score} ponto{score !== 1 ? "s" : ""}
              </span>
            </li>
          ))}
        </ol>
localStorage.removeItem('quiz-ranking');

        <button
          onClick={playAgain}
          className="mt-6 sm:mt-8 w-full py-3 sm:py-4 bg-yellow-400 hover:bg-yellow-300 text-black font-semibold rounded-xl shadow-lg transition duration-300 drop-shadow-md"
        >
          JOGAR NOVAMENTE
        </button>
      </div>
    </div>
  );
}
