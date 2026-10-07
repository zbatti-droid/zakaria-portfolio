import { Icons } from "@/components/icons";
import type { ReactNode } from "react";
import { HomeIcon, NotebookIcon } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Docker } from "@/components/ui/svgs/docker";

export const DATA = {
  name: "Zakaria Batti",
  initials: "ZB",
  url: "https://zakaria-portfolio-rose.vercel.app",
  location: "Agadir, Morocco",
  locationLink: "https://www.google.com/maps/search/Agadir,+Morocco",
  description:
    "Full-Stack Developer specialized in React, Node.js, PostgreSQL and Web3 applications.",
  summary:
    "I am a Full-Stack Developer who builds reliable web applications from database design to frontend deployment. I have worked on more than 25 web projects including business websites, dashboards, e-commerce platforms and custom applications. My main project is DiploChain, a blockchain-based diploma verification platform graded 16/20. I enjoy creating clean interfaces, secure APIs and practical digital products for real users.",
  avatarUrl: "/profile.jpg",
  skills: [
    { name: "JavaScript", icon: ReactLight },
    { name: "React.js", icon: ReactLight },
    { name: "Next.js", icon: NextjsIconDark },
    { name: "TypeScript", icon: Typescript },
    { name: "Vite", icon: ReactLight },
    { name: "Node.js", icon: Nodejs },
    { name: "Express.js", icon: Nodejs },
    { name: "PostgreSQL", icon: Postgresql },
    { name: "Docker", icon: Docker },
    { name: "Solidity", icon: ReactLight },
    { name: "Web3.js", icon: ReactLight },
    { name: "Git & GitHub", icon: ReactLight },
    { name: "REST APIs", icon: Nodejs },
    { name: "Tailwind CSS", icon: Typescript },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "battizakaria15@gmail.com",
    tel: "0631751974",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/zbatti-droid",
        icon: Icons.github,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:battizakaria15@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },
  work: [
    {
      company: "DiploChain Project — FST Errachidia",
      href: "https://github.com/zbatti-droid",
      badges: ["Final Year Project"],
      location: "Agadir, Morocco",
      title: "Full-Stack Developer",
      logoUrl: "/logos/diplochain.png",
      start: "2025",
      end: "Present",
      
      description:
        "Worked on more than 25 web projects including business websites, dashboards, e-commerce platforms and custom applications. Designed and built a complete diploma verification dApp. Developed the Node.js/Express backend and PostgreSQL database, built the React/Vite frontend with FR/AR/EN support, dark mode, QR scanning and CNE search, and wrote Solidity smart contracts for issuance and verification. Integrated MetaMask, Ganache, Truffle and Pinata/IPFS, implemented role-based dashboards for Admin, Employer, Student and Visitor, then deployed the frontend on Vercel.",
    },
  ],
  education: [
    {
      school: "FST Errachidia",
      href: "https://www.umi.ac.ma/",
      degree: "Licence Informatique — Génie Logiciel",
   logoUrl: "/education/fst.png",
      start: "2021",
      end: "2024",
    },
    {
      school: "Université Moulay Ismaïl",
      href: "https://www.umi.ac.ma/",
      degree: "DEUST MIP — Mathématiques, Informatique, Physique",
        logoUrl: "/education/fst.png",
      start: "2022",
      end: "2023",
    },
    {
      school: "Lycée Sidi Lhaj Lhbib",
      href: "",
      degree: "Baccalauréat Sciences Physiques",
      logoUrl: "",
      start: "2020",
      end: "2021",
    },
  ],
  hackathons: [] as Array<{
    title: string;
    dates: string;
    location: string;
    description: string;
    image?: string;
    links: Array<{ href: string; title: string; icon: ReactNode }>;
  }>,
  projects: [
    {
      title: "Diploma App — Diploma Verification",
      href: "https://diploma-app-sigma.vercel.app/",
      dates: "2025 - 2026",
      active: true,
      description: "A full-stack diploma verification platform with QR lookup, CNE search, role-based dashboards and blockchain-backed verification.",
      technologies: ["React", "Vite", "Node.js", "PostgreSQL", "Solidity", "IPFS"],
      links: [
        { type: "View Live", href: "https://diploma-app-sigma.vercel.app/", icon: <Icons.globe className="size-3" /> },
        { type: "GitHub", href: "https://github.com/zbatti-droid", icon: <Icons.github className="size-3" /> },
      ],
      image: "/projects/diploma-app.png",
      video: "",
    },
    {
      title: "Bella Beauté — Salon Platform",
      href: "https://www.bellabeaute.site/",
      dates: "2025",
      active: true,
      description: "A bilingual salon and fashion boutique website for services, gallery, appointments and WhatsApp enquiries.",
      technologies: ["React", "TypeScript", "Vite", "Supabase", "WhatsApp"],
      links: [{ type: "View Live", href: "https://www.bellabeaute.site/", icon: <Icons.globe className="size-3" /> }],
      image: "/projects/bella-beaute.png",
      video: "",
    },
{
  title: "Dar Sidi Bibi — Moroccan Restaurant",
  href: "https://dar-sidi-bibi-restaurant.vercel.app/",
  dates: "2026",
  active: true,
  description:
    "A premium bilingual Moroccan restaurant website with menu showcase, online reservations, gallery, WhatsApp integration and a custom admin dashboard.",
  technologies: [
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Prisma",
    "PostgreSQL",
    "Supabase",
    "GSAP"
  ],
  links: [
    {
      type: "View Live",
      href: "https://dar-sidi-bibi-restaurant.vercel.app/",
      icon: <Icons.globe className="size-3" />,
    },
    {
      type: "GitHub",
      href: "https://github.com/zbatti-droid",
      icon: <Icons.github className="size-3" />,
    },
  ],
  image: "/projects/dar-sidi-bibi.png",
  video: "",
},



















    {
      title: "STYLE-NA — Fashion Store",
      href: "https://style-na-frontend.vercel.app/",
      dates: "2025",
      active: true,
      description: "A Moroccan fashion storefront with product discovery, variants, stock details and WhatsApp ordering.",
      technologies: ["React", "TypeScript", "Vite", "Tailwind CSS"],
      links: [{ type: "View Live", href: "https://style-na-frontend.vercel.app/", icon: <Icons.globe className="size-3" /> }],
      image: "/projects/style-na.png",
      video: "",
    },
    {
      title: "Employee Management App",
      href: "https://employee-management-crud-1-1wuy.onrender.com/",
      dates: "2025",
      active: true,
      description: "A PERN CRUD application for adding, editing and deleting employee records through a responsive management UI.",
      technologies: ["React", "Node.js", "Express", "PostgreSQL", "REST API"],
      links: [{ type: "View Live", href: "https://employee-management-crud-1-1wuy.onrender.com/", icon: <Icons.globe className="size-3" /> }],
      image: "/projects/employee-management.png",
      video: "",
    },
    {
      title: "Boutique Robes",
      href: "https://projet-javascript-1.vercel.app/",
      dates: "2025",
      active: true,
      description: "A responsive dress shop built with React, TypeScript and Vite, with a direct WhatsApp enquiry flow.",
      technologies: ["React", "TypeScript", "Vite", "WhatsApp"],
      links: [{ type: "View Live", href: "https://projet-javascript-1.vercel.app/", icon: <Icons.globe className="size-3" /> }],
      image: "/projects/boutique-robes.png",
      video: "",
    },
    {
      title: "Coffee Website",
      href: "https://coffee-website-eta-ten.vercel.app/",
      dates: "2024",
      active: true,
      description: "A focused café landing page with responsive layouts, clear content hierarchy and mobile-first presentation.",
      technologies: ["HTML", "CSS", "JavaScript", "Responsive Design"],
      links: [{ type: "View Live", href: "https://coffee-website-eta-ten.vercel.app/", icon: <Icons.globe className="size-3" /> }],
     image: "/projects/coffee-website.png",
      video: "",
    },
  ]
} as const;
