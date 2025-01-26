export interface Talent {
  name: string
  title: string
  area: string
  experience: number
  description: string
  skills: string[]
  github?: string
  linkedin?: string
  portfolio?: string
  avatar: string
  available: boolean
}

export const areas = [
  'Frontend',
  'Backend',
  'Fullstack',
  'Mobile',
  'DevOps',
  'UX/UI',
  'Data Science',
] as const

export const talents: Talent[] = [
  {
    name: 'Ana Martínez',
    title: 'Frontend Developer',
    area: 'Frontend',
    experience: 3,
    description:
      'Desarrolladora frontend especializada en React y TypeScript con experiencia en aplicaciones de alto rendimiento.',
    skills: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Jest'],
    github: 'https://github.com/anamartinez',
    linkedin: 'https://linkedin.com/in/anamartinez',
    portfolio: 'https://anamartinez.dev',
    avatar: 'https://i.pravatar.cc/300?img=1',
    available: true,
  },
  {
    name: 'Carlos Rodríguez',
    title: 'Backend Developer',
    area: 'Backend',
    experience: 5,
    description:
      'Desarrollador backend con experiencia en arquitecturas distribuidas y microservicios.',
    skills: ['Node.js', 'Python', 'PostgreSQL', 'Docker', 'AWS'],
    github: 'https://github.com/carlosrodriguez',
    linkedin: 'https://linkedin.com/in/carlosrodriguez',
    avatar: '',
    available: true,
  },
  {
    name: 'Laura Sánchez',
    title: 'Fullstack Developer',
    area: 'Fullstack',
    experience: 4,
    description:
      'Desarrolladora fullstack con pasión por crear experiencias web completas y escalables.',
    skills: ['React', 'Node.js', 'MongoDB', 'Express', 'GraphQL'],
    github: 'https://github.com/laurasanchez',
    linkedin: 'https://linkedin.com/in/laurasanchez',
    portfolio: 'https://laurasanchez.dev',
    avatar: 'https://i.pravatar.cc/300?img=3',
    available: true,
  },
  {
    name: 'Laura Sánchez',
    title: 'Fullstack Developer',
    area: 'Mobile',
    experience: 4,
    description:
      'Desarrolladora fullstack con pasión por crear experiencias web completas y escalables.',
    skills: ['React', 'Node.js', 'MongoDB', 'Express', 'GraphQL'],
    github: 'https://github.com/laurasanchez',
    linkedin: 'https://linkedin.com/in/laurasanchez',
    portfolio: 'https://laurasanchez.dev',
    avatar: 'https://i.pravatar.cc/300?img=3',
    available: true,
  },
]
