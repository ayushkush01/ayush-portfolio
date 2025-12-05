import { IProject } from '@/types';

export const GENERAL_INFO = {
    email: 'ayushkushwaha26x@gmail.com',

    emailSubject: "Let's collaborate on a project",
    emailBody: 'Hi Ayush, I am reaching out to you because...',
};

export const SOCIAL_LINKS = [
    { name: 'github', url: 'https://github.com/ayushkush01' },
    { name: 'linkedin', url: 'https://www.linkedin.com/in/ayushkushwahax1/' },
];

export const MY_STACK = {
    frontend: [
        {
            name: 'Angular',
            icon: '/logo/angular.svg',
        },
        {
            name: 'Vue',
            icon: '/logo/vue.svg',
        },
        {
            name: 'TypeScript',
            icon: '/logo/typescript.svg',
        },
        {
            name: 'JavaScript',
            icon: '/logo/javascript.svg',
        },
    ],
    backend: [
        {
            name: '.NET Framework',
            icon: '/logo/dotnet.svg',
        },
        {
            name: 'C#',
            icon: '/logo/csharp.svg',
        },
    ],
    database: [
        {
            name: 'MySQL',
            icon: '/logo/mysql.svg',
        },
        {
            name: 'SQL Server',
            icon: '/logo/sqlserver.svg',
        },
    ],
    tools: [
        {
            name: 'Git',
            icon: '/logo/git.svg',
        },
        {
            name: 'Postman',
            icon: '/logo/postman.svg',
        },
        {
            name: 'Jira',
            icon: '/logo/jira.svg',
        },
        {
            name: 'Swagger',
            icon: '/logo/swagger.svg',
        },
        {
            name: 'Visual Studio',
            icon: '/logo/visualstudio.svg',
        },
    ],
};


export const PROJECTS: IProject[] = [
    {
        title: 'LCP (Life Care Plan)',
        slug: 'lcp-life-care-plan',
        year: 2024,
        description: `
      A comprehensive legal-medical case management system used by law firms, attorneys, and physicians to manage patient cases related to accidents. The platform centralizes medical records, physician inputs, legal documentation, and generates courtroom-ready reports. <br/><br/>
      
      Key Features:<br/>
      <ul>
        <li>Records: Upload and store medical documents (X-rays, previous reports) with AI-powered summarization via OpenAI API to support faster clinical review</li>
        <li>Interview: Structured physician-led questionnaire with over 30 questions for detailed patient data collection</li>
        <li>Exhibits: Upload and manage injury-related images, stored securely in AWS S3 Buckets</li>
        <li>Opinions: Record medical opinions, injury assessments, and calculate Average Residual Years based on demographic factors</li>
        <li>Requirements: Document lifelong needs including medication, nursing care, therapies, and medical equipment</li>
        <li>Review: Generate consolidated, courtroom-ready PDF legal reports for case presentation</li>
      </ul>
      `,
        role: `
      Full Stack Developer <br/>
      Responsible for end-to-end development across frontend, backend, database, and deployment:
      <ul>
        <li>Developed secure and scalable REST APIs using ASP.NET Web API and C#</li>
        <li>Implemented a responsive, component-based frontend using Angular and TypeScript</li>
        <li>Integrated AI-based document summarization using the OpenAI API to streamline physician review</li>
        <li>Configured AWS S3 Buckets for secure and reliable storage of medical documents and exhibits</li>
        <li>Designed and optimized relational schemas using Microsoft SQL Server and LINQ to SQL</li>
        <li>Collaborated with stakeholders to align system workflows with U.S. legal standards, improving case preparation time and documentation accuracy for litigation</li>
      </ul>
      `,
        techStack: [
            'Angular',
            'TypeScript',
            'ASP.NET Web API',
            'C#',
            'LINQ to SQL',
            'Microsoft SQL Server',
            'AWS Server',
            'AWS S3 Bucket',
            'OpenAI API',
            'Postman',
            'JIRA',
            'GitHub',
        ],
        thumbnail: '/projects/thumbnail/mti-electronics.webp', // Placeholder - you can add project images later
        longThumbnail: '/projects/long/mti-electronics.webp', // Placeholder - you can add project images later
        images: [
            '/projects/images/mti-electronics-1.webp', // Placeholder - you can add project images later
            '/projects/images/mti-electronics-2.webp', // Placeholder - you can add project images later
        ],
    },
    {
        title: 'CRM (Customer Relationship Management)',
        slug: 'crm-customer-relationship-management',
        year: 2024,
        description: `
      A marketing-focused CRM platform designed to manage leads, track LinkedIn responses, monitor campaign performance, and provide real-time analytics for the marketing team. The system centralizes customer and campaign data to improve decision-making and reporting. <br/><br/>
      
      Key Features:<br/>
      <ul>
        <li>Lead Management: Capture, categorize, and track leads from multiple channels, including LinkedIn</li>
        <li>Response Tracking: Record LinkedIn conversations, responses, and follow-up activities for each lead</li>
        <li>Campaign Management: Configure, monitor, and analyze marketing campaigns with an emphasis on ROI and conversion</li>
        <li>Performance Dashboard: Real-time dashboards for marketing KPIs, funnel metrics, and team productivity</li>
        <li>Centralized Data Storage: Maintain detailed profiles for customers, campaigns, and interactions to support analytics and reporting</li>
      </ul>
      `,
        role: `
      Full Stack Developer <br/>
      Involved in the full software development lifecycle from design to deployment:
      <ul>
        <li>Designed and developed REST APIs for lead, meeting, and campaign management using ASP.NET Web API and C#</li>
        <li>Built responsive, workflow-oriented user interfaces for the marketing team using Angular and TypeScript</li>
        <li>Implemented analytical views and dashboards to surface real-time performance metrics</li>
        <li>Optimized database models and queries using Microsoft SQL Server and LINQ to SQL to ensure reliable reporting</li>
        <li>Improved lead tracking, follow-up workflows, and LinkedIn outreach management to increase operational efficiency</li>
      </ul>
      `,
        techStack: [
            'Angular',
            'TypeScript',
            'ASP.NET Web API',
            'C#',
            'LINQ to SQL',
            'Microsoft SQL Server',
            'AWS Server',
            'Postman',
            'JIRA',
            'GitHub',
        ],
        thumbnail: '/projects/thumbnail/mti-electronics.webp', // Placeholder - you can add project images later
        longThumbnail: '/projects/long/mti-electronics.webp', // Placeholder - you can add project images later
        images: [
            '/projects/images/mti-electronics-1.webp', // Placeholder - you can add project images later
            '/projects/images/mti-electronics-2.webp', // Placeholder - you can add project images later
        ],
    },
];


export const MY_EXPERIENCE = [
    {
        title: 'Full Stack .NET Developer',
        company: 'Option Matrix Infotech',
        duration: 'Nov 2024 - Present',
    },
];
