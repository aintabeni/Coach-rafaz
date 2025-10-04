
import React from 'react';
import type { SalesPageData } from '../../types';
import HeroSection from './HeroSection';
import BenefitsSection from './BenefitsSection';
import SocialProofSection from './SocialProofSection';
import OfferStack from './OfferStack';
import TestimonialsSection from './TestimonialsSection';
import FaqSection from './FaqSection';
import StickyCTA from './StickyCTA';

interface SalesPageProps {
  data: SalesPageData;
}

const SalesPage: React.FC<SalesPageProps> = ({ data }) => {
  return (
    <div className="bg-black text-white">
      <HeroSection hero={data.hero} />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-16 sm:space-y-24">
        <SocialProofSection socialProof={data.social_proof} />
        <BenefitsSection benefits={data.benefits} />
        <OfferStack offer={data.offer_stack[0]} />
        <TestimonialsSection testimonials={data.testimonials} />
        <FaqSection faq={data.faq} />
      </div>
      <StickyCTA ctaText={data.hero.cta_text} ctaLink={data.hero.cta_link} />
    </div>
  );
};

export default SalesPage;
