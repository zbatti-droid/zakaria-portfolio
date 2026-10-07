import "dotenv/config";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const projects = [
  ["Diploma App — Diploma Verification", "diploma-verification", "A full-stack diploma verification platform with QR lookup, CNE search and role-based dashboards.", "/projects/diploma-app.png", 2025, "https://github.com/zbatti-droid", "https://diploma-app-sigma.vercel.app/", true, ["React", "Vite", "Node.js", "PostgreSQL", "Solidity", "IPFS"]],
  ["Bella Beauté — Salon Platform", "bella-beaute", "A bilingual salon and fashion boutique website for services, gallery, appointments and WhatsApp enquiries.", "/projects/bella-beaute.png", 2025, null, "https://www.bellabeaute.site/", true, ["React", "TypeScript", "Vite", "Supabase", "WhatsApp"]],
  ["STYLE-NA — Fashion Store", "style-na", "A Moroccan fashion storefront with product discovery, variants, stock details and WhatsApp ordering.", "/projects/style-na.png", 2025, null, "https://style-na-frontend.vercel.app/", true, ["React", "TypeScript", "Vite", "Tailwind CSS"]],
  ["Employee Management App", "employee-management", "A PERN CRUD application for employee records and administration.", "/projects/employee-management.png", 2025, null, "https://employee-management-crud-1-1wuy.onrender.com/", true, ["React", "Node.js", "Express", "PostgreSQL"]],
  ["Boutique Robes", "boutique-robes", "A responsive dress shop with a direct WhatsApp enquiry flow.", "/projects/booking.svg", 2025, null, "https://projet-javascript-1.vercel.app/", true, ["React", "TypeScript", "Vite", "WhatsApp"]],
  ["Coffee Website", "coffee-website", "A focused café landing page with responsive layouts and clear content hierarchy.", "/projects/landing-pages.svg", 2024, null, "https://coffee-website-eta-ten.vercel.app/", true, ["HTML", "CSS", "JavaScript"]],
] as const;

async function main() {
  await prisma.project.deleteMany();
  for (const [title, slug, description, image, year, githubUrl, liveUrl, featured, technologies] of projects) {
    await prisma.project.create({ data: { title, slug, description, image, year, githubUrl, liveUrl, featured, technologies: [...technologies] } });
  }
  await prisma.experience.deleteMany();
  await prisma.experience.create({ data: { company: "Independent Projects", role: "Full-Stack Developer", description: "Worked on more than 25 web projects including business websites, dashboards, e-commerce platforms and custom applications. Built products from requirements and data modeling through deployment.", startDate: new Date("2024-01-01"), endDate: null } });
  await prisma.education.deleteMany();
  await prisma.education.createMany({ data: [
    { school: "FST Errachidia", degree: "Licence Informatique — Génie Logiciel", description: "Full-stack web development, algorithms, databases, software engineering and networks.", dates: "2021 - 2024" },
    { school: "Université Moulay Ismaïl", degree: "DEUST MIP — Mathématiques, Informatique, Physique", description: "Foundations in mathematics, computer science and physics.", dates: "2022 - 2023" },
    { school: "Lycée Sidi Lhaj Lhbib", degree: "Baccalauréat Sciences Physiques", description: "Sciences physiques.", dates: "2020 - 2021" },
  ] });
  await prisma.skill.deleteMany();
  await prisma.skill.createMany({ data: [
    { name: "React / Next.js", category: "Frontend" }, { name: "TypeScript", category: "Frontend" }, { name: "Node.js / Express", category: "Backend" }, { name: "PostgreSQL / Prisma", category: "Database" }, { name: "Supabase", category: "Cloud" }, { name: "Solidity / Web3", category: "Blockchain" }, { name: "Git / GitHub", category: "Tools" },
  ] });
  await prisma.contact.deleteMany();
  await prisma.contact.create({ data: { email: "battizakaria15@gmail.com", socialLinks: { github: "https://github.com/zbatti-droid", phone: "+212631751974" } } });
}

main().finally(() => prisma.$disconnect());
