export type ProjectCategoryType = 'web' | 'ai';

export interface Project {
  id: string;
  name: string;
  category: string;
  categoryType: ProjectCategoryType;
  description: string;
  fullDescription: string;
  technologies: string[];
  features: string[];
  architecture?: string[];
  link?: string;
  github?: string;
  visualType: 'dashboard' | 'mobile' | 'ai' | 'pipeline' | 'serverless';
  imageUrl?: string;
}

export const projectsData: Project[] = [
  // 1. Web Applications
  {
    id: 'aera',
    name: 'ÆRA',
    category: 'Luxury Hospitality Web Platform',
    categoryType: 'web',
    description: 'An editorial Greek hospitality and luxury travel web experience with curated island stays, storytelling, and bespoke booking flows.',
    fullDescription: 'Æra is an editorial luxury hospitality web platform crafted with refined typography, immersive imagery, and interactive curation of villas and island experiences across Greece.',
    technologies: ['JavaScript', 'HTML5', 'CSS3', 'Responsive Design', 'Vercel'],
    features: [
      'Editorial aesthetic and typography-driven UI',
      'Interactive island villas & private stays showcase',
      'Curated hospitality service inquiry flows',
      'Optimized responsive mobile navigation',
    ],
    link: 'https://aera-teal.vercel.app/',
    github: 'https://github.com/thejus07',
    visualType: 'dashboard',
    imageUrl: '/project-images/aera.png',
  },
  {
    id: 'trex',
    name: 'TREX',
    category: 'Motion & Mobility Web Application',
    categoryType: 'web',
    description: 'A high-performance modern product experience built for urban movement, active commuting, and sleek motion design.',
    fullDescription: 'TREX is a modern product web application built with React, showcasing everyday motion, clean interactive sections, technical specs, and a responsive product showcase deployed on Vercel.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Vercel'],
    features: [
      'High-performance urban mobility product showcase',
      'Fluid interactive motion design and transitions',
      'Comprehensive engineering specifications breakdown',
      'Live production cloud deployment on Vercel',
    ],
    link: 'https://trex-weld.vercel.app/',
    github: 'https://github.com/thejus07',
    visualType: 'dashboard',
    imageUrl: '/project-images/trex.png',
  },
  {
    id: 'fit-flow-web',
    name: 'FIT FLOW WEB',
    category: 'Fitness Web Application',
    categoryType: 'web',
    description: 'A deployed fitness-focused web experience built for an approachable product flow.',
    fullDescription: 'Fit Flow Web is a live web application with a product-focused fitness experience and an active Vercel deployment.',
    technologies: ['React', 'TypeScript', 'Vercel'],
    features: [
      'Fitness-focused product experience',
      'Responsive web interface',
      'Live Vercel deployment',
    ],
    link: 'https://fit-flow-web-one.vercel.app',
    github: 'https://github.com/thejus07/FitFlow',
    visualType: 'mobile',
    imageUrl: '/project-images/fit-flow.png',
  },
  {
    id: 'embark',
    name: 'EMBARK',
    category: 'Web Application',
    categoryType: 'web',
    description: 'A deployed web application built as an independent product experience.',
    fullDescription: 'Embark is a live web application available through its Vercel deployment, with source code available for review.',
    technologies: ['Web App', 'Vercel', 'GitHub'],
    features: [
      'Production web experience',
      'Live application deployment',
      'Live Vercel deployment',
    ],
    link: 'https://embark-nine.vercel.app',
    github: 'https://github.com/thejus07/embark',
    visualType: 'dashboard',
    imageUrl: '/project-images/embark.png',
  },
  // 2. AI Models
  {
    id: 'cortex-ai-chatbot',
    name: 'CORTEX AI CHATBOT',
    category: 'AI Chat Experience',
    categoryType: 'ai',
    description: 'An AI chatbot experience deployed as a fast, accessible web application.',
    fullDescription: 'Cortex AI Chatbot is a deployed conversational AI interface focused on a polished, responsive chat experience.',
    technologies: ['React', 'TypeScript', 'Vercel'],
    features: [
      'Conversational AI interface',
      'Responsive application experience',
      'Production deployment on Vercel',
    ],
    link: 'https://cortex-ai-chatbot.vercel.app',
    github: 'https://github.com/thejus07/Cortex-AI-Chatbot',
    visualType: 'ai',
    imageUrl: '/project-images/cortex-ai-chatbot.png',
  },
  {
    id: 'assessment-pixelmind-recruiter-ai',
    name: 'PIXELMIND RECRUITER AI',
    category: 'AI Recruitment Assessment',
    categoryType: 'ai',
    description: 'A recruiter-focused AI assessment project, available as source code.',
    fullDescription: 'This recruiter AI assessment is presented as a source repository because it does not have a production deployment.',
    technologies: ['TypeScript', 'AI', 'React'],
    features: [
      'AI-assisted recruitment workflow',
      'Technical portfolio documentation',
      'Source code available for review',
    ],
    link: 'https://assessment-pixelmind-recruiter-ai.vercel.app/',
    github: 'https://github.com/thejus07/Assessment-Pixelmind-recruiter-ai',
    visualType: 'dashboard',
    imageUrl: '/project-images/pixelmind-recruiter-ai.png',
  },
];
