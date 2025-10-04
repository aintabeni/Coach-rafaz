
import React, { useState } from 'react';
import type { FaqItem } from '../../types';

interface FaqSectionProps {
  faq: FaqItem[];
}

const FaqItemComponent: React.FC<{ item: FaqItem }> = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-700 py-6">
      <button
        className="w-full flex justify-between items-center text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-xl font-bold text-white">{item.q}</span>
        <span className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
        </span>
      </button>
      <div
        className={`grid transition-all duration-500 ease-in-out ${
          isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
            <p className="pt-4 text-gray-300">{item.a}</p>
        </div>
      </div>
    </div>
  );
};

const FaqSection: React.FC<FaqSectionProps> = ({ faq }) => {
  return (
    <section>
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold">Frequently Asked Questions</h2>
      </div>
      <div className="max-w-3xl mx-auto">
        {faq.map((item, index) => (
          <FaqItemComponent key={index} item={item} />
        ))}
      </div>
    </section>
  );
};

export default FaqSection;
