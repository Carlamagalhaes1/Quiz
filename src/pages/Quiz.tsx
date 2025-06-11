// src/pages/Quiz.tsx
import { useLocation } from 'react-router-dom';
import { QuizCard } from '../components/QuizCard';

export default function Quiz() {
  const location = useLocation();
  const name = location.state?.name || 'bruxo misterioso';

  return (
    <div className="min-h-screen flex items-center justify-center relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/90 z-0" />
      <div
        className="absolute inset-0 bg-cover bg-center z-[-1]"
        style={{ backgroundImage: "url('/images/escolahp.jpg')" }}
      />

      <div className="text-center z-10 px-4">
        <h1 className="text-4xl font-bold mb-4">Bem-vindo, {name}!</h1>
        <p className="mb-6">Prepare-se para o quiz mágico ✨</p>
        <QuizCard />
      </div>
    </div>
  );
}
