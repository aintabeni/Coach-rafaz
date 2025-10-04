
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

interface TestimonialsSectionProps {
  testimonials: string[];
}

const QuoteIcon = () => (
    <svg className="w-12 h-12 text-yellow-400/20" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
        <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z"/>
    </svg>
);


const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ testimonials }) => {
    const testimonialsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (testimonialsRef.current) {
            gsap.fromTo(testimonialsRef.current.querySelectorAll('.testimonial-card'), 
                { opacity: 0, y: 30 },
                { 
                    opacity: 1, 
                    y: 0, 
                    duration: 0.6, 
                    stagger: 0.2, 
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: testimonialsRef.current,
                        start: 'top 80%',
                    }
                }
            );
        }
    }, []);

  return (
    <section ref={testimonialsRef}>
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold">Don't Just Take Our Word For It</h2>
        <p className="max-w-2xl mx-auto mt-4 text-gray-400">See how players just like you have transformed their game.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card bg-gray-800 p-8 rounded-xl border border-gray-700 relative">
            <QuoteIcon />
            <p className="text-lg text-gray-200 mt-4 z-10 relative">{testimonial}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
