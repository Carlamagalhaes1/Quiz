import { ChevronLeft } from "lucide-react";
import { useState } from "react";
import { questions } from "../data/questions";
import { useNavigate } from "react-router-dom";

export function QuizCard() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [showEndModal, setShowEndModal] = useState(false);
  const navigate = useNavigate();
  const currentQuestion = questions[currentIndex];

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
  };

  const handleConfirm = () => {
    if (!selectedOption) return;

    setSelectedOption(null);
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      setShowEndModal(true); // Exibe o modal final
    }
  };

  const handleBack = () => {
    const confirmBack = window.confirm("Você quer mesmo voltar? Isso vai apagar seu progresso!");
    if (confirmBack) {
      navigate("/");
    }
  };

  const handleEnd = () => {
    setShowEndModal(false);
    navigate("/");
  };

  return (
     <div className="w-full max-w-lg  mb-10 sm:mb-16 ">
    <div className="bg-[#1e1e1e] text-white rounded-3xl shadow-[0_0_20px_rgba(255,215,0,0.2)] border border-yellow-400 overflow-hidden">
      <div className="bg-yellow-400 text-black p-3 flex items-center justify-between">
        <button onClick={handleBack} className="text-black hover:text-white transition">
          <ChevronLeft size={28} />
        </button>
        <h1 className="text-lg font-bold tracking-wide ">
          Pergunta {currentIndex + 1} de {questions.length}
        </h1>
      </div>
      <div className="p-5  bg-gray-900">
        <h2 className="text-2xl font-harryPotter font-semibold mb-4 text-yellow-400">
          {currentQuestion.question}
        </h2>
        <div className="space-y-3 mb-5">
          {currentQuestion.options.map((option) => (
            <button
              key={option}
              onClick={() => handleOptionSelect(option)}
              className={`w-full p-4 rounded-lg text-left transition duration-300 border border-yellow-400 ${
                selectedOption === option
                  ? "bg-yellow-400 text-black font-semibold shadow-inner"
                  : "bg-gray-800 hover:bg-yellow-400 hover:text-black"
              }`}
            >
              {option}
            </button>
          ))}
        </div>

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
      </div>
    </div>

    {/* Modal final igual */}
    {showEndModal && (
      <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
        <div className="bg-gray-800 text-white p-8 rounded-2xl max-w-md w-full shadow-lg border border-yellow-400">
          <h2 className="text-2xl font-bold mb-4 text-yellow-400">✨ Parabéns, bruxo(a)! ✨</h2>
          <p className="mb-6 text-lg">
            Você concluiu o quiz mágico com sucesso. Que a sabedoria de Hogwarts esteja sempre com você!
          </p>
          <button
            onClick={handleEnd}
            className="w-full py-3 rounded-lg bg-yellow-400 hover:bg-yellow-300 text-black font-semibold transition"
          >
            Voltar ao Início
          </button>
        </div>
      </div>
    )}
  </div>
  );
}
