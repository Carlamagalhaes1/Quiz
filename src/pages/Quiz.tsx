import { useLocation } from 'react-router-dom';
import { QuizCard } from '../components/QuizCard';

export default function Quiz() {
  const location = useLocation();
  const name = location.state?.name || 'bruxo misterioso';

  return (

    <div className='h-screen relative flex flex-col  '>
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/90 z-1" />
      <div
        className="absolute inset-1.5  bg-center z-[-1]"
        style={{ backgroundImage: "url('/images/escolahp.jpg')" }}
      />

      <div className="mt-4 z-10 max-w-5xl">


        <div className=" mt-2 sm:ps-12 pe-3.5 ps-4">
          <div className="text-white mb-6">
            <h1 className="text-3xl ps-1 sm:text-4xl font-bold ">Bem-vindo, {name}!</h1>
            <p className="text-lg ps-2 ">Prepare-se para o quiz mágico ✨</p>
          </div>
          <QuizCard />
        </div>
      </div>
    </div>



  );
}
