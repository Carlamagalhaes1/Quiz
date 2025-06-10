import { motion, AnimatePresence } from 'framer-motion';

interface AlertProps {
  show: boolean;
  message: string;
}

export default function Alert({ show, message }: AlertProps) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-red-600 text-white px-4 py-2 rounded shadow-lg text-sm font-medium z-50"
        >
          {message}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
