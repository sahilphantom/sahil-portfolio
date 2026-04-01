import type {
  NavLink,
  StatItem,
  SkillCard,
  Project,
  Testimonial,
  TimelineEntry,
  MarqueeItem,
  AiResponseMap,
} from "@/types";

// ─── Navigation ───────────────────────────────────────────────────────────────

export const NAV_LINKS: NavLink[] = [
  { label: "Work", href: "#work" },
  { label: "Skills", href: "#skills" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

// ─── Hero Stats ───────────────────────────────────────────────────────────────

export const STATS: StatItem[] = [
  { num: "10", suffix: "+", label: "Projects" },
  { num: "1", suffix: "+ yr", label: "Experience" },
  { num: "100", suffix: "%", label: "Learning" },
  { num: "AI", label: "Focused" },
];
// ─── AI Chat Responses ────────────────────────────────────────────────────────

export const AI_RESPONSES: AiResponseMap = {
  startup: {
    msg: "Oh perfect - you are a startup? Let me highlight Alex's early-stage work. The Verdant case study shows how they took a product from 0 to 1 in 8 months, raising a Series A. They specialize in rapid prototyping and MVPs.",
    bio: "I'm <strong>Alex Nova</strong> - I help <strong>early-stage startups</strong> move fast without breaking things. I've taken 3 products from concept to launch. I speak engineer and I ship code myself.",
  },
  design: {
    msg: "Design systems enthusiast spotted! Alex has built 4 production design systems - including one used by 40+ engineers at Notion. Their process starts with tokens, ends with documentation that teams actually read.",
    bio: "I'm <strong>Alex Nova</strong> - a systems thinker who <strong>designs with engineers in mind</strong>. My design systems are used by teams of 40+. I bridge the gap between Figma and production.",
  },
  developer: {
    msg: "A developer looking at a design portfolio - nice! Alex writes TypeScript and React daily. Currently obsessed with motion engineering, Web Animations API, and Three.js. The Aether project will probably interest you.",
    bio: "I'm <strong>Alex Nova</strong> - I write code as fluently as I design. <strong>React, TypeScript, Three.js</strong> are my daily stack. I don't just hand off - I ship.",
  },
  default: {
    msg: "Got it! I've tailored Alex's profile for you. Tell me more - are you a startup, agency, or individual? Looking for design, development, or both?",
    bio: "I'm <strong>Alex Nova</strong> - I craft digital experiences that make people stop and wonder how it was done. Let me know what you're building.",
  },
};

// ─── Skills ───────────────────────────────────────────────────────────────────

export const SKILLS: SkillCard[] = [
  {
    icon: "Code",
    iconBg: "rgba(61,217,235,0.12)",
    letter: "F",
    title: "Frontend Dev",
    description:
      "React, Next.js, Tailwind, TypeScript. Clean UI, responsive layouts, and smooth interactions.",
    level: 90,
  },
  {
    icon: "Server",
    iconBg: "rgba(168,216,255,0.15)",
    letter: "B",
    title: "Backend Dev",
    description:
      "Node.js, Express, MongoDB, FastAPI. Building scalable APIs and backend systems.",
    level: 80,
  },
  {
    icon: "BrainCircuit",
    iconBg: "rgba(212,184,255,0.15)",
    letter: "A",
    title: "AI Automation",
    description:
      "LangChain, LangGraph, n8n. Building automated workflows and AI-powered systems.",
    level: 85,
  },
  {
    icon: "Cpu",
    iconBg: "rgba(255,92,77,0.1)",
    letter: "P",
    title: "Python Systems",
    description:
      "FastAPI, Pydantic, backend logic and AI integrations using Python ecosystem.",
    level: 80,
  },
  {
    icon: "GitBranch",
    iconBg: "rgba(61,217,235,0.12)",
    letter: "T",
    title: "Tools & Workflow",
    description:
      "Git, GitHub, VS Code. Clean development workflow and version control.",
    level: 90,
  },
  {
    icon: "Sparkles",
    iconBg: "rgba(168,216,255,0.15)",
    letter: "A",
    title: "AI Integration",
    description:
      "LLM APIs, prompt engineering, and integrating AI into real-world applications.",
    level: 82,
  },
];

// ─── Projects ─────────────────────────────────────────────────────────────────

export const PROJECTS: Project[] = [
  {
    id: "vidly",
     featured: true,
    emoji: "🎯",
   thumbBg:
      "linear-gradient(135deg, #100a05 0%, rgba(255,92,77,0.12) 100%)",
    image: "/images/vidly.png",
    category: "AI / Full Stack / SAAS",
    categoryColor: "coral",
    title: "Vidly",
    description:
      "YouTube comment sentiment analysis platform processing 1,000 comments in 90 seconds. Built with LangGraph parallel pipelines, BullMQ/Redis job queues, Gemini API rotation, and WebSocket progress tracking.",
    tags: ["Next.js","Tailwind CSS", "Node.js", "LangChain", "LangGraph", "BullMQ", "Redis", "Socket.io"],
    links: [
      { label: "Live Site", href: "https://www.getvidly.com/", accent: true, accentColor: "coral" },
      { label: "Frontend", href: "https://github.com/Yosf96633/Vidly_frontend" },
      { label: "Backend", href: "https://github.com/Yosf96633/Vidly_backend" },
    ],
  },
  //  {
  //   id: "automation",
  //   emoji: "⚙️",
  //   thumbBg:
  //     "linear-gradient(135deg, #100508 0%, rgba(61,217,235,0.12) 100%)",
  //   image: "",
  //   category: "AI Automation",
  //   categoryColor: "sky",
  //   title: "AI Workflow Automation",
  //   description:
  //     "Built automation pipelines using n8n, LangChain, and APIs for data processing, triggers, and AI-driven workflows.",
  //   tags: ["LangChain", "n8n", "Python", "LangGraph"],
  //   links: [
  //     { label: "Case Study", href: "#", accent: true, accentColor: "sky" },
  //     { label: "Process", href: "#" },
  //   ],
  // },
  {
    id: "pindeats",
   
    emoji: "🍕",
    thumbBg:
      "linear-gradient(135deg, #100a05 0%, rgba(255,92,77,0.12) 100%)",
    image: "/images/pindeats.png",
    category: "Full Stack App",
    categoryColor: "coral",
    title: "PindEats",
    description:
      "Food delivery app built with Next.js and Node.js/Express. Includes Food, Gifts & Properties pages, User and Rider dashboards, and a referral system with WhatsApp sharing and QR codes.",
    tags: ["Next.js", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    links: [
      { label: "View Project", href: "https://www.pindeats.com/", accent: true, accentColor: "coral" },
    ],
  },
  {
    id: "vizztube",
    emoji: "📊",
    thumbBg:
      "linear-gradient(135deg, #050a10 0%, rgba(181,123,255,0.12) 100%)",
    image: "/images/vizztube.png",
    category: "SaaS / Analytics",
    categoryColor: "lime",
    title: "VizzTube",
    description:
      "Full-stack YouTube analytics platform with video search, channel insights, Stripe subscriptions, role-based access, and a bilingual (Japanese–English) UI.",
    tags: ["React", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"],
    links: [
      { label: "View Project", href: "https://youtube-research.netlify.app/", accent: true, accentColor: "lime" },
    ],
  },
  {
    id: "urdulens",
    
    emoji: "📖",
    thumbBg:
      "linear-gradient(135deg, #0a0a0a 0%, #0a1015 50%, rgba(61,217,235,0.12) 100%)",
    image: "/images/urdulens.png",
    category: "Featured - AI System",
    categoryColor: "violet",
    title: "UrduLens OCR",
    description:
      "Urdu text recognition system with 84% accuracy trained on 10,000+ images. Built a React frontend and integrated it with a Python-based ML backend for real-time text extraction.",
    tags: ["React", "Python", "FastAPI", "ML", "OCR"],
    links: [
      { label: "Live Demo", href: "https://urdulens2.netlify.app/", accent: true, accentColor: "violet" },
      { label: "GitHub", href: "https://github.com/sahilphantom/urdu_Lens" },
    ],
  },
  
 
  {
    id: "cli",
    emoji: "💻",
    thumbBg:
      "linear-gradient(135deg, #080510 0%, rgba(255,92,77,0.12) 100%)",
    image: "/images/dbcli.jpeg",
    category: "Developer Tool",
    categoryColor: "coral",
    title: "DB Backup CLI",
    description:
      "Node.js CLI tool supporting multiple databases with scheduling, compression, logging, and Google Drive integration.",
    tags: ["Node.js", "CLI", "Google Drive API"],
    links: [
      { label: "View GitHub", href: "#", accent: true, accentColor: "coral" },
    ],
  },
  {
    id: "healthdoc",
    emoji: "🏥",
    thumbBg:
      "linear-gradient(135deg, #0a1010 0%, rgba(61,217,235,0.1) 100%)",
    image: "/images/healthdoc.png",
    category: "UI / Frontend",
    categoryColor: "lime",
    title: "HealthDoc",
    description:
      "A professionally crafted healthcare web interface featuring responsive design, dynamic animations, and an intuitive user experience.",
    tags: ["React", "Framer Motion", "Tailwind CSS", "React Router"],
    links: [
      { label: "Live Demo", href: "https://healthdoc12.netlify.app/", accent: true, accentColor: "lime" },
      { label: "GitHub", href: "https://github.com/sahilphantom/Healthdoc" },
    ],
  },
  {
    id: "brainwave",
    emoji: "🧠",
    thumbBg:
      "linear-gradient(135deg, #080510 0%, rgba(181,123,255,0.12) 100%)",
    image: "/images/brainwave.png",
    category: "UI / Frontend",
    categoryColor: "violet",
    title: "Brainwave",
    description:
      "A visually appealing and modern web application designed with dynamic styling and responsive layouts for seamless performance across all screen sizes.",
    tags: ["React", "Framer Motion", "Tailwind CSS", "React Router"],
    links: [
      { label: "Live Demo", href: "https://brainwavesm.netlify.app/", accent: true, accentColor: "violet" },
      { label: "GitHub", href: "https://github.com/sahilphantom/brainwave" },
    ],
  },
  {
    id: "nexabuy",
    emoji: "🛒",
    thumbBg:
      "linear-gradient(135deg, #100508 0%, rgba(255,92,77,0.1) 100%)",
    image: "/images/nexa.png",
    category: "E-Commerce",
    categoryColor: "coral",
    title: "Nexabuy",
    description:
      "A modern e-commerce website with product listing, cart system, and state management using Zustand. Clean responsive design with Ant Design components.",
    tags: ["React", "Zustand", "Ant Design", "Tailwind CSS"],
    links: [
      { label: "Live Demo", href: "https://nexabuy.netlify.app/", accent: true, accentColor: "coral" },
      { label: "GitHub", href: "https://github.com/sahilphantom/nexabuy_app" },
    ],
  },
  {
    id: "dangila",
    emoji: "✨",
    thumbBg:
      "linear-gradient(135deg, #0a0510 0%, rgba(77,205,255,0.1) 100%)",
    image: "/images/dangila.png",
    category: "Landing Page",
    categoryColor: "sky",
    title: "Dangila Landing Page",
    description:
      "A modern and visually captivating landing page for a cosmetic product brand, designed to highlight features and user engagement.",
    tags: ["React", "Tailwind CSS"],
    links: [
      { label: "Live Demo", href: "https://dangila.netlify.app/", accent: true, accentColor: "sky" },
      { label: "GitHub", href: "https://github.com/sahilphantom/dangila_landing_page" },
    ],
  },
];

// ─── Testimonials ─────────────────────────────────────────────────────────────

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "sarah",
    quote:
      "Alex doesn't just execute briefs - they elevate them. Delivered a design system that our team of 40 engineers could actually maintain. Exceptional craft and communication.",
    author: "Sarah Andersen",
    role: "CPO @ Verdant Inc.",
    initials: "SA",
    avatarBg: "rgba(61,217,235,0.2)",
    avatarColor: "#3dd9eb",
  },
  {
    id: "marcus",
    quote:
      "The Pulse app redesign increased our DAU by 60% in 3 months. Alex brought a rare combination of strong UX intuition and the ability to ship production code themselves.",
    author: "Marcus Kim",
    role: "CEO @ Pulse Health",
    initials: "MK",
    avatarBg: "rgba(77,205,255,0.2)",
    avatarColor: "#4DCDFF",
  },
  {
    id: "lena",
    quote:
      "Hired Alex for a 2-week sprint, they stayed for 6 months. That's how good the work was. They shipped a design system, rewrote our onboarding, and mentored two junior designers.",
    author: "Lena Richter",
    role: "Head of Design @ Notion",
    initials: "LR",
    avatarBg: "rgba(255,92,77,0.2)",
    avatarColor: "#FF5C4D",
  },
];

// ─── Timeline ─────────────────────────────────────────────────────────────────

export const TIMELINE: TimelineEntry[] = [
  {
    id: "mozzine",
    year: "Jan 2026 - Present",
    title: "Junior Frontend Developer",
    company: "Mozzine Technologies",
    description:
      "Building modern frontend interfaces and contributing to production web applications as part of the core dev team.",
  },
  {
    id: "codeexpert-fullstack",
    year: "Oct - Nov 2025",
    title: "Full Stack Web Developer",
    company: "Code Expert",
    description:
      "Worked as a full stack developer building and maintaining web applications using the MERN stack.",
  },
  {
    id: "codeexpert-intern",
    year: "Jul - Sep 2025",
    title: "Full Stack Developer Intern",
    company: "Code Expert",
    description:
      "Gained hands-on experience with MongoDB, Express, React, Node.js and Next.js through real project work.",
  },
   {
    id: "vizztube",
    year: "Jun - Aug 2025",
    title: "Full Stack Developer",
    company: "ZEN Company",
    description:
      "Built VizzTube — a full-stack YouTube analytics platform with the MERN stack. Features include video search, channel insights, Stripe subscriptions with webhooks, role-based access, bilingual (Japanese–English) UI, and a secure admin dashboard.",
  },
  {
    id: "hiba",
    year: "May - Jun 2025",
    title: "PHP Laravel Intern",
    company: "Hiba Logics",
    description:
      "First professional internship — built CRUD systems and backend features using PHP and Laravel.",
  },
];

// ─── Marquee ──────────────────────────────────────────────────────────────────

export const MARQUEE_ITEMS: MarqueeItem[] = [
  { label: "MERN Stack" },
  { label: "AI Automation" },
  { label: "LangChain" },
  { label: "FastAPI" },
  { label: "React & Next.js" },
  { label: "TypeScript" },
  { label: "n8n Workflows" },
  { label: "Full Stack Development" },
];