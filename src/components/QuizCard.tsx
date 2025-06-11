import { ChevronLeft } from "lucide-react";
import { useState } from "react";

export function QuizCard() {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
  };

  return (
    <div className="flex flex-col h-screen">
      {/* Header */}
      <div className="bg-indigo-700 text-white p-4 flex items-center">
        <button className="mr-4">
          <ChevronLeft size={24} />
        </button>
        <h1 className="text-lg font-medium">Pergunta 1 de 5</h1>
      </div>

      {/* Quiz content */}
      <div className="flex-1 bg-gray-900 text-white p-6 flex flex-col">
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-1">Quando foi lançado o primeiro filme do homem de ferro?</h2>
          <p className="text-sm text-gray-400">Considere somente os filmes novos da Marvel</p>
        </div>

        {/* Options */}
        <div className="space-y-3 mb-auto">
          {["2020", "2019", "2015", "2008"].map((option) => (
            <button
              key={option}
              onClick={() => handleOptionSelect(option)}
              className={`w-full p-4 text-left rounded ${
                selectedOption === option ? "bg-indigo-700" : "bg-gray-800 hover:bg-gray-700"
              }`}
            >
              {option}
            </button>
          ))}
        </div>

        {/* Confirm button */}
        <button className="mt-6 w-full py-3 bg-gray-400 text-gray-800 font-medium rounded">
          CONFIRMAR
        </button>
      </div>
    </div>
  );
}
