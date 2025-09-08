'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

interface Skill {
  name: string
  level: number
  category: string
}

const skills: Skill[] = [
  { name: 'Next.js', level: 95, category: 'Frontend' },
  { name: 'React', level: 98, category: 'Frontend' },
  { name: 'TypeScript', level: 92, category: 'Frontend' },
  { name: 'Tailwind CSS', level: 96, category: 'Frontend' },
  { name: 'Node.js', level: 88, category: 'Backend' },
  { name: 'PostgreSQL', level: 85, category: 'Backend' },
  { name: 'Prisma', level: 90, category: 'Backend' },
  { name: 'AWS', level: 82, category: 'DevOps' },
  { name: 'Docker', level: 78, category: 'DevOps' },
  { name: 'Figma', level: 87, category: 'Design' }
]

const testimonials = [
  {
    quote: "Braden delivered an exceptional website that exceeded our expectations. Our conversion rate increased by 40% within the first month.",
    author: "Sarah Johnson",
    company: "TechStart Solutions",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face"
  },
  {
    quote: "Professional, responsive, and incredibly talented. The site he built for us handles our growing traffic flawlessly.",
    author: "Michael Chen", 
    company: "GrowthLab Inc",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face"
  },
  {
    quote: "Working with Braden was a game-changer. He understood our vision perfectly and brought it to life with modern technology.",
    author: "Emily Rodriguez",
    company: "Creative Agency Co",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face"
  }
]

const SkillBar = ({ skill, delay }: { skill: Skill; delay: number }) => {
  const [inView, setInView] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      onViewportEnter={() => setInView(true)}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      className="mb-4"
    >
      <div className="flex justify-between items-center mb-2">
        <span className="font-medium text-steel">{skill.name}</span>
        <span className="text-sm text-steel/70">{skill.level}%</span>
      </div>
      <div className="w-full bg-steel/10 rounded-full h-2 overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-molten to-gold rounded-full"
          initial={{ width: 0 }}
          animate={{ width: inView ? `${skill.level}%` : 0 }}
          transition={{ duration: 1, delay: delay + 0.2, ease: 'easeOut' }}
        />
      </div>
    </motion.div>
  )
}

const TestimonialCard = ({ testimonial, index }: { testimonial: typeof testimonials[0]; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      viewport={{ once: true }}
      className="bg-white p-6 rounded-2xl shadow-lg border border-steel/10 hover:shadow-xl transition-shadow duration-300"
    >
      <div className="mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <span key={i} className="text-gold text-xl">★</span>
        ))}
      </div>
      <blockquote className="text-steel/80 mb-4 italic">
        &quot;{testimonial.quote}&quot;
      </blockquote>
      <div className="flex items-center gap-3">
        <img 
          src={testimonial.image} 
          alt={testimonial.author}
          className="w-10 h-10 rounded-full object-cover"
        />
        <div>
          <div className="font-semibold text-steel">{testimonial.author}</div>
          <div className="text-sm text-steel/60">{testimonial.company}</div>
        </div>
      </div>
    </motion.div>
  )
}

export default function AboutSection() {
  const [activeTab, setActiveTab] = useState('story')
  const skillCategories = Array.from(new Set(skills.map(s => s.category)))

  return (
    <section className="max-w-[1100px] mx-auto px-6 py-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-extrabold text-steel mb-4">
          About Braden
        </h2>
        <p className="text-lg text-steel/80 max-w-2xl mx-auto">
          Crafting exceptional digital experiences with modern technology and creative vision
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-12 mb-16">
        {/* Profile section */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="relative mb-6">
            <motion.div
              className="w-48 h-48 mx-auto lg:mx-0 rounded-2xl bg-gradient-to-br from-molten to-gold p-1"
              whileHover={{ rotate: 3, scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-full h-full bg-bone rounded-2xl flex items-center justify-center text-6xl">
                👨‍💻
              </div>
            </motion.div>
            <motion.div
              className="absolute -top-2 -right-2 w-8 h-8 bg-molten rounded-full flex items-center justify-center text-white"
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                ease: 'easeInOut'
              }}
            >
              ⚡
            </motion.div>
          </div>

          {/* Tab navigation */}
          <div className="flex gap-2 mb-6">
            {[
              { id: 'story', label: 'My Story' },
              { id: 'approach', label: 'Approach' },
              { id: 'experience', label: 'Experience' }
            ].map((tab) => (
              <motion.button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                  activeTab === tab.id
                    ? 'bg-molten text-white'
                    : 'bg-steel/10 text-steel hover:bg-steel/20'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {tab.label}
              </motion.button>
            ))}
          </div>

          {/* Tab content */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="space-y-4 text-steel/80"
          >
            {activeTab === 'story' && (
              <>
                <p>
                  Hi! I&apos;m Braden, a passionate web developer with over 5 years of experience 
                  creating exceptional digital experiences. I specialize in modern web technologies 
                  and love bringing creative visions to life through code.
                </p>
                <p>
                  My journey started with a simple curiosity about how websites work, and it 
                  quickly evolved into a deep passion for crafting user-centered solutions that 
                  drive real business results.
                </p>
              </>
            )}
            {activeTab === 'approach' && (
              <>
                <p>
                  I believe in a collaborative approach that puts your business goals at the center. 
                  Every project starts with understanding your vision, your users, and your unique challenges.
                </p>
                <p>
                  My process focuses on clean, maintainable code, performance optimization, and 
                  user experience that converts visitors into customers. I stay current with the 
                  latest technologies while prioritizing proven, reliable solutions.
                </p>
              </>
            )}
            {activeTab === 'experience' && (
              <>
                <p>
                  Over 50+ successful projects delivered for clients ranging from startups to 
                  established businesses. Specialized in e-commerce, SaaS platforms, and 
                  professional service websites.
                </p>
                <p>
                  Featured in design showcases for innovative use of modern web technologies. 
                  Consistently deliver projects on time and within budget while exceeding 
                  performance expectations.
                </p>
              </>
            )}
          </motion.div>
        </motion.div>

        {/* Skills section */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-steel mb-6">Technical Skills</h3>
          
          {skillCategories.map((category, categoryIndex) => (
            <div key={category} className="mb-8">
              <h4 className="text-lg font-semibold text-steel mb-4 flex items-center gap-2">
                <span className="w-3 h-3 bg-molten rounded-full" />
                {category}
              </h4>
              {skills
                .filter(skill => skill.category === category)
                .map((skill, skillIndex) => (
                  <SkillBar 
                    key={skill.name} 
                    skill={skill} 
                    delay={categoryIndex * 0.1 + skillIndex * 0.05} 
                  />
                ))}
            </div>
          ))}
        </motion.div>
      </div>

      {/* Testimonials */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h3 className="text-2xl font-bold text-steel text-center mb-8">
          What Clients Say
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} index={index} />
          ))}
        </div>
      </motion.div>
    </section>
  )
}