'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

interface FormData {
  name: string
  email: string
  company: string
  projectType: string
  budget: string
  timeline: string
  message: string
}

const projectTypes = [
  { value: 'website', label: 'New Website', icon: '🌐' },
  { value: 'ecommerce', label: 'E-commerce Store', icon: '🛒' },
  { value: 'redesign', label: 'Website Redesign', icon: '✨' },
  { value: 'webapp', label: 'Web Application', icon: '⚡' },
  { value: 'maintenance', label: 'Maintenance & Support', icon: '🔧' },
  { value: 'other', label: 'Other', icon: '💭' }
]

const budgetRanges = [
  { value: 'under-5k', label: 'Under $5,000' },
  { value: '5k-10k', label: '$5,000 - $10,000' },
  { value: '10k-25k', label: '$10,000 - $25,000' },
  { value: '25k-plus', label: '$25,000+' },
  { value: 'discuss', label: "Let&apos;s discuss" }
]

const timelines = [
  { value: 'asap', label: 'ASAP' },
  { value: '1-month', label: '1 Month' },
  { value: '2-3-months', label: '2-3 Months' },
  { value: '3-6-months', label: '3-6 Months' },
  { value: 'flexible', label: 'Flexible' }
]

export default function InteractiveContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    projectType: '',
    budget: '',
    timeline: '',
    message: ''
  })
  
  const [currentStep, setCurrentStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [errors, setErrors] = useState<Partial<FormData>>({})

  const totalSteps = 4

  const validateStep = (step: number): boolean => {
    const newErrors: Partial<FormData> = {}
    
    switch (step) {
      case 1:
        if (!formData.name.trim()) newErrors.name = 'Name is required'
        if (!formData.email.trim()) newErrors.email = 'Email is required'
        else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid'
        break
      case 2:
        if (!formData.projectType) newErrors.projectType = 'Please select a project type'
        break
      case 3:
        if (!formData.budget) newErrors.budget = 'Please select a budget range'
        if (!formData.timeline) newErrors.timeline = 'Please select a timeline'
        break
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => Math.min(prev + 1, totalSteps))
    }
  }

  const handlePrev = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1))
  }

  const handleSubmit = async () => {
    if (!validateStep(currentStep)) return

    setIsSubmitting(true)
    
    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 2000))
      setIsSubmitted(true)
    } catch (error) {
      console.error('Submission error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const updateFormData = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }))
    }
  }

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <motion.div
            key="step1"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -50, opacity: 0 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl font-bold text-steel mb-2">Let&apos;s get started!</h3>
              <p className="text-steel/70">Tell us a bit about yourself</p>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-steel mb-2">
                  Full Name *
                </label>
                <motion.input
                  type="text"
                  value={formData.name}
                  onChange={(e) => updateFormData('name', e.target.value)}
                  className={`w-full px-4 py-3 rounded-lg border transition-all duration-200 focus:outline-none focus:ring-2 ${
                    errors.name 
                      ? 'border-red-300 focus:ring-red-200' 
                      : 'border-steel/30 focus:ring-molten/20 focus:border-molten'
                  }`}
                  placeholder="Your full name"
                  whileFocus={{ scale: 1.02 }}
                />
                {errors.name && (
                  <motion.p 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-500 text-sm mt-1"
                  >
                    {errors.name}
                  </motion.p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-steel mb-2">
                  Email Address *
                </label>
                <motion.input
                  type="email"
                  value={formData.email}
                  onChange={(e) => updateFormData('email', e.target.value)}
                  className={`w-full px-4 py-3 rounded-lg border transition-all duration-200 focus:outline-none focus:ring-2 ${
                    errors.email 
                      ? 'border-red-300 focus:ring-red-200' 
                      : 'border-steel/30 focus:ring-molten/20 focus:border-molten'
                  }`}
                  placeholder="your@email.com"
                  whileFocus={{ scale: 1.02 }}
                />
                {errors.email && (
                  <motion.p 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-500 text-sm mt-1"
                  >
                    {errors.email}
                  </motion.p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-steel mb-2">
                  Company/Organization
                </label>
                <motion.input
                  type="text"
                  value={formData.company}
                  onChange={(e) => updateFormData('company', e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-steel/30 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-molten/20 focus:border-molten"
                  placeholder="Your company name (optional)"
                  whileFocus={{ scale: 1.02 }}
                />
              </div>
            </div>
          </motion.div>
        )

      case 2:
        return (
          <motion.div
            key="step2"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -50, opacity: 0 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl font-bold text-steel mb-2">What can we help you with?</h3>
              <p className="text-steel/70">Select the type of project you need</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {projectTypes.map((type) => (
                <motion.button
                  key={type.value}
                  type="button"
                  onClick={() => updateFormData('projectType', type.value)}
                  className={`p-4 rounded-lg border-2 text-left transition-all duration-200 ${
                    formData.projectType === type.value
                      ? 'border-molten bg-molten/10 text-molten'
                      : 'border-steel/20 hover:border-steel/40 text-steel'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{type.icon}</span>
                    <span className="font-medium">{type.label}</span>
                  </div>
                </motion.button>
              ))}
            </div>
            
            {errors.projectType && (
              <motion.p 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-red-500 text-sm"
              >
                {errors.projectType}
              </motion.p>
            )}
          </motion.div>
        )

      case 3:
        return (
          <motion.div
            key="step3"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -50, opacity: 0 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl font-bold text-steel mb-2">Project details</h3>
              <p className="text-steel/70">Help us understand your timeline and budget</p>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-steel mb-3">
                  Budget Range *
                </label>
                <div className="space-y-2">
                  {budgetRanges.map((budget) => (
                    <motion.label
                      key={budget.value}
                      className={`flex items-center p-3 rounded-lg border cursor-pointer transition-all duration-200 ${
                        formData.budget === budget.value
                          ? 'border-molten bg-molten/10'
                          : 'border-steel/20 hover:border-steel/40'
                      }`}
                      whileHover={{ scale: 1.01 }}
                    >
                      <input
                        type="radio"
                        name="budget"
                        value={budget.value}
                        checked={formData.budget === budget.value}
                        onChange={(e) => updateFormData('budget', e.target.value)}
                        className="sr-only"
                      />
                      <div className={`w-4 h-4 rounded-full border-2 mr-3 ${
                        formData.budget === budget.value
                          ? 'border-molten bg-molten'
                          : 'border-steel/30'
                      }`}>
                        {formData.budget === budget.value && (
                          <div className="w-2 h-2 bg-white rounded-full m-0.5" />
                        )}
                      </div>
                      <span className="text-steel">{budget.label}</span>
                    </motion.label>
                  ))}
                </div>
                {errors.budget && (
                  <motion.p 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-500 text-sm mt-1"
                  >
                    {errors.budget}
                  </motion.p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-steel mb-3">
                  Timeline *
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {timelines.map((timeline) => (
                    <motion.button
                      key={timeline.value}
                      type="button"
                      onClick={() => updateFormData('timeline', timeline.value)}
                      className={`p-3 rounded-lg border text-center transition-all duration-200 ${
                        formData.timeline === timeline.value
                          ? 'border-molten bg-molten/10 text-molten'
                          : 'border-steel/20 hover:border-steel/40 text-steel'
                      }`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {timeline.label}
                    </motion.button>
                  ))}
                </div>
                {errors.timeline && (
                  <motion.p 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-500 text-sm mt-1"
                  >
                    {errors.timeline}
                  </motion.p>
                )}
              </div>
            </div>
          </motion.div>
        )

      case 4:
        return (
          <motion.div
            key="step4"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -50, opacity: 0 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl font-bold text-steel mb-2">Tell us more</h3>
              <p className="text-steel/70">Describe your project and goals</p>
            </div>

            <div>
              <label className="block text-sm font-medium text-steel mb-2">
                Project Details
              </label>
              <motion.textarea
                value={formData.message}
                onChange={(e) => updateFormData('message', e.target.value)}
                rows={6}
                className="w-full px-4 py-3 rounded-lg border border-steel/30 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-molten/20 focus:border-molten resize-none"
                placeholder="Tell us about your project, goals, specific requirements, or any questions you have..."
                whileFocus={{ scale: 1.01 }}
              />
            </div>

            {/* Summary */}
            <div className="bg-bone p-4 rounded-lg">
              <h4 className="font-semibold text-steel mb-2">Project Summary:</h4>
              <div className="space-y-1 text-sm text-steel/80">
                <p><strong>Contact:</strong> {formData.name} ({formData.email})</p>
                {formData.company && <p><strong>Company:</strong> {formData.company}</p>}
                <p><strong>Project:</strong> {projectTypes.find(t => t.value === formData.projectType)?.label}</p>
                <p><strong>Budget:</strong> {budgetRanges.find(b => b.value === formData.budget)?.label}</p>
                <p><strong>Timeline:</strong> {timelines.find(t => t.value === formData.timeline)?.label}</p>
              </div>
            </div>
          </motion.div>
        )
    }
  }

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-12"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: 'spring' }}
          className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4"
        >
          <span className="text-3xl">✅</span>
        </motion.div>
        <h3 className="text-2xl font-bold text-steel mb-2">Thank you!</h3>
        <p className="text-steel/70 mb-4">
          We&apos;ve received your project details and will get back to you within 24 hours.
        </p>
        <motion.button
          onClick={() => {
            setIsSubmitted(false)
            setCurrentStep(1)
            setFormData({
              name: '', email: '', company: '', projectType: '', 
              budget: '', timeline: '', message: ''
            })
          }}
          className="text-molten hover:text-steel transition-colors duration-200"
          whileHover={{ scale: 1.05 }}
        >
          Submit another project →
        </motion.button>
      </motion.div>
    )
  }

  return (
    <div className="max-w-2xl mx-auto">
      {/* Progress bar */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-steel">Step {currentStep} of {totalSteps}</span>
          <span className="text-sm text-steel/60">{Math.round((currentStep / totalSteps) * 100)}% Complete</span>
        </div>
        <div className="w-full bg-steel/10 rounded-full h-2">
          <motion.div
            className="bg-gradient-to-r from-molten to-gold h-2 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${(currentStep / totalSteps) * 100}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>
      </div>

      {/* Form content */}
      <div className="bg-white rounded-2xl p-8 shadow-lg border border-steel/10">
        <AnimatePresence mode="wait">
          {renderStep()}
        </AnimatePresence>

        {/* Navigation buttons */}
        <div className="flex justify-between items-center mt-8 pt-6 border-t border-steel/10">
          <motion.button
            type="button"
            onClick={handlePrev}
            disabled={currentStep === 1}
            className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
              currentStep === 1
                ? 'text-steel/40 cursor-not-allowed'
                : 'text-steel hover:bg-steel/10'
            }`}
            whileHover={currentStep > 1 ? { scale: 1.05 } : {}}
            whileTap={currentStep > 1 ? { scale: 0.95 } : {}}
          >
            ← Previous
          </motion.button>

          {currentStep < totalSteps ? (
            <motion.button
              type="button"
              onClick={handleNext}
              className="px-8 py-3 bg-molten text-white rounded-lg font-medium hover:bg-steel transition-colors duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Next →
            </motion.button>
          ) : (
            <motion.button
              type="button"
              onClick={handleSubmit}
              disabled={isSubmitting}
              className="px-8 py-3 bg-gradient-to-r from-molten to-gold text-white rounded-lg font-medium hover:shadow-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              whileHover={!isSubmitting ? { scale: 1.05 } : {}}
              whileTap={!isSubmitting ? { scale: 0.95 } : {}}
            >
              {isSubmitting ? (
                <span className="flex items-center gap-2">
                  <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  Submitting...
                </span>
              ) : (
                'Send Project Details'
              )}
            </motion.button>
          )}
        </div>
      </div>
    </div>
  )
}