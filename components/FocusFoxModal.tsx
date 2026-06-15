'use client'

import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { useEffect } from 'react'
import {
  FiX,
  FiGithub,
  FiCheckCircle,
  FiBookOpen,
  FiEyeOff,
  FiDatabase,
  FiLayers,
  FiInfo,
  FiCalendar,
  FiCpu,
  FiMoon,
  FiTrendingUp,
} from 'react-icons/fi'
import { FaChrome } from 'react-icons/fa'

interface FocusFoxModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function FocusFoxModal({ isOpen, onClose }: FocusFoxModalProps) {
  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  // Framer Motion Animation Variants
  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.3 } },
  }

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { type: 'spring' as const, damping: 25, stiffness: 250, delay: 0.1 },
    },
    exit: { opacity: 0, scale: 0.95, y: 15, transition: { duration: 0.2 } },
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          variants={overlayVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          onClick={onClose}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/80 backdrop-blur-xl overflow-y-auto"
        >
          {/* Modal Box */}
          <motion.div
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-5xl max-h-[90vh] bg-[#0A0A0B] border border-white/10 rounded-3xl overflow-y-auto shadow-2xl scrollbar-thin select-text"
          >
            {/* Sticky Close Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 z-30 w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 transition-all cursor-pointer"
              aria-label="Close modal"
            >
              <FiX size={20} />
            </button>

            {/* 1. Hero Section */}
            <div className="relative pt-16 pb-12 px-6 sm:px-12 md:px-16 border-b border-white/[0.05] bg-gradient-to-b from-[#ff6b00]/5 via-transparent to-transparent">
              {/* Fox Logo SVG */}
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
                <div className="flex items-center gap-5">
                  <div className="w-16 h-16 rounded-2xl bg-[#ff6b00]/10 border border-[#ff6b00]/30 flex items-center justify-center shadow-[0_0_30px_rgba(255,107,0,0.15)]">
                    <svg viewBox="0 0 100 100" fill="none" className="w-11 h-11">
                      {/* Premium Origami Fox SVG */}
                      <path d="M50 15 L20 45 L40 65 L50 50 L60 65 L80 45 Z" fill="#ff6b00" />
                      <path d="M50 50 L40 65 H60 Z" fill="#ff8c38" />
                      <path d="M20 45 L40 65 L25 80 L20 45 Z" fill="#d35400" />
                      <path d="M80 45 L60 65 L75 80 L80 45 Z" fill="#d35400" />
                      <polygon points="45,45 50,48 55,45 50,50" fill="#ffffff" />
                      <circle cx="43" cy="40" r="3" fill="#ffffff" />
                      <circle cx="57" cy="40" r="3" fill="#ffffff" />
                      <circle cx="43" cy="40" r="1.5" fill="#0A0A0B" />
                      <circle cx="57" cy="40" r="1.5" fill="#0A0A0B" />
                    </svg>
                  </div>

                  <div>
                    <span className="font-mono-label text-[#ff6b00] text-xs">Chrome Extension</span>
                    <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight mt-1 flex items-center gap-3">
                      FocusFox
                      <span className="text-[10px] uppercase font-mono tracking-widest bg-emerald-500/10 text-emerald-400 border border-emerald-500/25 px-2.5 py-0.5 rounded-md font-semibold">
                        Published
                      </span>
                    </h1>
                  </div>
                </div>

                {/* External Action Badges */}
                <div className="flex flex-wrap items-center gap-3">
                  <a
                    href="https://chromewebstore.google.com/detail/focusfox/kgfihielaibchimfgfkdlehkldegiokl"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-black font-semibold text-xs transition-transform duration-200 hover:scale-[1.02] cursor-pointer"
                  >
                    <FaChrome className="text-black" size={16} />
                    <span>Chrome Web Store</span>
                  </a>
                  <a
                    href="https://github.com/Viduraz/Focus_Fox"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#131314] hover:bg-white/10 border border-white/10 text-white font-semibold text-xs transition-transform duration-200 hover:scale-[1.02] cursor-pointer"
                  >
                    <FiGithub size={16} />
                    <span>View Repository</span>
                  </a>
                </div>
              </div>

              {/* Tagline */}
              <p className="text-lg sm:text-xl text-white/70 font-light mt-6 max-w-3xl leading-relaxed">
                Enhance your LMS learning space on Moodle & CourseWeb. FocusFox removes digital clutter, tracks assignment deadlines dynamically, and filters student priorities in a distraction-free workspace.
              </p>

              {/* Main Banner Screenshot */}
              <div className="mt-10 rounded-2xl overflow-hidden border border-white/10 shadow-2xl relative aspect-[16/9] w-full bg-zinc-900 group">
                <Image
                  src="/images/projects/focusfox.jpg"
                  alt="FocusFox Extension Interface"
                  fill
                  priority
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.01]"
                  sizes="(max-width: 1200px) 100vw, 1024px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>

            {/* Scrollable Container with Content Blocks */}
            <motion.div
              variants={containerVariants}
              className="p-6 sm:p-12 md:p-16 space-y-16"
            >
              {/* 2. Project Overview & Stats Grid */}
              <motion.div variants={itemVariants} className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                <div className="lg:col-span-2 space-y-4">
                  <h2 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
                    <FiInfo className="text-[#ff6b00]" /> Project Overview
                  </h2>
                  <p className="text-white/60 font-light leading-relaxed">
                    FocusFox is an academic productivity tool developed as a modular Chrome Extension. It integrates seamlessly with popular LMS platforms like Moodle and CourseWeb, addressing the visual friction and disorganization students face daily.
                  </p>
                  <p className="text-white/60 font-light leading-relaxed">
                    By intercepting the DOM, the extension dynamically extracts critical dates, notifications, and deadlines while offering a toggleable Focus Mode and automated content-script parsing. FocusFox helps students focus on studying without losing track of upcoming exams and submission files.
                  </p>
                </div>

                {/* Quick Info Card */}
                <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 space-y-4">
                  <span className="font-mono-label text-white/30 text-xs">Project Metadata</span>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center text-xs pb-2.5 border-b border-white/[0.05]">
                      <span className="text-white/40 flex items-center gap-1.5"><FiCalendar /> Duration</span>
                      <span className="text-white font-medium">7 Days (Sprint)</span>
                    </div>
                    <div className="flex justify-between items-center text-xs pb-2.5 border-b border-white/[0.05]">
                      <span className="text-white/40 flex items-center gap-1.5"><FiCpu /> Architecture</span>
                      <span className="text-white font-medium">Manifest V3</span>
                    </div>
                    <div className="flex justify-between items-center text-xs pb-2.5 border-b border-white/[0.05]">
                      <span className="text-white/40 flex items-center gap-1.5"><FiLayers /> Stack</span>
                      <span className="text-[#ffb693] font-medium font-mono">React / TS / Tailwind</span>
                    </div>
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-white/40 flex items-center gap-1.5"><FiCheckCircle className="text-emerald-400" /> Platform</span>
                      <span className="text-white font-medium">Moodle / CourseWeb</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* 3. Problem & Solution */}
              <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-white/[0.05] pt-12">
                <div className="p-6 sm:p-8 rounded-2xl bg-red-500/[0.02] border border-red-500/10 space-y-4">
                  <h3 className="text-lg font-bold text-red-400 tracking-tight flex items-center gap-2">
                    ⚠️ The Problem
                  </h3>
                  <ul className="space-y-3 text-sm text-white/60 font-light list-disc list-inside">
                    <li>Students suffer from cluttered and outdated LMS user interfaces.</li>
                    <li>Assignments and deadlines are often hidden deep in nested menus.</li>
                    <li>Important course announcements get buried under administrative forum posts.</li>
                    <li>Long study sessions on bright LMS screens lead to intense eye strain.</li>
                    <li>No local statistics to track active learning hours or task progression.</li>
                  </ul>
                </div>

                <div className="p-6 sm:p-8 rounded-2xl bg-emerald-500/[0.02] border border-emerald-500/10 space-y-4">
                  <h3 className="text-lg font-bold text-emerald-400 tracking-tight flex items-center gap-2">
                    ✅ The Solution
                  </h3>
                  <ul className="space-y-3 text-sm text-white/60 font-light list-disc list-inside">
                    <li>Instant clean injection: toggle one-click distraction-free Focus Mode.</li>
                    <li>Dynamic DOM scrapers pull schedules automatically to a centralized dashboard.</li>
                    <li>Automatic keyword highlighter emphasizes exams, quizzes, and deadlines.</li>
                    <li>Persistent global Dark Mode custom styles applied directly to raw course pages.</li>
                    <li>Built-in productivity Pomodoro timer and statistics tracker dashboard.</li>
                  </ul>
                </div>
              </motion.div>

              {/* 4. Feature Showcase Cards */}
              <motion.div variants={itemVariants} className="space-y-8 border-t border-white/[0.05] pt-12">
                <div className="flex flex-col gap-2">
                  <span className="font-mono-label text-[#ff6b00] text-xs">Product Details</span>
                  <h2 className="text-2xl font-bold text-white tracking-tight">Core Productivity Suite</h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {/* Dark Mode */}
                  <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-[#ff6b00]/30 transition-all duration-300 group space-y-4">
                    <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 group-hover:scale-110 transition-transform">
                      <FiMoon size={20} />
                    </div>
                    <h4 className="font-semibold text-white">🌙 Custom Dark Theme</h4>
                    <p className="text-xs text-white/55 font-light leading-relaxed">
                      Custom CSS stylesheets injected dynamically to shield eyes during late-night study sessions. Saves display states persistently using browser storage synchronization.
                    </p>
                  </div>

                  {/* Focus Mode */}
                  <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-[#ff6b00]/30 transition-all duration-300 group space-y-4">
                    <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
                      <FiEyeOff size={20} />
                    </div>
                    <h4 className="font-semibold text-white">🎯 Focus mode</h4>
                    <p className="text-xs text-white/55 font-light leading-relaxed">
                      One-click distraction block that hides navigation sidebars, blocks administrative ads, and centers learning content to maximize reading focus.
                    </p>
                  </div>

                  {/* Smart Highlights */}
                  <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-[#ff6b00]/30 transition-all duration-300 group space-y-4">
                    <div className="w-10 h-10 rounded-xl bg-[#ff6b00]/10 border border-[#ff6b00]/20 flex items-center justify-center text-[#ff6b00] group-hover:scale-110 transition-transform">
                      <FiBookOpen size={20} />
                    </div>
                    <h4 className="font-semibold text-white">✨ Smart highlights</h4>
                    <p className="text-xs text-white/55 font-light leading-relaxed">
                      LMS DOM-parser content script highlights essential keywords like "exam", "quiz", "assignment deadline", and definitions to enhance visual scanning.
                    </p>
                  </div>

                  {/* Academic Dashboard */}
                  <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-[#ff6b00]/30 transition-all duration-300 group space-y-4">
                    <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 group-hover:scale-110 transition-transform">
                      <FiLayers size={20} />
                    </div>
                    <h4 className="font-semibold text-white">🧠 Academic Dashboard</h4>
                    <p className="text-xs text-white/55 font-light leading-relaxed">
                      An integrated portal overlay pulling calendar deadlines, syllabus milestones, and task completions into a beautiful unified statistics widget.
                    </p>
                  </div>

                  {/* Smart Academic Insights */}
                  <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-[#ff6b00]/30 transition-all duration-300 group space-y-4">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
                      <FiTrendingUp size={20} />
                    </div>
                    <h4 className="font-semibold text-white">📊 Academic Insights</h4>
                    <p className="text-xs text-white/55 font-light leading-relaxed">
                      An intelligent categorization and alert system prioritizing assignments based on remaining time. Filters course contents to display urgency alerts.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* 5. 7-Day Timeline */}
              <motion.div variants={itemVariants} className="space-y-8 border-t border-white/[0.05] pt-12">
                <div className="flex flex-col gap-2">
                  <span className="font-mono-label text-[#ff6b00] text-xs">Sprints & Milestones</span>
                  <h2 className="text-2xl font-bold text-white tracking-tight">7-Day Development Journey</h2>
                </div>

                <div className="relative pl-6 sm:pl-8 border-l border-white/10 space-y-8">
                  {[
                    { day: 'Day 1', title: 'Architecture & MV3 Prep', desc: 'Conducted planning, analyzed SLIIT CourseWeb DOM structure, and set up Chrome Extension Manifest V3 configuration.' },
                    { day: 'Day 2', title: 'React popup & Storage Core', desc: 'Integrated React + Vite + TypeScript. Structured chrome.storage.local setup to manage layout states and settings persistently.' },
                    { day: 'Day 3', title: 'Dark Mode Custom Styling', desc: 'Wrote content script dark styling injection scripts, verified styles match Moodle course frames without flicker.' },
                    { day: 'Day 4', title: 'Focus Mode Engine', desc: 'Constructed custom DOM parser selector list. Provided toggle controls to collapse navigation components and expand text containers.' },
                    { day: 'Day 5', title: 'Smart Highlight Scanner', desc: 'Programmed regex-based content script highlighter. Analyzed DOM text nodes dynamically on page load to tag critical dates.' },
                    { day: 'Day 6', title: 'LMS Academic Dashboard', desc: 'Added integrated Moodle scraper logic to pull timelines. Built Centralized dashboard widgets with completion lists.' },
                    { day: 'Day 7', title: 'Web Store Deploy & Audit', desc: 'Polished stylesheet transitions, compiled React bundle, packaged build artifacts, passed store verification audits, and published extension.' },
                  ].map((t, idx) => (
                    <div key={t.day} className="relative">
                      {/* Timeline dot */}
                      <span className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-[#0A0A0B] border-2 border-[#ff6b00] flex items-center justify-center">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#ffb693] animate-pulse" />
                      </span>
                      <div className="space-y-1">
                        <span className="font-mono text-[#ffb693] text-[10px] uppercase tracking-wider">{t.day}</span>
                        <h4 className="font-bold text-white text-sm sm:text-base">{t.title}</h4>
                        <p className="text-xs sm:text-sm text-white/50 font-light leading-relaxed max-w-2xl">{t.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* 6. Technical Challenges */}
              <motion.div variants={itemVariants} className="space-y-8 border-t border-white/[0.05] pt-12">
                <div className="flex flex-col gap-2">
                  <span className="font-mono-label text-[#ff6b00] text-xs">Engineering Problems</span>
                  <h2 className="text-2xl font-bold text-white tracking-tight">Technical Challenges & Workarounds</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-xs sm:text-sm">
                  <div className="space-y-4">
                    <h4 className="font-bold text-[#ffb693] flex items-center gap-2">
                      <FiCpu /> Manifest V3 Content Script Limitations
                    </h4>
                    <p className="text-white/60 font-light leading-relaxed">
                      **Challenge:** Under MV3, service workers run in background scope, and content scripts run in isolated DOM worlds. Standard React app mounts fail due to CSP restrictions on CourseWeb pages.
                    </p>
                    <p className="text-white/60 font-light leading-relaxed">
                      **Workaround:** Programmed dynamic stylesheet injection alongside custom custom-elements templates. Content scripts inject a shadow root containing the React components, shielding LMS styles from bleeding into the extension.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-bold text-[#ffb693] flex items-center gap-2">
                      <FiDatabase /> Dynamic DOM Mutation & Scraper Performance
                    </h4>
                    <p className="text-white/60 font-light leading-relaxed">
                      **Challenge:** LMS timelines load content asynchronously. Scraping on load triggers empty states, and polling slows page speeds significantly.
                    </p>
                    <p className="text-white/60 font-light leading-relaxed">
                      **Workaround:** Implemented a lightweight MutationObserver that detects DOM updates specifically on assignments widgets, and batches chrome storage writes to throttle updates under 100ms.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* 7. Recruiter Highlights */}
              <motion.div variants={itemVariants} className="p-8 rounded-2xl bg-[#ff6b00]/5 border border-[#ff6b00]/15 space-y-6">
                <div className="space-y-2">
                  <span className="font-mono-label text-[#ffb693] text-xs">Skills on Display</span>
                  <h3 className="text-xl font-black text-white">Why Recruiters Care</h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-xs leading-relaxed">
                  <div className="space-y-2">
                    <h5 className="font-bold text-white">⚙️ Extension Architecture</h5>
                    <p className="text-white/50 font-light">
                      Deep competency with MV3, background workers, content script injection, shadow DOMs, and security boundaries.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h5 className="font-bold text-white">⚡ Async Performance</h5>
                    <p className="text-white/50 font-light">
                      Flicker-free style sheets, batched chrome storage operations, and low mutation-observation performance footprints.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h5 className="font-bold text-white">🎨 Premium UI/UX</h5>
                    <p className="text-white/50 font-light">
                      Sleek dark themes, smooth micro-interactions, clean glassmorphism cards, and customized dashboard layouts.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h5 className="font-bold text-white">📦 Product Packaging</h5>
                    <p className="text-white/50 font-light">
                      End-to-end delivery including asset packaging, Chrome Developer Console deployment, and store compliance.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* 8. Results & Final CTAs */}
              <motion.div variants={itemVariants} className="flex flex-col items-center text-center gap-6 border-t border-white/[0.05] pt-12">
                <h3 className="text-xl font-bold text-white">See FocusFox In Action</h3>
                <p className="text-sm text-white/50 font-light max-w-md leading-relaxed">
                  Download the extension directly from the official Chrome Web Store, or explore the modular TypeScript codebase on GitHub.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <a
                    href="https://chromewebstore.google.com/detail/focusfox/kgfihielaibchimfgfkdlehkldegiokl"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                  >
                    <FaChrome size={18} />
                    <span>Get FocusFox Extension</span>
                  </a>
                  <a
                    href="https://github.com/Viduraz/Focus_Fox"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary"
                  >
                    <FiGithub size={18} />
                    <span>Explore Source Code</span>
                  </a>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
