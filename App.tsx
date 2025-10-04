import React, { useState, useCallback, useEffect } from 'react';
import { gsap } from 'gsap';
import { QuizStep, Struggle } from './types';
import { SALES_PAGES_DATA } from './constants';
import QuizStep1 from './components/quiz/QuizStep1';
import QuizStep2 from './components/quiz/QuizStep2';
import SalesPage from './components/sales/SalesPage';

declare global {
    interface Window {
        ScrollTrigger: any;
    }
}

function App() {
  const [quizStep, setQuizStep] = useState<QuizStep>(QuizStep.POSITION);
  const [selectedPositions, setSelectedPositions] = useState<string[]>([]);
  const [selectedStruggle, setSelectedStruggle] = useState<Struggle | null>(null);

  useEffect(() => {
    if (window.ScrollTrigger) {
      gsap.registerPlugin(window.ScrollTrigger);
    }
  }, []);

  const handleSelectPosition = useCallback((position: string) => {
    setSelectedPositions(prev =>
      prev.includes(position)
        ? prev.filter(p => p !== position)
        : [...prev, position]
    );
  }, []);

  const handleNextStep = useCallback(() => {
    if (selectedPositions.length > 0) {
      setQuizStep(QuizStep.STRUGGLE);
    }
  }, [selectedPositions]);

  const handleSelectStruggle = useCallback((struggle: Struggle) => {
    setSelectedStruggle(struggle);
    setQuizStep(QuizStep.SALES_PAGE);
  }, []);

  const renderContent = () => {
    switch (quizStep) {
      case QuizStep.POSITION:
        return (
          <QuizStep1
            selectedPositions={selectedPositions}
            onSelectPosition={handleSelectPosition}
            onNext={handleNextStep}
          />
        );
      case QuizStep.STRUGGLE:
        return (
          <QuizStep2
            onSelectStruggle={handleSelectStruggle}
          />
        );
      case QuizStep.SALES_PAGE:
        if (selectedStruggle && SALES_PAGES_DATA[selectedStruggle]) {
          return <SalesPage data={SALES_PAGES_DATA[selectedStruggle]} />;
        }
        // Fallback to step 1 if data is missing
        setQuizStep(QuizStep.POSITION);
        return null;
      default:
        return (
          <QuizStep1
            selectedPositions={selectedPositions}
            onSelectPosition={handleSelectPosition}
            onNext={handleNextStep}
          />
        );
    }
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans antialiased">
      <main>{renderContent()}</main>
    </div>
  );
}

export default App;