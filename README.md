# Zakaria - Full-Stack Developer Portfolio

A professional Next.js portfolio for Zakaria, built to present full-stack projects, experience, education and technical skills. The public content has a local fallback and can be managed from PostgreSQL through Prisma and Supabase.

## Stack

- Next.js 16 and React 19
- TypeScript and Tailwind CSS
- Prisma ORM and PostgreSQL / Supabase
- API route at `GET /api/projects`
- Responsive light project previews with dark portfolio theme

## Installation

```bash
npm install
cp .env.example .env
npm run db:generate
npm run db:push
npm run db:seed
```

## Development

```bash
npm run dev
```

Open `http://localhost:3000`.

## Production

```bash
npm run build
npm run start
```

## Admin dashboard

Open `/admin` after setting `ADMIN_PASSWORD` in `.env`. The dashboard lists database projects and supports protected deletion; `POST /api/projects` and `PATCH/DELETE /api/projects/:id` use the same `x-admin-password` header.

## Supabase / PostgreSQL

1. Create a Supabase project.
2. Copy the Supabase PostgreSQL connection string to `DATABASE_URL`.
3. Run `npm run db:push` and `npm run db:seed`.
4. The homepage reads projects from Prisma when the database is available and keeps local content as a safe fallback during development.
5. Contact submissions are accepted by `POST /api/contact` and stored in `ContactMessage`.

## Vercel deployment

1. Push this folder to GitHub.
2. Import the repository into Vercel.
3. Add `DATABASE_URL` and `NEXT_PUBLIC_SITE_URL` in Vercel project settings.
4. Build command: `npm run build`.
5. Deploy. Run the database push and seed commands once from a machine with the Supabase variables configured.

## Content

Update `src/data/resume.tsx` for the local fallback content. Database records are defined in `prisma/schema.prisma` and seeded from `prisma/seed.ts`.
