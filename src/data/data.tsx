
import {
  ImageType,
  MenuProps,
  ProjectCardProps,
  SkillGroup,
  SkillsProps,
  SocialLinks,
  TimelineProps,
} from "../types/types";

export const URL = "https://mj-portfolio-eosin.vercel.app";
export const NAME = "Mouadh Jenouiz";

export const SECTIONS = ["Home", "Experience", "Projects", "Skills"];
export const HERO_IMAGE = "https://picsum.photos/id/1005/1600/1400";
export const CTA_TEXT = "Know More";
export const MENU: MenuProps[] = [
  { key: 1, route: "home", name: SECTIONS[0] },
  { key: 2, route: "experience", name: SECTIONS[1] },
  { key: 3, route: "projects", name: SECTIONS[2] },
  { key: 4, route: "skills", name: SECTIONS[3] },
];

export const GREETING_TEXT = "Available for Work";
export const GREETING_DESCRIPTION =
  "Busy Developing a side project which will eventually be never done";

export const TAGLINE = "Full Stack Web & Android Developer building clean, efficient, user-focused digital products";
export const ABOUT = "Full Stack Web & Android Developer with over 4 years of experience across React, TypeScript, Django, Node.js and C#. From responsive websites to mobile apps, I build clean, efficient, user-focused products.";
export const CONTACT_TAGLINE = "Let's build something great together";

export const SOCIAL_LINKS: SocialLinks = {
  github: "https://github.com/Ennosukeblade",
  linkedin: "https://www.linkedin.com/in/mouadh-jenouiz",
  email: "mailto:mouadhjenouiz@gmail.com",
  phone: "+21693936350",
  whatsapp: `https://wa.me/${"+21693936350"?.replace(/\D/g, "") ?? ""}`
};
const BASE_IMG_URL = ""; // Vite: files in public/ are served from the site root ("/images/...")

export const EXPERIENCE: TimelineProps[] = [
  {
    id: 1,
    company: "Nefel Education (Coding Dojo)",
    position: "Fullstack Developer & Teaching Assistant",
    logo: `${BASE_IMG_URL}/images/nefel-education.jfif`,
    start: "2023-05-01",
    end: "Present",
    description:
      "Assisting students with debugging and code reviews in their bootcamp. Designing and conducting interactive QA sessions, and providing constructive feedback to ensure quality and compliance with best practices. Technologies: .NET MVC (C#), Flask (Python), MERN, Java.",
  },
  {
    id: 2,
    company: "Miljonbemanning",
    position: "FullStack Web Developer",
    logo: `${BASE_IMG_URL}/images/Miljonbemanning.png`,
    start: "2024-05-01",
    end: "2024-09-01",
    description:
      "Developed miljon.io, a job and course platform featuring smart CVs, job search, and tailored applications. Built the frontend in React with TypeScript and a Django/PostgreSQL backend; added standard and LMIS API signup flows, an Express/Node.js payment service for Telebirr, and deployed on Google Cloud Run.",
  },
  {
    id: 3,
    company: "ProServices Training Company",
    position: "Web Developer",
    logo: `${BASE_IMG_URL}/images/proservices-training-company.png`,
    start: "2021-11-01",
    end: "2022-04-01",
    description:
      "WordPress integration, optimization and custom development. Built a student management web application with React.js, Express and MySQL on a local server; performed manual testing and validation of Winnow.tn.",
  },
  {
    id: 4,
    company: "Synotec",
    position: "Developer & Webmaster",
    logo: `${BASE_IMG_URL}/images/synotec.jfif`,
    start: "2018-10-01",
    end: "2021-11-01",
    description:
      "Integrations, maintenance and SEO optimization of synotec.tn. Developed and deployed a facilitated payment calculation application using React.js, and created data-scraping programs.",
  },
  {
    id: 5,
    company: "Freelance",
    position: "Android Developer",
    logo: `${BASE_IMG_URL}/images/gironac.png`,
    start: "2018-04-01",
    end: "2020-04-01",
    description:
      "Developed iZRoadbook of Gironac, an Android navigation application for rally motorcycles and raid travelers on E-Ink tablets (Tolino).",
  },
  {
    id: 6,
    company: "Devnet Tunisie",
    position: "Web Integrator",
    logo: `${BASE_IMG_URL}/images/devnet.png`,
    start: "2015-02-01",
    end: "2015-12-01",
    description:
      "Integrated the graphic charter of the ECM project management software (ecmbox.tn) and WordPress CMS integration work. Also installed and configured IP surveillance systems and administered Cisco backbone switches.",
  },
];

export const KEYWORDS = [
  "Mouadh Jenouiz",
  "Full Stack Web Developer",
  "Android Developer",
  "React Developer",
  "TypeScript",
  "Node.js",
  "Django",
  "Flask",
  "ASP.NET",
  "PostgreSQL",
  "MongoDB",
  "Full Stack Developer Tunisia",
  "Hire Full Stack Developer",
  "Portfolio",
  "Web Developer Portfolio",
];

export const IMAGE: ImageType = {
  src: "https://picsum.photos/id/1005/600/314",
  height: "600",
  width: "314",
};

export const projects: ProjectCardProps[] = [
  {
    id: 1,
    projectName: "Project One",
    projectDescription:
      "Short description of your first project. Replace this in src/data/data.tsx.",
    projectImageLogo: `https://picsum.photos/id/1/600/314`,
    link: "#",
    buttonText: "View Project",
    tech: ["React", "TailwindCSS", "CSS", "Javascript"],
  },
  {
    id: 2,
    projectName: "Project Two",
    projectDescription:
      "Short description of your second project. Replace this in src/data/data.tsx.",
    projectImageLogo: `https://picsum.photos/id/2/600/314`,
    link: "#",
    buttonText: "View Project",
    tech: ["React", "TailwindCSS", "Kubernetes", "NodeJS"],
  },
  {
    id: 3,
    projectName: "Project Three",
    projectDescription:
      "Short description of your third project. Replace this in src/data/data.tsx.",
    projectImageLogo: `https://picsum.photos/id/3/600/314`,
    link: "#",
    buttonText: "View Project",
    tech: ["React", "Redux", "SCSS", "Javascript"],
  },
];

/**
 *  @type {SkillsProps}
 * skills
 */
// export const skills: SkillsProps[] = [
//   { id: 1, skill: "Javascript", level: 90 },
//   { id: 2, skill: "React", level: 88 },
//   { id: 3, skill: "CSS", level: 85 },
//   { id: 4, skill: "HTML", level: 92 },
//   { id: 5, skill: "Java", level: 70 },
//   { id: 6, skill: "Googling", level: 99 },
// ];

export const SKILLS_GROUPED: SkillGroup[] = [
  {
    category: "Concepts",
    icon: "🧠",
    skills: [
      "Object Oriented Programming",
      "Data Design & Relationships",
      "MVC Architecture",
      "ORMs",
      "Routing",
      "Encryption & Data Security Basics",
      "Cookies & Sessions",
      "Algorithms",
    ],
  },
  {
    category: "Programming",
    icon: "💻",
    skills: ["JavaScript", "Python", "Java", "C#", "Kotlin", "PHP", "jQuery", "HTML", "CSS", "Tailwind"],
  },
  {
    category: "Databases",
    icon: "🗄️",
    skills: ["MySQL", "MongoDB", "PostgreSQL"],
  },
  {
    category: "Frameworks",
    icon: "⚙️",
    skills: ["React", "Next.js", "Express.js", "Django", "Flask", "ASP.NET", "Android"],
  },
  {
    category: "Tools & Libraries",
    icon: "🛠️",
    skills: ["Git", "GitHub", "VS Code", "NPM", "MySQL Workbench", "Socket.IO", "Axios", "Jira", "Trello", "Google Cloud"],
  },
  {
    category: "CMS",
    icon: "📝",
    skills: ["WordPress", "WooCommerce", "LearnPress"],
  },
  {
    category: "Design",
    icon: "🎨",
    skills: ["Figma", "Photoshop", "Illustrator", "After Effects", "Premiere Pro", "GIMP", "Affinity Designer", "Balsamiq"],
  },
  {
    category: "OS & Other",
    icon: "🐧",
    skills: ["Linux (Arch, Debian, Fedora)", "Windows", "UML", "Bootstrap", "Office Suite"],
  },
];

export const SECTIONS_VISIBILITY = {
  home: true,
  experience: true,
  projects: false,
  skills: true,
  contact: true,
};
