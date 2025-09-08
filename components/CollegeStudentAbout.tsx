'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import Link from 'next/link'
import ClientLogosCarousel from './ClientLogosCarousel'

type ApproachCardProps = {
  title: string
  description: string
  icon: string
  color: string // tailwind gradient classes like 'from-molten to-gold'
  delay?: number
}

function ApproachCard({ title, description, icon, color, delay = 0 }: ApproachCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className={`p-6 rounded-2xl border border-steel/10 bg-white shadow-sm hover:shadow-md transition-shadow duration-300`}
    >
      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center text-2xl mb-4`}>
        <span aria-hidden>{icon}</span>
      </div>
      <h3 className="text-xl font-bold text-steel mb-2">{title}</h3>
      <p className="text-steel/80 text-sm leading-relaxed">{description}</p>
    </motion.div>
  )
}

export default function CollegeStudentAbout() {
  const [activeTab, setActiveTab] = useState('story')

  return (
    <div className="space-y-0">
      {/* Hero Intro */}
      <section className="bg-bone py-20 md:py-28 relative z-10">
        <div className="max-w-[1100px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-steel text-5xl md:text-6xl font-extrabold tracking-tight relative after:block after:h-[3px] after:w-20 after:bg-molten after:mt-4">
              Turning Ideas Into Websites That Work
            </h1>
            <p className="mt-5 max-w-prose text-steel/80 text-lg md:text-xl">
              College student and aspiring web developer, focused on creating modern, 
              performance-optimized websites while building real-world experience.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Personal Story & Journey */}
      <section className="bg-white border-t border-steel/10 py-16 relative z-10">
        <div className="max-w-[1100px] mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Profile section */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="relative mb-6">
                {/* Animated border rings */}
                <motion.div
                  className="absolute inset-0 rounded-3xl bg-gradient-to-br from-molten via-gold to-molten"
                  animate={{ 
                    rotate: [0, 180]
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: 0,
                    ease: 'easeOut'
                  }}
                  style={{ padding: '3px' }}
                >
                  <div className="w-full h-full bg-white rounded-3xl" />
                </motion.div>
                
                {/* Secondary animated ring */}
                <motion.div
                  className="absolute inset-1 rounded-3xl bg-gradient-to-br from-steel via-molten to-gold opacity-60"
                  animate={{ 
                    rotate: [180, 0]
                  }}
                  transition={{ 
                    duration: 1.8, 
                    repeat: 0,
                    ease: 'easeOut'
                  }}
                  style={{ padding: '2px' }}
                >
                  <div className="w-full h-full bg-white rounded-3xl" />
                </motion.div>

                {/* Professional photo */}
                <motion.div
                  className="relative w-48 h-48 mx-auto lg:mx-0 rounded-3xl overflow-hidden bg-gradient-to-br from-molten/10 to-gold/10 p-1"
                  whileHover={{ scale: 1.05, z: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-full h-full bg-white rounded-3xl overflow-hidden">
                    <img 
                      src="/headshot.jpeg"
                      alt="Braden Baney - Web Developer"
                      className="w-full h-full object-cover rounded-3xl transition-all duration-500"
                    />
                    {/* Overlay for professional effect */}
                    <div className="absolute inset-0 bg-gradient-to-t from-steel/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </motion.div>
                
                {/* Status indicator */}
                <motion.div
                  className="absolute -bottom-2 -right-2 w-12 h-12 bg-gradient-to-br from-molten to-gold rounded-full flex items-center justify-center text-white shadow-lg"
                  animate={{ 
                    y: [0, -5, 0],
                    boxShadow: [
                      '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                      '0 10px 15px -3px rgba(255, 107, 44, 0.3)',
                      '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                    ]
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity,
                    ease: 'easeInOut'
                  }}
                >
                  <span className="text-lg">🎓</span>
                </motion.div>
              </div>

              {/* Tab navigation */}
              <div className="flex gap-2 mb-6">
                {[
                  { id: 'story', label: 'My Story' },
                  { id: 'approach', label: 'Approach' },
                  { id: 'goals', label: 'Goals' }
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
                      Hi! I'm Braden, a college student passionate about web development 
                      and modern technology. I'm currently studying Computer Information Systems 
                      while building my skills in React, Next.js, and full-stack development.
                    </p>
                    <p>
                      What started as curiosity about how websites work has grown into a 
                      genuine passion for creating user-friendly digital experiences. I love 
                      learning new technologies and applying them to solve real-world problems.
                    </p>
                  </>
                )}
                {activeTab === 'approach' && (
                  <>
                    <p>
                      I believe in learning by doing and staying current with modern web 
                      development practices. Every project is an opportunity to improve my 
                      skills while delivering value to clients.
                    </p>
                    <p>
                      My focus is on clean, maintainable code and user-centered design. 
                      I prioritize performance, accessibility, and responsive design in 
                      every project, ensuring websites work great on all devices.
                    </p>
                  </>
                )}
                {activeTab === 'goals' && (
                  <>
                    <p>
                      My goal is to gain real-world experience while helping small businesses 
                      establish their online presence with affordable, professional websites.
                    </p>
                    <p>
                      I'm actively seeking opportunities to work with clients who need modern, 
                      performance-optimized websites. Each project helps me grow as a developer 
                      while providing genuine value to business owners.
                    </p>
                  </>
                )}
              </motion.div>
            </motion.div>

            {/* Learning & Experience section */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-extrabold text-steel mb-6">
                Learning & Growth
              </h2>
              
              <div className="space-y-6">
                <div className="bg-bone p-6 rounded-2xl">
                  <h3 className="text-xl font-bold text-steel mb-3 flex items-center gap-2">
                    <span className="w-3 h-3 bg-molten rounded-full" />
                    Current Focus
                  </h3>
                  <ul className="space-y-2 text-steel/80">
                    <li>• Systems analysis & design</li>
                    <li>• Database management</li>
                    <li>• Programming software solutions</li>
                    <li>• Web development</li>
                    <li>• AI integration</li>
                  </ul>
                </div>

                <div className="bg-white border border-steel/10 p-6 rounded-2xl">
                  <h3 className="text-xl font-bold text-steel mb-3 flex items-center gap-2">
                    <span className="w-3 h-3 bg-gold rounded-full" />
                    Learning Approach
                  </h3>
                  <p className="text-steel/80">
                    I learn through hands-on projects, online courses, and staying up-to-date 
                    with the latest web development trends. Every project teaches me something new 
                    about building better user experiences.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Approach & Philosophy */}
      <section className="bg-bone border-t border-steel/10 py-20 md:py-24 relative z-10">
        <div className="max-w-[1100px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-steel text-3xl md:text-4xl font-extrabold uppercase tracking-wider relative after:block after:h-[2px] after:w-16 after:bg-molten after:mt-3">
              My Approach
            </h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
              <ApproachCard
                title="Learn by Doing"
                description="Every project is a learning opportunity. I approach each challenge with curiosity and dedication to finding the best solution."
                icon="🎯"
                color="from-molten to-gold"
                delay={0.1}
              />
              
              <ApproachCard
                title="Modern Standards"
                description="I focus on current web development best practices, ensuring sites are fast, accessible, and built with modern technologies."
                icon="⚡"
                color="from-steel to-molten"
                delay={0.2}
              />
              
              <ApproachCard
                title="Affordable Quality"
                description="As a student developer, I offer competitive pricing while maintaining high standards and providing genuine value to small businesses."
                icon="💎"
                color="from-gold to-molten"
                delay={0.3}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* No Reviews Yet Section */}
      <section className="bg-white border-t border-steel/10 py-16 relative z-10">
        <div className="max-w-[1100px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h3 className="text-2xl font-bold text-steel text-center mb-8">
              Client Reviews
            </h3>
            <div className="max-w-2xl mx-auto bg-gray-50 border-2 border-dashed border-gray-300 rounded-2xl p-12">
              <div className="text-6xl mb-4">🌟</div>
              <h4 className="text-xl font-semibold text-steel mb-3">
                First Reviews Coming Soon!
              </h4>
              <p className="text-steel/70 mb-6">
                As a student developer building my portfolio, I'm actively seeking my first clients. 
                Your project could be featured here as my first success story!
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  href="/request"
                  className="inline-flex items-center px-6 py-3 bg-molten text-white rounded-lg font-semibold hover:bg-steel transition-colors duration-200 group"
                >
                  <span>Be My First Client</span>
                  <motion.span
                    className="ml-2"
                    initial={{ x: 0 }}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    →
                  </motion.span>
                </Link>
                <Link
                  href="/packages"
                  className="inline-flex items-center px-6 py-3 border border-steel/30 text-steel rounded-lg font-semibold hover:bg-steel/10 transition-colors duration-200"
                >
                  View Pricing
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose a Student Developer */}
      <section className="bg-bone border-t border-steel/10 py-16 relative z-10">
        <div className="max-w-[1100px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-steel text-3xl md:text-4xl font-extrabold uppercase tracking-wider text-center relative after:block after:mx-auto after:h-[2px] after:w-16 after:bg-molten after:mt-3">
              Why Work With a Student Developer
            </h2>
            <div className="mt-8 grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-2xl border border-steel/10">
                <h3 className="text-xl font-bold text-steel mb-3 flex items-center gap-2">
                  💰 <span>Affordable Pricing</span>
                </h3>
                <p className="text-steel/80">
                  Get professional-quality websites at student-friendly prices. Perfect for 
                  startups and small businesses looking to establish their online presence 
                  without breaking the budget.
                </p>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-steel/10">
                <h3 className="text-xl font-bold text-steel mb-3 flex items-center gap-2">
                  🔥 <span>Latest Technologies</span>
                </h3>
                <p className="text-steel/80">
                  Benefit from knowledge of the newest web technologies and best practices. 
                  As a student, I'm constantly learning and applying the latest industry 
                  standards to every project.
                </p>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-steel/10">
                <h3 className="text-xl font-bold text-steel mb-3 flex items-center gap-2">
                  ⚡ <span>Dedicated Attention</span>
                </h3>
                <p className="text-steel/80">
                  Your project gets my full attention and care. Every client is important 
                  to building my reputation, so I'm committed to delivering excellent results 
                  and maintaining long-term relationships.
                </p>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-steel/10">
                <h3 className="text-xl font-bold text-steel mb-3 flex items-center gap-2">
                  🎯 <span>Growth Together</span>
                </h3>
                <p className="text-steel/80">
                  As your business grows, I grow too. I'm invested in your success and 
                  available for ongoing updates, improvements, and new features as your 
                  needs evolve.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Client Logos Carousel */}
      <ClientLogosCarousel />
    </div>
  )
}
