import { Link } from "react-router-dom";
import { Button } from "../components/Button";
import logohp from "../assets/logohp.png";

export default function Home() {
  return (
   <div className="min-h-screen bg-gradient-to-b from-purple-900 to-black flex flex-col items-center justify-center text-white px-4 py-8">
  <img src={logohp} alt="Harry Potter Logo" className="w-32 sm:w-48 mb-8" />

  <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-center">
    Bem-vindo ao Quiz do Harry Potter!
  </h1>

  <p className="mb-8 text-base sm:text-lg text-center max-w-md">
    Teste seus conhecimentos sobre o mundo mágico de Harry Potter. Você está pronto?
  </p>

  <Link to="/quiz">
    <Button>Começar o Quiz</Button>
  </Link>
</div>
  );
}
