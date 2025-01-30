interface Project {
  title: string
  description: string
  technologies: string[]
  link?: string
  image?: string
}

interface WorkExperience {
  company: string
  role: string
  period: string
  description: string
  achievements: string[]
}

interface Testimonial {
  quote: string
  author: string
  position: string
  company: string
}

export interface Talent {
  id: string
  name: string
  title: string
  area: string
  experience: number
  description: string
  bio?: string
  skills: string[]
  workExperience?: WorkExperience[]
  projects?: Project[]
  testimonials?: Testimonial[]
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
    id: 'ana-martinez',
    name: 'Ana Martínez',
    title: 'Frontend Developer',
    area: 'Frontend',
    experience: 3,
    description:
      'Desarrolladora frontend especializada en React y TypeScript con experiencia en aplicaciones de alto rendimiento.',
    bio: 'Desarrolladora frontend apasionada por crear experiencias de usuario excepcionales. Especializada en React y TypeScript, con un fuerte enfoque en rendimiento y accesibilidad. Mi objetivo es construir aplicaciones web que no solo se vean bien, sino que también sean rápidas, accesibles y fáciles de usar.',
    skills: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Jest'],
    github: 'https://github.com/anamartinez',
    linkedin: 'https://linkedin.com/in/anamartinez',
    portfolio: 'https://anamartinez.dev',
    avatar: 'https://i.pravatar.cc/300?img=1',
    available: true,
    workExperience: [
      {
        company: 'TechFlow Solutions',
        role: 'Senior Frontend Developer',
        period: 'Marzo 2023 - Presente',
        description:
          'Liderazgo técnico en el desarrollo de aplicaciones web de alto rendimiento',
        achievements: [
          'Rediseño completo de la plataforma principal, mejorando el rendimiento en un 40%',
          'Implementación de sistema de diseño escalable usado por 4 equipos',
          'Mentoring de desarrolladores junior y mid-level',
        ],
      },
    ],
    projects: [
      {
        title: 'E-commerce Dashboard',
        description:
          'Dashboard para gestión de ventas y análisis de datos con visualizaciones interactivas',
        technologies: ['React', 'TypeScript', 'D3.js', 'Tailwind CSS'],
        link: 'https://dashboard-demo.com',
      },
      {
        title: 'Sistema de Diseño',
        description:
          'Biblioteca de componentes reutilizables con documentación interactiva',
        technologies: ['React', 'Storybook', 'Styled Components'],
        link: 'https://design-system-demo.com',
      },
    ],
    testimonials: [
      {
        quote:
          'Ana transformó nuestra aplicación legacy en una experiencia moderna y rápida. Su atención al detalle y conocimientos técnicos son excepcionales.',
        author: 'Miguel Torres',
        position: 'CTO',
        company: 'TechFlow Solutions',
      },
      {
        quote:
          'Su capacidad para resolver problemas complejos y mantener el código limpio mejoró significativamente la calidad de nuestros productos.',
        author: 'Laura Gómez',
        position: 'Product Manager',
        company: 'Digital Innovators',
      },
    ],
  },
  {
    id: 'carlos-rodriguez',
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
    workExperience: [
      {
        company: 'TechFlow Solutions',
        role: 'Senior Frontend Developer',
        period: '2022 - Presente',
        description:
          'Liderazgo técnico en el desarrollo de aplicaciones web de alto rendimiento',
        achievements: [
          'Rediseño completo de la plataforma principal, mejorando el rendimiento en un 40%',
          'Implementación de sistema de diseño escalable usado por 4 equipos',
          'Mentoring de desarrolladores junior y mid-level',
        ],
      },
    ],
    projects: [
      {
        title: 'E-commerce Dashboard',
        description:
          'Dashboard para gestión de ventas y análisis de datos con visualizaciones interactivas',
        technologies: ['React', 'TypeScript', 'D3.js', 'Tailwind CSS'],
        link: 'https://dashboard-demo.com',
      },
      {
        title: 'Sistema de Diseño',
        description:
          'Biblioteca de componentes reutilizables con documentación interactiva',
        technologies: ['React', 'Storybook', 'Styled Components'],
        link: 'https://design-system-demo.com',
      },
    ],
    testimonials: [
      {
        quote:
          'Ana transformó nuestra aplicación legacy en una experiencia moderna y rápida. Su atención al detalle y conocimientos técnicos son excepcionales.',
        author: 'Miguel Torres',
        position: 'CTO',
        company: 'TechFlow Solutions',
      },
      {
        quote:
          'Su capacidad para resolver problemas complejos y mantener el código limpio mejoró significativamente la calidad de nuestros productos.',
        author: 'Laura Gómez',
        position: 'Product Manager',
        company: 'Digital Innovators',
      },
    ],
  },
  {
    id: 'laura-sanchez',
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
    workExperience: [
      {
        company: 'TechFlow Solutions',
        role: 'Senior Frontend Developer',
        period: '2022 - Presente',
        description:
          'Liderazgo técnico en el desarrollo de aplicaciones web de alto rendimiento',
        achievements: [
          'Rediseño completo de la plataforma principal, mejorando el rendimiento en un 40%',
          'Implementación de sistema de diseño escalable usado por 4 equipos',
          'Mentoring de desarrolladores junior y mid-level',
        ],
      },
    ],
    projects: [
      {
        title: 'E-commerce Dashboard',
        description:
          'Dashboard para gestión de ventas y análisis de datos con visualizaciones interactivas',
        technologies: ['React', 'TypeScript', 'D3.js', 'Tailwind CSS'],
        link: 'https://dashboard-demo.com',
      },
      {
        title: 'Sistema de Diseño',
        description:
          'Biblioteca de componentes reutilizables con documentación interactiva',
        technologies: ['React', 'Storybook', 'Styled Components'],
        link: 'https://design-system-demo.com',
      },
    ],
    testimonials: [
      {
        quote:
          'Ana transformó nuestra aplicación legacy en una experiencia moderna y rápida. Su atención al detalle y conocimientos técnicos son excepcionales.',
        author: 'Miguel Torres',
        position: 'CTO',
        company: 'TechFlow Solutions',
      },
      {
        quote:
          'Su capacidad para resolver problemas complejos y mantener el código limpio mejoró significativamente la calidad de nuestros productos.',
        author: 'Laura Gómez',
        position: 'Product Manager',
        company: 'Digital Innovators',
      },
    ],
  },
  {
    id: 'laura-sanchez',
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
    workExperience: [
      {
        company: 'TechFlow Solutions',
        role: 'Senior Frontend Developer',
        period: '2022 - Presente',
        description:
          'Liderazgo técnico en el desarrollo de aplicaciones web de alto rendimiento',
        achievements: [
          'Rediseño completo de la plataforma principal, mejorando el rendimiento en un 40%',
          'Implementación de sistema de diseño escalable usado por 4 equipos',
          'Mentoring de desarrolladores junior y mid-level',
        ],
      },
    ],
    projects: [
      {
        title: 'E-commerce Dashboard',
        description:
          'Dashboard para gestión de ventas y análisis de datos con visualizaciones interactivas',
        technologies: ['React', 'TypeScript', 'D3.js', 'Tailwind CSS'],
        link: 'https://dashboard-demo.com',
      },
      {
        title: 'Sistema de Diseño',
        description:
          'Biblioteca de componentes reutilizables con documentación interactiva',
        technologies: ['React', 'Storybook', 'Styled Components'],
        link: 'https://design-system-demo.com',
      },
    ],
    testimonials: [
      {
        quote:
          'Ana transformó nuestra aplicación legacy en una experiencia moderna y rápida. Su atención al detalle y conocimientos técnicos son excepcionales.',
        author: 'Miguel Torres',
        position: 'CTO',
        company: 'TechFlow Solutions',
      },
      {
        quote:
          'Su capacidad para resolver problemas complejos y mantener el código limpio mejoró significativamente la calidad de nuestros productos.',
        author: 'Laura Gómez',
        position: 'Product Manager',
        company: 'Digital Innovators',
      },
    ],
  },
]
