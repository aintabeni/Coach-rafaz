import React from 'react';
import type { OfferStackItem } from '../../types';

interface OfferStackProps {
  offer: OfferStackItem;
}

const OfferStack: React.FC<OfferStackProps> = ({ offer }) => {
  return (
    <section className="bg-gray-800 rounded-xl border border-yellow-400/50 p-8 sm:p-12 shadow-2xl shadow-yellow-400/10">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-4xl font-extrabold mb-4 text-yellow-400">{offer.name}</h2>
          <p className="text-gray-300 mb-6">{offer.description}</p>
        </div>
        <div className="text-center bg-black p-8 rounded-lg">
          <p className="text-5xl font-extrabold mb-4">{offer.price}</p>
          <a
            href={offer.cta_link}
            className="w-full inline-block py-4 px-10 bg-yellow-400 text-black text-xl font-bold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-yellow-400/40"
          >
            {offer.cta_text}
          </a>
          <p className="text-xs text-gray-500 mt-4">One-time payment. Lifetime access.</p>
        </div>
      </div>
    </section>
  );
};

export default OfferStack;