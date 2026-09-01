export interface Project {
  id: string;
  name: string;
  category: string;
  description: string;
  fullDescription: string;
  technologies: string[];
  features: string[];
  architecture?: string[];
  link?: string;
  github?: string;
  visualType: 'dashboard' | 'mobile' | 'ai' | 'pipeline' | 'serverless';
}

export const projectsData: Project[] = [
  {
    id: 'cortex-ai-chatbot',
    name: 'CORTEX AI CHATBOT',
    category: 'AI Chat Experience',
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
  },
  {
    id: 'assessment-pixelmind-recruiter-ai',
    name: 'PIXELMIND RECRUITER AI',
    category: 'AI Recruitment Assessment',
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
  },
  {
    id: 'fit-flow-web',
    name: 'FIT FLOW WEB',
    category: 'Fitness Web Application',
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
  },
  {
    id: 'embark',
    name: 'EMBARK',
    category: 'Web Application',
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
  },
];
