import { UniversityCard } from '@/components/university-card';
import { universities } from '@/data/universities';

export default function ExplorePage() {
  return (
    <main className="min-h-screen bg-vibe-gradient px-6 py-10 sm:px-10">
      <div className="mx-auto max-w-6xl space-y-8">
        <div className="space-y-3">
          <p className="text-xs uppercase tracking-[0.16em] text-vibe-coral">Explore matches</p>
          <h1 className="text-3xl font-semibold text-white sm:text-4xl">Universities you may vibe with</h1>
          <p className="max-w-2xl text-zinc-300">Swipe through your first set of vibe-matched campuses. Tap a card for deeper details.</p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {universities.map((university) => (
            <UniversityCard key={university.slug} university={university} />
          ))}
        </div>
      </div>
    </main>
  );
}
