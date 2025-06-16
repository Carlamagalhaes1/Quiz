import { useState } from "react";
import { questions } from "../data/questions";

type QuizCardProps = {
  onAnswerFeedback: (isCorrect: boolean | null) => void;
  onQuizEnd: () => void;  
};

export function QuizCard({ onAnswerFeedback, onQuizEnd }: QuizCardProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [confirmedOption, setConfirmedOption] = useState<string | null>(null);

  const currentQuestion = questions[currentIndex];

  const handleOptionSelect = (option: string) => {
    if (confirmedOption) return;
    setSelectedOption(option);
  };

  const handleConfirm = () => {
    if (!selectedOption) return;
    setConfirmedOption(selectedOption);

    const isCorrect = selectedOption === currentQuestion.correctAnswer;
    onAnswerFeedback(isCorrect);
  };

  const handleNext = () => {
    setSelectedOption(null);
    setConfirmedOption(null);
    onAnswerFeedback(null);

    if (currentIndex < questions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
     
      onQuizEnd();
    }
  };

  return (
    <div className="w-full max-w-lg mb-10 sm:mb-16">
      <div className="bg-[#1e1e1e] text-white rounded-3xl shadow-[0_0_30px_rgba(255,215,0,0.2)] border border-yellow-400 overflow-hidden">
        <div className="bg-yellow-400 text-black p-3 justify-items-end ">
          <h1 className="text-lg font-bold pe-2.5 racking-wide">
            Pergunta {currentIndex + 1} de {questions.length}
          </h1>
        </div>

        <div className="p-5 bg-gray-900">
          <h2 className="text-2xl font-harryPotter font-semibold mb-4 text-yellow-400 drop-shadow-[2px_1px_0px_black]">
            {currentQuestion.question}
          </h2>
          <div className="space-y-3 mb-5">
            {currentQuestion.options.map((option) => {
              let className =
                "w-full p-4 rounded-lg text-left transition duration-300 border border-yellow-400 ";

              if (!confirmedOption) {
                className +=
                  selectedOption === option
                    ? "bg-yellow-400 text-black font-semibold shadow-inner"
                    : "bg-gray-800 hover:bg-yellow-400 hover:text-black";
              } else {
                if (option === currentQuestion.correctAnswer) {
                  className += "bg-green-600 text-white font-semibold border-green-600";
                } else if (option === confirmedOption && option !== currentQuestion.correctAnswer) {
                  className += "bg-red-600 text-white font-semibold border-red-600";
                } else {
                  className += "bg-gray-800 text-white cursor-not-allowed opacity-50";
                }
              }

              return (
                <button
                  key={option}
                  onClick={() => handleOptionSelect(option)}
                  disabled={!!confirmedOption}
                  className={className}
                >
                  {option}
                </button>
              );
            })}
          </div>
          {!confirmedOption ? (
            <button
              onClick={handleConfirm}
              disabled={!selectedOption}
              className={`w-full py-3 rounded-lg font-medium tracking-wide transition duration-300 ${
                selectedOption
                  ? "bg-yellow-400 hover:bg-yellow-300 text-black"
                  : "bg-gray-600 text-gray-300 cursor-not-allowed"
              }`}
            >
              CONFIRMAR
            </button>
          ) : (
            <button
              onClick={handleNext}
              className="w-full py-3 rounded-lg font-medium tracking-wide bg-yellow-400 hover:bg-yellow-300 text-black transition"
            >
              {currentIndex === questions.length - 1 ? "VER RESULTADO" : "PRÓXIMA"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
