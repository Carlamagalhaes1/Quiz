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


        navigate("/quiz", { state: { playerName: name } });
    };



    return (
        <div className="">
            <img src={logohp} alt="Harry Potter Logo" className="w-32 sm:w-48 mb-8" />
            <div className="w-full max-w-md mx-auto overflow-hidden rounded-lg shadow-lg">
                <div className="bg-indigo-600 p-4 text-white">
                    <h2 className="text-xl font-medium">Teste suas habilidades</h2>
                </div>
                <div className="bg-gray-900 text-white p-6 space-y-6">
                    <p className="text-center">
                        Teste os seus conhecimentos sobre o universo Marvel e divirta-se criando o seu AluraQuiz!
                    </p>
                    <div className="space-y-4">
                        <input
                            onSubmit={handleStart}
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            type="text"
                            placeholder="Diz aí seu nome pra jogar :)"
                            className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-400 "
                        />
                        <Button type="submit" className="w-full bg-gray-400 hover:bg-gray-500 text-gray-900 font-medium py-3"><Link to="/quiz">Ir para o quiz</Link></Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
