export interface Role {
  title: string;
  period: string;
  points: string[];
}

export interface Experience {
  company: string;
  color: string;
  summary?: string;
  roles: Role[];
}

export interface SkillGroup {
  category: string;
  items: string[];
  color: string;
}

export interface Education {
  school: string;
  location: string;
  degree: string;
  period: string;
  detail?: string;
}

export interface Certification {
  name: string;
  date: string;
  highlight?: boolean;
}

export const personal = {
  name: 'Tina Phan',
  title: 'Senior Software Engineer',
  location: 'Ho Chi Minh City, Vietnam',
  email: 'ppttuyen@gmail.com',
  phone: '+84 962 6666 92',
  introParagraphs: [
    'Senior Software Engineer specialising in building production-grade digital banking platforms in highly regulated environments. Currently at NAB Vietnam, I deliver and lead complex customer onboarding solutions supporting AML/CDD, FATCA, CRS, and AUSTRAC compliance at scale.',
    'I work primarily with React.js, Node.js, and cloud-native architectures, owning end-to-end delivery of large epics, from design and implementation to SIT support and production issue resolution. I am comfortable operating in cross-functional teams and presenting technical solutions to senior stakeholders and executives.',
    'Beyond product delivery, I focus on engineering excellence and developer productivity. I have built AI-powered internal tools for documentation, knowledge retrieval, and workflow automation, and actively mentor engineers.',
    "I'm just a software engineer who challenges myself every single day.",
  ],
};

export const experiences: Experience[] = [
  {
    company: 'NAB Vietnam',
    color: 'indigo',
    summary:
      'Senior engineer on the Strategic Customer Onboarding platform, and the creator of CUSTONBD, an internal AI engineering toolkit used across teams.',
    roles: [
      {
        title: 'Senior Software Engineer',
        period: 'Jan 2023 to Present',
        points: [
          'Built and shipped 4 production banking miniapps for customer onboarding using React, TypeScript, GraphQL, Styled Components, Formik, and the NAB UI toolkit. Delivered 40+ major epics covering business onboarding and connected parties management.',
          'Led end-to-end delivery of complex, cross-team epics including SIT support. Developed a deep understanding of business requirements and resolved production issues quickly.',
          'Designed, built, and scaled CUSTONBD, an AI engineering toolkit for Customer Onboarding that includes 70+ reusable automation skills and a domain knowledge base. It has become a standard way the team plans, builds, tests, documents, and ships work.',
          'Grew adoption of CUSTONBD to 50+ active monthly users, including non-engineering roles such as RTEs and Business Analysts by building purpose-built skills for their workflows.',
          'Shipped an AI-powered knowledge platform with a mini-RAG system that does intelligent retrieval across 500+ documents, automated documentation generation using standard templates, and an interactive knowledge-graph visualisation.',
          'Designed and maintained validation workflows to ensure AML / CDD, FATCA, CRS, and AUSTRAC compliance across thousands of annual customer onboardings.',
          'Delivered technical presentations and product demos to C-level executives. Ran knowledge transfer and enablement sessions to help the wider team adopt AI-assisted engineering practices.',
          'Mentored 10+ engineers and StarCampers.',
        ],
      },
    ],
  },
  {
    company: 'KMS Technology',
    color: 'emerald',
    summary:
      'Worked across multiple client projects in fintech, human services, and HR mobile, covering the full stack from React Native to Java Spring.',
    roles: [
      {
        title: 'Software Engineer, Human Services Platform (Australia)',
        period: 'Mar 2022 to Nov 2022',
        points: [
          'Full-stack work with ReactJS, ExpressJS, TypeScript, and PostgreSQL on a human services platform in Australia. Built a deep understanding of the multi-layered platform logic.',
          'Owned large, complex epics that required coordinating the whole team end-to-end.',
          'Raised bugs and improvement suggestions proactively rather than waiting for them to be caught later.',
          'Led spikes on automation testing with Playwright, CI/CD pipelines with CircleCI and GitHub Actions, plus infrastructure work on GCP and Firebase.',
        ],
      },
      {
        title: 'Software Engineer, Banking Platform (Malaysia)',
        period: 'Jul 2021 to Mar 2022',
        points: [
          'Worked with Java, Spring MVC, and JSP on a banking platform in Malaysia.',
          'Helped the team grow from formation phase into a self-organised unit.',
          'Coached interns and new graduates to get productive quickly on a complex codebase.',
          'Did heavy pair programming to support teammates through difficult tasks.',
          'Wrote a 30-page technical document covering the platform architecture and logic.',
          'Ran internal presentations on the technologies and business logic used in the project.',
        ],
      },
      {
        title: 'Software Engineer, HR Mobile Platform',
        period: 'Jun 2021 to Jul 2021',
        points: [
          'Built features for an HR mobile platform using React Native and TypeScript.',
          'Enhanced and debugged existing features carried over from earlier releases.',
          'Shipped new functionality for the upcoming release version.',
        ],
      },
    ],
  },
];

export const skillGroups: SkillGroup[] = [
  {
    category: 'Languages',
    items: ['TypeScript', 'GraphQL', 'SQL', 'HTML', 'CSS', 'JSP', 'Java'],
    color: 'indigo',
  },
  {
    category: 'Frameworks and Libraries',
    items: [
      'ReactJS',
      'React Native',
      'ExpressJS',
      'Spring MVC',
      'Formik',
      'Styled Components',
    ],
    color: 'cyan',
  },
  {
    category: 'Testing',
    items: ['Jest', 'React Testing Library', 'Cypress', 'Playwright'],
    color: 'emerald',
  },
  {
    category: 'DevOps and Cloud',
    items: [
      'Harness',
      'Jenkins',
      'Docker',
      'AWS',
      'GCP',
      'Firebase',
      'CircleCI',
      'GitHub Actions',
    ],
    color: 'amber',
  },
  {
    category: 'AI, Data and Tooling',
    items: [
      'RAG Systems',
      'Knowledge Graphs',
      'LLM Integration',
      'Automation Skills',
      'Prompt Engineering',
    ],
    color: 'rose',
  },
];

export const education: Education[] = [
  {
    school: 'VNU HCM, University of Science',
    location: 'Ho Chi Minh City, Vietnam',
    degree: 'Bachelor of Computer Science',
    period: 'Sep 2018 to Dec 2022',
    detail: 'GPA: 8.43 / 10',
  },
  {
    school: 'Lone Star College',
    location: 'Texas, U.S.',
    degree: 'ESL and TSI',
    period: 'Sep 2019 to Jan 2020',
  },
];

export const certifications: Certification[] = [
  {
    name: 'NAB 1st place, Customer Onboarding Hackathon',
    date: 'Mar 2026',
    highlight: true,
  },
  { name: 'NAB Codility Brown Belt', date: 'Mar 2026' },
  {
    name: 'NAB 1st place, Engineering Design Showcase',
    date: 'Aug 2025',
    highlight: true,
  },
  { name: 'NAB Business Academy', date: 'July 2025' },
  {
    name: 'AWS Certified Solutions Architect, Associate',
    date: 'Oct 2023',
    highlight: true,
  },
  { name: 'NAB Stars of the Year', date: 'Dec 2023', highlight: true },
  {
    name: 'NAB Starcamp Best Mentor (mentored Runner-Up team)',
    date: 'Sep 2023',
    highlight: true,
  },
  { name: 'AWS Certified Cloud Practitioner', date: 'Jun 2023' },
  { name: 'Apollo Certified Graph Developer, Associate', date: 'Feb 2023' },
  { name: 'IELTS, Score: 6.5 / 9', date: 'Feb 2023' },
  { name: 'Duolingo English Certificate, Score: 95 / 160', date: 'Dec 2021' },
];

export const highlights = [
  { label: 'Years of experience', value: '5+' },
  { label: 'Major epics shipped', value: '40+' },
];
