import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Button } from "../components/Button";
import logohp from "../assets/logohp.png";

export default function Home() {
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleStart = (e: React.FormEvent) => {
    e.preventDefault();

    if (name.trim() === "") {
      alert("Por favor, digite seu nome.");
      return;
    }

    // Redireciona para o quiz e envia o nome na navegação
    navigate("/quiz", { state: { playerName: name } });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 to-black flex flex-col items-center justify-center text-white px-4 py-8">
      <img src={logohp} alt="Harry Potter Logo" className="w-32 sm:w-48 mb-8" />

      <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-center">
        Bem-vindo ao Quiz do Harry Potter!
      </h1>

      <p className="mb-8 text-base sm:text-lg text-center max-w-md">
        Teste seus conhecimentos sobre o mundo mágico de Harry Potter. Você está pronto?
      </p>

      {/* Formulário de nome */}
      <form onSubmit={handleStart} className="flex flex-col items-center gap-4 w-full max-w-sm">
        <input
          type="text"
          placeholder="Digite seu nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-4 py-2 rounded-xl text-black text-center"
        />
        <Button type="submit">Começar o Quiz</Button>
      </form>
    </div>
  );
}
