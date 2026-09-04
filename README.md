# TK Book

Interactive handbook for [TK Park](https://www.tkpark.or.th/) community learning-space design.

**ร่วมสร้างพื้นที่การเรียนรู้ที่ใช่...สำหรับทุกชุมชน**

คู่มือการออกแบบพื้นที่การเรียนรู้สำหรับชุมชน — TK Park พร้อมเป็นพันธมิตรในการออกแบบ พัฒนา และยกระดับแหล่งเรียนรู้ให้เป็นพื้นที่ที่ผู้คนทุกวัยอยากเข้ามาเรียนรู้ สร้างสรรค์ และเติบโตไปด้วยกัน

Static Next.js site. Long-scroll page with intro, six join-network steps, and outro. Nav overlay jumps to topics and subtopics.

## Six steps

1. ทำความรู้จัก — Get to Know
2. ตกลงแนวทางความร่วมมือ
3. ออกแบบพื้นที่และบริการ
4. ก่อสร้างพื้นที่
5. เตรียมความพร้อม
6. เปิดบริการ — The Opening

## Stack

- Next.js 16 (App Router, `output: "export"`)
- React 19
- Tailwind CSS 4
- TypeScript

## Getting started

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

| Script          | What it does                                              |
| --------------- | --------------------------------------------------------- |
| `pnpm dev`      | Dev server                                                |
| `pnpm build`    | Static export to `out/`                                   |
| `pnpm zip:prod` | Domain-root build, zip `out/` as `tk-book-production.zip` |
| `pnpm lint`     | ESLint                                                    |

## Deploy

Build is a static export (`out/`). Two paths:

**Domain root (customer zip)** — no base path:

```bash
pnpm zip:prod
NEXT_PUBLIC_SITE_URL=https://customer-domain.com npm run zip:prod
BASE_PATH=/handbook NEXT_PUBLIC_SITE_URL=https://customer-domain.com/handbook npm run zip:prod
```

Produces `tk-book-production.zip`. Serve the zip contents at `/`.

**Subfolder** — set `BASE_PATH`:

```bash
BASE_PATH=/handbook pnpm build
```

**GitHub Pages** — CI sets `GITHUB_PAGES=true`. Base path becomes `/<repo>` (from `GITHUB_REPOSITORY`, fallback `tk-network`). Optional `NEXT_PUBLIC_SITE_URL` for Open Graph / metadata.

`asset()` in `src/lib/asset.ts` prefixes public paths with `NEXT_PUBLIC_BASE_PATH` so images work under a subfolder.

## Layout

```
src/app/                 routes + layout (nav, cookie consent)
src/constants/Homepage/  intro + 6 sections + outro
src/constants/topicItems.ts
src/components/          Navbar, StepsOverlay, cookie consent
src/lib/asset.ts         base-path-aware public URLs
public/                  images, favicon, OG.png
```
