'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { motion, AnimatePresence } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail, FiCheck, FiPhone } from 'react-icons/fi'
import Reveal from './Reveal'

interface ContactFormInputs {
  name: string
  email: string
  message: string
}

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormInputs>()

  const onSubmit = async (data: ContactFormInputs) => {
    setIsSubmitting(true)
    setSubmitError(null)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || 'Failed to send message.')
      }

      setIsSubmitted(true)
      reset()
      // Reset success state after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false)
      }, 5000)
    } catch (err: any) {
      console.error('Submission error:', err)
      setSubmitError(err.message || 'An unexpected error occurred.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactLinks = [
    {
      label: 'Email',
      value: 'viduraruwantha2002@gmail.com',
      href: 'mailto:viduraruwantha2002@gmail.com',
      icon: FiMail,
      brandColor: '#ea4335',
    },
    {
      label: 'Phone',
      value: '+94 77 2909990',
      href: 'tel:+94772909990',
      icon: FiPhone,
      brandColor: '#ff6b00',
    },
    {
      label: 'GitHub',
      value: 'github.com/Viduraz',
      href: 'https://github.com/Viduraz',
      icon: FiGithub,
      brandColor: '#ffffff',
    },
    {
      label: 'LinkedIn',
      value: 'linkedin.com/in/vidurarathnayaka',
      href: 'https://linkedin.com/in/vidurarathnayaka',
      icon: FiLinkedin,
      brandColor: '#0077b5',
    },
  ]

  return (
    <section id="contact" className="section-padding max-w-[1200px] mx-auto px-6">
      <div className="flex flex-col items-center text-center gap-4 mb-16">
        <Reveal delay={0.1}>
          <span className="font-mono-label text-[#ff6b00]">
            {"// GET IN TOUCH"}
          </span>
        </Reveal>

        <Reveal delay={0.2}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white">
            Let's Build <span className="text-gradient-amber">Something Together</span>
          </h2>
        </Reveal>

        <Reveal delay={0.3}>
          <p className="text-white/60 text-base sm:text-lg max-w-2xl font-light leading-relaxed">
            I am actively looking for Junior / Full Stack Developer opportunities and am open to both remote work and relocation. Feel free to reach out if you want to collaborate on a project or just say hi!
          </p>
        </Reveal>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* Contact Form (Left) */}
        <div className="lg:col-span-7 w-full">
          <Reveal delay={0.2}>
            <div className="glass-card rounded-3xl p-6 sm:p-8 border border-white/5 relative overflow-hidden">
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form
                    key="contact-form"
                    onSubmit={handleSubmit(onSubmit)}
                    className="space-y-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    {/* Name Input */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="name" className="text-xs font-semibold text-white/70 tracking-wide font-mono-label">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        autoComplete="name"
                        placeholder="John Doe"
                        className={`w-full px-4 py-3 rounded-xl bg-black/40 border ${
                          errors.name ? 'border-red-500/50 focus:border-red-500' : 'border-white/10 focus:border-[#ff6b00]/50'
                        } text-white placeholder-white/30 text-sm focus:outline-none focus:ring-1 ${
                          errors.name ? 'focus:ring-red-500' : 'focus:ring-[#ff6b00]'
                        } transition-all duration-300 backdrop-blur-md`}
                        {...register('name', { required: 'Name is required' })}
                      />
                      {errors.name && (
                        <span className="text-xs text-red-400 font-medium">{errors.name.message}</span>
                      )}
                    </div>

                    {/* Email Input */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="email" className="text-xs font-semibold text-white/70 tracking-wide font-mono-label">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        autoComplete="email"
                        placeholder="john@example.com"
                        className={`w-full px-4 py-3 rounded-xl bg-black/40 border ${
                          errors.email ? 'border-red-500/50 focus:border-red-500' : 'border-white/10 focus:border-[#ff6b00]/50'
                        } text-white placeholder-white/30 text-sm focus:outline-none focus:ring-1 ${
                          errors.email ? 'focus:ring-red-500' : 'focus:ring-[#ff6b00]'
                        } transition-all duration-300 backdrop-blur-md`}
                        {...register('email', {
                          required: 'Email is required',
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: 'Invalid email address',
                          },
                        })}
                      />
                      {errors.email && (
                        <span className="text-xs text-red-400 font-medium">{errors.email.message}</span>
                      )}
                    </div>

                    {/* Message Input */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="message" className="text-xs font-semibold text-white/70 tracking-wide font-mono-label">
                        Message
                      </label>
                      <textarea
                        id="message"
                        rows={5}
                        placeholder="Your message here..."
                        className={`w-full px-4 py-3 rounded-xl bg-black/40 border ${
                          errors.message ? 'border-red-500/50 focus:border-red-500' : 'border-white/10 focus:border-[#ff6b00]/50'
                        } text-white placeholder-white/30 text-sm focus:outline-none focus:ring-1 ${
                          errors.message ? 'focus:ring-red-500' : 'focus:ring-[#ff6b00]'
                        } transition-all duration-300 backdrop-blur-md resize-none`}
                        {...register('message', { required: 'Message is required' })}
                      />
                      {errors.message && (
                        <span className="text-xs text-red-400 font-medium">{errors.message.message}</span>
                      )}
                    </div>

                    {/* Error Banner */}
                    {submitError && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-medium"
                      >
                        ⚠️ {submitError}
                      </motion.div>
                    )}

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-primary w-full relative group h-12 flex items-center justify-center"
                    >
                      <span className="relative z-10 flex items-center gap-2">
                        {isSubmitting ? (
                          <>
                            <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            Sending...
                          </>
                        ) : (
                          'Send Message'
                        )}
                      </span>
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success-message"
                    className="flex flex-col items-center justify-center py-12 text-center"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                  >
                    <motion.div
                      className="w-16 h-16 bg-[#ff6b00]/10 border border-[#ff6b00]/20 rounded-full flex items-center justify-center mb-6 text-[#ffb693] shadow-amber-glow"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', stiffness: 300, damping: 15, delay: 0.1 }}
                    >
                      <FiCheck size={32} />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                    <p className="text-white/60 text-sm max-w-sm">
                      Thank you for reaching out. I've received your message and will get back to you as soon as possible.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </Reveal>
        </div>

        {/* Direct Contact Cards (Right) */}
        <div className="lg:col-span-5 w-full flex flex-col gap-4">
          {contactLinks.map((link, idx) => {
            const Icon = link.icon
            return (
              <Reveal key={link.label} delay={0.1 * idx + 0.2}>
                <motion.a
                  href={link.href}
                  target={link.label !== 'Email' ? '_blank' : undefined}
                  rel={link.label !== 'Email' ? 'noopener noreferrer' : undefined}
                  className="glass-card flex items-center gap-4 p-5 rounded-2xl border border-white/5 group transition-all duration-300 relative overflow-hidden"
                  whileHover={{
                    x: 8,
                    boxShadow: `0 8px 24px ${link.brandColor}15`,
                    borderColor: `${link.brandColor}22`,
                  }}
                >
                  {/* Accent border overlay */}
                  <div
                    className="absolute inset-y-0 left-0 w-[3px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ backgroundColor: link.brandColor }}
                  />

                  {/* Icon Circle */}
                  <div
                    className="w-12 h-12 rounded-full glass-overlay flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                    style={{
                      ['--hover-glow' as any]: link.brandColor,
                    }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget
                      el.style.boxShadow = `0 0 15px ${link.brandColor}55`
                      el.style.borderColor = `${link.brandColor}40`
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget
                      el.style.boxShadow = ''
                      el.style.borderColor = ''
                    }}
                  >
                    <Icon size={20} className="text-white/80 transition-colors duration-300" style={{ color: link.brandColor }} />
                  </div>

                  {/* Text */}
                  <div className="flex flex-col">
                    <span className="text-white/40 text-[10px] font-semibold tracking-wider font-mono-label mb-0.5">
                      {link.label}
                    </span>
                    <span className="text-white/80 text-sm sm:text-base font-light group-hover:text-white transition-colors duration-200 truncate max-w-[220px] sm:max-w-none">
                      {link.value}
                    </span>
                  </div>
                </motion.a>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
