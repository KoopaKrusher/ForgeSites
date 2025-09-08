'use client'

import { motion } from 'framer-motion'

const placeholderLogos = [
  { name: 'TechStart Inc', url: '#', placeholder: 'TS' },
  { name: 'GrowthLab Co', url: '#', placeholder: 'GL' },
  { name: 'Creative Solutions', url: '#', placeholder: 'CS' },
  { name: 'Digital Dynamics', url: '#', placeholder: 'DD' },
  { name: 'Innovation Hub', url: '#', placeholder: 'IH' },
  { name: 'Future Systems', url: '#', placeholder: 'FS' },
  { name: 'Smart Business', url: '#', placeholder: 'SB' },
  { name: 'Web Ventures', url: '#', placeholder: 'WV' }
]

export default function ClientLogosCarousel() {
  // Duplicate logos for seamless infinite scroll
  const duplicatedLogos = [...placeholderLogos, ...placeholderLogos]

  return (
    <section className="bg-white border-t border-steel/10 py-16 relative overflow-hidden">
      <div className="max-w-[1100px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-2xl font-bold text-steel mb-4">
            Future Client Partners
          </h3>
          <p className="text-steel/70 max-w-2xl mx-auto">
            Building relationships with forward-thinking businesses ready to establish their digital presence
          </p>
        </motion.div>

        {/* Infinite scrolling logo carousel */}
        <div className="relative">
          {/* Gradient fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10" />
          
          <div className="overflow-hidden">
            <motion.div
              className="flex items-center gap-8 md:gap-12"
              animate={{ x: [0, -50 * placeholderLogos.length] }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: 'linear'
              }}
              style={{ width: `${100 * duplicatedLogos.length}px` }}
            >
              {duplicatedLogos.map((logo, index) => (
                <motion.div
                  key={`${logo.name}-${index}`}
                  className="flex-shrink-0 group cursor-pointer"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-steel/5 to-molten/5 rounded-2xl flex items-center justify-center border border-steel/10 group-hover:border-molten/30 transition-all duration-300">
                    <div className="text-center">
                      <div className="text-lg md:text-xl font-bold text-steel/60 group-hover:text-molten transition-colors duration-300">
                        {logo.placeholder}
                      </div>
                      <div className="text-xs text-steel/40 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        Logo
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="bg-gradient-to-r from-molten/10 to-gold/10 rounded-2xl p-8 border border-molten/20">
            <h4 className="text-xl font-bold text-steel mb-3">
              Your Logo Could Be Here!
            </h4>
            <p className="text-steel/70 mb-6 max-w-md mx-auto">
              Ready to be one of my first success stories? Let's create something amazing together.
            </p>
            <motion.div
              className="flex flex-col sm:flex-row gap-3 justify-center"
            >
              <motion.a
                href="/request"
                className="inline-flex items-center px-6 py-3 bg-molten text-white rounded-lg font-semibold hover:bg-steel transition-colors duration-200 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Start Your Project</span>
                <motion.span
                  className="ml-2"
                  initial={{ x: 0 }}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  →
                </motion.span>
              </motion.a>
              
              <motion.a
                href="/packages"
                className="inline-flex items-center px-6 py-3 border border-steel/30 text-steel rounded-lg font-semibold hover:bg-steel/10 transition-colors duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Pricing
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}