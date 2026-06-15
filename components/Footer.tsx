'use client'

import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiInstagram, FiFacebook, FiMail } from 'react-icons/fi'

export default function Footer() {
  const socials = [
    {
      name: 'GitHub',
      href: 'https://github.com/Viduraz',
      icon: FiGithub,
      brandColor: '#ffffff',
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/vidurarathnayaka/',
      icon: FiLinkedin,
      brandColor: '#0077b5',
    },
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/vidura_ruwantha/',
      icon: FiInstagram,
      brandColor: '#e1306c',
    },
    {
      name: 'Facebook',
      href: 'https://www.facebook.com/vidura.ruwantha',
      icon: FiFacebook,
      brandColor: '#1877f2',
    },
    {
      name: 'Gmail',
      href: 'mailto:viduraruwantha2002@gmail.com',
      icon: FiMail,
      brandColor: '#ea4335',
    },
  ]

  return (
    <footer className="relative py-12 px-6 border-t border-white/5 bg-[#0A0A0A] overflow-hidden">
      {/* Subtle top-center radial gradient glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[150px] pointer-events-none opacity-20"
        style={{
          background: 'radial-gradient(circle, rgba(255,107,0,0.15) 0%, transparent 70%)',
          filter: 'blur(30px)',
        }}
        aria-hidden="true"
      />

      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
        {/* Left Side */}
        <motion.div
          className="text-center md:text-left cursor-default"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <motion.p
            className="text-[11px] sm:text-xs font-semibold tracking-wider font-mono text-[#ffb693]/80 hover:text-[#ffb693] transition-colors duration-300"
            style={{ fontFamily: 'var(--font-jetbrains-mono)' }}
          >
            © 2026 Vidura Rathnayaka. Crafted with Technical Elegance.
          </motion.p>
        </motion.div>

        {/* Right Side (Social Icons) */}
        <motion.div
          className="flex items-center gap-3"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {socials.map((social) => {
            const Icon = social.icon
            return (
              <motion.a
                key={social.name}
                href={social.href}
                target={social.name !== 'Gmail' ? '_blank' : undefined}
                rel={social.name !== 'Gmail' ? 'noopener noreferrer' : undefined}
                className="w-11 h-11 rounded-full glass-overlay flex items-center justify-center text-white/60 transition-all duration-300"
                whileHover={{
                  y: -3,
                  boxShadow: `0 0 20px ${social.brandColor}44`,
                  borderColor: `${social.brandColor}30`,
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget
                  el.style.color = social.brandColor
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget
                  el.style.color = ''
                }}
                aria-label={`Follow Vidura on ${social.name}`}
              >
                <Icon size={18} />
              </motion.a>
            )
          })}
        </motion.div>
      </div>
    </footer>
  )
}
