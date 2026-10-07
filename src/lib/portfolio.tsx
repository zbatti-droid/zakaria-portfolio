import { Icons } from "@/components/icons";
import { DATA } from "@/data/resume";
import { prisma } from "@/lib/db";

export async function getPortfolioProjects() {
  if (!process.env.DATABASE_URL) return DATA.projects;
  try {
    const rows = await prisma.project.findMany({
      orderBy: [{ featured: "desc" }, { year: "desc" }, { title: "asc" }],
    });
    if (rows.length > 0) {
      return rows.map((project) => ({
        title: project.title,
        href: project.liveUrl ?? project.githubUrl ?? "#",
        dates: String(project.year),
        description: project.description,
        technologies: project.technologies,
        image: project.image,
        video: "",
        links: [
          ...(project.liveUrl ? [{ type: "Live Demo", href: project.liveUrl, icon: <Icons.globe className="size-3" /> }] : []),
          ...(project.githubUrl ? [{ type: "GitHub", href: project.githubUrl, icon: <Icons.github className="size-3" /> }] : []),
        ],
      }));
    }
  } catch (error) {
    console.warn("Using local portfolio content because the database is unavailable.", error);
  }

  return DATA.projects;
}
