import { IProject } from '@/types';

export const GENERAL_INFO = {
    email: 'mecwansujit@gmail.com',

    emailSubject: "Let's collaborate on a project",
    emailBody: 'Hi Tajmirul, I am reaching out to you because...',

    oldPortfolio: 'https://www.legacy.me.toinfinite.dev',
    upworkProfile: 'https://www.linkedin.com/in/sujit-mecwan-609734245/',
};

export const SOCIAL_LINKS = [
    { name: 'github', url: 'https://github.com/sujit1905' },
    {
        name: 'linkedin',
        url: 'https://www.linkedin.com/in/sujit-mecwan-609734245/',
    },
];

export const MY_STACK = {
    frontend: [
        {
            name: 'HTML5',
            icon: '/logo/html-5.png',
        },
        {
            name: 'CSS3',
            icon: '/logo/css-3.png',
        },
        {
            name: 'JavaScript',
            icon: '/logo/js.png',
        },
        {
            name: 'TypeScript',
            icon: '/logo/ts.png',
        },
        {
            name: 'React',
            icon: '/logo/react.png',
        },
        {
            name: 'Tailwind CSS',
            icon: '/logo/tailwind.png',
        },
        {
            name: 'GSAP',
            icon: '/logo/gsap.png',
        },
        {
            name: 'Sass',
            icon: '/logo/sass.png',
        },
        {
            name: 'Bootstrap',
            icon: '/logo/bootstrap.svg',
        },
    ],
    tools: [
        {
            name: 'Git',
            icon: '/logo/git.png',
        },
    ],
};

export const PROJECTS: IProject[] = [
    {
        title: 'Fastrack Clone',
        slug: 'electro-ev',
        liveUrl: 'https://fastrackclone.sujitmecwan.com/',
        year: 2025,
        description: `
      Created a responsive Fastrack clone using HTML, CSS, and Bootstrap to practice real-world UI design and responsive layouts. <br/> <br/>
      
      Key Features:<br/>
      <ul>
        <li>Clean and modern UI inspired by the official Fastrack website</li>
        <li>Built using HTML5, CSS3, and Bootstrap for structured and scalable layouts</li>
        <li>Optimized layout for better user experience and visual consistency</li>
      </ul><br/>
      
      Technical Highlights:
      <ul>
        <li>Used semantic HTML for better structure and accessibility</li>
        <li>Applied custom CSS for styling and UI enhancements</li>
        
      </ul>
      `,
        role: `
      Frontend Developer <br/>
      Owned the entire development lifecycle:
      <ul>
        <li>Frontend: Built all UI components using Tailwind CSS and shadcn</li>
      </ul>
      `,
        techStack: ['HTML5', 'CSS', 'BOOTSTRAP'],
        thumbnail: '/projects/thumbnail/fastrackfront.png',
        longThumbnail: '/projects/long/mti-electronics.webp',
        images: [
            '/projects/images/fastrackfront.png',
            '/projects/images/fastrack2.png',
        ],
    },
    {
        title: 'Banking Web Interface',
        slug: 'epikcart',
        techStack: ['React', 'bootstrap'],
        thumbnail: '/projects/thumbnail/bank.sujitmecwan.com_.png',
        longThumbnail: '/projects/long/bank.sujitmecwan.com_.png',
        images: [
            '/projects/images/bank01.png',
            '/projects/images/bank02.png',
            '/projects/images/bank03.png',
        ],
        liveUrl: 'https://bank.sujitmecwan.com/',
        year: 2025,
        description: `This is a fully responsive banking interface web application built using React and Bootstrap. The project demonstrates a clean and modern design, focusing on user experience and accessibility. Users can navigate seamlessly through various banking functionalities such as account overview, transactions, and profile management.`,
        role: `
      Frontend Developer <br/>
      Owned the entire development lifecycle:
      <ul>
        <li>Frontend: Built all UI components using Tailwind CSS and shadcn</li>
      </ul>
      `,
    },

    {
        title: 'Agency Web Interface',
        slug: 'epikcart01',
        techStack: ['HTML5', 'CSS3'],
        thumbnail: '/projects/thumbnail/agency.sujitmecwan.com_.png',
        longThumbnail: '/projects/long/agency.sujitmecwan.com_.png',
        images: [
            '/projects/images/agency01.png',
            '/projects/images/agency02.png',
            '/projects/images/agency03.png',
        ],
        liveUrl: 'https://agency.sujitmecwan.com/',
        year: 2025,
        description: `Designed and developed a fully responsive agency landing page using HTML5 and CSS3.
The website includes multiple sections such as hero, services, features, call-to-action, and contact form with a clean and modern UI.
Focused on semantic HTML, reusable CSS components, responsive layout, and smooth user experience across devices.`,
        role: `
      Frontend Developer <br/>
      Owned the entire development lifecycle:
     
      `,
    },
];

export const MY_EXPERIENCE = [
    {
        title: 'BSc. in Computer Applications',
        University: 'S.P. University',
        duration: 'Sep 2024 - Present',
    },
    {
        title: 'MERN STACK DEVELOPING',
        company: 'RED & WHITE INSTITUTE',
        duration: 'Oct 2025 - JUN 2026',
    },
];
