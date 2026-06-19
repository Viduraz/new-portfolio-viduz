'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import {
  SiNodedotjs,
  SiReact,
  SiJavascript,
  SiPython,
  SiMongodb,
  SiGit,
  SiSpringboot,
  SiMysql,
  SiKotlin,
  SiTypescript,
  SiNextdotjs,
  SiFigma,
  SiAffinitydesigner,
  SiAffinityphoto,
  SiCanva,
  SiBlender,
  SiGithub,
  SiOpenai,
  SiTailwindcss,
  SiDocker,
  SiFramer,
  SiSketch,
  SiRedux,
  SiGraphql,
  SiFirebase,
  SiSass,
  SiVercel,
} from 'react-icons/si'
import { FaJava, FaAws } from 'react-icons/fa'
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'


// ─── Dev icons (left cluster) ──────────────────────────────────────────────────
const devIcons = [
  { icon: SiNodedotjs, label: 'Node.js', color: '#539e43', x: -340, y: -120, dur: 3.8, amp: 12, delay: 0 },
  { icon: SiReact, label: 'React', color: '#61dafb', x: -260, y: -60, dur: 4.2, amp: 14, delay: 0.3 },
  { icon: SiJavascript, label: 'JavaScript', color: '#f7df1e', x: -380, y: 40, dur: 3.5, amp: 10, delay: 0.6 },
  { icon: SiPython, label: 'Python', color: '#4584b6', x: -290, y: 120, dur: 4.8, amp: 16, delay: 0.9 },
  { icon: FaJava, label: 'Java', color: '#f89820', x: -180, y: -100, dur: 4.0, amp: 12, delay: 1.2 },
  { icon: SiMysql, label: 'MySQL', color: '#4479a1', x: -160, y: 80, dur: 3.7, amp: 11, delay: 1.5 },
  { icon: SiKotlin, label: 'Kotlin', color: '#7f52ff', x: -340, y: -30, dur: 5.0, amp: 13, delay: 0.4 },
  { icon: SiMongodb, label: 'MongoDB', color: '#4db33d', x: -420, y: 100, dur: 4.4, amp: 15, delay: 0.7 },
  { icon: SiSpringboot, label: 'Spring Boot', color: '#6db33f', x: -220, y: -5, dur: 4.6, amp: 10, delay: 1.0 },
  { icon: SiGit, label: 'Git', color: '#f05032', x: -460, y: -60, dur: 3.9, amp: 14, delay: 1.3 },
  { icon: FaAws, label: 'AWS', color: '#ff9900', x: -310, y: 170, dur: 4.3, amp: 12, delay: 1.6 },
  { icon: SiTypescript, label: 'TypeScript', color: '#3178c6', x: -190, y: 170, dur: 5.2, amp: 11, delay: 1.9 },
]

// ─── Design icons (right cluster) ─────────────────────────────────────────────
const designIcons = [
  { icon: SiFigma, label: 'Figma', color: '#f24e1e', x: 340, y: -120, dur: 4.1, amp: 13, delay: 0.2 },
  { icon: SiAffinitydesigner, label: 'Illustrator', color: '#ff9a00', x: 260, y: -60, dur: 3.6, amp: 12, delay: 0.5 },
  { icon: SiAffinityphoto, label: 'Photoshop', color: '#31a8ff', x: 380, y: 40, dur: 4.7, amp: 14, delay: 0.8 },
  { icon: SiCanva, label: 'Canva', color: '#00c4cc', x: 290, y: 120, dur: 3.9, amp: 11, delay: 1.1 },
  { icon: SiBlender, label: 'Blender', color: '#ea7600', x: 180, y: -100, dur: 4.5, amp: 15, delay: 1.4 },
  { icon: SiGithub, label: 'GitHub', color: '#e6edf3', x: 160, y: 80, dur: 3.8, amp: 10, delay: 1.7 },
  { icon: SiNextdotjs, label: 'Next.js', color: '#e6edf3', x: 340, y: -30, dur: 4.9, amp: 12, delay: 2.0 },
  { icon: SiTailwindcss, label: 'Tailwind', color: '#38bdf8', x: 420, y: 100, dur: 4.2, amp: 13, delay: 0.6 },
  { icon: SiFramer, label: 'Framer', color: '#0055ff', x: 220, y: -5, dur: 3.7, amp: 11, delay: 0.9 },
  { icon: SiSketch, label: 'Sketch', color: '#f7b500', x: 460, y: -60, dur: 4.6, amp: 14, delay: 1.2 },
  { icon: SiDocker, label: 'Docker', color: '#2496ed', x: 310, y: 170, dur: 4.0, amp: 12, delay: 1.5 },
  { icon: SiOpenai, label: 'OpenAI', color: '#74aa9c', x: 190, y: 170, dur: 5.1, amp: 10, delay: 1.8 },
  { icon: SiRedux, label: 'Redux', color: '#764abc', x: 150, y: 220, dur: 4.8, amp: 12, delay: 0.7 },
  { icon: SiFirebase, label: 'Firebase', color: '#ffca28', x: 160, y: -210, dur: 4.3, amp: 13, delay: 1.1 },
  { icon: SiGraphql, label: 'GraphQL', color: '#e10098', x: 280, y: 30, dur: 4.5, amp: 11, delay: 1.4 },
  { icon: SiSass, label: 'Sass', color: '#cc6699', x: 310, y: -80, dur: 3.9, amp: 14, delay: 0.5 },
  { icon: SiVercel, label: 'Vercel', color: '#ffffff', x: 230, y: -160, dur: 4.2, amp: 10, delay: 0.9 },
]

const ctaButtons = [
  { label: 'View Projects', href: '#projects', variant: 'primary' as const },
  { label: 'Download CV', href: '/cv.html', variant: 'secondary' as const },
  { label: 'Contact Me', href: '#contact', variant: 'secondary' as const },
]

// Opens the interactive CV page in a new tab on all devices.
// On mobile, the browser's native share/print menu can be used to save as PDF.
function handleCVAction(e: React.MouseEvent) {
  e.preventDefault()
  window.open('/cv.html', '_blank', 'noopener,noreferrer')
}

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
})

// ─── Single floating icon ──────────────────────────────────────────────────────
interface FIcon {
  icon: React.ElementType
  label: string
  color: string
  x: number
  y: number
  dur: number
  amp: number
  delay: number
  size?: number
}

function FloatIcon({ icon: Icon, label, color, x, y, dur, amp, delay, size = 34 }: FIcon) {
  return (
    <motion.div
      className="absolute flex flex-col items-center select-none pointer-events-auto group"
      style={{ left: '50%', top: '50%' }}
      initial={{ opacity: 0, scale: 0, x, y }}
      animate={{
        opacity: 1,
        scale: 1,
        x: [x, x + amp * 0.4, x - amp * 0.2, x],
        y: [y, y - amp, y + amp * 0.3, y],
      }}
      transition={{
        opacity: { duration: 0.5, delay: delay + 0.3 },
        scale: { duration: 0.5, delay: delay + 0.3, type: 'spring', stiffness: 200 },
        x: { duration: dur, repeat: Infinity, ease: 'easeInOut', delay },
        y: { duration: dur, repeat: Infinity, ease: 'easeInOut', delay },
      }}
      whileHover={{ scale: 1.25 }}
    >
      <div
        className="rounded-2xl p-2.5 transition-all duration-300 cursor-pointer"
        style={{
          background: `${color}12`,
          border: `1px solid ${color}25`,
          boxShadow: `0 4px 20px ${color}10`,
        }}
        onMouseEnter={e => {
          const el = e.currentTarget as HTMLDivElement
          el.style.background = `${color}22`
          el.style.boxShadow = `0 0 20px ${color}55, 0 0 40px ${color}22`
          el.style.borderColor = `${color}60`
        }}
        onMouseLeave={e => {
          const el = e.currentTarget as HTMLDivElement
          el.style.background = `${color}12`
          el.style.boxShadow = `0 4px 20px ${color}10`
          el.style.borderColor = `${color}25`
        }}
      >
        <Icon size={size} style={{ color, filter: `drop-shadow(0 0 6px ${color}66)` }} />
      </div>
      {/* Tooltip */}
      <span
        className="absolute -bottom-7 px-2 py-0.5 rounded-md text-[9px] font-mono tracking-widest uppercase whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none"
        style={{
          background: 'rgba(10,10,11,0.95)',
          border: '1px solid rgba(255,255,255,0.08)',
          color: color,
          fontFamily: "'JetBrains Mono', monospace",
        }}
      >
        {label}
      </span>
    </motion.div>
  )
}

export default function Hero() {
  const ref = useRef<HTMLElement>(null)
  const { scrollY } = useScroll()
  const imageY = useTransform(scrollY, [0, 500], [0, 60])
  const bgY = useTransform(scrollY, [0, 500], [0, 120])

  return (
    <section
      id="hero"
      ref={ref}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #0a0a0a 0%, #0d0d0e 100%)' }}
    >
      {/* ── Premium background design ─────────────────────────── */}

      {/* Dot-grid texture */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,107,0,0.35) 1.5px, transparent 1.5px)',
          backgroundSize: '32px 32px',
          opacity: 0.6,
          maskImage: 'radial-gradient(ellipse 90% 90% at 50% 40%, black 0%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 90% 90% at 50% 40%, black 0%, transparent 100%)',
        }}
      />

      {/* Subtle scanline / horizontal lines */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(255,255,255,0.5) 3px, rgba(255,255,255,0.5) 4px)',
        }}
      />

      {/* Top-center amber arc */}
      <div
        aria-hidden
        className="pointer-events-none absolute"
        style={{
          width: 900,
          height: 900,
          top: '-30%',
          left: '50%',
          transform: 'translateX(-50%)',
          borderRadius: '50%',
          border: '1px solid rgba(255,107,0,0.07)',
          boxShadow: 'inset 0 0 80px rgba(255,107,0,0.04)',
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute"
        style={{
          width: 660,
          height: 660,
          top: '-18%',
          left: '50%',
          transform: 'translateX(-50%)',
          borderRadius: '50%',
          border: '1px solid rgba(255,107,0,0.05)',
        }}
      />

      {/* Bottom fade */}
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-48"
        style={{
          background: 'linear-gradient(to top, #0a0a0a 0%, transparent 100%)',
        }}
      />

      {/* ── Ambient background orbs ───────────────────────────── */}
      <motion.div
        className="pointer-events-none absolute inset-0"
        style={{ y: bgY }}
        aria-hidden

      >
        {/* Amber glow — left */}
        <motion.div
          className="absolute rounded-full"
          style={{
            width: 700, height: 700,
            top: '10%', left: '-10%',
            background: 'radial-gradient(circle, rgba(255,107,0,0.13) 0%, transparent 65%)',
            filter: 'blur(60px)',
            marginLeft: '100px',
          }}
          animate={{ x: [0, 60, -30, 0], y: [0, 40, -20, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
        />
        {/* Blue glow — right */}
        <motion.div
          className="absolute rounded-full"
          style={{
            width: 600, height: 600,
            bottom: '0%', right: '-8%',
            background: 'radial-gradient(circle, rgba(75,142,255,0.10) 0%, transparent 65%)',
            filter: 'blur(50px)',
          }}
          animate={{ x: [0, -40, 20, 0], y: [0, -30, 15, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
        />
        {/* Center amber halo (behind image) */}
        <div
          className="absolute rounded-full hidden sm:block"
          style={{
            width: 380, height: 380,
            top: '50%', left: '50%',
            transform: 'translate(-50%, -60%) translateX(80px)',
            background: 'radial-gradient(circle, rgba(255,107,0,0.22) 0%, rgba(255,107,0,0.08) 35%, transparent 70%)',
            filter: 'blur(30px)',
          }}
        />
        {/* Mobile halo — centered, no offset */}
        <div
          className="absolute rounded-full sm:hidden"
          style={{
            width: 280, height: 280,
            top: '50%', left: '50%',
            transform: 'translate(-50%, -60%)',
            background: 'radial-gradient(circle, rgba(255,107,0,0.20) 0%, rgba(255,107,0,0.07) 35%, transparent 70%)',
            filter: 'blur(24px)',
          }}
        />
      </motion.div>

      {/* ── Main centered layout ───────────────────────────────── */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center w-full px-6">

        {/* Icon ecosystem + Profile */}
        <div
          className="relative flex items-center justify-center"
          style={{ width: '100%', height: 'clamp(360px, 55vh, 560px)' }}
        >


          {/* Left cluster: dev icons — hidden on mobile */}
          <div className="absolute inset-0 pointer-events-none hidden sm:block" aria-label="Dev tech cluster" style={{ pointerEvents: 'none' }}>
            <div style={{ pointerEvents: 'auto' }}>
              {devIcons.map(ic => (
                <FloatIcon key={`dev-${ic.label}`} {...ic} />
              ))}
            </div>
          </div>

          {/* Right cluster: design icons — hidden on mobile */}
          <div className="absolute inset-0 pointer-events-none hidden sm:block" aria-label="Design tech cluster" style={{ pointerEvents: 'none' }}>
            <div style={{ pointerEvents: 'auto' }}>
              {designIcons.map(ic => (
                <FloatIcon key={`design-${ic.label}`} {...ic} />
              ))}
            </div>
          </div>

          {/* Profile image — absolutely centered */}
          <motion.div
            className="relative z-20 flex-shrink-0 sm:translate-x-[80px]"
            style={{
              width: 'clamp(200px, 55vw, 360px)',
              height: 'clamp(240px, 45vw, 420px)',
              y: imageY,
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <Image
              src="/images/profile_clean.png"
              alt="Vidura Rathnayaka — Full Stack Developer"
              fill
              priority
              className="object-contain object-bottom select-none pointer-events-none drop-shadow-2xl"
              sizes="(max-width: 768px) 240px, 360px"
            />
          </motion.div>
        </div>

        {/* ── Text content below image ─────────────────────────── */}
        <div className="flex flex-col items-center gap-4 -mt-6 z-20 relative">
          {/* Name */}
          <motion.div {...fadeUp(0.2)} className="overflow-hidden">
            <h1
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-none"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              <span className="text-white">Vidura </span>
              <span className="text-gradient-amber">Rathnayaka</span>
            </h1>
          </motion.div>

          {/* Role */}
          <motion.p
            {...fadeUp(0.4)}
            className="text-base sm:text-lg md:text-xl text-white/55 font-light"
          >
            Full Stack Developer
            <span className="text-white/25 mx-2">|</span>
            <span style={{ color: '#ffb693' }}>Java</span>
            {' · '}
            <span style={{ color: '#6db33f' }}>Spring Boot</span>
            {' · '}
            <span style={{ color: '#61dafb' }}>MERN Stack</span>
          </motion.p>

          {/* Available badge */}
          <motion.div {...fadeUp(0.55)}>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-overlay text-xs font-mono text-white/50" style={{ fontFamily: "'JetBrains Mono', monospace", letterSpacing: '0.1em', textTransform: 'uppercase' }}>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Available for opportunities
            </span>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-wrap items-center justify-center gap-3 mt-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            {ctaButtons.map((btn, i) => (
              <motion.div
                key={btn.label}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.75 + i * 0.1 }}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
              >
                {btn.variant === 'primary' ? (
                  <Link
                    href={btn.href}
                    id={`cta-${btn.label.toLowerCase().replace(/\s+/g, '-')}`}
                    className="btn-primary relative group"
                    style={{ boxShadow: '0 0 0 rgba(255,107,0,0)' }}
                    onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 0 30px rgba(255,107,0,0.4)' }}
                    onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 0 0 rgba(255,107,0,0)' }}
                  >
                    <span>{btn.label}</span>
                  </Link>
                ) : btn.label === 'Download CV' ? (
                  <a
                    href="/cv.html"
                    id="cta-download-cv"
                    className="btn-secondary"
                    onClick={handleCVAction}
                    aria-label="Download CV — opens preview on desktop, downloads PDF on mobile"
                  >
                    {btn.label}
                  </a>
                ) : (
                  <Link
                    href={btn.href}
                    id={`cta-${btn.label.toLowerCase().replace(/\s+/g, '-')}`}
                    className="btn-secondary"
                  >
                    {btn.label}
                  </Link>
                )}
              </motion.div>
            ))}
          </motion.div>

          {/* Social links */}
          <motion.div
            className="flex items-center gap-3 mt-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 1.05 }}
          >
            {[
              { name: 'GitHub', href: 'https://github.com/Viduraz', Icon: FiGithub, color: '#ffffff' },
              { name: 'LinkedIn', href: 'https://www.linkedin.com/in/vidurarathnayaka/', Icon: FiLinkedin, color: '#0077b5' },
              { name: 'Gmail', href: 'mailto:viduraruwantha2002@gmail.com', Icon: FiMail, color: '#ea4335' },
            ].map(({ name, href, Icon, color }) => (
              <motion.a
                key={name}
                href={href}
                target={name !== 'Gmail' ? '_blank' : undefined}
                rel={name !== 'Gmail' ? 'noopener noreferrer' : undefined}
                className="w-10 h-10 rounded-full glass-overlay flex items-center justify-center text-white/50 transition-all duration-300"
                whileHover={{ y: -2, boxShadow: `0 0 15px ${color}44` }}
                onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = color }}
                onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = '' }}
                aria-label={`Vidura's ${name}`}
              >
                <Icon size={16} />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>

      {/* ── Scroll indicator ──────────────────────────────────── */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.4 }}
        aria-hidden
      >
        <span className="text-white/25 tracking-widest" style={{ fontSize: '0.55rem', fontFamily: "'JetBrains Mono', monospace", letterSpacing: '0.2em', textTransform: 'uppercase' }}>
          SCROLL
        </span>
        <div className="relative w-px h-12 bg-white/10 overflow-hidden rounded-full">
          <motion.div
            className="absolute top-0 left-0 w-full rounded-full"
            style={{ height: '50%', background: 'linear-gradient(to bottom, #ff6b00, transparent)' }}
            animate={{ y: ['-100%', '200%'] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>
      </motion.div>
    </section>
  )
}
