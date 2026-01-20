export const CATEGORIES = {
  ART: 'art',
  CODE: 'code',
  DESIGN: 'design',
  INTERACTIVE: 'interactive',
  VIDEO: 'video'
};

export const filterOptions = [
  { value: 'all', label: 'everything' },
  { value: 'art', label: 'art' },
  { value: 'code', label: 'code' },
  { value: 'design', label: 'design' },
  { value: 'video', label: 'video' }
];

export const projects = [
  {
    id: 1,
    slug: 'the-creature',
    title: 'The Creature',
    category: [CATEGORIES.ART, CATEGORIES.DESIGN],
    thumbnail: '/assets/pictures/Milo_Etz_ShapeColorTexture.png',
    images: ['/assets/pictures/Milo_Etz_ShapeColorTexture.png'],
    year: 2024,
    shortDescription: 'Shape, color, and texture exploration',
    fullDescription: 'A study in abstract form exploring the relationship between organic shapes and digital texture. This piece emerged from experiments with layering and color interaction.',
    techUsed: ['Photoshop', 'Illustrator'],
    featured: true
  },
  {
    id: 2,
    slug: 'a-bad-case-of-the-addiction',
    title: 'A Bad Case of the Addiction',
    category: [CATEGORIES.ART],
    thumbnail: 'https://i.imgur.com/sEeo0As.png',
    images: ['https://i.imgur.com/sEeo0As.png'],
    year: 2024,
    shortDescription: 'Digital art piece on modern dependencies',
    fullDescription: 'An exploration of contemporary addiction and the pull of modern life.',
    techUsed: ['Digital'],
    featured: false
  },
  {
    id: 3,
    slug: 'fruit-for-breakfast',
    title: 'fruit for breakfast',
    category: [CATEGORIES.VIDEO, CATEGORIES.ART],
    thumbnail: 'https://img.youtube.com/vi/6WJPb-EgvnY/maxresdefault.jpg',
    images: [],
    videoEmbed: 'https://www.youtube.com/embed/6WJPb-EgvnY',
    year: 2024,
    shortDescription: 'Experimental video piece',
    fullDescription: 'An experimental video exploring visual rhythm and motion.',
    techUsed: ['Video', 'After Effects'],
    featured: true
  },
  {
    id: 4,
    slug: 'number-37',
    title: '#37',
    category: [CATEGORIES.ART],
    thumbnail: 'https://i.imgur.com/uADVDBT.gif',
    images: ['https://i.imgur.com/uADVDBT.gif'],
    year: 2024,
    shortDescription: 'Animated abstract piece',
    fullDescription: 'Part of an ongoing series of numbered experimental works.',
    techUsed: ['Animation', 'Digital'],
    featured: false
  },
  {
    id: 5,
    slug: 'gx-1849',
    title: 'Gx-1849',
    category: [CATEGORIES.ART, CATEGORIES.DESIGN],
    thumbnail: 'https://i.imgur.com/iVH6yth.jpeg',
    images: ['https://i.imgur.com/iVH6yth.jpeg'],
    year: 2024,
    shortDescription: 'Digital composition study',
    fullDescription: 'An exploration of form and negative space.',
    techUsed: ['Digital'],
    featured: false
  },
  {
    id: 6,
    slug: 'fr0ml3yf3',
    title: 'fr0mL3yf3',
    category: [CATEGORIES.ART],
    thumbnail: 'https://i.imgur.com/ftYWqU7.png',
    images: ['https://i.imgur.com/ftYWqU7.png'],
    year: 2024,
    shortDescription: 'Digital artwork',
    fullDescription: 'A recreation of a fond memory.',
    techUsed: ['Digital'],
    featured: false
  },
  {
    id: 7,
    slug: 'being-nice',
    title: 'Being Nice',
    category: [CATEGORIES.ART],
    thumbnail: 'https://i.imgur.com/zCcVt0P.png',
    images: ['https://i.imgur.com/zCcVt0P.png'],
    year: 2024,
    shortDescription: 'Digital illustration',
    fullDescription: 'A reflection on kindness and human interaction.',
    techUsed: ['Digital', 'Illustration'],
    featured: false
  },
  {
    id: 8,
    slug: 'shape-study-3',
    title: 'Shape Study #3',
    category: [CATEGORIES.ART, CATEGORIES.DESIGN],
    thumbnail: 'https://i.imgur.com/dpV56ta.png',
    images: ['https://i.imgur.com/dpV56ta.png'],
    year: 2024,
    shortDescription: 'Geometric exploration',
    fullDescription: 'Part of an ongoing series exploring fundamental shapes and their relationships.',
    techUsed: ['Illustrator', 'Digital'],
    featured: false
  },
  {
    id: 9,
    slug: 'music-study',
    title: 'Music Study',
    category: [CATEGORIES.ART],
    thumbnail: 'https://i.imgur.com/LEKBF12.png',
    images: ['https://i.imgur.com/LEKBF12.png'],
    year: 2024,
    shortDescription: 'Visual interpretation of sound',
    fullDescription: 'An attempt to capture the essence of music in visual form.',
    techUsed: ['Digital'],
    featured: false
  },
  {
    id: 10,
    slug: 'untitled',
    title: 'Untitled',
    category: [CATEGORIES.ART],
    thumbnail: 'https://i.imgur.com/LXYQGIN.jpeg',
    images: ['https://i.imgur.com/LXYQGIN.jpeg'],
    year: 2024,
    shortDescription: 'Abstract digital work',
    fullDescription: 'An unnamed piece that speaks for itself.',
    techUsed: ['Traditional'],
    featured: false
  },
  {
    id: 11,
    slug: 'color-theory-study-04',
    title: 'Color Theory Study #04',
    category: [CATEGORIES.ART, CATEGORIES.DESIGN],
    thumbnail: 'https://i.imgur.com/j2ZcUGs.jpeg',
    images: ['https://i.imgur.com/j2ZcUGs.jpeg'],
    year: 2024,
    shortDescription: 'Color relationship exploration',
    fullDescription: 'Part of a series examining color interactions and harmony.',
    techUsed: ['Digital'],
    featured: false
  },
  {
    id: 12,
    slug: 'it-hurts',
    title: 'It Hurts',
    category: [CATEGORIES.ART],
    thumbnail: 'https://i.imgur.com/P2ZjuZZ.jpeg',
    images: ['https://i.imgur.com/P2ZjuZZ.jpeg'],
    year: 2024,
    shortDescription: 'Emotional digital piece',
    fullDescription: 'A raw expression of feeling through digital medium.',
    techUsed: ['Traditional'],
    featured: false
  },
  {
    id: 13,
    slug: 'sand-and-ivory',
    title: 'Sand & Ivory',
    category: [CATEGORIES.ART, CATEGORIES.DESIGN],
    thumbnail: 'https://i.imgur.com/lpYYsst.jpeg',
    images: ['https://i.imgur.com/lpYYsst.jpeg'],
    year: 2024,
    shortDescription: 'Texture and tone study',
    fullDescription: 'An exploration of subtle color palettes and natural textures.',
    techUsed: ['Traditional'],
    featured: false
  },
  {
    id: 14,
    slug: 'classified',
    title: 'CLASSIFIED',
    category: [CATEGORIES.ART],
    thumbnail: 'https://i.imgur.com/NemCy9q.jpeg',
    images: ['https://i.imgur.com/NemCy9q.jpeg'],
    year: 2024,
    shortDescription: 'Redacted artwork',
    fullDescription: 'Some things are better left unknown.',
    techUsed: ['Traditional'],
    featured: false
  },
  {
    id: 15,
    slug: 'final-piece',
    title: 'Final Piece',
    category: [CATEGORIES.ART],
    thumbnail: 'https://i.imgur.com/ePMe9xN.png',
    images: ['https://i.imgur.com/ePMe9xN.png'],
    year: 2024,
    shortDescription: 'Conclusive work',
    fullDescription: 'A culminating piece in a series of explorations.',
    techUsed: ['Digital'],
    featured: false
  }
];

// Helper functions
export const getProjectBySlug = (slug) =>
  projects.find(p => p.slug === slug);

export const getProjectsByCategory = (category) =>
  projects.filter(p => p.category.includes(category));

export const getFeaturedProjects = () =>
  projects.filter(p => p.featured);
