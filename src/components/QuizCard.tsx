import { Question } from "../types/quiz";

interface QuizCardProps {
  question: Question;
  currentIndex: number;
  total: number;
  onAnswer: (answer: string) => void;
}

export function QuizCard({ question, currentIndex, total, onAnswer }: QuizCardProps) {
  return (
    <div className="bg-white text-black rounded-2xl shadow-xl p-6 w-full max-w-2xl">
      <h2 className="text-xl font-semibold mb-4">
        Pergunta {currentIndex + 1} de {total}
      </h2>
      <p className="text-lg font-medium mb-6">{question.question}</p>

      <div className="grid gap-4">
        {question.options.map((option, idx) => (
          <button
            key={idx}
            onClick={() => onAnswer(option)}
            className="bg-purple-700 hover:bg-purple-800 text-white py-2 px-4 rounded-xl transition duration-100"
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}
