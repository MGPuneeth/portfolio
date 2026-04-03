export const personal = {
  name: "Puneeth M G",
  initials: "PMG",
  tagline: "Building the future, one commit at a time.",
  university: "NMIT, Bangalore",
  email: "mgpuneeth34@gmail.com",
  resumeUrl: "/Resume.pdf",
  avatar: "/profile.jpeg",
};

export const social = {
  github: "https://github.com/MGPuneeth",
  linkedin: "https://www.linkedin.com/in/puneethmg34/",
  leetcode: "https://leetcode.com/u/Puneeth_M_G/",
  instagram: "https://www.instagram.com/puneeth.mg/",
};

export const typewriterRoles = [
  "Software Engineer",
  "Full Stack Developer",
  "JavaScript & React Enthusiast",
  "CSE Graduate 2027",
];

export const about = {
  bio: `Hi, I'm ${personal.name}, a passionate Computer Science & Engineering student at NMIT Bangalore, graduating in 2027. I love building scalable, user-friendly applications and solving complex problems through clean, efficient code. I'm actively seeking full-time Software Developer roles where I can contribute, grow, and make an impact. When I'm not coding, you'll find me exploring new technologies or grinding DSA.`,
};

export const skillsRow1 = [
  {
    name: "React.js",
    icon: "react",
    devicon: "devicon-react-original colored",
  },
  { name: "Next.js", icon: "nextjs", devicon: "devicon-nextjs-plain" },
  { name: "Node.js", icon: "nodejs", devicon: "devicon-nodejs-plain colored" },
  { name: "Express.js", icon: "express", devicon: "devicon-express-original" },
  {
    name: "JavaScript",
    icon: "javascript",
    devicon: "devicon-javascript-plain colored",
  },
  {
    name: "Tailwind CSS",
    icon: "tailwind",
    devicon: "devicon-tailwindcss-plain colored",
  },
  { name: "REST APIs", icon: "api", devicon: "devicon-fastapi-plain colored" },
  { name: "Git & GitHub", icon: "git", devicon: "devicon-git-plain colored" },
];

export const skillsRow2 = [
  { name: "Java", icon: "java", devicon: "devicon-java-plain colored" },
  { name: "SQL", icon: "sql", devicon: "devicon-mysql-plain colored" },
  {
    name: "MongoDB",
    icon: "mongodb",
    devicon: "devicon-mongodb-plain colored",
  },
  // { name: "DSA", icon: "dsa", devicon: "devicon-java-plain colored" },
  { name: "DSA", icon: "dsa", devicon: "devicon-java-plain colored" },
  { name: "OOP", icon: "oop", devicon: "devicon-java-plain colored" },
  {
    name: "AWS Cloud",
    icon: "aws",
    devicon: "devicon-amazonwebservices-plain colored",
  },
  {
    name: "Google Cloud",
    icon: "google",
    devicon: "devicon-google-plain colored",
  },
];

export const projects = [
  {
    id: 1,
    featured: true,
    title: "Crazy Code Editor — Real-Time Collaborative Coding Platform",
    description:
      "A web-based real-time code editor that enables users to write, edit, and share code collaboratively. Features live synchronization, multiple language support, and an intuitive interface designed for seamless developer collaboration.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Monaco-Editor"],
    github: "https://github.com/MGPuneeth/Crazy-Code-Editor",
    demo: null,
    thumbnail: "/vibe-main.png",
  },
  {
    id: 2,
    featured: false,
    title: "CloudSnap Studio — Cloud-Based Image Management Platform",
    description:
      "A full-stack image management platform that allows users to upload, store, and manage images securely in the cloud. Features optimized media handling, authentication, and seamless user experience for organizing digital assets.",
    tech: [
      "React.js",
      "Node.js",
      "Next.js",
      "MongoDB",
      "Cloudinary",
      "TypeScript",
    ],

    github: "https://github.com/MGPuneeth/cloudSnap-studio",
    demo: "https://cloud-snap-studio.vercel.app/",
    thumbnail: "/cloudsnap-studio.png",
  },
  {
    id: 3,
    featured: false,
    title:
      "Bank Ledger — Personal Finance & Transaction Management System (Backend)",
    description:
      "A web-based banking ledger application designed to manage user transactions, track balances, and maintain financial records efficiently. Implements secure data handling and structured transaction workflows.",
    tech: ["Node.js", "Express.js", "MongoDB", "JWT", "Nodemailer"],
    github: "https://github.com/MGPuneeth/Bank-Ledger",
    demo: null,
    thumbnail: "/bank.png",
  },
  {
    id: 4,
    featured: false,
    title: "To-Do Kanban Board — Task Management & Productivity Tool",
    description:
      "A dynamic Kanban-style task management application that helps users organize tasks across different stages. Features drag-and-drop functionality, real-time updates, and an intuitive UI for improved productivity.",
    tech: ["Javascript", "HTML", "CSS"],
    github: "https://github.com/MGPuneeth/To-Do-Kanban-Board",
    demo: "https://mgpuneeth.github.io/To-Do-Kanban-Board/",
    thumbnail: "/todo-kanban.png",
  },

  {
    id: 5,
    featured: false,
    title: "Image Editor — Interactive Web Photo Editing Application",
    description:
      "An interactive image editing web application that enables users to apply filters, adjust image properties, and preview changes in real time. Designed to demonstrate DOM manipulation, event handling, and dynamic UI updates.",
    tech: ["JavaScript", "HTML", "CSS"],
    github: "https://github.com/MGPuneeth/image-editor",
    demo: "https://mgpuneeth.github.io/image-editor/",
    thumbnail: "/image-editor.png",
  },
  {
    id: 6,
    featured: false,
    title: "Snake Xenxia — Classic Arcade Game Implementation",
    description:
      "A browser-based implementation of the classic Snake game featuring smooth controls, real-time score tracking, and responsive gameplay. Designed to demonstrate fundamental game logic and interactive UI development.",
    tech: ["JavaScript", "HTML", "CSS"],
    github: "https://github.com/MGPuneeth/snake-game",
    demo: "https://mgpuneeth.github.io/snake-game/",
    thumbnail: "/snake.png",
  },
];

export const education = [
  {
    degree: "B.E in Computer Science & Engineering",
    institution: "NMIT, Bangalore",
    duration: "2023 – 2027",
    cgpa: "8.94 / 10.0",
    highlights: [
      "Data Structures",
      "Operating Systems",
      "DBMS",
      "Computer Networks",
      "Cloud Computing",
      "Software Engineering",
      "Web Development",
    ],
  },
  {
    degree: "Higher Secondary (Class XII)",
    institution: "Jawahar Navodaya Vidyalaya, D.K",
    board: "CBSE",
    duration: "2021 – 2023",
    percentage: "90.8%",
    highlights: [],
  },
  {
    degree: "Secondary (Class X)",
    institution: "Jawahar Navodaya Vidyalaya, D.K",
    board: "CBSE",
    duration: "2021",
    percentage: "94.6%",
    highlights: [],
  },
];

export const extraCurriculars = [
  {
    icon: "💡",
    title: "Smart India Hackathon (SIH) 2025",
    description:
      "Contributed to Internal SIH 2025 by proposing an innovative software solution aimed at improving the growth, productivity, and digital accessibility for farmers.",
  },
  {
    icon: "🚀",
    title: "National-Level Finalist — Odoo X NMIT Hackathon",
    description:
      "Selected as a finalist in the Odoo X NMIT national hackathon, demonstrating strong problem-solving, innovation, and full-stack development skills in a competitive environment.",
  },
  {
    icon: "🥈",
    title:
      "1st Runner-Up — Wizalyze Data Analytics Competition | Geekmayhem (Anaadyanta)",
    description:
      "Secured 1st Runner-Up in Wizalyze, a data analytics competition organized by Data Wiz (NMIT Bangalore). Analyzed a retail dataset using Power BI to identify profit leaks and built a decision-support dashboard, uncovering key insights and strategies that could recover $38K+ in profit and reduce significant loss-making operations.",
  },
  {
    icon: "🏑",
    title: "1st Place — VTU Bangalore North-Zone Hockey Championship 2024",
    description:
      "Represented the college team and secured 1st place in the inter-college (Bangalore-North Zone) hockey championship, demonstrating teamwork, discipline, and competitive excellence.",
  },
  {
    icon: "🏏",
    title: "Organizer — Hostel Cricket League 2025",
    description:
      "Planned and successfully coordinated a hostel-level cricket tournament, managing logistics, scheduling, and team participation to ensure smooth execution.",
  },
  {
    icon: "🎉",
    title: "Hospitality Team — Anaadyanta 2025",
    description:
      "Played a key role in organizing and managing hospitality operations during the college fest, ensuring a seamless and positive experience for participants and guests.",
  },
];

export const certifications = [
  {
    id: 1,
    title: "AWS Cloud Technical Essentials",
    issuer: "AWS Cloud",
    platform: "Coursera",
    date: "April 02, 2026",
    credentialLink:
      "https://www.coursera.org/account/accomplishments/verify/LBCJ3JHD3XYP",
    icon: "aws-cloud",
    badgeColor: "#4285F4",
    note: null,
    credentialNo: null,
  },
  {
    id: 2,
    title: "Google Cloud Fundamentals: Core Infrastructure",
    issuer: "Google Cloud",
    platform: "Coursera",
    date: "November 27, 2025",
    credentialLink: "https://coursera.org/verify/1F2C320VW7RH",
    icon: "google-cloud",
    badgeColor: "#4285F4",
    note: null,
    credentialNo: null,
  },
  {
    id: 3,
    title: "Developing Applications with Google Cloud: Foundations",
    issuer: "Google Cloud",
    platform: "Coursera",
    date: "February 10, 2026",
    credentialLink: "https://coursera.org/verify/1GOAN4MJ4AUK",
    icon: "google-cloud",
    badgeColor: "#34A853",
    note: null,
    credentialNo: null,
  },
  {
    id: 4,
    title: "FLY-Scholar — Finding the Leader in You",
    issuer: "Competitiveness Mindset Institute, USA",
    platform: "CMI — Foundation for Excellence",
    date: "April 2025",
    credentialLink:
      "https://drive.google.com/file/d/1kvrnr0d_HOGgHLptak6icsh7BmTgk3lq/view?usp=drive_link",
    icon: "leadership",
    badgeColor: "#FFD700",
    credentialNo: "451991310",
    note: "Skills: Conscientiousness, Innovativeness, Taking Initiative, Perseverance & Problem Solving",
  },
  {
    id: 5,
    title: "Web Development Internship",
    issuer: "Elevate Labs",
    platform: "Skill India / Ministry of MSME, Govt. of India",
    date: "Oct – Dec, 2025",
    credentialLink:
      "https://drive.google.com/file/d/1SNLk413zKCy6m3O7mXZRiPj5np-JLWZX/view?usp=drive_link",
    icon: "internship",
    badgeColor: "#FF6B35",
    note: "Enhanced practical experience in backend API design, debugging, and collaborative project development.",
    credentialNo: null,
  },
];

export const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
};
