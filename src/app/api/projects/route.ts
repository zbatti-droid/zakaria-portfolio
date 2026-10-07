import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";

export const dynamic = "force-dynamic";

const adminAuthorized = (request: Request) => !!process.env.ADMIN_PASSWORD && request.headers.get("x-admin-password") === process.env.ADMIN_PASSWORD;

export async function POST(request: Request) {
  if (!adminAuthorized(request)) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  if (!process.env.DATABASE_URL) return NextResponse.json({ error: "Database is not configured." }, { status: 503 });
  try { const data = await request.json(); const project = await prisma.project.create({ data: { ...data, technologies: data.technologies ?? [], gallery: data.gallery ?? [] } }); return NextResponse.json(project, { status: 201 }); } catch { return NextResponse.json({ error: "Invalid project data." }, { status: 400 }); }
}

export async function GET() {
  if (!process.env.DATABASE_URL) {
    return NextResponse.json({ projects: [], source: "fallback", message: "Configure DATABASE_URL to enable project records." });
  }
  try {
    const projects = await prisma.project.findMany({
      orderBy: [{ featured: "desc" }, { year: "desc" }, { title: "asc" }],
    });
    return NextResponse.json({ projects, source: "database" });
  } catch (error) {
    console.error("Projects API unavailable", error);
    return NextResponse.json(
      { projects: [], source: "fallback", message: "Configure DATABASE_URL to enable project records." },
      { status: 200 }
    );
  }
}
