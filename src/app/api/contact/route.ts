import { NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/db";

const contactSchema = z.object({
  name: z.string().trim().min(2).max(80),
  email: z.string().trim().email().max(160),
  message: z.string().trim().min(10).max(4000),
});

export async function POST(request: Request) {
  if (!process.env.DATABASE_URL) {
    return NextResponse.json({ error: "Database is not configured." }, { status: 503 });
  }

  try {
    const payload = contactSchema.parse(await request.json());
    const message = await prisma.contactMessage.create({ data: payload });
    return NextResponse.json({ ok: true, id: message.id }, { status: 201 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: "Please check the submitted fields.", issues: error.issues }, { status: 400 });
    }
    console.error("Contact message failed", error);
    return NextResponse.json({ error: "Unable to save the message." }, { status: 500 });
  }
}
