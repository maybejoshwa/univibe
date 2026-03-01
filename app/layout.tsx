import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'UniVibe',
  description: 'Discover US universities that match your vibe.'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="bg-vibe-bg text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
