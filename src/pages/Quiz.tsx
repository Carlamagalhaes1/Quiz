// src/pages/Quiz.tsx
import { useLocation } from 'react-router-dom';
import { QuizCard } from '../components/QuizCard';

export default function Quiz() {
  const location = useLocation();
  const name = location.state?.name || 'bruxo misterioso';

  return (
    <div className="min-h-screen flex items-start justify-start p-8 relative">

      <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/90 z-0" />
      <div
        className="absolute inset-0 bg-cover bg-center z-[-1]"
        style={{ backgroundImage: "url('/images/escolahp.jpg')" }}
      />


      <div className="z-10 w-full max-w-4xl">

        <div className="mb-6 text-white">
          <h1 className="text-4xl font-bold mb-2">Bem-vindo, {name}!</h1>
          <p className="text-lg">Prepare-se para o quiz mágico ✨</p>
        </div>


        <div className="w-full max-w-xl">
          <QuizCard />
        </div>
      </div>
    </div>
  );
}
