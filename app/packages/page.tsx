'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

interface CardProps {
  title: string
  price: string
  children: React.ReactNode
  delay?: number
  featured?: boolean
}

function Card({ title, price, children, delay = 0, featured = false }: CardProps) {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  return (
    <motion.article
      ref={ref}
      initial={{ y: 50, opacity: 0, scale: 0.95 }}
      animate={{ 
        y: inView ? 0 : 50, 
        opacity: inView ? 1 : 0, 
        scale: inView ? 1 : 0.95 
      }}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
      className={`group relative overflow-hidden rounded-xl border p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
        featured 
          ? 'border-molten/50 bg-gradient-to-br from-molten/5 to-gold/5 ring-2 ring-molten/20' 
          : 'border-molten/30 bg-white/80 backdrop-blur-sm'
      }`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Best Deal Badge */}
      {featured && (
        <motion.div
          className="absolute top-2 right-2 bg-gradient-to-r from-molten to-gold text-white text-xs font-bold px-2 py-0.5 rounded-full shadow-lg z-50"
          style={{ zIndex: 1000 }}
          initial={{ scale: 0 }}
          animate={{ scale: inView ? 1 : 0 }}
          transition={{ duration: 0.5, delay: delay + 0.6, type: "spring", bounce: 0.4 }}
        >
          Best Deal
        </motion.div>
      )}
      
      <div className="relative z-10">
        <motion.h3 
          className={`text-xl font-extrabold mb-2 ${featured ? 'text-molten' : 'text-steel'}`}
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: inView ? 0 : -20, opacity: inView ? 1 : 0 }}
          transition={{ duration: 0.4, delay: delay + 0.1 }}
        >
          {title}
        </motion.h3>
        <motion.p 
          className={`font-semibold mb-4 text-lg ${featured ? 'text-gold' : 'text-molten'}`}
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: inView ? 0 : -20, opacity: inView ? 1 : 0 }}
          transition={{ duration: 0.4, delay: delay + 0.2 }}
        >
          {price}
        </motion.p>
        <motion.div 
          className="text-steel/80"
          initial={{ opacity: 0 }}
          animate={{ opacity: inView ? 1 : 0 }}
          transition={{ duration: 0.4, delay: delay + 0.3 }}
        >
          {children}
        </motion.div>
      </div>
      
      {/* Animated accent line */}
      <motion.span
        className={`absolute inset-x-0 bottom-0 h-[3px] rounded-b-xl ${
          featured ? 'bg-gradient-to-r from-molten to-gold' : 'bg-molten'
        }`}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: inView ? 1 : 0 }}
        transition={{ duration: 0.6, delay: delay + 0.4, ease: 'easeOut' }}
        style={{ transformOrigin: 'left' }}
      />
      
      {/* Background gradient on hover */}
      <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0 ${
        featured 
          ? 'bg-gradient-to-br from-molten/10 to-gold/10' 
          : 'bg-gradient-to-br from-molten/5 to-gold/5'
      }`} />
    </motion.article>
  )
}

export default function PackagesPage() {
  const [headerRef, headerInView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  return (
    <section className="space-y-16 section-fade relative z-10">
      {/* Animated accent bar */}
      <motion.div 
        className="w-full h-[3px] md:h-[4px] bg-gradient-to-r from-molten to-gold"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        style={{ transformOrigin: 'left' }}
        aria-hidden="true" 
      />
      
      <motion.header 
        ref={headerRef}
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: headerInView ? 0 : 30, opacity: headerInView ? 1 : 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="text-center"
      >
        <motion.h1 
          className="text-4xl md:text-5xl font-extrabold mb-4 text-steel"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: headerInView ? 0 : 20, opacity: headerInView ? 1 : 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Transparent Packages
        </motion.h1>
        <motion.p 
          className="text-lg md:text-xl text-steel/80 max-w-2xl mx-auto"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: headerInView ? 0 : 20, opacity: headerInView ? 1 : 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Clear options for every stage of your business journey. No hidden fees, no surprises.
        </motion.p>
      </motion.header>

      {/* Build & Hand Off */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <motion.h2 
          className="text-2xl md:text-3xl font-extrabold mb-3 text-steel"
          initial={{ x: -30, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Build & Hand Off
        </motion.h2>
        <motion.p 
          className="text-steel/80 mb-8 text-lg"
          initial={{ x: -30, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          One simple setup fee covers your website build, with add-ons available at each tier.
        </motion.p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 pt-8 px-2">
          <Card title="Basic Site (Starter)" price="$300 flat fee" delay={0.1}>
            <ul className="list-disc pl-5 space-y-1">
              <li>1–3 pages (Home, About, Contact)</li>
              <li>Fully responsive design that works on any device</li>
              <li>Business info, hours, services/menu, contact form</li>
              <li>Basic SEO setup for search visibility</li>
            </ul>
          </Card>
          <Card title="Business Site (Professional)" price="$500 flat fee" delay={0.2} featured={true}>
            <ul className="list-disc pl-5 space-y-1">
              <li>4–6 pages (adds Services, Gallery, Testimonials)</li>
              <li>Branded look using your logo and colors</li>
              <li>Social links and Google Map embedded</li>
              <li>Short handoff tutorial for updates</li>
            </ul>
          </Card>
          <Card title="Premium Site (Showcase)" price="$750–$900 flat fee" delay={0.3}>
            <ul className="list-disc pl-5 space-y-1">
              <li>6–10 pages (Blog, Menu, Booking, or light e‑commerce)</li>
              <li>Custom design touches and polish</li>
              <li>Up to 20 product uploads</li>
              <li>Analytics connected and 30 days of email support</li>
            </ul>
          </Card>
        </div>
      </motion.div>

      {/* Hosting & Maintenance */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <motion.h2 
          className="text-2xl md:text-3xl font-extrabold mb-3 text-steel"
          initial={{ x: -30, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Hosting & Maintenance
        </motion.h2>
        <motion.p 
          className="text-steel/80 mb-8 text-lg"
          initial={{ x: -30, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          Ongoing monthly plans for hosting, updates, and support. Choose the level of care that fits your business.
        </motion.p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 pt-8 px-2">
          <Card title="Basic Plan" price="$25/month + $300–$400 setup" delay={0.3}>
            <ul className="list-disc pl-5 space-y-1">
              <li>Managed hosting and domain</li>
              <li>SSL certificate included</li>
              <li>Monthly backups</li>
              <li>Email support for issues</li>
            </ul>
          </Card>
          <Card title="Growth Plan" price="$50/month + $400–$500 setup" delay={0.4} featured={true}>
            <ul className="list-disc pl-5 space-y-1">
              <li>Everything in Basic, plus monthly updates</li>
              <li>Two minor content edits per month</li>
              <li>Security and performance monitoring</li>
            </ul>
          </Card>
          <Card title="Pro Plan" price="$100/month + $600–$700 setup" delay={0.5}>
            <ul className="list-disc pl-5 space-y-1">
              <li>Everything in Growth, plus priority support</li>
              <li>Unlimited reasonable content edits</li>
              <li>SEO monitoring with quarterly review</li>
              <li>Advanced analytics dashboard</li>
            </ul>
          </Card>
        </div>
      </motion.div>
    </section>
  )
}
