export interface TechGroup {
  category: string;
  items: string[];
}

export interface PhilosophyStep {
  number: string;
  title: string;
  description: string;
}

export interface ExperienceItem {
  period: string;
  title: string;
  company?: string;
  companyUrl?: string;
  location?: string;
  bullets?: string[];
  focus: string[];
}

export interface CertificationItem {
  name: string;
  issuer: string;
  year: string;
  badgeUrl?: string;
  credentialUrl?: string;
}

export interface EducationItem {
  institution: string;
  degree: string;
  year: string;
  location: string;
}

export const portfolioData = {
  identity: {
    name: 'Thejus M',
    title: 'Cloud AI Architect & Software Engineer',
    positioning: 'Cloud AI Architect | Cloud & DevOps Engineer | Agentic AI | Full Stack',
    heroEyebrow: 'CLOUD AI ARCHITECT & ENGINEER',
    heroStatement: 'I build scalable AI stacks and resilient cloud environments.',
    supportingText: 'Cloud AI Architect specializing in GenAI stacks, AWS infrastructure, Terraform IaC, agentic AI workflows, and CI/CD pipelines.',
    primaryCta: 'Explore my work',
    secondaryCta: 'GitHub ↗',
    githubUrl: 'https://github.com/thejus07',
    linkedinUrl: 'https://www.linkedin.com/in/thejus-m/',
    email: 'thejuskadavath@gmail.com',
    location: 'Bangalore, India'
  },
  about: {
    label: 'ABOUT ME',
    heading: "Hello, I'm Thejus.",
    body: "I build things, break things, learn things — then build them better. 🚀 I’m a multi-skilled engineer driven by curiosity and an endless hunger to learn, explore, and experiment. I enjoy diving into new technologies, figuring out how things work, picking up skills along the way, and turning random ideas into something real. I’m not someone who likes staying in one lane — if something sparks my curiosity, I’ll probably spend way too much time figuring it out. For me, technology is less about knowing everything and more about constantly discovering what’s possible."
  },
  toolbox: [
    {
      category: 'CLOUD SERVICES',
      items: ['AWS (IAM, S3, EC2, Auto Scaling, CloudWatch, VPC, Route 53, RDS, Lambda)', 'GCP']
    },
    {
      category: 'CONTAINERIZATION',
      items: ['Docker', 'Kubernetes', 'Amazon EKS', 'Harbor Container Registry']
    },
    {
      category: 'CI/CD & DEVOPS',
      items: ['Git', 'GitHub Actions', 'Jenkins', 'Helm', 'Vercel']
    },
    {
      category: 'IAC & MONITORING',
      items: ['Terraform', 'Azure DevOps', 'Prometheus', 'Grafana', 'SonarQube']
    },
    {
      category: 'LANGUAGES & SCRIPTS',
      items: ['Python', 'Bash / Shell Scripting', 'TypeScript', 'JavaScript', 'HTML / CSS']
    },
    {
      category: 'AUTOMATION & AI/ML',
      items: ['Agentic AI Workflows', 'RAG Pipelines', 'ML Model Integration', 'n8n Workflows', 'LLM Integration (GPT, Copilot)']
    }
  ] as TechGroup[],
  philosophy: [
    {
      number: '01',
      title: 'IDEA',
      description: 'Understanding the problem deeply, defining scope, and mapping architectural boundaries.'
    },
    {
      number: '02',
      title: 'DESIGN',
      description: 'Crafting clean system blueprints, modular interfaces, and predictable data flows.'
    },
    {
      number: '03',
      title: 'BUILD',
      description: 'Writing maintainable code, adhering to strong patterns, and building resilient APIs.'
    },
    {
      number: '04',
      title: 'AUTOMATE',
      description: 'Implementing robust CI/CD, automated test suites, and event-driven triggers.'
    },
    {
      number: '05',
      title: 'DEPLOY',
      description: 'Shipping to secure cloud environments with real-time telemetry and zero-downtime releases.'
    }
  ] as PhilosophyStep[],
  experience: [
    {
      period: '2025 — Present',
      title: 'Founder & AI Assisted Engineer',
      company: 'Pixelmind Co.',
      companyUrl: 'https://pixelmind.co.in',
      location: 'Remote',
      bullets: [
        'Founded and operated an AI services agency delivering GenAI-powered solutions including RAG pipelines, agentic assistants, and LLM-integrated applications.',
        'Designed and deployed AI-driven applications for clients, integrating GPT and Copilot into development workflows for faster coding, debugging, and optimization.',
        'Built scalable architectures for data center networking and cloud deployments, ensuring performance tuning and system reliability.',
        'Shipped 5+ production AI applications end-to-end (RAG pipelines, agentic assistants, resume), architecting and deploying each via Docker and CI/CD pipelines on Vercel.'
      ],
      focus: ['GenAI & RAG Pipelines', 'Agentic Assistants', 'Cloud Architecture', 'Docker & CI/CD', 'Vercel']
    },
    {
      period: 'Feb 2025 — Dec 2025',
      title: 'Cloud & DevOps Engineer Training Program',
      company: 'Besant Technologies',
      location: 'Bengaluru, India',
      bullets: [
        'Designed, deployed, and maintained AWS infrastructure including EC2, S3, RDS, VPC, IAM, and Route 53.',
        'Implemented Infrastructure as Code using Terraform to provision VPCs, subnets, route tables, and secure access controls.',
        'Built and maintained CI/CD pipelines with GitHub Actions for automated deployments and integrated SonarQube for code quality checks.'
      ],
      focus: ['AWS (EC2, S3, RDS, VPC, IAM, Route 53)', 'Terraform IaC', 'GitHub Actions CI/CD', 'SonarQube Quality Checks']
    },
    {
      period: '2024 — 2025',
      title: 'Data Engineering Intern & Training Program',
      company: 'Unified Mentor',
      location: 'Remote',
      bullets: [
        'Completed an intensive Data Engineering training program and internship, building scalable ETL pipelines, database schemas, and automated data workflows.',
        'Developed hands-on data transformation models using Python, SQL, and cloud storage systems for analytics processing.'
      ],
      focus: ['Data Engineering', 'ETL Pipelines', 'Python', 'SQL', 'Data Analytics']
    }
  ] as ExperienceItem[],
  certifications: [
    {
      name: 'AWS Solutions Architect – Associate',
      issuer: 'Amazon Web Services',
      year: '2025',
      credentialUrl: '#'
    },
    {
      name: 'Google Cloud Generative AI Academy',
      issuer: 'Google Cloud',
      year: '2025',
      credentialUrl: '#'
    }
  ] as CertificationItem[],
  education: [
    {
      institution: 'Rathinam Technical Campus, Coimbatore (Anna University)',
      degree: 'Bachelor of Engineering',
      year: '2024',
      location: 'Coimbatore, India'
    }
  ] as EducationItem[]
};
