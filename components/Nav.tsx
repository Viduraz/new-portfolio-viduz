'use client'

import { useRef, useState } from 'react'
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion'
import Link from 'next/link'

const navLinks = [
  { href: '#hero', label: 'Home' },
  { href: '#projects', label: 'Projects' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
]

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false)
  const lastY = useRef(0)
  const navRef = useRef<HTMLElement>(null)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (y) => {
    // If mobile menu is open, do not hide the nav
    if (isOpen) return

    const nav = navRef.current
    if (!nav) return

    const direction = y > lastY.current ? 'down' : 'up'
    const isAtTop = y < 80

    if (isAtTop) {
      nav.style.transform = 'translateY(0)'
      nav.style.opacity = '1'
    } else if (direction === 'down' && y > 100) {
      nav.style.transform = 'translateY(-100%)'
      nav.style.opacity = '0'
    } else if (direction === 'up') {
      nav.style.transform = 'translateY(0)'
      nav.style.opacity = '1'
    }

    lastY.current = y
  })

  const handleLinkClick = () => {
    setIsOpen(false)
  }

  return (
    <>
      <motion.nav
        ref={navRef}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 right-0 z-50 glass-overlay"
        style={{
          transition: 'transform 0.35s cubic-bezier(0.22,1,0.36,1), opacity 0.35s ease',
        }}
      >
        <div className="max-w-[1200px] mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="#hero"
            className="relative group flex items-center gap-1 select-none"
            aria-label="Vidura Rathnayaka — Home"
            onClick={handleLinkClick}
          >
            <span
              className="text-xl font-black tracking-tight text-gradient-amber"
              style={{ fontFamily: 'var(--font-inter)' }}
            >
              Vid
            </span>
            <span
              className="w-1.5 h-1.5 rounded-full bg-[#ff6b00] group-hover:scale-150 transition-transform duration-300"
              aria-hidden="true"
            />
          </Link>

          {/* Desktop Links */}
          <ul className="hidden md:flex items-center gap-8" role="navigation">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="relative text-sm font-medium text-white/60 hover:text-white transition-colors duration-200 group"
                >
                  {link.label}
                  <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-gradient-to-r from-[#ff6b00] to-[#ffb693] group-hover:w-full transition-all duration-300" />
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <Link
            href="#contact"
            className="hidden md:inline-flex items-center gap-2 px-4 py-1.5 rounded-lg text-sm font-semibold glass-border-gradient text-white/80 hover:text-white transition-all duration-300 hover:scale-105"
          >
            Hire Me
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
          </Link>

          {/* Hamburger Menu Toggle Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 relative z-50 focus:outline-none"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            <span
              className={`block w-6 h-0.5 bg-white/70 rounded-full transition-all duration-300 ease-in-out ${
                isOpen ? 'rotate-45 translate-y-1.5' : ''
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-white/70 rounded-full my-1 transition-all duration-300 ease-in-out ${
                isOpen ? 'opacity-0' : 'opacity-100'
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-white/70 rounded-full transition-all duration-300 ease-in-out ${
                isOpen ? '-rotate-45 -translate-y-1.5' : ''
              }`}
            />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed inset-0 z-40 bg-[#0A0A0A]/95 backdrop-blur-lg md:hidden pt-20 px-6 flex flex-col gap-8"
          >
            <ul className="flex flex-col gap-6 text-center mt-10">
              {navLinks.map((link, idx) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 + 0.1 }}
                >
                  <Link
                    href={link.href}
                    onClick={handleLinkClick}
                    className="text-2xl font-bold tracking-tight text-white/70 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex justify-center mt-6"
            >
              <Link
                href="#contact"
                onClick={handleLinkClick}
                className="btn-primary w-full max-w-xs text-center"
              >
                <span>Hire Me</span>
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
