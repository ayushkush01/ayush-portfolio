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
            icon: '/logo/Angular_gradient_logo.png', // Placeholder - you can add Angular logo later
        },
        {
            name: 'Vue',
            icon: '/logo/vue.png', // Placeholder - you can add Vue logo later
        },
        {
            name: 'TypeScript',
            icon: '/logo/ts.png',
        },
        {
            name: 'JavaScript',
            icon: '/logo/js.png',
        },
        {
            name: 'Tailwind CSS',
            icon: '/logo/tailwind.png',
        },
       
    ],
    backend: [
        {
            name: '.NET Framework',
            icon: '/logo/net.png', // Placeholder - you can add .NET logo later
        },
        {
            name: 'C#',
            icon: '/logo/csharp.png', // Placeholder - you can add C# logo later
        },
    ],
    database: [
        {
            name: 'MySQL',
            icon: '/logo/mysql.svg',
        },
        {
            name: 'SQL Server',
            icon: '/logo/ssms.png', // Placeholder - you can add SQL Server logo later
        },
    ],
    tools: [
        {
            name: 'Git',
            icon: '/logo/git.png',
        },
        {
            name: 'Postman',
            icon: '/logo/postman.png', // Placeholder - you can add Postman logo later
        },
        {
            name: 'Jira',
            icon: '/logo/jira.png', // Placeholder - you can add Jira logo later
        },
        {
            name: 'Swagger',
            icon: '/logo/Swagger-logo.png', // Placeholder - you can add Swagger logo later
        },
        {
            name: 'Visual Studio',
            icon: '/logo/vscpoe.png', // Placeholder - you can add VS logo later
        },
    ],
};

export const PROJECTS: IProject[] = [
    {
        title: 'LCP (Life Care Plan)',
        slug: 'lcp-life-care-plan',
        year: 2024,
        description: `
      A comprehensive legal-medical case management system used by law firms, attorneys, and physicians to handle patient cases from accidents. It centralizes medical records, physician inputs, legal documents, and generates courtroom-ready reports. <br/> <br/>
      
      Key Features:<br/>
     <ul>
  <li><strong>Records:</strong> Upload and store medical documents (X-rays, previous reports) with AI-powered summarization via OpenAI API for quick doctor review</li>
  <li><strong>Interview:</strong> Physician-led form with 30 structured questions for patient data collection</li>
  <li><strong>Exhibits:</strong> Upload injury-related photos securely stored in AWS S3 Buckets</li>
  <li><strong>Opinions:</strong> Record injury assessments and calculate Average Residual Years based on age, gender, and race</li>
  <li><strong>Requirements:</strong> Document lifelong needs such as medication, nursing care, and medical equipment</li>
  <li><strong>Review:</strong> Generate consolidated courtroom-ready PDF legal reports</li>
</ul>
      `,
        role: `
      Full Stack Developer <br/>
      Managed frontend, backend, database, and deployment:
      <ul>
        <li> Developed secure, scalable APIs using ASP.NET Web API and C#</li>
        <li>Built responsive frontend using Angular and TypeScript</li>
        <li> Integrated AI-based document summarization using OpenAI API</li>
        <li> Implemented AWS S3 Bucket for secure file storage</li>
        <li> Designed and optimized database using Microsoft SQL Server and LINQ to SQL</li>
        <li> Worked on the application to meet U.S. legal standards, streamline workflows, reduce case preparation time, and improve document accuracy for courtroom use</li>
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
        thumbnail: '/projects/thumbnail/LCP.png', // Placeholder - you can add project images later
        longThumbnail: '/projects/long/lcp3', // Placeholder - you can add project images later
        images: [
            './public/projects/thumbnail/medx3.jpg', // Placeholder - you can add project images later
            '/projects/images/lcp-2.png', // Placeholder - you can add project images later
        ],
    },
    {
        title: 'Customer Relationship Management',
        slug: 'crm-customer-relationship-management',
        year: 2024,
        description: `
      A marketing-focused CRM designed to manage leads, track LinkedIn responses, monitor campaign performance, and provide real-time analytics for the marketing department. It enables better decision-making through centralized data and reporting. <br/> <br/>
      
      Key Features:<br/>
      <ul>
        <li> Lead Management: Capture, categorize, and track leads from multiple sources, including LinkedIn</li>
        <li> Response Tracking: Monitor and record LinkedIn interactions and follow-ups</li>
        <li> Campaign Management: Create, track, and analyze marketing campaigns for ROI</li>
        <li> Performance Dashboard: Real-time analytics of marketing KPIs and team productivity</li>
        <li> Centralized Data Storage: Maintain detailed customer and campaign records for easy reporting</li>
      </ul>
      `,
        role: `
      Full Stack Developer <br/>
      Responsible for the entire development lifecycle:
      <ul>
        <li> Designed APIs for lead and meeting management using ASP.NET Web API and C#</li>
        <li> Created responsive UI for marketing workflows using Angular and TypeScript</li>
        <li> Implemented real-time analytics and performance dashboards</li>
        <li> Optimized database structures using Microsoft SQL Server and LINQ to SQL</li>
        <li> Enhanced system efficiency to improve lead tracking, meeting follow-ups, and LinkedIn outreach management</li>
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
        title: '.NET Developer Intern',
        company: 'Satya Techologies',
        duration: 'July 2024 - SEP 2024',
    },
    {
        title: 'Full Stack .NET Developer',
        company: 'Option Matrix Infotech',
        duration: 'Nov 2024 - Present',
    },
];
