
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import type { HeroData } from '../../types';

interface HeroSectionProps {
  hero: HeroData;
}

const PlayIcon = () => (
    <svg className="w-full h-full" viewBox="0 0 24 24" fill="currentColor">
        <path d="M8 5v14l11-7z" />
    </svg>
);


const HeroSection: React.FC<HeroSectionProps> = ({ hero }) => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (heroRef.current) {
        const tl = gsap.timeline();
        tl.fromTo(heroRef.current.querySelectorAll('.gsap-fade-up'), 
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 0.8, stagger: 0.2, ease: 'power3.out' }
        );
    }
  }, []);

  return (
    <section ref={heroRef} className="bg-gray-900 py-16 sm:py-20 text-center">
      <div className="container mx-auto px-4">
        <p className="gsap-fade-up text-yellow-400 font-bold tracking-widest uppercase mb-4">{hero.pre_headline}</p>
        <h1 className="gsap-fade-up text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 leading-tight">{hero.headline}</h1>
        <p className="gsap-fade-up max-w-3xl mx-auto text-lg sm:text-xl text-gray-300 mb-10">{hero.sub_headline}</p>
        
        <div className="gsap-fade-up max-w-4xl mx-auto mb-10 shadow-2xl shadow-yellow-400/20 rounded-lg overflow-hidden relative group">
          <img src={hero.vsl_placeholder} alt="Video Sales Letter" className="w-full h-auto" />
           <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <button className="w-20 h-20 sm:w-24 sm:h-24 bg-white bg-opacity-20 rounded-full flex items-center justify-center text-black backdrop-blur-sm transform transition-transform duration-300 group-hover:scale-110">
                    <span className="w-10 h-10 sm:w-12 sm:h-12"><PlayIcon /></span>
                </button>
            </div>
        </div>

        <div className="gsap-fade-up">
            <a
            href={hero.cta_link}
            className="inline-block py-4 px-10 bg-yellow-400 text-black text-xl font-bold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-yellow-400/40"
            >
            {hero.cta_text}
            </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
