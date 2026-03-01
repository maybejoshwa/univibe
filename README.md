# UniVibe

UniVibe is a mobile-first, dark-mode web app for Malaysian students exploring US universities by **personality and vibe**, not just rankings.

It is built with:
- **Next.js (App Router)**
- **TypeScript**
- **Tailwind CSS**
- Ready to deploy on **Vercel**

---

## Features (Scaffold)

- Landing page with hero + CTA to start quiz
- 5-step personality quiz (one question per screen + progress bar)
- Explore page with university card grid
- University detail page with tabs: **Vibe / Academics / Practical**
- Placeholder data for 3 universities (USC, NYU, UCLA)

---

## 1) Run locally

### Prerequisites

- Node.js **18.17+** (or Node 20+ recommended)
- npm **9+**

### Steps

1. Clone the repository:
   ```bash
   git clone <your-repo-url>
   cd univibe
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open the app:
   - http://localhost:3000

### Useful scripts

- `npm run dev` — run development server
- `npm run build` — create production build
- `npm run start` — run production server
- `npm run lint` — run ESLint

---

## 2) Deploy to Vercel (recommended)

You can deploy in either of two ways.

### Option A: Deploy with Vercel dashboard (Git integration)

1. Push this project to GitHub/GitLab/Bitbucket.
2. Go to [https://vercel.com/new](https://vercel.com/new).
3. Import your repository.
4. Vercel will auto-detect **Next.js** settings.
5. Click **Deploy**.
6. After build completes, you’ll get a live URL.

For future pushes to your main branch, Vercel will auto-deploy.

### Option B: Deploy with Vercel CLI

1. Install CLI globally:
   ```bash
   npm i -g vercel
   ```

2. Login:
   ```bash
   vercel login
   ```

3. Deploy from the project root:
   ```bash
   vercel
   ```

4. For production deploy:
   ```bash
   vercel --prod
   ```

---

## 3) Environment variables

No environment variables are required for the current scaffold.

If you add APIs/databases later, create:
- `.env.local` for local development
- Matching variables in Vercel Project Settings → Environment Variables

---

## 4) Project structure

```text
app/
  page.tsx                     # Landing page
  quiz/page.tsx                # 5-step quiz
  explore/page.tsx             # Explore grid
  universities/[slug]/page.tsx # University detail + tabs
components/
  university-card.tsx          # Reusable card component
data/
  universities.ts              # Placeholder university dataset
```

---

## 5) Next steps

- Connect quiz answers to scoring logic
- Add filters/search/saved universities
- Replace placeholder data with real admissions data
- Add authentication and profile persistence


---

## 6) Vercel build troubleshooting

If Vercel installs dependencies but fails immediately on `npm run build`:

1. **Confirm scripts exist** in `package.json`:
   - `build`: `next build`
2. **Confirm Next config filename is valid**:
   - Use `next.config.mjs` (or `next.config.js`) at project root.
3. **Confirm project root directory in Vercel**:
   - Vercel Project Settings → General → **Root Directory** should be `.` for this repo.
4. **Confirm build/install commands** in Vercel:
   - Install command: `npm install`
   - Build command: `npm run build`
5. **Optional**: this repo includes `vercel.json` to explicitly set framework + commands.

If root directory is set to a subfolder by mistake, Vercel may install but fail to find/run the expected Next.js build context.
