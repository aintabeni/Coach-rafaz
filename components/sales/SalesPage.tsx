import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import type { SalesPageData } from '../../types';
import HeroSection from './HeroSection';
import BenefitsSection from './BenefitsSection';
import SocialProofSection from './SocialProofSection';
import OfferStack from './OfferStack';
import TestimonialsSection from './TestimonialsSection';
import FaqSection from './FaqSection';

interface SalesPageProps {
  data: SalesPageData;
}

const SalesPage: React.FC<SalesPageProps> = ({ data }) => {
  useEffect(() => {
    const handleSmoothScroll = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a[href="#offer-section"]');

      if (anchor) {
        e.preventDefault();
        gsap.to(window, {
          duration: 1,
          scrollTo: '#offer-section',
          ease: 'power2.inOut',
        });
      }
    };

    document.addEventListener('click', handleSmoothScroll);

    return () => {
      document.removeEventListener('click', handleSmoothScroll);
    };
  }, []);

  return (
    <div className="bg-black text-white pb-16">
      <HeroSection hero={data.hero} />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-16 sm:space-y-24">
        <BenefitsSection benefits={data.benefits} />
        <div id="offer-section">
          <OfferStack offer={data.offer_stack[0]} />
        </div>
        <TestimonialsSection testimonials={data.testimonials} />
        <FaqSection faq={data.faq} />
        <div className="text-center">
            <a
            href={data.offer_stack[0].cta_link}
            className="w-full max-w-lg inline-block py-4 px-10 bg-yellow-400 text-black text-xl font-bold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-yellow-400/40"
            >
            {data.offer_stack[0].cta_text}
            </a>
        </div>
        <SocialProofSection socialProof={data.social_proof} />
      </div>
    </div>
  );
};

export default SalesPage;