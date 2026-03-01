export type University = {
  slug: string;
  name: string;
  city: string;
  state: string;
  vibe: string;
  tuition: string;
  acceptanceRate: string;
  tags: string[];
  coverImage: string;
  overview: string;
  academics: string;
  practical: string;
};

export const universities: University[] = [
  {
    slug: 'usc',
    name: 'University of Southern California',
    city: 'Los Angeles',
    state: 'CA',
    vibe: 'Creative hustle, sunny social life, and big network energy.',
    tuition: '$69,904 / year',
    acceptanceRate: '12%',
    tags: ['Film & Media', 'Startup Scene', 'Warm Weather'],
    coverImage:
      'https://images.unsplash.com/photo-1496307653780-42ee777d4833?auto=format&fit=crop&w=1200&q=80',
    overview:
      'USC blends strong academics with LA creator culture, perfect for students who want both prestige and pop-culture proximity.',
    academics:
      'Top programs in cinema, business, engineering, and communication. Strong interdisciplinary options and global opportunities.',
    practical:
      'High tuition but strong alumni network, active internship pipelines in LA, and vibrant international student community.'
  },
  {
    slug: 'nyu',
    name: 'New York University',
    city: 'New York',
    state: 'NY',
    vibe: 'Fast-paced city life with artsy, global, and ambitious vibes.',
    tuition: '$62,796 / year',
    acceptanceRate: '12%',
    tags: ['Urban Campus', 'Arts', 'Global Programs'],
    coverImage:
      'https://images.unsplash.com/photo-1514565131-fce0801e5785?auto=format&fit=crop&w=1200&q=80',
    overview:
      'NYU is integrated into NYC itself, ideal for students who want nonstop opportunities in culture, business, and media.',
    academics:
      'Known for Tisch arts, Stern business, and social sciences. Flexible curriculum with strong international campuses.',
    practical:
      'Cost of living is high, but internships are everywhere. Strong fit for independent students who enjoy city freedom.'
  },
  {
    slug: 'ucla',
    name: 'University of California, Los Angeles',
    city: 'Los Angeles',
    state: 'CA',
    vibe: 'Balanced grind and chill with school spirit and west-coast sunshine.',
    tuition: '$46,326 / year (out-of-state)',
    acceptanceRate: '9%',
    tags: ['Public Ivy', 'Campus Life', 'Research'],
    coverImage:
      'https://images.unsplash.com/photo-1531312267120-d10fd51f34f7?auto=format&fit=crop&w=1200&q=80',
    overview:
      'UCLA offers elite academics, a classic campus environment, and broad opportunities across research, sports, and entertainment.',
    academics:
      'Strong in life sciences, economics, psychology, engineering, and film. Large range of majors and undergraduate research.',
    practical:
      'Competitive admissions and large class sizes, but great value compared to private schools and strong brand recognition.'
  }
];
