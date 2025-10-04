
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { POSITIONS } from '../../constants';
import ProgressBar from '../ui/ProgressBar';

interface QuizStep1Props {
  selectedPositions: string[];
  onSelectPosition: (position: string) => void;
  onNext: () => void;
}

const QuizStep1: React.FC<QuizStep1Props> = ({ selectedPositions, onSelectPosition, onNext }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      gsap.fromTo(
        containerRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }
      );
    }
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen flex flex-col items-center justify-center p-4 sm:p-6 bg-black">
      <div className="w-full max-w-2xl text-center">
        <ProgressBar currentStep={1} totalSteps={2} />
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-8 text-white">
          What position(s) do you play most?
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          {POSITIONS.map(position => (
            <button
              key={position}
              onClick={() => onSelectPosition(position)}
              className={`py-4 px-6 text-lg font-bold rounded-lg border-2 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-yellow-500/50 ${
                selectedPositions.includes(position)
                  ? 'bg-yellow-400 text-black border-yellow-400 shadow-lg shadow-yellow-400/20'
                  : 'bg-gray-800 text-white border-gray-600 hover:bg-gray-700 hover:border-gray-500'
              }`}
            >
              {position}
            </button>
          ))}
        </div>
        <button
          onClick={onNext}
          disabled={selectedPositions.length === 0}
          className="w-full max-w-md py-4 px-8 bg-yellow-400 text-black text-xl font-bold rounded-lg transition-all duration-300 transform hover:scale-105 disabled:bg-gray-600 disabled:cursor-not-allowed disabled:scale-100 shadow-lg hover:shadow-yellow-400/40 disabled:shadow-none"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default QuizStep1;
