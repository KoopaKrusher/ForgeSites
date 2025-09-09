'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import PortfolioGrid from './PortfolioGrid'
import { useEffect, useState } from 'react'

const OptimizedTypewriterText = ({ text, delay = 0 }: { text: string; delay?: number }) => {
  const [displayText, setDisplayText] = useState('')
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    
    if (prefersReducedMotion) {
      setDisplayText(text)
      setIsComplete(true)
      return
    }

    let currentIndex = 0
    let intervalId: NodeJS.Timeout

    const startTimer = setTimeout(() => {
      intervalId = setInterval(() => {
        if (currentIndex < text.length) {
          setDisplayText(text.slice(0, currentIndex + 1))
          currentIndex++
        } else {
          setIsComplete(true)
          clearInterval(intervalId)
        }
      }, 80)
    }, delay)

    return () => {
      clearTimeout(startTimer)
      if (intervalId) clearInterval(intervalId)
    }
  }, [text, delay])

  return (
    <span>
      {displayText}
      {!isComplete && (
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.8, repeat: Infinity, repeatType: 'reverse' }}
          className="inline-block w-1 h-12 bg-molten ml-1"
        />
      )}
    </span>
  )
}

const SimpleFloatingElement = ({ 
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
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default function OptimizedAnimatedHero() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  const prefersReducedMotion = typeof window !== 'undefined' 
    ? window.matchMedia('(prefers-reduced-motion: reduce)').matches 
    : false

  return (
    <section className="relative section-fade-b" ref={ref}>
      {/* Simplified accent bar */}
      <motion.div 
        className="w-full h-[3px] md:h-[4px] bg-molten"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: inView ? 1 : 0 }}
        transition={{ duration: prefersReducedMotion ? 0.1 : 0.8, ease: 'easeOut' }}
        style={{ transformOrigin: 'left' }}
        aria-hidden="true" 
      />
      
      {/* Reduced floating particles - only show on desktop */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none hidden md:block">
        {Array.from({ length: 3 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-molten/20 rounded-full"
            style={{
              left: `${30 + i * 20}%`,
              top: `${40 + (i % 2) * 20}%`,
            }}
            animate={prefersReducedMotion ? {} : {
              y: [-10, 10, -10],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 6 + i,
              repeat: Infinity,
              repeatType: 'reverse',
              delay: i * 0.8,
            }}
          />
        ))}
      </div>

      <div className="max-w-[1100px] mx-auto px-6 py-16 md:py-24 relative z-10">
        <div className="grid gap-10 md:gap-12">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: inView ? 1 : 0 }}
            transition={{ duration: prefersReducedMotion ? 0.1 : 0.8 }}
          >
            <motion.h1 
              className="text-4xl md:text-6xl font-extrabold text-steel mb-6"
              initial={{ y: prefersReducedMotion ? 0 : 30, opacity: 0 }}
              animate={{ y: inView ? 0 : (prefersReducedMotion ? 0 : 30), opacity: inView ? 1 : 0 }}
              transition={{ duration: prefersReducedMotion ? 0.1 : 0.6 }}
            >
              <OptimizedTypewriterText text="Websites Forged for You" delay={prefersReducedMotion ? 0 : 300} />
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl text-steel/80 max-w-prose mb-8"
              initial={{ y: prefersReducedMotion ? 0 : 20, opacity: 0 }}
              animate={{ y: inView ? 0 : (prefersReducedMotion ? 0 : 20), opacity: inView ? 1 : 0 }}
              transition={{ duration: prefersReducedMotion ? 0.1 : 0.6, delay: prefersReducedMotion ? 0 : 1 }}
            >
              Affordable, modern sites built for small businesses with cutting-edge technology and creative vision.
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap items-center gap-4"
              initial={{ y: prefersReducedMotion ? 0 : 20, opacity: 0 }}
              animate={{ y: inView ? 0 : (prefersReducedMotion ? 0 : 20), opacity: inView ? 1 : 0 }}
              transition={{ duration: prefersReducedMotion ? 0.1 : 0.6, delay: prefersReducedMotion ? 0 : 1.4 }}
            >
              <SimpleFloatingElement delay={prefersReducedMotion ? 0 : 1.6}>
                <Link
                  href="/request"
                  className="group relative inline-block rounded-md bg-molten text-white px-6 py-3 font-semibold transition-all duration-300 hover:bg-steel hover:text-bone focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                  aria-label="Request a Quote"
                >
                  <span className="relative z-10">Request a Quote</span>
                </Link>
              </SimpleFloatingElement>
              
              <SimpleFloatingElement delay={prefersReducedMotion ? 0 : 1.8}>
                <Link
                  href="/packages"
                  className="group inline-flex items-center rounded-xl border border-steel/40 text-steel px-6 py-3 font-semibold transition-all duration-300 hover:bg-steel/10 hover:border-steel/60"
                >
                  View Packages
                  <motion.span
                    className="ml-2 text-molten"
                    initial={{ x: 0 }}
                    whileHover={prefersReducedMotion ? {} : { x: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    →
                  </motion.span>
                </Link>
              </SimpleFloatingElement>
            </motion.div>
          </motion.div>
          
          {/* Lazy load portfolio grid */}
          <motion.div 
            className="mx-auto w-full"
            initial={{ y: prefersReducedMotion ? 0 : 40, opacity: 0 }}
            animate={{ 
              y: inView ? 0 : (prefersReducedMotion ? 0 : 40), 
              opacity: inView ? 1 : 0
            }}
            transition={{ duration: prefersReducedMotion ? 0.1 : 0.8, delay: prefersReducedMotion ? 0 : 2.5 }}
          >
            <PortfolioGrid />
          </motion.div>
        </div>
      </div>
    </section>
  )
}