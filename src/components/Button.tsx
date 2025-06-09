import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
}

export function Button({ children, onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 px-6 rounded-2xl shadow-md transition duration-300"
    >
      {children}
    </button>
  );
}
