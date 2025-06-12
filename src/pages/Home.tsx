import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Alert from '../components/Alert';

export default function Home() {
  const [name, setName] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const navigate = useNavigate();

  const handleStart = (e: React.FormEvent) => {
    e.preventDefault();

    if (name.trim()) {
      navigate('/quiz', { state: { name } });
    } else {
      setShowAlert(true);
      setTimeout(() => setShowAlert(false), 3000);
    }
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center px-4"
      style={{
        backgroundImage: "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.9)), url('/images/escola.jpeg')",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="max-w-md w-full p-8 bg-black/5 backdrop-blur-xs rounded-2xl shadow-2xl border border-yellow-600 relative"
      >
        
        <Alert show={showAlert} message="Por favor, digite seu nome para começar!" />

        <motion.img
          src={"/src/assets/logohp.png"}
          alt="Logo Harry Potter"
          className="w-40 mx-auto mb-6"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 100, delay: 0.3 }}
        />

        <h1 className="text-3xl font-bold text-yellow-400 text-center mb-2 drop-shadow-md">
          Quiz de Harry Potter
        </h1>

        <p className="text-gray-200 text-center mb-6">
          Teste seus conhecimentos sobre o mundo mágico. Digite seu nome e entre na magia!
        </p>

        <form onSubmit={handleStart} className="space-y-4">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Seu nome aqui"
            className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-600 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />

          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 0 15px #facc15' }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full bg-yellow-400 hover:bg-yellow-300 text-black font-semibold py-2 rounded shadow-md transition duration-300"
          >
            Começar Quiz
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
}
