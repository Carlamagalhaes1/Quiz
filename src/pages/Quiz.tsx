// src/pages/Quiz.tsx
import { useLocation } from 'react-router-dom';
import { QuizCard } from '../components/QuizCard';

export default function Quiz() {
  const location = useLocation();
  const name = location.state?.name || 'bruxo misterioso';

  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Bem-vindo, {name}!</h1>
        <p>Prepare-se para o quiz mágico ✨</p>
        <QuizCard/>
      </div>
    </div>
  );
}
