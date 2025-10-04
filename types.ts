
export enum QuizStep {
  POSITION = 1,
  STRUGGLE = 2,
  SALES_PAGE = 3,
}

export enum Struggle {
  TECHNIQUE = 'Technique',
  TACTICS = 'Tactics',
  CONFIDENCE = 'Confidence',
  TECHNIQUE_TACTICS = 'Technique + Tactics',
  ALL = 'I struggle with all',
}

export interface FaqItem {
  q: string;
  a: string;
}

export interface OfferStackItem {
  name: string;
  description: string;
  price: string;
  cta_text: string;
  cta_link: string;
}

export interface SocialProof {
  instagram: string;
  youtube: string;
}

export interface HeroData {
  pre_headline: string;
  headline: string;
  sub_headline: string;
  vsl_placeholder: string;
  cta_text: string;
  cta_link: string;
}

export interface SalesPageData {
  product: string;
  hero: HeroData;
  benefits: string[];
  social_proof: SocialProof;
  offer_stack: OfferStackItem[];
  testimonials: string[];
  faq: FaqItem[];
}
