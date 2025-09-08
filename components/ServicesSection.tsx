'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

interface Service {
  title: string
  description: string
  features: string[]
  icon: string
  color: string
}

const services: Service[] = [
  {
    title: 'Branded builds',
    description: 'On-brand design, clear copy, and performant implementation that reflects your unique identity.',
    features: ['Custom Design System', 'Brand Guidelines Integration', 'Performance Optimization', 'Mobile-First Approach'],
    icon: '🎨',
    color: 'from-molten to-gold'
  },
  {
    title: 'Flexible packages',
    description: 'Choose one-and-done or ongoing care that fits your needs and budget perfectly.',
    features: ['One-time Builds', 'Ongoing Maintenance', 'Feature Updates', 'Scalable Solutions'],
    icon: '📦',
    color: 'from-gold to-molten'
  },
  {
    title: 'Fast & accessible',
    description: 'Built with accessibility and performance best practices from the ground up.',
    features: ['Sub-2s Load Times', 'WCAG 2.1 Compliance', 'SEO Optimized', 'Core Web Vitals'],
    icon: '⚡',
    color: 'from-steel to-molten'
  },
  {
    title: 'Transparent pricing',
    description: 'Clear upfront costs and flexible add-ons. No surprises, no hidden fees.',
    features: ['Fixed-Price Packages', 'Clear Scope Definition', 'No Hidden Costs', 'Value-Based Pricing'],
    icon: '💎',
    color: 'from-molten to-steel'
  }
]

const ServiceCard = ({ service, index }: { service: Service; index: number }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, rotateY: -15 }}
      whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      viewport={{ once: true }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative h-auto md:h-full overflow-hidden rounded-2xl bg-white shadow-lg border border-steel/10 transition-all duration-500 hover:shadow-2xl focus-within:shadow-xl p-6 flex flex-col gap-4"
      style={{
        transform: isHovered ? 'translateY(-10px)' : 'translateY(0px)',
      }}
    >
      {/* Animated background gradient */}
      <motion.div
        className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
      />

      {/* Icon with animation */}
      <motion.div
        className="text-4xl mb-2"
        animate={{
          scale: isHovered ? 1.2 : 1,
          rotate: isHovered ? 10 : 0,
        }}
        transition={{ duration: 0.3 }}
      >
        {service.icon}
      </motion.div>

      {/* Title */}
      <h3 className="font-bold text-xl text-steel group-hover:text-molten transition-colors duration-300">
        {service.title}
      </h3>

      {/* Description */}
      <p className="text-steel/80 leading-relaxed flex-1">
        {service.description}
      </p>

      {/* Features list */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ 
          opacity: isHovered ? 1 : 0, 
          height: isHovered ? 'auto' : 0 
        }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <div className="pt-2 border-t border-steel/10">
          <ul className="space-y-1 text-sm text-steel/70">
            {service.features.map((feature, idx) => (
              <motion.li
                key={feature}
                initial={{ x: -10, opacity: 0 }}
                animate={{ 
                  x: isHovered ? 0 : -10, 
                  opacity: isHovered ? 1 : 0 
                }}
                transition={{ duration: 0.3, delay: idx * 0.1 }}
                className="flex items-center gap-2"
              >
                <span className="w-1 h-1 bg-molten rounded-full" />
                {feature}
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.div>

      {/* Animated border */}
      <motion.div
        className={`absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r ${service.color}`}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        style={{ transformOrigin: 'left' }}
      />

      {/* Floating particles on hover */}
      {isHovered && (
        <>
          {Array.from({ length: 3 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-molten/40 rounded-full"
              style={{
                left: `${20 + i * 30}%`,
                top: `${30 + i * 20}%`,
              }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ 
                scale: [0, 1, 0], 
                opacity: [0, 1, 0],
                y: [-10, -30, -50]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.5,
              }}
            />
          ))}
        </>
      )}
    </motion.div>
  )
}

export default function ServicesSection() {
  return (
    <section className="max-w-[1100px] mx-auto px-6 py-16 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-extrabold text-steel mb-4">
          What Makes Us Different
        </h2>
        <p className="text-lg text-steel/80 max-w-2xl mx-auto">
          Modern web solutions built with cutting-edge technology and creative vision
        </p>
      </motion.div>

      {/* Services grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-start md:items-stretch">
        {services.map((service, index) => (
          <ServiceCard key={service.title} service={service} index={index} />
        ))}
      </div>

      {/* Call to action */}
      <motion.div
        className="text-center mt-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <motion.div
          className="inline-flex items-center gap-4 px-6 py-3 bg-gradient-to-r from-molten to-gold text-white rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.98 }}
        >
          <span>Ready to get started?</span>
          <motion.span
            animate={{ x: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            →
          </motion.span>
        </motion.div>
      </motion.div>
    </section>
  )
}