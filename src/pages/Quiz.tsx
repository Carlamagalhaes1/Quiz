import { ChevronLeft } from "lucide-react";
import { QuizCard } from "../components/QuizCard";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";


import correctIcon from "../assets/Felizzz.png";
import wrongIcon from "../assets/Triste.png";

export default function Quiz() {
  const location = useLocation();
  const name = location.state?.name || "bruxo misterioso";
  const navigate = useNavigate();

  const [isAnswerCorrect, setIsAnswerCorrect] = useState<boolean | null>(null);
  const [score, setScore] = useState(0);

  const handleBack = () => {
    
      navigate("/");
    
  };


  const handleAnswerFeedback = (isCorrect: boolean | null) => {
    setIsAnswerCorrect(isCorrect);
    if (isCorrect) {
      setScore((prev) => prev + 1);
    }
  };

  
  const handleQuizEnd = () => {
    navigate("/results", { state: { score, playerName: name } });
  };

  return (
    <div className="h-screen relative flex flex-col">
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/90 z-1" />
      <div
        className="absolute inset-1.5 bg-center z-[-1]"
        style={{ backgroundImage: "url('/images/escolahp.jpg')" }}
      />

      <button
        onClick={handleBack}
        className=" w-9 mt-10 ps-3  md:absolute top-7.5 left-6 z-20 text-white hover:text-yellow-300 transition"
      >
        <ChevronLeft size={32} />
      </button>


      <div className=" z-10 max-w-6xl w-full mx-auto px-6 sm:px-12 md:mt-3">
        <div className="text-white mb-4">
          <h1 className="text-2xl text-center sm:text-4xl lg:text-left font-bold">Bem-vindo, {name}!</h1>
          <p className="text-lg text-center lg:text-left ">Prepare-se para o quiz mágico ✨</p>
        </div>

        <div className="flex flex-col lg:flex-row items-start gap-8">
          <QuizCard
            onAnswerFeedback={handleAnswerFeedback}
            onQuizEnd={handleQuizEnd} 
          />

          {isAnswerCorrect !== null && (
            <div className="flex-1 flex justify-center items-center">
              <img
                src={isAnswerCorrect ? correctIcon : wrongIcon}
                alt={isAnswerCorrect ? "Resposta correta" : "Resposta errada"}
                className="w-40 h-40 absolute left-1 top-3/4 mb-9 mt-10 sm:static sm:left-auto sm:top-auto sm:mb-0 sm:w-60 sm:h-60 md:w-80 md:h-80 lg:w-96 lg:h-96 object-contain drop-shadow-xl transition-all duration-300"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
