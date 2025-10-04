
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

interface BenefitsSectionProps {
  benefits: string[];
}

const CheckIcon = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
    </svg>
);

const BenefitsSection: React.FC<BenefitsSectionProps> = ({ benefits }) => {
  const benefitsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (benefitsRef.current) {
        gsap.fromTo(benefitsRef.current.querySelectorAll('.benefit-item'), 
            { opacity: 0, y: 30 },
            { 
                opacity: 1, 
                y: 0, 
                duration: 0.6, 
                stagger: 0.2, 
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: benefitsRef.current,
                    start: 'top 80%',
                }
            }
        );
    }
  }, []);

  return (
    <section ref={benefitsRef}>
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold">Here's What You'll Achieve</h2>
        <p className="max-w-2xl mx-auto mt-4 text-gray-400">Unlock your true potential on the pitch by mastering these key areas.</p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {benefits.map((benefit, index) => (
          <div key={index} className="benefit-item bg-gray-800 p-8 rounded-xl border border-gray-700 shadow-lg">
            <div className="flex items-center justify-center w-12 h-12 bg-yellow-400 text-black rounded-full mb-6">
              <CheckIcon />
            </div>
            <p className="text-lg text-gray-200">{benefit}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BenefitsSection;
