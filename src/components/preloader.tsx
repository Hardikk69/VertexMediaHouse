import { useEffect, useState } from "react";

const messages = [
  "o Hello",       
  "o 你好 (Nǐ hǎo)",
  "o Hola",        
  "o مرحبا (Marhaban)",
  "o Bonjour",     
  "o Hallo",       
  "o Olá",         
  "o こんにちは (Konnichiwa)",
  "o Привет (Privet)",
  "o नमस्ते (Namaste)"
];

export default function Preloader({ onFinish }: { onFinish: () => void }) {
  const [index, setIndex] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    if (index < messages.length) {
      const timer = setTimeout(() => setIndex(index + 1), 150);
      return () => clearTimeout(timer);
    } else {
      setTimeout(() => {
        setIsDone(true);
        setTimeout(onFinish, 800);
      }, 800);
    }
  }, [index]);

  return (
    <div
      className={`fixed inset-0 bg-black text-white flex items-center justify-center transition-transform duration-700 ${
        isDone ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <h1 className="text-6xl font-normal font-power">
        {messages[index - 1] || messages[0]}
      </h1>
    </div>
  );
}
