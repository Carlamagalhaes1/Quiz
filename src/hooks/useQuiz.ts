import { useState } from "react";
import { Question } from "../types/quiz";
import { shuffleArray } from "../utils/shuffleArray";
import { questions } from "../data/questions";

export function useQuiz() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);

  const shuffledQuestions: Question[] = shuffleArray(questions);

  const currentQuestion = shuffledQuestions[currentIndex];

  const answerQuestion = (answer: string) => {
    if (answer === currentQuestion.correctAnswer) {
      setScore((prev) => prev + 1);
    }

    const nextIndex = currentIndex + 1;
    if (nextIndex < shuffledQuestions.length) {
      setCurrentIndex(nextIndex);
    } else {
      setShowResults(true);
    }
  };

  return {
    currentQuestion,
    currentIndex,
    totalQuestions: shuffledQuestions.length,
    score,
    showResults,
    answerQuestion,
  };
}
