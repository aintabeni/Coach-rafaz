
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

interface StickyCTAProps {
    ctaText: string;
    ctaLink: string;
}

const StickyCTA: React.FC<StickyCTAProps> = ({ ctaText, ctaLink }) => {
    const ctaRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (ctaRef.current) {
            gsap.fromTo(ctaRef.current, 
                { y: '100%' }, 
                { 
                    y: '0%', 
                    duration: 0.8, 
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: document.body,
                        start: 'top 60%', // Appears when scrolled down a bit
                    }
                }
            );
        }
    }, []);

  return (
    <div ref={ctaRef} className="fixed bottom-0 left-0 right-0 bg-gray-900/80 backdrop-blur-sm p-4 border-t border-gray-700 z-50">
      <div className="container mx-auto flex items-center justify-center">
        <a
          href={ctaLink}
          className="w-full max-w-lg text-center py-3 px-8 bg-yellow-400 text-black text-lg font-bold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-yellow-400/40"
        >
          {ctaText}
        </a>
      </div>
    </div>
  );
};

export default StickyCTA;
