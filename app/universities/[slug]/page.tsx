import Link from 'next/link';
import { notFound } from 'next/navigation';
import { universities } from '@/data/universities';

const tabs = ['Vibe', 'Academics', 'Practical'] as const;

type PageProps = {
  params: {
    slug: string;
  };
  searchParams: {
    tab?: string;
  };
};

export default function UniversityDetailPage({ params, searchParams }: PageProps) {
  const university = universities.find((item) => item.slug === params.slug);

  if (!university) {
    notFound();
  }

  const currentTab = tabs.includes((searchParams.tab as (typeof tabs)[number]) ?? 'Vibe')
    ? ((searchParams.tab as (typeof tabs)[number]) ?? 'Vibe')
    : 'Vibe';

  const copy = {
    Vibe: university.overview,
    Academics: university.academics,
    Practical: university.practical
  };

  return (
    <main className="min-h-screen bg-vibe-gradient px-6 py-10 sm:px-10">
      <div className="mx-auto max-w-4xl space-y-6">
        <Link href="/explore" className="text-sm text-vibe-coral hover:underline">
          ← Back to explore
        </Link>

        <div className="space-y-3 rounded-3xl border border-zinc-800 bg-vibe-surface/80 p-6">
          <p className="text-xs uppercase tracking-[0.16em] text-vibe-coral">
            {university.city}, {university.state}
          </p>
          <h1 className="text-3xl font-semibold text-white">{university.name}</h1>
          <p className="text-zinc-300">{university.vibe}</p>
          <div className="flex flex-wrap gap-3 text-sm text-zinc-200">
            <span className="rounded-full border border-zinc-700 px-3 py-1">Tuition: {university.tuition}</span>
            <span className="rounded-full border border-zinc-700 px-3 py-1">Acceptance: {university.acceptanceRate}</span>
          </div>
        </div>

        <div className="rounded-3xl border border-zinc-800 bg-vibe-surface/80 p-2">
          <div className="grid grid-cols-3 gap-2">
            {tabs.map((tab) => (
              <Link
                key={tab}
                href={`/universities/${university.slug}?tab=${tab}`}
                className={`rounded-2xl px-3 py-2 text-center text-sm font-medium transition ${
                  currentTab === tab
                    ? 'bg-vibe-purple text-white'
                    : 'bg-transparent text-zinc-300 hover:bg-zinc-800'
                }`}
              >
                {tab}
              </Link>
            ))}
          </div>
          <div className="px-4 py-5 text-sm leading-relaxed text-zinc-200">{copy[currentTab]}</div>
        </div>
      </div>
    </main>
  );
}
