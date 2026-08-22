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
    id: 'ai-agent-benchmark',
    name: 'AI AGENT BENCHMARK TASK',
    category: 'AI Engineering & SRE Evaluation (Project Dynamo)',
    description: 'A Terminal-Bench-style evaluation task for testing frontier AI agents on realistic SRE-class shell configuration bugs.',
    fullDescription: 'Authored a Terminal-Bench-style evaluation task for Project Dynamo (Handshake AI), testing frontier AI agents on a realistic SRE-class shell configuration bug spanning /etc/profile.d layering, BASH_ENV sourcing rules, and systemd-style EnvironmentFile precedence, reproducible under non-interactive, non-login invocation context.',
    technologies: ['Docker', 'Bash', 'Python', 'pytest', 'Linux Shell Internals', 'systemd', 'Harbor', 'Git/GitHub'],
    features: [
      'Authored Terminal-Bench evaluation testing frontier AI agents on realistic SRE shell bugs',
      'Built containerized Harbor task environment (Dockerfile & layered bug) with automated pass/fail verifiers',
      'Designed anti-cheat verification: pristine-file hash restoration & dual-script execution checks',
      'Validated end-to-end against oracle solution, no-op agent failures, and wholesale deletion shortcuts'
    ],
    architecture: [
      'Containerized Harbor environment evaluating non-interactive, non-login Linux shell contexts',
      'Layered config bug evaluation across /etc/profile.d, BASH_ENV, and systemd EnvironmentFile precedence',
      'Pristine-file hash verification engine with automated PR review validation'
    ],
    github: 'https://github.com/thejus07/shell-environment-precedence-debugging',
    visualType: 'ai'
  },
  {
    id: 'pixelmind',
    name: 'PIXELMIND',
    category: 'Digital Product & Software Agency',
    description: 'Self-employed software agency platform delivering bespoke web applications, cloud hosting, and custom digital products.',
    fullDescription: 'Pixelmind (pixelmind.co.in) is a self-founded digital products and software agency specializing in building scalable React/Node.js web applications, high-converting digital interfaces, and tailored AWS cloud solutions for clients.',
    technologies: ['React', 'TypeScript', 'Node.js', 'AWS', 'Tailwind CSS'],
    features: [
      'Bespoke web application architecture & design systems',
      'Client cloud deployment & automated hosting pipelines',
      'High-performance SEO & ultra-fast asset optimization',
      'End-to-end full stack product development'
    ],
    architecture: [
      'React single-page application hosted on AWS CloudFront',
      'Serverless Lambda API integrations with DynamoDB storage',
      'Custom domain & SSL certificate management via Route 53'
    ],
    link: 'https://pixelmind.co.in',
    github: 'https://github.com/thejus07/pixelmind',
    visualType: 'dashboard'
  },
  {
    id: 'cloud-pipeline',
    name: 'CLOUD PIPELINE',
    category: 'Cloud & DevOps',
    description: 'Automated cloud infrastructure and CI/CD pipeline for deploying containerized applications.',
    fullDescription: 'An enterprise-grade Infrastructure-as-Code repository and CI/CD system designed to provision high-availability AWS Kubernetes (EKS) clusters, handle automated blue-green deployments, and enforce zero-downtime releases.',
    technologies: ['AWS', 'Docker', 'Kubernetes', 'Terraform', 'Jenkins'],
    features: [
      'Declarative Infrastructure as Code using modular Terraform scripts',
      'Automated multi-stage CI/CD pipeline built with Jenkins & GitHub Actions',
      'Container orchestration using Kubernetes (EKS) with Auto-Scaling',
      'Integrated Prometheus & Grafana telemetry and alerting rules'
    ],
    architecture: [
      'Multi-AZ VPC architecture with public/private subnet isolation',
      'AWS EKS cluster with managed node groups and ingress controllers',
      'Automated Terraform state locking via AWS S3 and DynamoDB'
    ],
    github: 'https://github.com/thejus07/cloud-pipeline',
    visualType: 'pipeline'
  }
];
