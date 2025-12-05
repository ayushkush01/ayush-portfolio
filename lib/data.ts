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
        icon: '/logo/angular.svg', // Changed from js.png
      },
      {
        name: 'TypeScript',
        icon: '/logo/typescript.svg', // Changed from ts.png to svg for better quality
      },
      {
        name: 'JavaScript',
        icon: '/logo/javascript.svg',
      },
      {
        name: 'HTML5', // Added (Standard requirement)
        icon: '/logo/html5.svg',
      },
      {
        name: 'CSS3', // Added (Standard requirement)
        icon: '/logo/css3.svg',
      },
      {
        name: 'Vue',
        icon: '/logo/vue.svg', // Changed from js.png
      },
    ],
    backend: [
      {
        name: '.NET Core / Framework',
        icon: '/logo/dotnet.svg', // Changed from node.png
      },
      {
        name: 'C#',
        icon: '/logo/csharp.svg', // Changed from node.png
      },
      {
        name: 'ASP.NET Web API', // Added based on your projects
        icon: '/logo/dotnet-api.svg', // You can use the generic dotnet logo here too
      },
    ],
    database: [
      {
        name: 'SQL Server',
        icon: '/logo/sql-server.svg', // Changed from mysql.svg
      },
      {
        name: 'MySQL',
        icon: '/logo/mysql.svg',
      },
    ],
    tools: [
      {
        name: 'Git',
        icon: '/logo/git.svg',
      },
      {
        name: 'GitHub',
        icon: '/logo/github.svg', // Added based on your links
      },
      {
        name: 'AWS', // Added based on your Projects (S3)
        icon: '/logo/aws.svg',
      },
      {
        name: 'Postman',
        icon: '/logo/postman.svg', // Changed from git.png
      },
      {
        name: 'Jira',
        icon: '/logo/jira.svg', // Changed from git.png
      },
      {
        name: 'Swagger',
        icon: '/logo/swagger.svg', // Changed from git.png
      },
      {
        name: 'Visual Studio',
        icon: '/logo/visual-studio.svg', // Changed from git.png
      },
      {
        name: 'OpenAI API', // Added based on LCP project
        icon: '/logo/openai.svg',
      },
    ],
  };

export const PROJECTS: IProject[] = [
    {
        title: 'LCP (Life Care Plan)',
        slug: 'lcp-life-care-plan',
        year: 2024,
        description: `
          A comprehensive legal-medical case management system used by law firms, attorneys, and physicians to handle patient cases resulting from accidents. The system centralizes medical records, physician inputs, and legal documents to generate courtroom-ready reports.
          <br/> <br/>
          <strong>Key Features:</strong>
          <ul>
            <li><strong>Records Management:</strong> Upload and store medical documents (X-rays, previous reports) with AI-powered summarization via OpenAI API for expedited review.</li>
            <li><strong>Physician Interview:</strong> Digital physician-led intake forms with dynamic questioning for precise patient data collection.</li>
            <li><strong>Digital Exhibits:</strong> Secure upload and storage of injury-related photography using AWS S3 Buckets.</li>
            <li><strong>Opinion Analysis:</strong> Recording of injury assessments and calculation of Average Residual Years based on demographic data.</li>
            <li><strong>Requirements Planning:</strong> Documentation of lifelong needs including medication, nursing care, and medical equipment specifications.</li>
            <li><strong>Report Generation:</strong> Automated generation of consolidated, courtroom-ready PDF legal reports.</li>
          </ul>
          `,
        role: `
          <strong>Full Stack Developer</strong> <br/>
          Managed end-to-end development including frontend, backend, database design, and deployment:
          <ul>
            <li>Developed secure, scalable APIs using ASP.NET Web API and C#.</li>
            <li>Built a responsive, type-safe frontend using Angular and TypeScript.</li>
            <li>Integrated OpenAI API for automated document summarization features.</li>
            <li>Implemented secure file storage solutions using AWS S3.</li>
            <li>Designed and optimized relational database schemas using Microsoft SQL Server and LINQ to SQL.</li>
            <li>Ensured application compliance with U.S. legal standards, streamlining case preparation workflows and improving document accuracy.</li>
          </ul>
          `,
        techStack: [
          'Angular',
          'TypeScript',
          'ASP.NET Web API',
          'C#',
          'LINQ to SQL',
          'Microsoft SQL Server',
          'AWS (EC2/S3)',
          'OpenAI API',
          'Postman',
          'JIRA',
          'GitHub',
        ],
        thumbnail: '/projects/thumbnail/mti-electronics.webp', // Placeholder
        longThumbnail: '/projects/long/mti-electronics.webp', // Placeholder
        images: [
          '/projects/images/mti-electronics-1.webp', // Placeholder
          '/projects/images/mti-electronics-2.webp', // Placeholder
        ],
      },
      {
        title: 'CRM (Customer Relationship Management)',
        slug: 'crm-customer-relationship-management',
        year: 2024,
        description: `
          A specialized marketing CRM designed to optimize lead management, track LinkedIn engagement, monitor campaign performance, and provide real-time analytics. It facilitates data-driven decision-making through centralized reporting and visualization.
          <br/> <br/>
          <strong>Key Features:</strong>
          <ul>
            <li><strong>Lead Management:</strong> Centralized capture, categorization, and tracking of leads from multiple channels, including LinkedIn integration.</li>
            <li><strong>Response Tracking:</strong> Systematic monitoring and recording of outreach interactions and follow-up schedules.</li>
            <li><strong>Campaign Management:</strong> Creation and tracking of marketing campaigns to analyze ROI and engagement metrics.</li>
            <li><strong>Performance Dashboard:</strong> Real-time visualization of marketing KPIs and team productivity statistics.</li>
            <li><strong>Data Warehousing:</strong> Centralized storage of customer and campaign data to support detailed reporting and future analysis.</li>
          </ul>
          `,
        role: `
          <strong>Full Stack Developer</strong> <br/>
          Responsible for the entire software development lifecycle (SDLC):
          <ul>
            <li>Designed RESTful APIs for lead processing and meeting management using ASP.NET Web API and C#.</li>
            <li>Created a responsive and intuitive user interface for complex marketing workflows using Angular and TypeScript.</li>
            <li>Implemented real-time analytics engines and interactive performance dashboards.</li>
            <li>Optimized database performance and query execution using Microsoft SQL Server and LINQ.</li>
            <li>Enhanced system efficiency to improve lead tracking accuracy and streamline LinkedIn outreach operations.</li>
          </ul>
          `,
        techStack: [
          'Angular',
          'TypeScript',
          'ASP.NET Web API',
          'C#',
          'LINQ to SQL',
          'Microsoft SQL Server',
          'AWS',
          'Postman',
          'JIRA',
          'GitHub',
        ],
        thumbnail: '/projects/thumbnail/mti-electronics.webp', // Placeholder
        longThumbnail: '/projects/long/mti-electronics.webp', // Placeholder
        images: [
          '/projects/images/mti-electronics-1.webp', // Placeholder
          '/projects/images/mti-electronics-2.webp', // Placeholder
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
