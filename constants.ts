import { Struggle, type SalesPageData } from './types';

export const PLAYER_POSITIONS: { id: string; value: string; label: string; top: string; left: string }[] = [
    { id: 'st', value: 'Striker', label: 'ST', top: '10%', left: '50%' },
    { id: 'cam', value: 'CAM (No.10)', label: 'CAM', top: '22%', left: '50%' },
    { id: 'lw', value: 'Winger', label: 'LW', top: '32%', left: '20%' },
    { id: 'rw', value: 'Winger', label: 'RW', top: '32%', left: '80%' },
    { id: 'cm', value: 'No.8', label: 'CM', top: '42%', left: '50%' },
    { id: 'dm', value: 'CDM', label: 'DM', top: '60%', left: '50%' },
    { id: 'lb', value: 'Full-Back', label: 'LB', top: '75%', left: '15%' },
    { id: 'cb1', value: 'Centre-Back', label: 'CB', top: '75%', left: '38%' },
    { id: 'cb2', value: 'Centre-Back', label: 'CB', top: '75%', left: '62%' },
    { id: 'rb', value: 'Full-Back', label: 'RB', top: '75%', left: '85%' },
    { id: 'gk', value: 'Goalkeeper', label: 'GK', top: '90%', left: '50%' },
];

export const STRUGGLES: Struggle[] = [
  Struggle.TECHNIQUE,
  Struggle.TACTICS,
  Struggle.CONFIDENCE,
  Struggle.TECHNIQUE_TACTICS,
  Struggle.ALL,
];

const VSL_PLACEHOLDER_URL = "https://placehold.co/1920x1080/1a1a1a/eab308?text=Video+Coming+Soon";

export const SALES_PAGES_DATA: Record<Struggle, SalesPageData> = {
  [Struggle.TECHNIQUE]: {
    "product": "All-In-One Positions Guide",
    "hero": {
      "pre_headline": "Coach Rafaz reveals...",
      "headline": "Master Every Move, Pass & Duel Specific to Your Position",
      "sub_headline": "Unlock your full technical potential and dominate every situation on the pitch.",
      "vsl_placeholder": VSL_PLACEHOLDER_URL,
      "cta_text": "Improve Your Technique Now",
      "cta_link": "#offer-section"
    },
    "benefits": [
      "Perfect every dribble, pass, and 1v1 duel so that you can outplay opponents effortlessly",
      "Understand positional nuances so that you can make smarter decisions under pressure",
      "Train like a pro so that you can dominate your position in every match"
    ],
    "social_proof": { "instagram": "127K+", "youtube": "35K+" },
    "offer_stack": [{
      "name": "All-In-One Positions Guide",
      "description": "In-depth breakdown of every outfield position with over 2 hours of video content.",
      "price": "$29.99",
      "cta_text": "Improve Your Technique Now",
      "cta_link": "#offer-section"
    }],
    "testimonials": [
      "“I never realized how much my positioning and technique were holding me back until I used this guide. Now I dominate my matches!” – Liam, Winger",
      "“Clear, actionable, and game-changing. Every aspiring footballer should watch these videos.” – Sofia, Centre-Back"
    ],
    "faq": [
      {"q": "Will this help me if I play multiple positions?", "a": "Yes, it covers all outfield positions in detail so you can apply the techniques wherever you play."},
      {"q": "How long is the guide?", "a": "Over 2 hours of video content with step-by-step lessons and practical examples."}
    ]
  },
  [Struggle.TACTICS]: {
    "product": "Full Formations Guide",
    "hero": {
      "pre_headline": "Coach Rafaz reveals...",
      "headline": "Dominate the Pitch with Perfect Positioning & Game Awareness",
      "sub_headline": "Learn exactly where to be, when to move, and how to complement your team.",
      "vsl_placeholder": VSL_PLACEHOLDER_URL,
      "cta_text": "Master Your Tactics Now",
      "cta_link": "#offer-section"
    },
    "benefits": [
      "Master formations and movement patterns so that you can control the game",
      "Understand in-possession and out-of-possession principles so that you can always be in the right place",
      "Improve your decision-making so that you can support your teammates effectively"
    ],
    "social_proof": { "instagram": "127K+", "youtube": "35K+" },
    "offer_stack": [{
      "name": "Full Formations Guide",
      "description": "All 6–11-a-side formations explained with 7 hours of video content.",
      "price": "$49.99",
      "cta_text": "Master Your Tactics Now",
      "cta_link": "#offer-section"
    }],
    "testimonials": [
      "“My understanding of the game has completely changed. I finally know where to be in every situation.” – Ethan, Midfielder",
      "“The visual breakdowns made tactics easy to understand and implement.” – Ava, Full-Back"
    ],
    "faq": [
      {"q": "Does this cover all team sizes?", "a": "Yes, it covers 6-a-side up to 11-a-side formations."},
      {"q": "Can I use it for my club team?", "a": "Absolutely, the principles apply to any level of play."}
    ]
  },
  [Struggle.CONFIDENCE]: {
    "product": "The True Baller Guide",
    "hero": {
      "pre_headline": "Coach Rafaz reveals...",
      "headline": "Play With Bulletproof Confidence & Trust Your Instincts",
      "sub_headline": "Overcome hesitation, stop second-guessing, and play free like a pro.",
      "vsl_placeholder": VSL_PLACEHOLDER_URL,
      "cta_text": "Boost Your Confidence Now",
      "cta_link": "#offer-section"
    },
    "benefits": [
      "Eliminate self-doubt so that you can express your skills fully in matches",
      "Develop a winning mindset so that you can perform under pressure",
      "Train your confidence daily so that it becomes automatic on the pitch"
    ],
    "social_proof": { "instagram": "127K+", "youtube": "35K+" },
    "offer_stack": [{
      "name": "The True Baller Guide",
      "description": "Over 2 hours of video lessons and a 35-page written guide to build unshakable confidence.",
      "price": "$17.99",
      "cta_text": "Boost Your Confidence Now",
      "cta_link": "#offer-section"
    }],
    "testimonials": [
      "“I never trusted myself in matches before. Now I feel unstoppable.” – Noah, Striker",
      "“A mindset game-changer. My teammates noticed the difference immediately.” – Mia, Midfielder"
    ],
    "faq": [
      {"q": "Do I need technical skills to benefit?", "a": "No, this guide is about unlocking confidence in whatever skills you currently have."},
      {"q": "How quickly will I see results?", "a": "Consistency is key. Many players notice improvement in confidence within 1–2 weeks of applying the exercises."}
    ]
  },
  [Struggle.TECHNIQUE_TACTICS]: {
    "product": "Positions + Formations Bundle",
    "hero": {
      "pre_headline": "Coach Rafaz reveals...",
      "headline": "Level Up Your Technical & Tactical Game",
      "sub_headline": "Master your skills and game understanding to dominate every match.",
      "vsl_placeholder": VSL_PLACEHOLDER_URL,
      "cta_text": "Level Up Your Game Now",
      "cta_link": "#offer-section"
    },
    "benefits": [
      "Improve your technique so that you can confidently execute every move",
      "Learn tactical awareness so that you can always be in the right position",
      "Integrate skills and strategy so that you can make smarter, faster decisions"
    ],
    "social_proof": { "instagram": "127K+", "youtube": "35K+" },
    "offer_stack": [{
      "name": "Positions + Formations Bundle",
      "description": "Complete technical and tactical training with hours of video content covering all positions and formations.",
      "price": "$64.99",
      "cta_text": "Level Up Your Game Now",
      "cta_link": "#offer-section"
    }],
    "testimonials": [
      "“Finally a guide that connects technique with tactics. My game has improved massively.” – Lucas, No.8",
      "“I can now anticipate plays and execute with precision.” – Emma, CAM"
    ],
    "faq": [
      {"q": "Is this suitable for beginner players?", "a": "Yes, it covers fundamentals and advanced concepts in a clear step-by-step format."},
      {"q": "Does it include video lessons?", "a": "Yes, over 6 hours of comprehensive video lessons covering positions and formations."}
    ]
  },
  [Struggle.ALL]: {
    "product": "Ultimate Footballer System",
    "hero": {
      "pre_headline": "Coach Rafaz reveals...",
      "headline": "Transform Into the Complete Player You Were Meant to Be",
      "sub_headline": "Combine positions, formations, and confidence training for total on-pitch mastery.",
      "vsl_placeholder": VSL_PLACEHOLDER_URL,
      "cta_text": "Transform Completely Now",
      "cta_link": "#offer-section"
    },
    "benefits": [
      "Master every position so that you can adapt and excel anywhere on the pitch",
      "Learn all formations and tactics so that you can dominate team play",
      "Build unshakable confidence so that you can perform at your absolute best every game"
    ],
    "social_proof": { "instagram": "127K+", "youtube": "35K+" },
    "offer_stack": [{
      "name": "Ultimate Footballer System",
      "description": "Complete training package combining positions, formations, and confidence for total football mastery.",
      "price": "$79.99",
      "cta_text": "Transform Completely Now",
      "cta_link": "#offer-section"
    }],
    "testimonials": [
      "“Everything in one place. My technique, tactics, and mindset all improved.” – Aiden, Midfielder",
      "“I feel like a complete player now. Every session is directly applicable to games.” – Zoe, Striker"
    ],
    "faq": [
      {"q": "Is this suitable for all skill levels?", "a": "Yes, it’s structured for beginners to advanced players."},
      {"q": "How long is the full program?", "a": "Over 10 hours of video content plus guides and exercises for daily practice."}
    ]
  }
};