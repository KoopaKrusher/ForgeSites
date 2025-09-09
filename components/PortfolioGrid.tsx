'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import Link from 'next/link'

interface Project {
  id: string
  title: string
  description: string
  image: string
  liveUrl: string
  caseStudyUrl?: string
  technologies: string[]
  category: string
  featured?: boolean
}

// Sample portfolio data - you can replace this with your actual projects
const portfolioProjects: Project[] = [
  {
    id: '1',
    title: 'E-commerce Platform',
    description: 'Modern e-commerce solution with real-time inventory and payment processing',
    image: '/e-com-example.png',
    liveUrl: 'https://e-com-example.vercel.app/',
    caseStudyUrl: '/case-studies/ecommerce',
    technologies: ['Next.js', 'TypeScript', 'Stripe', 'Prisma'],
    category: 'E-commerce',
    featured: true
  },
  {
    id: '2',
    title: 'SaaS Dashboard',
    description: 'Analytics dashboard with real-time data visualization and user management',
    image: '/saas-example.png',
    liveUrl: 'https://saas-example.vercel.app/',
    caseStudyUrl: '/case-studies/saas-dashboard',
    technologies: ['React', 'D3.js', 'Node.js', 'MongoDB'],
    category: 'SaaS',
    featured: true
  },
  {
    id: '3',
    title: 'Restaurant Website',
    description: 'Beautiful restaurant website with online ordering and reservation system',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&crop=top',
    liveUrl: 'https://example.com',
    technologies: ['Next.js', 'Tailwind', 'Sanity CMS'],
    category: 'Restaurant'
  },
  {
    id: '4',
    title: 'Portfolio Website',
    description: 'Creative portfolio with custom animations and interactive elements',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&crop=top',
    liveUrl: 'https://example.com',
    technologies: ['React', 'Framer Motion', 'Three.js'],
    category: 'Portfolio'
  },
  {
    id: '5',
    title: 'Medical Practice Site',
    description: 'Professional medical website with appointment booking and patient portal',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&crop=top',
    liveUrl: 'https://example.com',
    technologies: ['Next.js', 'TypeScript', 'Tailwind'],
    category: 'Healthcare'
  },
  {
    id: '6',
    title: 'Real Estate Platform',
    description: 'Property listing platform with advanced search and virtual tours',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&crop=top',
    liveUrl: 'https://example.com',
    caseStudyUrl: '/case-studies/real-estate',
    technologies: ['React', 'Node.js', 'PostgreSQL'],
    category: 'Real Estate'
  },
  {
    id: '7',
    title: 'Fitness App',
    description: 'Mobile-first workout tracking app with social features and progress analytics',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&crop=top',
    liveUrl: 'https://example.com',
    caseStudyUrl: '/case-studies/fitness-app',
    technologies: ['React Native', 'Firebase', 'Chart.js'],
    category: 'Mobile App',
    featured: true
  },
  {
    id: '8',
    title: 'Educational Platform',
    description: 'Interactive learning platform with video courses and student progress tracking',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&crop=top',
    liveUrl: 'https://example.com',
    technologies: ['Next.js', 'Supabase', 'Stripe'],
    category: 'Education'
  }
]

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      viewport={{ once: true }}
      whileHover={{ 
        y: -8,
        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
      }}
      className={`group relative overflow-hidden rounded-2xl bg-white shadow-lg border border-steel/10 transition-all duration-500 hover:border-molten/30 cursor-pointer ${
        project.featured ? 'md:col-span-2' : ''
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image container */}
      <div className="relative overflow-hidden aspect-video bg-bone">
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-steel/80 via-steel/20 to-transparent"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.4 }}
        />
        <motion.img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover"
          loading="lazy"
          decoding="async"
          animate={{ 
            scale: isHovered ? 1.1 : 1,
            filter: isHovered ? 'brightness(0.8)' : 'brightness(1)'
          }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />
        
        {/* Animated shine effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
          initial={{ x: '-100%' }}
          animate={{ x: isHovered ? '200%' : '-100%' }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
        
        {/* Hover overlay with actions */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center gap-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ 
            opacity: isHovered ? 1 : 0,
            y: isHovered ? 0 : 30 
          }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ 
              scale: isHovered ? 1 : 0.8,
              opacity: isHovered ? 1 : 0
            }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <Link
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group/btn px-6 py-3 bg-white/95 backdrop-blur-sm text-steel rounded-xl font-semibold hover:bg-white hover:scale-105 transition-all duration-200 shadow-lg flex items-center gap-2"
            >
              <span>View Live</span>
              <motion.span
                className="text-molten"
                initial={{ x: 0 }}
                whileHover={{ x: 3 }}
                transition={{ duration: 0.2 }}
              >
                ↗
              </motion.span>
            </Link>
          </motion.div>
          {project.caseStudyUrl && (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ 
                scale: isHovered ? 1 : 0.8,
                opacity: isHovered ? 1 : 0
              }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              <Link
                href={project.caseStudyUrl}
                className="px-6 py-3 bg-molten/95 backdrop-blur-sm text-white rounded-xl font-semibold hover:bg-molten hover:scale-105 transition-all duration-200 shadow-lg flex items-center gap-2"
              >
                <span>Case Study</span>
                <motion.span
                  initial={{ x: 0 }}
                  whileHover={{ x: 3 }}
                  transition={{ duration: 0.2 }}
                >
                  →
                </motion.span>
              </Link>
            </motion.div>
          )}
        </motion.div>

        {/* Category badge */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-molten text-white text-sm font-medium rounded-full">
            {project.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-bold text-xl text-steel mb-2 group-hover:text-molten transition-colors duration-200">
          {project.title}
        </h3>
        <p className="text-steel/80 mb-4 line-clamp-2">
          {project.description}
        </p>
        
        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 bg-steel/10 text-steel text-xs font-medium rounded-md"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Animated border */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-molten to-gold"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        style={{ transformOrigin: 'left' }}
      />
    </motion.div>
  )
}

export default function PortfolioGrid() {
  const [filter, setFilter] = useState('All')
  const categories = ['All', ...Array.from(new Set(portfolioProjects.map(p => p.category)))]
  
  // Always show all projects on mobile, use filter on desktop
  const filteredProjects = filter === 'All' 
    ? portfolioProjects 
    : portfolioProjects.filter(p => p.category === filter)

  return (
    <section className="max-w-[1100px] mx-auto px-6 py-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-extrabold text-steel mb-4">
          Recent Projects
        </h2>
        <p className="text-lg text-steel/80 max-w-2xl mx-auto mb-4">
          Example projects showcasing modern web development skills and design capabilities
        </p>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 max-w-2xl mx-auto">
          <p className="text-blue-800 text-sm font-medium flex items-center gap-2">
            <span className="text-blue-600">ℹ️</span>
            These are example projects created to demonstrate web development skills. As a college student building my portfolio, I'm actively seeking my first clients to create real-world projects.
          </p>
        </div>
      </motion.div>

      {/* Filter buttons - only show on desktop */}
      <motion.div
        className="hidden md:flex flex-wrap justify-center gap-2 mb-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        {categories.map((category) => (
          <motion.button
            key={category}
            onClick={() => setFilter(category)}
            className={`px-4 py-2 rounded-full font-medium transition-all duration-200 ${
              filter === category
                ? 'bg-molten text-white'
                : 'bg-steel/10 text-steel hover:bg-steel/20'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {category}
          </motion.button>
        ))}
      </motion.div>

      {/* Project grid */}
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        layout
      >
        {filteredProjects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </motion.div>

      {/* View all projects CTA */}
      <motion.div
        className="text-center mt-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <Link
          href="/portfolio"
          className="inline-flex items-center px-6 py-3 bg-steel text-white rounded-lg font-semibold hover:bg-molten transition-colors duration-200 group"
        >
          View All Projects
          <motion.span
            className="ml-2"
            initial={{ x: 0 }}
            whileHover={{ x: 5 }}
            transition={{ duration: 0.3 }}
          >
            →
          </motion.span>
        </Link>
      </motion.div>
    </section>
  )
}
