import Link from 'next/link';

const stats = [
  { label: 'Universities curated', value: '120+' },
  { label: 'Student vibe signals', value: '24' },
  { label: 'Malaysian applicants helped', value: '4.2k' }
];

export default function Home() {
  return (
    <main className="min-h-screen bg-vibe-gradient">
      <section className="mx-auto flex max-w-6xl flex-col gap-10 px-6 pb-20 pt-10 sm:px-10">
        <nav className="flex items-center justify-between">
          <p className="text-xl font-bold tracking-tight text-white">UniVibe</p>
          <Link
            href="/explore"
            className="rounded-full border border-zinc-700 px-4 py-2 text-sm text-zinc-200 transition hover:border-vibe-purple hover:text-white"
          >
            Explore now
          </Link>
        </nav>

        <div className="space-y-8">
          <span className="inline-flex rounded-full border border-vibe-coral/60 bg-vibe-coral/10 px-3 py-1 text-xs uppercase tracking-[0.16em] text-vibe-coral">
            Made for Malaysian students 🇲🇾
          </span>
          <div className="space-y-6">
            <h1 className="max-w-3xl text-4xl font-semibold leading-tight text-white sm:text-6xl">
              Find a US university that matches your vibe, not just your grades.
            </h1>
            <p className="max-w-2xl text-base text-zinc-300 sm:text-lg">
              UniVibe pairs personality-first discovery with real admissions context so you can shortlist campuses that feel right before application season hits.
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row">
            <Link
              href="/quiz"
              className="rounded-full bg-vibe-purple px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-vibe-purple/80"
            >
              Start the vibe quiz
            </Link>
            <Link
              href="/explore"
              className="rounded-full border border-zinc-700 px-6 py-3 text-center text-sm font-semibold text-zinc-100 transition hover:border-vibe-coral hover:text-vibe-coral"
            >
              Skip to explore
            </Link>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-zinc-800 bg-vibe-surface/60 p-4"
            >
              <p className="text-2xl font-semibold text-vibe-coral">{stat.value}</p>
              <p className="text-sm text-zinc-300">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
