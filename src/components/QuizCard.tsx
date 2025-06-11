import { ChevronLeft } from "lucide-react";
import { useState } from "react";
import { questions } from "../data/questions";

export function QuizCard() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const currentQuestion = questions[currentIndex];

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
  };

  const handleConfirm = () => {
    if (!selectedOption) return;

    // Aqui você pode salvar a resposta, validar, etc.
    setSelectedOption(null);
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      alert("Quiz finalizado!");
      // Pode redirecionar ou mostrar resultado
    }
  };

  return (
    <div className="flex flex-col h-screen  ">
      <div className="bg-indigo-700 text-white p-4 flex items-center rounded-t-4xl ">
        <button className="mr-4">
          <ChevronLeft size={24} />
        </button>
        <h1 className="text-lg font-medium ">
          Pergunta {currentIndex + 1} de {questions.length}
        </h1>
      </div>

    
      <div className=" rounded-b-4xl bg-gray-900 text-white p-6 flex flex-col">
  
        <div className="mb-2">
          <h2 className="text-xl font-bold mb-1">{currentQuestion.question}</h2>
        </div>


        <div  >
          <div className="space-y-3 mb-3 ">
            {currentQuestion.options.map((option) => (
            <button
              key={option}
              onClick={() => handleOptionSelect(option)}
              className={`w-full p-4 text-left rounded ${
                selectedOption === option
                  ? "bg-indigo-700"
                  : "bg-gray-800 hover:bg-gray-700"
              }`}
            >
              {option}
            </button>
          ))}

          </div>
           <button
          onClick={handleConfirm}
          disabled={!selectedOption}
          className={`mt-auto w-full py-3 rounded font-medium ${
            selectedOption
              ? "bg-indigo-600 text-white hover:bg-indigo-500"
              : "bg-gray-600 text-gray-300 cursor-not-allowed"
          }`}
        >
          CONFIRMAR
        </button>
          
        </div>   
      </div>
    </div>
  );
}
