
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { STRUGGLES } from '../../constants';
import { Struggle } from '../../types';
import ProgressBar from '../ui/ProgressBar';

interface QuizStep2Props {
  onSelectStruggle: (struggle: Struggle) => void;
}

const QuizStep2: React.FC<QuizStep2Props> = ({ onSelectStruggle }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      gsap.fromTo(
        containerRef.current,
        { opacity: 0, x: '100%' },
        { opacity: 1, x: '0%', duration: 0.8, ease: 'power3.out' }
      );
    }
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen flex flex-col items-center justify-center p-4 sm:p-6 bg-black">
      <div className="w-full max-w-2xl text-center">
        <ProgressBar currentStep={2} totalSteps={2} />
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-8 text-white">
          What’s your biggest challenge on the pitch right now?
        </h1>
        <div className="grid grid-cols-1 gap-4 mb-10">
          {STRUGGLES.map(struggle => (
            <button
              key={struggle}
              onClick={() => onSelectStruggle(struggle)}
              className="w-full py-4 px-6 text-lg font-bold rounded-lg border-2 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-yellow-500/50 bg-gray-800 text-white border-gray-600 hover:bg-yellow-400 hover:text-black hover:border-yellow-400 hover:shadow-lg hover:shadow-yellow-400/20"
            >
              {struggle}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuizStep2;
