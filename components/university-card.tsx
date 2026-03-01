import Link from 'next/link';
import type { University } from '@/data/universities';

export function UniversityCard({ university }: { university: University }) {
  return (
    <Link
      href={`/universities/${university.slug}`}
      className="group overflow-hidden rounded-3xl border border-zinc-800/80 bg-vibe-surface/70 transition hover:-translate-y-1 hover:border-vibe-purple/70 hover:shadow-glow"
    >
      <div
        className="h-40 bg-cover bg-center"
        style={{ backgroundImage: `url(${university.coverImage})` }}
      />
      <div className="space-y-4 p-4">
        <div>
          <p className="text-xs uppercase tracking-wider text-vibe-coral">
            {university.city}, {university.state}
          </p>
          <h3 className="text-lg font-semibold text-white">{university.name}</h3>
          <p className="mt-2 text-sm text-zinc-300">{university.vibe}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {university.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-zinc-700 px-3 py-1 text-xs text-zinc-200"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
