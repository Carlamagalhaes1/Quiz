import { ChevronLeft } from "lucide-react";
import { QuizCard } from "../components/QuizCard";
import { useLocation, useNavigate } from 'react-router-dom';


export default function Quiz() {
  const location = useLocation();
  const name = location.state?.name || 'bruxo misterioso';
  const navigate = useNavigate();

  const handleBack = () => {
    const confirmBack = window.confirm("Você quer mesmo voltar? Isso vai apagar seu progresso!");
    if (confirmBack) {
      navigate("/");
    }
  };

  return (
    <div className='h-screen relative flex flex-col'>
     
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/90 z-1" />
      <div
        className="absolute inset-1.5 bg-center z-[-1]"
        style={{ backgroundImage: "url('/images/escolahp.jpg')" }}
      />

      <button
        onClick={handleBack}
        className="absolute top-7.5 left-6 z-20 text-yellow-400 hover:text-white transition"
      >
        <ChevronLeft size={32} />
      </button>
      <div className="mt-4 z-10 max-w-5xl">
        <div className="mt-2 sm:ps-12 pe-3.5 ps-4">
          <div className="text-white mb-6">
            <h1 className="text-3xl ps-1 sm:text-4xl font-bold">Bem-vindo, {name}!</h1>
            <p className="text-lg ps-2">Prepare-se para o quiz mágico ✨</p>
          </div>
          <QuizCard />
        </div>
      </div>
    </div>
  );
}
