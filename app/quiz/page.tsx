'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';

const questions = [
  {
    prompt: 'Your ideal Saturday feels like…',
    options: ['City cafe hopping', 'Beach + sunset walk', 'Hackathon grind', 'Museum + playlists']
  },
  {
    prompt: 'Pick your study aesthetic.',
    options: ['Quiet library corners', 'Creative studio spaces', 'Open lawns + sunshine', 'Coffee-fueled urban chaos']
  },
  {
    prompt: 'What matters most in college life?',
    options: ['Internships + career prep', 'Campus vibes', 'Diversity and culture', 'Research opportunities']
  },
  {
    prompt: 'How social are you?',
    options: ['Small close circle', 'Big energy events', 'Mix of both', 'Mostly independent']
  },
  {
    prompt: 'Post-grad goal?',
    options: ['Corporate career', 'Creative industry', 'Startup life', 'Grad school']
  }
];

export default function QuizPage() {
  const [step, setStep] = useState(0);
  const progress = useMemo(() => ((step + 1) / questions.length) * 100, [step]);
  const isComplete = step >= questions.length;

  if (isComplete) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-vibe-gradient px-6">
        <div className="w-full max-w-md space-y-5 rounded-3xl border border-zinc-800 bg-vibe-surface/80 p-6 text-center">
          <p className="text-sm text-vibe-coral">You are all set ✨</p>
          <h1 className="text-2xl font-semibold text-white">Your vibe profile is ready.</h1>
          <p className="text-sm text-zinc-300">We mapped your answers to campuses with matching social and academic energy.</p>
          <Link
            href="/explore"
            className="inline-block rounded-full bg-vibe-purple px-5 py-3 text-sm font-semibold text-white"
          >
            View your matches
          </Link>
        </div>
      </main>
    );
  }

  const question = questions[step];

  return (
    <main className="flex min-h-screen items-center justify-center bg-vibe-gradient px-6">
      <div className="w-full max-w-lg space-y-6 rounded-3xl border border-zinc-800 bg-vibe-surface/80 p-6">
        <div className="space-y-2">
          <p className="text-xs uppercase tracking-[0.2em] text-vibe-coral">
            Step {step + 1} / {questions.length}
          </p>
          <div className="h-2 w-full overflow-hidden rounded-full bg-zinc-800">
            <div className="h-full rounded-full bg-vibe-purple transition-all" style={{ width: `${progress}%` }} />
          </div>
        </div>

        <h1 className="text-2xl font-semibold text-white">{question.prompt}</h1>
        <div className="grid gap-3">
          {question.options.map((option) => (
            <button
              type="button"
              key={option}
              onClick={() => setStep((value) => value + 1)}
              className="rounded-2xl border border-zinc-700 px-4 py-3 text-left text-sm text-zinc-100 transition hover:border-vibe-coral hover:bg-vibe-coral/10"
            >
              {option}
            </button>
          ))}
        </div>
      </div>
    </main>
  );
}
