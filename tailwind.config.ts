import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        vibe: {
          bg: '#090414',
          surface: '#130a24',
          purple: '#8b5cf6',
          coral: '#ff6b6b'
        }
      },
      backgroundImage: {
        'vibe-gradient':
          'radial-gradient(circle at 10% 20%, rgba(139, 92, 246, 0.35), transparent 40%), radial-gradient(circle at 90% 10%, rgba(255, 107, 107, 0.28), transparent 32%), linear-gradient(180deg, #090414 0%, #05030a 100%)'
      },
      boxShadow: {
        glow: '0 0 24px rgba(139, 92, 246, 0.35)'
      }
    }
  },
  plugins: []
};

export default config;
