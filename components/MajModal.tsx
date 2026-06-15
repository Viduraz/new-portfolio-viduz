'use client'

import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { useEffect } from 'react'
import {
  FiX,
  FiGithub,
  FiCheckCircle,
  FiDatabase,
  FiLayers,
  FiInfo,
  FiCalendar,
  FiCpu,
  FiTrendingUp,
  FiUser,
  FiShield,
  FiAward,
  FiMap,
  FiActivity,
  FiServer,
} from 'react-icons/fi'
import { FaExternalLinkAlt } from 'react-icons/fa'

interface MajModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function MajModal({ isOpen, onClose }: MajModalProps) {
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
            <div className="relative pt-16 pb-12 px-6 sm:px-12 md:px-16 border-b border-white/[0.05] bg-gradient-to-b from-[#10b981]/5 via-transparent to-transparent">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
                <div className="flex items-center gap-5">
                  <div className="w-16 h-16 rounded-2xl bg-[#10b981]/10 border border-[#10b981]/30 flex items-center justify-center shadow-[0_0_30px_rgba(16,185,129,0.15)]">
                    <svg viewBox="0 0 100 100" fill="none" className="w-11 h-11">
                      {/* Premium Origami Compass / Scout Badge SVG */}
                      <path d="M50 10 L62 38 L90 50 L62 62 L50 90 L38 62 L10 50 L38 38 Z" fill="#10b981" />
                      <circle cx="50" cy="50" r="12" fill="#0A0A0B" />
                      <polygon points="50,38 53,50 47,50" fill="#f59e0b" />
                      <polygon points="50,62 53,50 47,50" fill="#ffffff" />
                      <polygon points="38,50 50,53 50,47" fill="#ffffff" />
                      <polygon points="62,50 50,53 50,47" fill="#f59e0b" />
                    </svg>
                  </div>

                  <div>
                    <span className="font-mono-label text-[#10b981] text-xs">Full-Stack Web Ecosystem</span>
                    <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight mt-1 flex items-center gap-3">
                      MAJ'25
                      <span className="text-[10px] uppercase font-mono tracking-widest bg-[#10b981]/15 text-[#10b981] border border-[#10b981]/25 px-2.5 py-0.5 rounded-md font-semibold">
                        Sri Lanka's First
                      </span>
                    </h1>
                  </div>
                </div>

                {/* External Action Badges */}
                <div className="flex flex-wrap items-center gap-3">
                  <a
                    href="https://maj2025com.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-black font-semibold text-xs transition-transform duration-200 hover:scale-[1.02] cursor-pointer"
                  >
                    <FaExternalLinkAlt className="text-black" size={12} />
                    <span>Live Platform</span>
                  </a>
                  <a
                    href="https://github.com/Viduraz/MAJ-25"
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
                Sri Lanka's first digitalized scout camping management platform, developed for the Maliyadeva Adarsha Scout Group. A centralized system managing registrations, live activity progress, leaderboards, and administrative coordination.
              </p>

              {/* Main Banner Screenshot */}
              <div className="mt-10 rounded-2xl overflow-hidden border border-white/10 shadow-2xl relative aspect-[16/9] w-full bg-zinc-900 group">
                <Image
                  src="/images/projects/maj25.png"
                  alt="MAJ'25 Scout Portal Interface Mockup"
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
                    <FiInfo className="text-[#10b981]" /> Project Overview
                  </h2>
                  <p className="text-white/60 font-light leading-relaxed">
                    MAJ'25 is a full-stack digital camp ecosystem developed to modernize large-scale scout events in Sri Lanka. Previously, Maliyadeva Adarsha Scout Group's camping events relied on manual paper-based registration logs, physical card tracking for activity checkpoints, and scattered event updates.
                  </p>
                  <p className="text-white/60 font-light leading-relaxed">
                    The platform centralizes all workflows: participants register and manage their digital profiles online; check-point leaders review activity progress in real-time through custom dashboards; and administrators oversee registrations, check-in validation, and event-wide operational stats.
                  </p>
                </div>

                {/* Quick Info Card */}
                <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 space-y-4">
                  <span className="font-mono-label text-white/30 text-xs">Project Metadata</span>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center text-xs pb-2.5 border-b border-white/[0.05]">
                      <span className="text-white/40 flex items-center gap-1.5"><FiCalendar /> Duration</span>
                      <span className="text-white font-medium">3 Weeks (Production Build)</span>
                    </div>
                    <div className="flex justify-between items-center text-xs pb-2.5 border-b border-white/[0.05]">
                      <span className="text-white/40 flex items-center gap-1.5"><FiUser /> My Role</span>
                      <span className="text-white font-medium">Full-Stack Architect</span>
                    </div>
                    <div className="flex justify-between items-center text-xs pb-2.5 border-b border-white/[0.05]">
                      <span className="text-white/40 flex items-center gap-1.5"><FiLayers /> Stack</span>
                      <span className="text-[#10b981] font-medium font-mono">React / Node / MongoDB</span>
                    </div>
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-white/40 flex items-center gap-1.5"><FiCheckCircle className="text-emerald-400" /> Organization</span>
                      <span className="text-white font-medium text-right">Maliyadeva Adarsha Scout Group</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* 3. Problem & Solution */}
              <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-white/[0.05] pt-12">
                <div className="p-6 sm:p-8 rounded-2xl bg-red-500/[0.02] border border-red-500/10 space-y-4">
                  <h3 className="text-lg font-bold text-red-400 tracking-tight flex items-center gap-2">
                    ⚠️ The Problem Identified
                  </h3>
                  <ul className="space-y-3 text-sm text-white/60 font-light list-disc list-inside">
                    <li><strong>Manual Registration Processes:</strong> Hundreds of participant forms were processed manually on paper, leading to delays and typos.</li>
                    <li><strong>Inefficient Activity Tracking:</strong> Activity checkpoints were monitored manually using sheets, preventing real-time tracking of completion statistics.</li>
                    <li><strong>Organizers Overhead:</strong> Event organizers lost significant time verifying paper registrations and managing manual logs during the event.</li>
                    <li><strong>Data Accessibility Issues:</strong> Participant profiles and event-wide statistics were scattered across disconnected paper records.</li>
                    <li><strong>Scalability Challenges:</strong> Traditional workflows struggled to scale with increasing attendee counts.</li>
                  </ul>
                </div>

                <div className="p-6 sm:p-8 rounded-2xl bg-emerald-500/[0.02] border border-emerald-500/10 space-y-4">
                  <h3 className="text-lg font-bold text-emerald-400 tracking-tight flex items-center gap-2">
                    ✅ The Solution Developed
                  </h3>
                  <ul className="space-y-3 text-sm text-white/60 font-light list-disc list-inside">
                    <li><strong>Online Participant Profiles:</strong> Secure digital profile creation allows participants to manage registrations and view activity completion logs.</li>
                    <li><strong>Digital Registration System:</strong> Paperless online form pipeline captures details, verifies credentials, and generates digital credentials.</li>
                    <li><strong>Admin Dashboard:</strong> Central command center for administrators to manage approvals, participant lists, and event statistics.</li>
                    <li><strong>Activity Tracking Modules:</strong> Enables coordinators to log, update, and track activity check-point progressions in real-time.</li>
                    <li><strong>Secure JWT Authentication:</strong> Role-based access controls separate permissions for organizers, checkpoint leaders, and campers.</li>
                  </ul>
                </div>
              </motion.div>

              {/* 4. Technical Architecture Visual */}
              <motion.div variants={itemVariants} className="space-y-6 border-t border-white/[0.05] pt-12">
                <div className="flex flex-col gap-2">
                  <span className="font-mono-label text-[#10b981] text-xs">System Architecture</span>
                  <h2 className="text-2xl font-bold text-white tracking-tight">Full-Stack Data Flow</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                  <div className="p-6 rounded-2xl bg-[#10b981]/5 border border-[#10b981]/15 space-y-2">
                    <div className="w-10 h-10 rounded-xl bg-[#10b981]/10 border border-[#10b981]/20 flex items-center justify-center text-[#10b981] mx-auto">
                      <FiCpu size={20} />
                    </div>
                    <h4 className="font-bold text-white">React + Vite Frontend</h4>
                    <p className="text-xs text-white/50 leading-relaxed font-light">
                      Framer Motion for fluid transitions, Redux Toolkit state storage, and responsive layout for camping outdoor mobile usage.
                    </p>
                  </div>

                  <div className="p-6 rounded-2xl bg-amber-500/5 border border-amber-500/15 space-y-2 relative">
                    <div className="hidden md:block absolute top-1/2 -right-3 -translate-y-1/2 text-white/10 z-10 text-xl font-bold">→</div>
                    <div className="hidden md:block absolute top-1/2 -left-3 -translate-y-1/2 text-white/10 z-10 text-xl font-bold">→</div>
                    <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 mx-auto">
                      <FiServer size={20} />
                    </div>
                    <h4 className="font-bold text-white">Express.js API Gateway</h4>
                    <p className="text-xs text-white/50 leading-relaxed font-light">
                      RESTful endpoints serving validation, JWT checks, Cookie parser authentication, and administrative event controls.
                    </p>
                  </div>

                  <div className="p-6 rounded-2xl bg-[#4b8eff]/5 border border-[#4b8eff]/15 space-y-2">
                    <div className="w-10 h-10 rounded-xl bg-[#4b8eff]/10 border border-[#4b8eff]/20 flex items-center justify-center text-[#4b8eff] mx-auto">
                      <FiDatabase size={20} />
                    </div>
                    <h4 className="font-bold text-white">MongoDB & Mongoose</h4>
                    <p className="text-xs text-white/50 leading-relaxed font-light">
                      Document storage schemas containing user registrations, secure password hashes (bcrypt), and nested activity completion logs.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* 5. Feature Breakdown */}
              <motion.div variants={itemVariants} className="space-y-8 border-t border-white/[0.05] pt-12">
                <div className="flex flex-col gap-2">
                  <span className="font-mono-label text-[#10b981] text-xs">Technical Details</span>
                  <h2 className="text-2xl font-bold text-white tracking-tight">Key Contributions & Features</h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {/* Participant Reg */}
                  <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-[#10b981]/30 transition-all duration-300 group space-y-4">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
                      <FiUser size={20} />
                    </div>
                    <h4 className="font-semibold text-white">Digital Participant Registration</h4>
                    <p className="text-xs text-white/55 font-light leading-relaxed">
                      Custom form validation rules, secure password encryption with bcryptjs, and profiles tracking camping events, schedules, and group badges.
                    </p>
                  </div>

                  {/* Activity Progress */}
                  <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-[#10b981]/30 transition-all duration-300 group space-y-4">
                    <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 group-hover:scale-110 transition-transform">
                      <FiActivity size={20} />
                    </div>
                    <h4 className="font-semibold text-white">Activity Tracking & Verification</h4>
                    <p className="text-xs text-white/55 font-light leading-relaxed">
                      Checkpoint leaders mark tasks completed. Updates immediately sync to the participant profile, logging points and progress badges.
                    </p>
                  </div>

                  {/* Admin Dashboard */}
                  <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-[#10b981]/30 transition-all duration-300 group space-y-4">
                    <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 group-hover:scale-110 transition-transform">
                      <FiMap size={20} />
                    </div>
                    <h4 className="font-semibold text-white">Central Operations Panel</h4>
                    <p className="text-xs text-white/55 font-light leading-relaxed">
                      Secure administrator dashboards providing batch approvals, list filters, stats tracking, registration checks, and database management.
                    </p>
                  </div>

                  {/* Security & Access */}
                  <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-[#10b981]/30 transition-all duration-300 group space-y-4">
                    <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
                      <FiShield size={20} />
                    </div>
                    <h4 className="font-semibold text-white">JWT Authentication Suite</h4>
                    <p className="text-xs text-white/55 font-light leading-relaxed">
                      HTTP-only secure cookie authentication, Express middleware role validations (Admin, Checkpoint, Scout), and protected routes.
                    </p>
                  </div>

                  {/* Redux State */}
                  <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-[#10b981]/30 transition-all duration-300 group space-y-4">
                    <div className="w-10 h-10 rounded-xl bg-[#10b981]/10 border border-[#10b981]/20 flex items-center justify-center text-[#10b981] group-hover:scale-110 transition-transform">
                      <FiLayers size={20} />
                    </div>
                    <h4 className="font-semibold text-white">Redux Toolkit State</h4>
                    <p className="text-xs text-white/55 font-light leading-relaxed">
                      Maintains user login states, authorization layers, and local cache using Redux Persist. Throttles api calls and keeps smooth sessions.
                    </p>
                  </div>

                  {/* UI / Animations */}
                  <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-[#10b981]/30 transition-all duration-300 group space-y-4">
                    <div className="w-10 h-10 rounded-xl bg-[#4b8eff]/10 border border-[#4b8eff]/20 flex items-center justify-center text-[#4b8eff] group-hover:scale-110 transition-transform">
                      <FiTrendingUp size={20} />
                    </div>
                    <h4 className="font-semibold text-white">Framer Motion FX</h4>
                    <p className="text-xs text-white/55 font-light leading-relaxed">
                      Optimized animations and hover micro-effects tailored for outdoor, sunlight-readable responsive UI with minimal rendering latency.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* 6. Recruiter Highlights */}
              <motion.div variants={itemVariants} className="p-8 rounded-2xl bg-[#10b981]/5 border border-[#10b981]/15 space-y-6">
                <div className="space-y-2">
                  <span className="font-mono-label text-[#10b981] text-xs">Engineering Summary</span>
                  <h3 className="text-xl font-black text-white">Key Achievements & Impact</h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-xs leading-relaxed">
                  <div className="space-y-2">
                    <h5 className="font-bold text-white">🚀 Operational Efficiency</h5>
                    <p className="text-white/50 font-light">
                      Completely removed traditional paperwork pipelines, streamlining registrations and data access.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h5 className="font-bold text-white">🎯 Data Reliability</h5>
                    <p className="text-white/50 font-light">
                      Centralized MongoDB storage ensures single-sources of truth for attendee profiles and activity status logs.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h5 className="font-bold text-white">⚡ Agile Coordination</h5>
                    <p className="text-white/50 font-light">
                      Leaders log checkpoints instantly, reducing administration delays by over 80% during outdoor tasks.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h5 className="font-bold text-white">🏆 Historic Milestone</h5>
                    <p className="text-white/50 font-light">
                      Successfully launched Sri Lanka's first digital event ecosystem for a regional scout organization.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* 7. Future Enhancements */}
              <motion.div variants={itemVariants} className="space-y-8 border-t border-white/[0.05] pt-12">
                <div className="flex flex-col gap-2">
                  <span className="font-mono-label text-[#10b981] text-xs">Future Roadmap</span>
                  <h2 className="text-2xl font-bold text-white tracking-tight">Upcoming Enhancements</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-xs sm:text-sm">
                  <div className="space-y-4">
                    <h4 className="font-bold text-[#10b981] flex items-center gap-2">
                      <FiActivity /> Real-Time Analytics & Stats
                    </h4>
                    <p className="text-white/60 font-light leading-relaxed">
                      Integrating real-time event analytics dashboards using WebSockets. Shows leaderboard changes, active checkpoint counts, and live attendee statistics.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-bold text-[#10b981] flex items-center gap-2">
                      <FiAward /> Push Alerts & Reporting
                    </h4>
                    <p className="text-white/60 font-light leading-relaxed">
                      Developing automated data export sheets (Excel/PDF) for administrators and adding push announcements for quick camp-wide schedules and weather alerts.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* 8. Results & Final CTAs */}
              <motion.div variants={itemVariants} className="flex flex-col items-center text-center gap-6 border-t border-white/[0.05] pt-12">
                <h3 className="text-xl font-bold text-white">Explore MAJ'25</h3>
                <p className="text-sm text-white/50 font-light max-w-md leading-relaxed">
                  Learn more about the full-stack architecture on GitHub or explore the project details.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <a
                    href="https://maj2025com.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                  >
                    <FaExternalLinkAlt size={14} />
                    <span>View Live Demo</span>
                  </a>
                  <a
                    href="https://github.com/Viduraz/MAJ-25"
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
