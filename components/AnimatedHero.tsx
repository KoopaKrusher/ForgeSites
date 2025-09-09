'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import PortfolioGrid from './PortfolioGrid'
import { useEffect, useState } from 'react'

const TypewriterText = ({ text, delay = 0 }: { text: string; delay?: number }) => {
  const [displayText, setDisplayText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [started, setStarted] = useState(false)

  useEffect(() => {
    if (!started) {
      const startTimer = setTimeout(() => {
        setStarted(true)
      }, delay)
      return () => clearTimeout(startTimer)
    }

    if (started && currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex])
        setCurrentIndex(prev => prev + 1)
      }, 60)
      return () => clearTimeout(timer)
    }
  }, [currentIndex, text, delay, started])

  return (
    <span>
      {displayText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity, repeatType: 'reverse' }}
        className="inline-block w-1 h-12 bg-molten ml-1"
      />
    </span>
  )
}

const FloatingElement = ({ 
  children, 
  delay = 0, 
  className = '' 
}: { 
  children: React.ReactNode
  delay?: number
  className?: string 
}) => {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay, ease: 'easeOut' }}
      whileHover={{ y: -5, transition: { duration: 0.3 } }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default function AnimatedHero() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  return (
    <section className="relative section-fade-b" ref={ref}>
      {/* Animated accent bar */}
      <motion.div 
        className="w-full h-[3px] md:h-[4px] bg-molten"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: inView ? 1 : 0 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        style={{ transformOrigin: 'left' }}
        aria-hidden="true" 
      />
      
      {/* Floating particles background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 6 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-molten/20 rounded-full"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + (i % 3) * 20}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              repeatType: 'reverse',
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      <div className="max-w-[1100px] mx-auto px-6 py-16 md:py-24 relative z-10">
        <div className="grid gap-10 md:gap-12">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: inView ? 1 : 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <motion.h1 
              className="text-4xl md:text-6xl font-extrabold text-steel mb-6"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: inView ? 0 : 50, opacity: inView ? 1 : 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <TypewriterText text="Websites Forged for You" delay={100} />
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl text-steel/80 max-w-prose mb-8"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: inView ? 0 : 30, opacity: inView ? 1 : 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              Affordable, modern sites built for small businesses with cutting-edge technology and creative vision.
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap items-center gap-4"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: inView ? 0 : 20, opacity: inView ? 1 : 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <FloatingElement delay={1.4}>
                <Link
                  href="/request"
                  className="group relative inline-block rounded-md bg-molten text-white px-6 py-3 font-semibold transition-all duration-300 hover:bg-steel hover:text-bone focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold overflow-hidden"
                  aria-label="Request a Quote"
                >
                  <motion.span
                    className="absolute inset-0 bg-gradient-to-r from-molten to-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                  <span className="relative z-10">Request a Quote</span>
                  <motion.div
                    className="absolute inset-0 bg-white/20"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.6 }}
                  />
                </Link>
              </FloatingElement>
              
              <FloatingElement delay={1.6}>
                <Link
                  href="/packages"
                  className="group inline-flex items-center rounded-xl border border-steel/40 text-steel px-6 py-3 font-semibold transition-all duration-300 hover:bg-steel/10 hover:border-steel/60 active:bg-steel/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                >
                  View Packages
                  <motion.span
                    className="ml-2 text-molten"
                    initial={{ x: 0 }}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    →
                  </motion.span>
                </Link>
              </FloatingElement>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="mx-auto w-full"
            initial={{ y: 60, opacity: 0, scale: 0.9 }}
            animate={{ 
              y: inView ? 0 : 60, 
              opacity: inView ? 1 : 0, 
              scale: inView ? 1 : 0.9 
            }}
            transition={{ duration: 1, delay: 2, ease: 'easeOut' }}
          >
            <PortfolioGrid />
          </motion.div>
        </div>
      </div>
    </section>
  )
}