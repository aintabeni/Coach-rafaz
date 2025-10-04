
import React from 'react';
import type { SocialProof } from '../../types';

interface SocialProofProps {
  socialProof: SocialProof;
}

const InstagramIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
    </svg>
);

const YouTubeIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
        <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
    </svg>
);


const SocialProofSection: React.FC<SocialProofProps> = ({ socialProof }) => {
  return (
    <section className="text-center">
      <h2 className="text-3xl font-bold mb-4">Join Our Community</h2>
      <p className="text-gray-400 mb-8 max-w-2xl mx-auto">Trusted by thousands of players worldwide looking to elevate their game.</p>
      <div className="flex flex-col sm:flex-row justify-center items-center gap-8">
        <div className="flex items-center gap-4 text-yellow-400">
            <InstagramIcon />
            <div>
                <p className="text-3xl font-extrabold text-white">{socialProof.instagram}</p>
                <p className="text-sm uppercase tracking-wider text-gray-400">Followers</p>
            </div>
        </div>
        <div className="w-px h-16 bg-gray-700 hidden sm:block"></div>
        <div className="flex items-center gap-4 text-yellow-400">
            <YouTubeIcon />
            <div>
                <p className="text-3xl font-extrabold text-white">{socialProof.youtube}</p>
                <p className="text-sm uppercase tracking-wider text-gray-400">Subscribers</p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
