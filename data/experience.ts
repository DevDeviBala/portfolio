export type Experience = {
  company: string;
  role: string;
  start: string;
  end: string;
  bullets: string[];
  tech?: string[];
  leadNote?: string;
  timelineLabel?: string;
  highlight?: boolean;
};

export const experiences: Experience[] = [
  {
    company: 'Zerosoft Technologies',
    role: 'Full Stack Developer',
    start: 'Dec 2022',
    end: 'Dec 2025',
    bullets: [
      'Built and maintained business applications using Python/Django and modern frontend technologies.',
      'Developed REST APIs and backend business logic.',
      'Worked with relational and NoSQL databases.',
      'Integrated external systems and APIs.',
      'Built automation workflows.',
      'Worked with asynchronous processing using Celery/Redis.',
      'Collaborated with clients and internal teams to understand requirements.',
      'Worked across development, testing, deployment, and production issue resolution.',
    ],
    leadNote:
      'Task allocation, sprint planning, delivery coordination, client requirements gathering, and mentoring.',
  },
  {
    company: 'Freelance',
    role: 'Software Developer',
    start: 'Jan 2026',
    end: 'Present',
    bullets: [
      'Worked directly on client requirements and clarified technical issues.',
      'Investigated existing applications and hosting environments before making changes.',
      'Performed website migration and compatibility-related work.',
      'Worked on PHP version upgrades and application fixes during migration.',
      'Troubleshot deployment and environment-related issues.',
      'Handled assigned work independently from investigation through delivery.',
      'Communicated progress and technical issues clearly during client work.',
    ],
    tech: [
      'PHP',
      'Website Migration',
      'Linux / Hosting',
      'Troubleshooting',
      'Git',
      'Deployment',
    ],
    timelineLabel: 'Independent · Client-facing',
  },
];