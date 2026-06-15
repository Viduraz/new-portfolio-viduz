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
  FiSun,
  FiGrid,
  FiMessageSquare,
  FiCamera,
  FiCloud,
  FiServer,
} from 'react-icons/fi'
import { FaLeaf } from 'react-icons/fa'

interface AgriLankaModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function AgriLankaModal({ isOpen, onClose }: AgriLankaModalProps) {
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
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
    },
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
                      {/* Premium Origami Leaf SVG */}
                      <path d="M50 15 C20 40 20 80 50 85 C80 80 80 40 50 15 Z" fill="#10b981" />
                      <path d="M50 15 C35 40 35 80 50 85 Z" fill="#059669" />
                      <path d="M50 85 V15" stroke="#ffffff" strokeWidth="2" opacity="0.3" />
                    </svg>
                  </div>

                  <div>
                    <span className="font-mono-label text-[#10b981] text-xs">Agriculture Management</span>
                    <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight mt-1 flex flex-wrap items-center gap-3">
                      AgriLanka
                      <span className="text-[10px] uppercase font-mono tracking-widest bg-[#10b981]/15 text-[#10b981] border border-[#10b981]/25 px-2.5 py-0.5 rounded-md font-semibold">
                        PAF Project
                      </span>
                    </h1>
                  </div>
                </div>

                {/* External Action Badges */}
                <div className="flex flex-wrap items-center gap-3">
                  <a
                    href="https://github.com/Viduraz/PAF_SLIIT.git"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-black font-semibold text-xs transition-transform duration-200 hover:scale-[1.02] cursor-pointer"
                  >
                    <FiGithub size={16} className="text-black" />
                    <span>View Repository</span>
                  </a>
                </div>
              </div>

              {/* Tagline */}
              <p className="text-lg sm:text-xl text-white/70 font-light mt-6 max-w-3xl leading-relaxed">
                A comprehensive full-stack agricultural management platform developed for the SLIIT PAF (Project) module. Designed to empower Sri Lankan farmers with crop disease detection, planning tools, weather reports, and community support.
              </p>

              {/* Main Banner Screenshot */}
              <div className="mt-10 rounded-2xl overflow-hidden border border-white/10 shadow-2xl relative aspect-[16/9] w-full bg-zinc-900 group">
                <Image
                  src="/images/projects/agrilanka.png"
                  alt="AgriLanka App Mockup Dashboard"
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
                    AgriLanka is an innovative web ecosystem designed to support smallholder farmers across Sri Lanka. The platform was created as a key project for the SLIIT PAF module in the 3rd Year, 1st Semester.
                  </p>
                  <p className="text-white/60 font-light leading-relaxed">
                    The platform coordinates a rich set of features including crop planning schedules, plant progress logs, AI leaf disease analysis, weather updates, and a community discussion board. The system utilizes Spring Boot microservices backed by MongoDB and integrated with Cloudinary for asset storage and Firebase for user authentication.
                  </p>
                </div>

                {/* Quick Info Card */}
                <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 space-y-4">
                  <span className="font-mono-label text-white/30 text-xs">Project Metadata</span>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center text-xs pb-2.5 border-b border-white/[0.05]">
                      <span className="text-white/40 flex items-center gap-1.5"><FiCalendar /> Timeline</span>
                      <span className="text-white font-medium">3rd Year, 1st Sem</span>
                    </div>
                    <div className="flex justify-between items-center text-xs pb-2.5 border-b border-white/[0.05]">
                      <span className="text-white/40 flex items-center gap-1.5"><FiUser /> Course Module</span>
                      <span className="text-white font-medium">PAF (SLIIT)</span>
                    </div>
                    <div className="flex justify-between items-center text-xs pb-2.5 border-b border-white/[0.05]">
                      <span className="text-white/40 flex items-center gap-1.5"><FiLayers /> Stack</span>
                      <span className="text-[#10b981] font-medium font-mono text-[10px]">React / Spring Boot / MongoDB</span>
                    </div>
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-white/40 flex items-center gap-1.5"><FiCloud className="text-emerald-400" /> Cloud Services</span>
                      <span className="text-white font-medium text-xs">Firebase & Cloudinary</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* 3. Problem & Solution */}
              <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-white/[0.05] pt-12">
                <div className="p-6 sm:p-8 rounded-2xl bg-red-500/[0.02] border border-red-500/10 space-y-4">
                  <h3 className="text-lg font-bold text-red-400 tracking-tight flex items-center gap-2">
                    ⚠️ Agricultural Challenges
                  </h3>
                  <ul className="space-y-3 text-sm text-white/60 font-light list-disc list-inside">
                    <li><strong>Late Disease Diagnosis:</strong> Plant diseases are detected too late, causing severe crop damage and harvest loss.</li>
                    <li><strong>Lack of Structured Planning:</strong> Farmers have no easy way to track crop cycles, watering lists, and harvest timelines.</li>
                    <li><strong>Isolated Communities:</strong> Agricultural advice is scattered, making it hard for farmers to share advice or request guidance.</li>
                    <li><strong>Erratic Weather Cycles:</strong> No localized weather forecasting tool optimized for harvest planning.</li>
                  </ul>
                </div>

                <div className="p-6 sm:p-8 rounded-2xl bg-emerald-500/[0.02] border border-emerald-500/10 space-y-4">
                  <h3 className="text-lg font-bold text-emerald-400 tracking-tight flex items-center gap-2">
                    ✅ AgriLanka Solutions
                  </h3>
                  <ul className="space-y-3 text-sm text-white/60 font-light list-disc list-inside">
                    <li><strong>AI Disease Scanner:</strong> Interactive tool analyzing plant photos to flag diseases and suggest treatments.</li>
                    <li><strong>Digital Crop Schedule:</strong> Interactive planting logs that calculate expected harvest dates based on soil types.</li>
                    <li><strong>Farming Social Feed:</strong> Local discussion board allowing crop photo sharing, replies, and community medals.</li>
                    <li><strong>Localized Forecasting:</strong> Micro-weather details advising temperature patterns and watering schedules.</li>
                  </ul>
                </div>
              </motion.div>

              {/* 4. Technology Architecture */}
              <motion.div variants={itemVariants} className="space-y-6 border-t border-white/[0.05] pt-12">
                <div className="flex flex-col gap-2">
                  <span className="font-mono-label text-[#10b981] text-xs">Technical Design</span>
                  <h2 className="text-2xl font-bold text-white tracking-tight">System Architecture & Integrations</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                  <div className="p-6 rounded-2xl bg-[#10b981]/5 border border-[#10b981]/15 space-y-2">
                    <div className="w-10 h-10 rounded-xl bg-[#10b981]/10 border border-[#10b981]/20 flex items-center justify-center text-[#10b981] mx-auto">
                      <FiGrid size={20} />
                    </div>
                    <h4 className="font-bold text-white">React 19 + Tailwind</h4>
                    <p className="text-xs text-white/50 leading-relaxed font-light font-mono">
                      Vite 6.2 • Styled Components • Context API • Framer Motion
                    </p>
                  </div>

                  <div className="p-6 rounded-2xl bg-emerald-500/5 border border-emerald-500/15 space-y-2 relative">
                    <div className="hidden md:block absolute top-1/2 -right-3 -translate-y-1/2 text-white/10 z-10 text-xl font-bold">→</div>
                    <div className="hidden md:block absolute top-1/2 -left-3 -translate-y-1/2 text-white/10 z-10 text-xl font-bold">→</div>
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mx-auto">
                      <FiServer size={20} />
                    </div>
                    <h4 className="font-bold text-white">Spring Boot 3.4 REST</h4>
                    <p className="text-xs text-white/50 leading-relaxed font-light font-mono">
                      Java 17 • MVC Pattern • Maven • Spring Data MongoDB
                    </p>
                  </div>

                  <div className="p-6 rounded-2xl bg-blue-500/5 border border-blue-500/15 space-y-2">
                    <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mx-auto">
                      <FiDatabase size={20} />
                    </div>
                    <h4 className="font-bold text-white">NoSQL & Cloud Services</h4>
                    <p className="text-xs text-white/50 leading-relaxed font-light font-mono">
                      MongoDB Atlas • Cloudinary CDN • Firebase Auth
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* 5. Core Feature Suite */}
              <motion.div variants={itemVariants} className="space-y-8 border-t border-white/[0.05] pt-12">
                <div className="flex flex-col gap-2">
                  <span className="font-mono-label text-[#10b981] text-xs">Technical Details</span>
                  <h2 className="text-2xl font-bold text-white tracking-tight">Key Contributions & Modules</h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {/* Planning */}
                  <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-[#10b981]/30 transition-all duration-300 group space-y-4">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
                      <FiCalendar size={20} />
                    </div>
                    <h4 className="font-semibold text-white">Planting Plan Manager</h4>
                    <p className="text-xs text-white/55 font-light leading-relaxed">
                      Farmers create crops, record soil compositions, calculate expected harvest schedules, and compare details on a centralized calendar dashboard.
                    </p>
                  </div>

                  {/* Growth Tracking */}
                  <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-[#10b981]/30 transition-all duration-300 group space-y-4">
                    <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 group-hover:scale-110 transition-transform">
                      <FiTrendingUp size={20} />
                    </div>
                    <h4 className="font-semibold text-white">Progress Timeline Tracking</h4>
                    <p className="text-xs text-white/55 font-light leading-relaxed">
                      Logs plant growth stages with height parameters, leaf counts, health metrics, and uploads visual progress photos synced to Cloudinary.
                    </p>
                  </div>

                  {/* Disease Detector */}
                  <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-[#10b981]/30 transition-all duration-300 group space-y-4">
                    <div className="w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400 group-hover:scale-110 transition-transform">
                      <FiCamera size={20} />
                    </div>
                    <h4 className="font-semibold text-white">AI Crop Disease Analysis</h4>
                    <p className="text-xs text-white/55 font-light leading-relaxed">
                      Enables leaf photograph uploads to analyze crop health. Displays confidence scores, diagnosis descriptions, and organic treatment recommendations.
                    </p>
                  </div>

                  {/* Community */}
                  <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-[#10b981]/30 transition-all duration-300 group space-y-4">
                    <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 group-hover:scale-110 transition-transform">
                      <FiMessageSquare size={20} />
                    </div>
                    <h4 className="font-semibold text-white">Farmers Community Feed</h4>
                    <p className="text-xs text-white/55 font-light leading-relaxed">
                      Social discussion space supporting post creation, replies, likes, achievements, and tips sharing among regional farmers.
                    </p>
                  </div>

                  {/* Cloud CDN */}
                  <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-[#10b981]/30 transition-all duration-300 group space-y-4">
                    <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
                      <FiCpu size={20} />
                    </div>
                    <h4 className="font-semibold text-white">Cloudinary CDN Storage</h4>
                    <p className="text-xs text-white/55 font-light leading-relaxed">
                      High-resolution progress photos and disease analysis captures are uploaded, optimized, and delivered securely using Cloudinary.
                    </p>
                  </div>

                  {/* Weather */}
                  <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-[#10b981]/30 transition-all duration-300 group space-y-4">
                    <div className="w-10 h-10 rounded-xl bg-yellow-500/10 border border-yellow-500/20 flex items-center justify-center text-yellow-400 group-hover:scale-110 transition-transform">
                      <FiSun size={20} />
                    </div>
                    <h4 className="font-semibold text-white">Real-Time Weather Updates</h4>
                    <p className="text-xs text-white/55 font-light leading-relaxed">
                      Integrates weather API data to monitor precipitation index, seasonal temperature flags, and optimal planting conditions.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* 6. Database Schema */}
              <motion.div variants={itemVariants} className="space-y-8 border-t border-white/[0.05] pt-12">
                <div className="flex flex-col gap-2">
                  <span className="font-mono-label text-[#10b981] text-xs">MongoDB Collections</span>
                  <h2 className="text-2xl font-bold text-white tracking-tight">NoSQL Data Models</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-xs sm:text-sm">
                  <div className="space-y-4">
                    <h4 className="font-bold text-[#a7f3d0] flex items-center gap-2">
                      <FiDatabase /> Profiles & Planning
                    </h4>
                    <ul className="space-y-3 text-white/60 font-light leading-relaxed font-mono">
                      <li>
                        <strong>Users:</strong>{' '}
                        <code>{"{ id | username | email | password | profilePicture | bio | createdAt }"}</code>
                      </li>
                      <li>
                        <strong>Planting Plans:</strong>{' '}
                        <code>{"{ id | userId | cropName | plantingDate | soilType | wateringSchedule }"}</code>
                      </li>
                      <li>
                        <strong>Plant Progress:</strong>{' '}
                        <code>{"{ id | plantingPlanId | date | height | leafCount | health | imageUrl }"}</code>
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-bold text-[#a7f3d0] flex items-center gap-2">
                      <FiDatabase /> AI Logs & Community
                    </h4>
                    <ul className="space-y-3 text-white/60 font-light leading-relaxed font-mono">
                      <li>
                        <strong>Disease Analysis:</strong>{' '}
                        <code>{"{ id | userId | imageUrl | disease | confidence | treatment | prevention }"}</code>
                      </li>
                      <li>
                        <strong>Posts:</strong> <code>{"{ id | userId | content | imageUrl | likes | createdAt }"}</code>
                      </li>
                      <li>
                        <strong>Comments:</strong> <code>{"{ id | postId | userId | content | createdAt }"}</code>
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>

              {/* 7. API Endpoints Table */}
              <motion.div variants={itemVariants} className="space-y-8 border-t border-white/[0.05] pt-12">
                <div className="flex flex-col gap-2">
                  <span className="font-mono-label text-[#10b981] text-xs">REST API Specifications</span>
                  <h2 className="text-2xl font-bold text-white tracking-tight">Spring Boot Controller Mappings</h2>
                </div>

                <div className="overflow-x-auto rounded-xl border border-white/5 bg-white/[0.01]">
                  <table className="w-full text-left text-xs border-collapse">
                    <thead>
                      <tr className="border-b border-white/10 bg-white/[0.03] text-white font-bold">
                        <th className="p-3">Method</th>
                        <th className="p-3">Endpoint</th>
                        <th className="p-3">Description</th>
                      </tr>
                    </thead>
                    <tbody className="text-white/60 divide-y divide-white/[0.05]">
                      <tr>
                        <td className="p-3 font-bold text-emerald-400">POST</td>
                        <td className="p-3 font-mono">/users/register</td>
                        <td className="p-3">Register a new farmer profile in MongoDB collection.</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-bold text-emerald-400">POST</td>
                        <td className="p-3 font-mono">/planting-plans</td>
                        <td className="p-3">Create and save a new agricultural planting schedule.</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-bold text-blue-400">GET</td>
                        <td className="p-3 font-mono">/planting-plans</td>
                        <td className="p-3">Retrieve list of all active planting plan schedules.</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-bold text-emerald-400">POST</td>
                        <td className="p-3 font-mono">/plant-progress</td>
                        <td className="p-3">Append growth metrics and Cloudinary image URL to a plan's timeline.</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-bold text-emerald-400">POST</td>
                        <td className="p-3 font-mono">/disease-analysis</td>
                        <td className="p-3">Process uploaded plant leaves to classify diseases and log results.</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-bold text-blue-400">GET</td>
                        <td className="p-3 font-mono">/posts</td>
                        <td className="p-3">Fetch social posts feed with comment counts and total likes.</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-bold text-emerald-400">POST</td>
                        <td className="p-3 font-mono">/upload</td>
                        <td className="p-3">Direct file upload endpoint translating binaries to Cloudinary storage.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </motion.div>

              {/* 8. Recruiter Highlights */}
              <motion.div variants={itemVariants} className="p-8 rounded-2xl bg-[#10b981]/5 border border-[#10b981]/15 space-y-6">
                <div className="space-y-2">
                  <span className="font-mono-label text-[#10b981] text-xs">Engineering Summary</span>
                  <h3 className="text-xl font-black text-white">Why Recruiters Care</h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-xs leading-relaxed">
                  <div className="space-y-2">
                    <h5 className="font-bold text-white">🍃 Full-Stack Spring Boot</h5>
                    <p className="text-white/50 font-light">
                      Java 17 backend services matching modern enterprise designs and REST standards.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h5 className="font-bold text-white">💾 Document Data</h5>
                    <p className="text-white/50 font-light">
                      Competence handling unstructured records using Spring Data MongoDB queries and Atlas.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h5 className="font-bold text-white">☁️ Cloud Integration</h5>
                    <p className="text-white/50 font-light">
                      Familiarity connecting CDN stores (Cloudinary) and user authentications (Firebase).
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h5 className="font-bold text-white">🎨 Modern Client UIs</h5>
                    <p className="text-white/50 font-light">
                      React Vite single page applications styled with Tailwind CSS, Framer Motion, and Axios.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* 9. Final CTAs */}
              <motion.div variants={itemVariants} className="flex flex-col items-center text-center gap-6 border-t border-white/[0.05] pt-12">
                <h3 className="text-xl font-bold text-white">Explore AgriLanka</h3>
                <p className="text-sm text-white/50 font-light max-w-md leading-relaxed">
                  Explore the Spring Boot REST controllers and React page components on GitHub.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <a
                    href="https://github.com/Viduraz/PAF_SLIIT.git"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
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
