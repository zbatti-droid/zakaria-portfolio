import Link from "next/link";
import { getPortfolioProjects } from "@/lib/portfolio";
import { ProjectCard } from "@/components/project-card";

export const metadata = { title: "Projects" };

export default async function ProjectsPage() {
  const projects = await getPortfolioProjects();
  return (
    <main className="space-y-8">
      <Link href="/" className="text-sm text-muted-foreground hover:text-foreground">← Back home</Link>
      <div><h1 className="mt-6 text-4xl font-bold tracking-tight">Projects</h1><p className="mt-2 text-muted-foreground">Selected work by Zakaria Batti.</p></div>
      <div className="grid gap-4 sm:grid-cols-2">{projects.map((project) => <ProjectCard key={project.title} href={project.href} title={project.title} description={project.description} dates={project.dates} tags={project.technologies} image={project.image} video={project.video} links={project.links} />)}</div>
    </main>
  );
}
