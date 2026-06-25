'use client'

import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { useEffect } from 'react'
import {
  FiX,
  FiDatabase,
  FiLayers,
  FiInfo,
  FiCalendar,
  FiCpu,
  FiTrendingUp,
  FiUser,
  FiShield,
  FiServer,
  FiGrid,
  FiActivity,
  FiBriefcase,
  FiCheckSquare,
  FiSettings,
} from 'react-icons/fi'

interface MofInternshipModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function MofInternshipModal({ isOpen, onClose }: MofInternshipModalProps) {
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
            <div className="relative pt-16 pb-12 px-6 sm:px-12 md:px-16 border-b border-white/[0.05] bg-gradient-to-b from-[#3b82f6]/5 via-transparent to-transparent">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
                <div className="flex items-center gap-5">
                  <div className="w-16 h-16 rounded-2xl bg-[#3b82f6]/10 border border-[#3b82f6]/30 flex items-center justify-center shadow-[0_0_30px_rgba(59,130,246,0.15)]">
                    <svg viewBox="0 0 100 100" fill="none" className="w-11 h-11">
                      {/* Secure Government Server SVG */}
                      <rect x="20" y="15" width="60" height="70" rx="8" stroke="#3b82f6" strokeWidth="6" />
                      <line x1="20" y1="38" x2="80" y2="38" stroke="#3b82f6" strokeWidth="4" />
                      <line x1="20" y1="62" x2="80" y2="62" stroke="#3b82f6" strokeWidth="4" />
                      <circle cx="35" cy="26" r="4" fill="#3b82f6" />
                      <circle cx="35" cy="50" r="4" fill="#3b82f6" />
                      <circle cx="35" cy="74" r="4" fill="#3b82f6" />
                      <path d="M60 68 C60 68 60 74 70 78 C80 74 80 68 80 68 C80 68 80 60 70 57 C60 60 60 68 60 68 Z" fill="#3b82f6" opacity="0.8" />
                    </svg>
                  </div>

                  <div>
                    <span className="font-mono-label text-[#3b82f6] text-xs">Professional Experience</span>
                    <h1 className="text-2xl sm:text-4xl font-black text-white tracking-tight mt-1">
                      Trainee Full-stack Software Developer Intern
                    </h1>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-[10px] uppercase font-mono tracking-widest bg-amber-500/10 text-amber-400 border border-amber-500/25 px-2.5 py-1 rounded-md font-semibold">
                    🔒 Proprietary Work
                  </span>
                </div>
              </div>

              {/* Tagline */}
              <p className="text-lg sm:text-xl text-white/70 font-light mt-6 max-w-3xl leading-relaxed">
                Contributed to the development, deployment, maintenance, and QA lifecycle of internal government applications for the Ministry of Finance, Sri Lanka. Worked across full-stack Java (Spring Boot) and Vue.js microservice systems.
              </p>

              {/* Main Banner Screenshot */}
              <div className="mt-10 rounded-2xl overflow-hidden border border-white/10 shadow-2xl relative aspect-[16/9] w-full bg-zinc-900 group">
                <Image
                  src="/images/projects/mof-internship.png"
                  alt="Ministry of Finance Internship Overview Graphic"
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
              {/* 2. Internship Overview & Stats Grid */}
              <motion.div variants={itemVariants} className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                <div className="lg:col-span-2 space-y-4">
                  <h2 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
                    <FiInfo className="text-[#3b82f6]" /> Professional Summary
                  </h2>
                  <p className="text-white/60 font-light leading-relaxed">
                    During my professional tenure at the Department of Information Technology Management (ITMD), Ministry of Finance, I took part in the engineering lifecycle of enterprise-scale administrative modules. The systems operated under strict constraints prioritizing scalability, secure access control, and absolute database consistency.
                  </p>
                  <p className="text-white/60 font-light leading-relaxed">
                    I contributed to key production systems including maintaining and QA testing the **Sri Lanka Audit System**, developing features for the **Leave Management System**, and updating the **Comptroller Management System** (built in PHP, currently active and live). Because of data security boundaries, repositories and layout screenshots are omitted to maintain privacy compliance.
                  </p>
                </div>

                {/* Quick Info Card */}
                <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 space-y-4">
                  <span className="font-mono-label text-white/30 text-xs">Internship Metadata</span>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center text-xs pb-2.5 border-b border-white/[0.05]">
                      <span className="text-white/40 flex items-center gap-1.5"><FiCalendar /> Duration</span>
                      <span className="text-white font-medium text-right">May 2025 – Jan 2026 (9 Mos)</span>
                    </div>
                    <div className="flex justify-between items-center text-xs pb-2.5 border-b border-white/[0.05]">
                      <span className="text-white/40 flex items-center gap-1.5"><FiUser /> Department</span>
                      <span className="text-white font-medium text-right">ITMD Department</span>
                    </div>
                    <div className="flex justify-between items-center text-xs pb-2.5 border-b border-white/[0.05]">
                      <span className="text-white/40 flex items-center gap-1.5"><FiLayers /> Technologies</span>
                      <span className="text-[#3b82f6] font-medium font-mono text-[9px] text-right">Java / Spring Boot / Vue.js / PHP</span>
                    </div>
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-white/40 flex items-center gap-1.5"><FiShield className="text-[#3b82f6]" /> Institution</span>
                      <span className="text-white font-medium text-right text-xs">Ministry of Finance, Sri Lanka</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* 3. Core Contributions */}
              <motion.div variants={itemVariants} className="space-y-8 border-t border-white/[0.05] pt-12">
                <div className="flex flex-col gap-2">
                  <span className="font-mono-label text-[#3b82f6] text-xs">Responsibilities</span>
                  <h2 className="text-2xl font-bold text-white tracking-tight">Key Contributions & Accomplishments</h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {/* Full stack */}
                  <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-[#3b82f6]/30 transition-all duration-300 group space-y-4">
                    <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
                      <FiLayers size={20} />
                    </div>
                    <h4 className="font-semibold text-white">Full-Stack Development</h4>
                    <p className="text-xs text-white/55 font-light leading-relaxed">
                      Built UI dashboards using Vue.js and Tailwind CSS. Coded secure back-end endpoints using Java Spring Boot.
                    </p>
                  </div>

                  {/* Microservices */}
                  <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-[#3b82f6]/30 transition-all duration-300 group space-y-4">
                    <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 group-hover:scale-110 transition-transform">
                      <FiServer size={20} />
                    </div>
                    <h4 className="font-semibold text-white">Microservices & Discovery</h4>
                    <p className="text-xs text-white/55 font-light leading-relaxed">
                      Assisted in deploying service registries using Eureka Server, coordinating communication routes between modular backend services.
                    </p>
                  </div>

                  {/* DB */}
                  <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-[#3b82f6]/30 transition-all duration-300 group space-y-4">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
                      <FiDatabase size={20} />
                    </div>
                    <h4 className="font-semibold text-white">Database Optimization</h4>
                    <p className="text-xs text-white/55 font-light leading-relaxed">
                      Designed MySQL table schemas, optimized search queries, and managed integrity rules for secure transactional consistency.
                    </p>
                  </div>

                  {/* APIs */}
                  <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-[#3b82f6]/30 transition-all duration-300 group space-y-4">
                    <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400 group-hover:scale-110 transition-transform">
                      <FiCpu size={20} />
                    </div>
                    <h4 className="font-semibold text-white">REST API Engineering</h4>
                    <p className="text-xs text-white/55 font-light leading-relaxed">
                      Engineered REST API endpoints to exchange data securely between administrative dashboards and backend processing services.
                    </p>
                  </div>

                  {/* QA */}
                  <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-[#3b82f6]/30 transition-all duration-300 group space-y-4">
                    <div className="w-10 h-10 rounded-xl bg-pink-500/10 border border-pink-500/20 flex items-center justify-center text-pink-400 group-hover:scale-110 transition-transform">
                      <FiCheckSquare size={20} />
                    </div>
                    <h4 className="font-semibold text-white">QA & Maintenance Testing</h4>
                    <p className="text-xs text-white/55 font-light leading-relaxed">
                      Conducted diagnostic tests on the Sri Lanka Audit System. Tracked issues, fixed backend bugs, and verified production performance.
                    </p>
                  </div>

                  {/* Monitoring */}
                  <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-[#3b82f6]/30 transition-all duration-300 group space-y-4">
                    <div className="w-10 h-10 rounded-xl bg-yellow-500/10 border border-yellow-500/20 flex items-center justify-center text-yellow-400 group-hover:scale-110 transition-transform">
                      <FiActivity size={20} />
                    </div>
                    <h4 className="font-semibold text-white">Service Observability</h4>
                    <p className="text-xs text-white/55 font-light leading-relaxed">
                      Monitored application health logs, identified system bottlenecks, and assisted in troubleshooting active connectivity issues.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* 4. Experience & Compliance Alert */}
              <motion.div variants={itemVariants} className="p-8 rounded-2xl bg-blue-500/[0.02] border border-blue-500/10 space-y-4">
                <h3 className="text-lg font-bold text-blue-400 tracking-tight flex items-center gap-2">
                  🔒 Data Classification & Security Compliance
                </h3>
                <p className="text-sm text-white/60 font-light leading-relaxed">
                  Due to strict security clearances at the Ministry of Finance, Sri Lanka, source code repositories, code snippets, and active dashboards cannot be displayed publicly. My work focused entirely on:
                </p>
                <ul className="space-y-3 text-sm text-white/60 font-light list-disc list-inside">
                  <li><strong>Sri Lanka Audit System:</strong> Maintained codebase modules, performed QA testing, and improved database indexing.</li>
                  <li><strong>Leave Management System:</strong> Enhanced workflow automation and dashboard visualizations for administrators.</li>
                  <li><strong>Comptroller Management System (Active):</strong> Built using PHP, managing database transactions and dashboard analytics for administrative operations.</li>
                </ul>
              </motion.div>

              {/* 5. Professional Skills Summary */}
              <motion.div variants={itemVariants} className="p-8 rounded-2xl bg-[#3b82f6]/5 border border-[#3b82f6]/15 space-y-6">
                <div className="space-y-2">
                  <span className="font-mono-label text-[#3b82f6] text-xs">Skill Matrix</span>
                  <h3 className="text-xl font-black text-white">Skills Developed & Utilized</h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-xs leading-relaxed">
                  <div className="space-y-2">
                    <h5 className="font-bold text-white">🛠️ Technical Aptitude</h5>
                    <p className="text-white/50 font-light">
                      Java Spring Boot, Vue.js, PHP, MySQL, Microservices, Eureka Server, REST API architecture, Tailwind CSS.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h5 className="font-bold text-white">⚙️ Quality Assurance</h5>
                    <p className="text-white/50 font-light">
                      System debugging, integration testing, database schema modification, query optimization, security patch deployment.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h5 className="font-bold text-white">📈 System Reliability</h5>
                    <p className="text-white/50 font-light">
                      Service monitoring, logs audit, bottleneck analysis, role-based access control validation, continuous integration.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h5 className="font-bold text-white">🤝 Professional Ethics</h5>
                    <p className="text-white/50 font-light">
                      Public sector requirements analysis, documentation, compliance audits, time management, and team collaboration.
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
