import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { PLAYER_POSITIONS } from '../../constants';
import ProgressBar from '../ui/ProgressBar';

interface QuizStep1Props {
  selectedPosition: string | null;
  onSelectPosition: (position: string) => void;
  onNext: () => void;
}

const QuizStep1: React.FC<QuizStep1Props> = ({ selectedPosition, onSelectPosition, onNext }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const fieldRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current && fieldRef.current) {
        const tl = gsap.timeline();
        tl.fromTo(
            containerRef.current.querySelector('h1'),
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }
        )
        .fromTo(
            fieldRef.current.querySelectorAll('.position-marker'),
            { opacity: 0, scale: 0.5 },
            {
            opacity: 1,
            scale: 1,
            duration: 0.5,
            ease: 'back.out(1.7)',
            stagger: 0.05,
            },
            '-=0.5'
        );
    }
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen flex flex-col items-center justify-center p-4 sm:p-6 bg-black">
      <div className="w-full max-w-2xl text-center">
        <ProgressBar currentStep={1} totalSteps={2} />
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-8 text-white">
          Select your primary position
        </h1>

        <div
          ref={fieldRef}
          className="relative w-full max-w-xs sm:max-w-sm mx-auto my-8 sm:my-12"
          style={{ aspectRatio: '3 / 4' }}
        >
          {PLAYER_POSITIONS.map(pos => {
            const isSelected = selectedPosition === pos.value;
            return (
              <div
                key={pos.id}
                className="absolute -translate-x-1/2 -translate-y-1/2 position-marker"
                style={{ top: pos.top, left: pos.left }}
              >
                <button
                  onClick={() => onSelectPosition(pos.value)}
                  className="flex flex-col items-center justify-center gap-y-2 group focus:outline-none"
                  aria-pressed={isSelected}
                  title={`Select ${pos.value}`}
                >
                  <span
                    className={`text-sm font-semibold transition-colors duration-300 ${
                      isSelected ? 'text-yellow-400' : 'text-gray-300 group-hover:text-white'
                    }`}
                  >
                    {pos.label}
                  </span>
                  <div
                    className={`w-5 h-5 rounded-full flex items-center justify-center transition-all duration-300 transform group-hover:scale-110 relative ${
                      isSelected ? 'scale-110' : ''
                    }`}
                  >
                    <div
                      className={`absolute w-full h-full rounded-full blur-md transition-all duration-300 ${
                        isSelected ? 'bg-yellow-400' : 'bg-red-600'
                      }`}
                    ></div>
                    <div
                      className={`relative w-2 h-2 rounded-full ${
                        isSelected ? 'bg-yellow-200' : 'bg-red-400'
                      }`}
                    ></div>
                  </div>
                </button>
              </div>
            );
          })}
        </div>

        <button
          onClick={onNext}
          disabled={!selectedPosition}
          className="w-full max-w-md py-4 px-8 bg-yellow-400 text-black text-xl font-bold rounded-lg transition-all duration-300 transform hover:scale-105 disabled:bg-gray-600 disabled:cursor-not-allowed disabled:scale-100 shadow-lg hover:shadow-yellow-400/40 disabled:shadow-none"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default QuizStep1;