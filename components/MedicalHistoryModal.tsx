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
  FiActivity,
  FiServer,
  FiGrid,
  FiList,
  FiLock,
} from 'react-icons/fi'
import { FaHeartbeat } from 'react-icons/fa'

interface MedicalHistoryModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function MedicalHistoryModal({ isOpen, onClose }: MedicalHistoryModalProps) {
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
            <div className="relative pt-16 pb-12 px-6 sm:px-12 md:px-16 border-b border-white/[0.05] bg-gradient-to-b from-[#14b8a6]/5 via-transparent to-transparent">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
                <div className="flex items-center gap-5">
                  <div className="w-16 h-16 rounded-2xl bg-[#14b8a6]/10 border border-[#14b8a6]/30 flex items-center justify-center shadow-[0_0_30px_rgba(20,184,166,0.15)]">
                    <svg viewBox="0 0 100 100" fill="none" className="w-11 h-11">
                      {/* Premium Origami Medical Cross + Heartbeat SVG */}
                      <rect x="20" y="15" width="60" height="70" rx="10" fill="#14b8a6" opacity="0.1" stroke="#14b8a6" strokeWidth="3" />
                      <path d="M40 30 H60 M40 40 H60" stroke="#14b8a6" strokeWidth="4" strokeLinecap="round" />
                      <path d="M50 50 V70 M40 60 H60" stroke="#14b8a6" strokeWidth="8" strokeLinecap="round" />
                      <path d="M25 75 L38 75 L43 65 L48 85 L53 72 L58 78 L75 78" stroke="#14b8a6" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>

                  <div>
                    <span className="font-mono-label text-[#14b8a6] text-xs">Healthcare Data Network</span>
                    <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight mt-1 flex flex-wrap items-center gap-3">
                      Medical History Tracker
                      <span className="text-[10px] uppercase font-mono tracking-widest bg-[#14b8a6]/15 text-[#14b8a6] border border-[#14b8a6]/25 px-2.5 py-0.5 rounded-md font-semibold">
                        ITPM Project
                      </span>
                    </h1>
                  </div>
                </div>

                {/* External Action Badges */}
                <div className="flex flex-wrap items-center gap-3">
                  <a
                    href="https://github.com/Viduraz/Medical_History_Tracker.git"
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
                A role-based digital patient history and clinical management platform developed for SLIIT. Built with a Flask backend, MySQL database, and React frontend, the system connects patients, doctors, pharmacies, and laboratories across Sri Lanka.
              </p>

              {/* Main Banner Screenshot */}
              <div className="mt-10 rounded-2xl overflow-hidden border border-white/10 shadow-2xl relative aspect-[16/9] w-full bg-zinc-900 group">
                <Image
                  src="/images/projects/medical-history.png"
                  alt="Medical History Tracker App Mockup Dashboard"
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
                    <FiInfo className="text-[#14b8a6]" /> Project Overview
                  </h2>
                  <p className="text-white/60 font-light leading-relaxed">
                    Medical History Tracker is a multi-actor clinical communication system designed to eliminate paper-based documentation friction in local healthcare facilities. The project was developed as a key component of our 3rd Year, 1st Semester ITPM curriculum at SLIIT.
                  </p>
                  <p className="text-white/60 font-light leading-relaxed">
                    Designed as a conceptual and architectural extension to my previous Sales & Inventory POS system, this project escalates transaction handling to full clinical workflow automation. From doctors prescribing treatments to laboratories logging tests and pharmacies dispensing medicine, the system connects all nodes on a unified MySQL backend.
                  </p>
                </div>

                {/* Quick Info Card */}
                <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 space-y-4">
                  <span className="font-mono-label text-white/30 text-xs">Project Metadata</span>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center text-xs pb-2.5 border-b border-white/[0.05]">
                      <span className="text-white/40 flex items-center gap-1.5"><FiCalendar /> Academic Timeline</span>
                      <span className="text-white font-medium">3rd Year, 1st Sem</span>
                    </div>
                    <div className="flex justify-between items-center text-xs pb-2.5 border-b border-white/[0.05]">
                      <span className="text-white/40 flex items-center gap-1.5"><FiUser /> Supervisor</span>
                      <span className="text-white font-medium">SLIIT Faculty of Computing</span>
                    </div>
                    <div className="flex justify-between items-center text-xs pb-2.5 border-b border-white/[0.05]">
                      <span className="text-white/40 flex items-center gap-1.5"><FiLayers /> Stack</span>
                      <span className="text-[#14b8a6] font-medium font-mono">React / Flask / MySQL / Python</span>
                    </div>
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-white/40 flex items-center gap-1.5"><FiLock className="text-teal-400" /> Security Layer</span>
                      <span className="text-white font-medium text-xs">Role-Based RBAC</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* 3. Problem & Solution */}
              <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-white/[0.05] pt-12">
                <div className="p-6 sm:p-8 rounded-2xl bg-red-500/[0.02] border border-red-500/10 space-y-4">
                  <h3 className="text-lg font-bold text-red-400 tracking-tight flex items-center gap-2">
                    ⚠️ Clinical Data Friction
                  </h3>
                  <ul className="space-y-3 text-sm text-white/60 font-light list-disc list-inside">
                    <li><strong>Fragmented Records:</strong> Patient health records are scattered across physical folders in different clinics, causing diagnostic delays.</li>
                    <li><strong>Illegible Prescriptions:</strong> Handwritten paper prescriptions result in pharmacy dispensing errors and stock confusion.</li>
                    <li><strong>Slow Diagnostic Cycles:</strong> Patient blood and imaging lab tests are hand-delivered, slowing critical doctor evaluations.</li>
                    <li><strong>Security Risks:</strong> Unencrypted physical records are vulnerable to loss, damage, and unauthorized viewing.</li>
                  </ul>
                </div>

                <div className="p-6 sm:p-8 rounded-2xl bg-teal-500/[0.02] border border-teal-500/10 space-y-4">
                  <h3 className="text-lg font-bold text-teal-400 tracking-tight flex items-center gap-2">
                    ✅ Consolidated Care
                  </h3>
                  <ul className="space-y-3 text-sm text-white/60 font-light list-disc list-inside">
                    <li><strong>Unified Health Portal:</strong> Centralized timeline view tracking historical ailments, allergies, treatments, and tests.</li>
                    <li><strong>Digital Prescriptions:</strong> Digital prescription dispatch system, directly visible to affiliated pharmacies.</li>
                    <li><strong>Instant Lab Dispatch:</strong> Diagnostic centers submit results to database tables, updating doctor dashboards instantly.</li>
                    <li><strong>Encrypted Auth:</strong> Granular RBAC layers keeping database details isolated behind secure API endpoints.</li>
                  </ul>
                </div>
              </motion.div>

              {/* 4. Role-Based Permissions Grid */}
              <motion.div variants={itemVariants} className="space-y-6 border-t border-white/[0.05] pt-12">
                <div className="flex flex-col gap-2">
                  <span className="font-mono-label text-[#14b8a6] text-xs">Access Framework</span>
                  <h2 className="text-2xl font-bold text-white tracking-tight">Granular Actor System (RBAC)</h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                  {[
                    { role: '🔐 Admin', desc: 'Manages user accounts, platform performance, health codes, and analytics.' },
                    { role: '👨‍⚕️ Doctor', desc: 'Conducts diagnostics, reviews patient history, and issues electronic prescriptions.' },
                    { role: '🏥 Patient', desc: 'Views personal clinical logs, schedules, and pharmacy prescriptions.' },
                    { role: '💊 Pharmacy', desc: 'Checks medicine inventory, fulfills active prescriptions, and records history.' },
                    { role: '🔬 Laboratory', desc: 'Logs incoming tests, uploads results, and traces clinical reports.' },
                  ].map((item) => (
                    <div key={item.role} className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-2">
                      <h4 className="font-bold text-white text-sm">{item.role}</h4>
                      <p className="text-[11px] text-white/50 leading-relaxed font-light">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* 5. System Architecture Visual */}
              <motion.div variants={itemVariants} className="space-y-6 border-t border-white/[0.05] pt-12">
                <div className="flex flex-col gap-2">
                  <span className="font-mono-label text-[#14b8a6] text-xs">Technical Design</span>
                  <h2 className="text-2xl font-bold text-white tracking-tight">Full-Stack Architecture & Data Routing</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                  <div className="p-6 rounded-2xl bg-[#14b8a6]/5 border border-[#14b8a6]/15 space-y-2">
                    <div className="w-10 h-10 rounded-xl bg-[#14b8a6]/10 border border-[#14b8a6]/20 flex items-center justify-center text-[#14b8a6] mx-auto">
                      <FiGrid size={20} />
                    </div>
                    <h4 className="font-bold text-white">React Frontend</h4>
                    <p className="text-xs text-white/50 leading-relaxed font-light font-mono">
                      CSS3 Layouts • Dynamic State Management • Component Partitioning
                    </p>
                  </div>

                  <div className="p-6 rounded-2xl bg-emerald-500/5 border border-emerald-500/15 space-y-2 relative">
                    <div className="hidden md:block absolute top-1/2 -right-3 -translate-y-1/2 text-white/10 z-10 text-xl font-bold">→</div>
                    <div className="hidden md:block absolute top-1/2 -left-3 -translate-y-1/2 text-white/10 z-10 text-xl font-bold">→</div>
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mx-auto">
                      <FiServer size={20} />
                    </div>
                    <h4 className="font-bold text-white">Flask REST API</h4>
                    <p className="text-xs text-white/50 leading-relaxed font-light font-mono">
                      Python 3.9+ • CORS Handlers • Route Guard Rules
                    </p>
                  </div>

                  <div className="p-6 rounded-2xl bg-blue-500/5 border border-blue-500/15 space-y-2">
                    <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mx-auto">
                      <FiDatabase size={20} />
                    </div>
                    <h4 className="font-bold text-white">MySQL Database</h4>
                    <p className="text-xs text-white/50 leading-relaxed font-light font-mono">
                      MySQL 8.0+ • Foreign Key Triggers • Cascading Deletes
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* 6. Database Schema */}
              <motion.div variants={itemVariants} className="space-y-8 border-t border-white/[0.05] pt-12">
                <div className="flex flex-col gap-2">
                  <span className="font-mono-label text-[#14b8a6] text-xs">Data Models</span>
                  <h2 className="text-2xl font-bold text-white tracking-tight">Relational Database Schemas</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-xs sm:text-sm">
                  <div className="space-y-4">
                    <h4 className="font-bold text-[#14b8a6] flex items-center gap-2">
                      <FiDatabase /> User Profile Schemas
                    </h4>
                    <ul className="space-y-3 text-white/60 font-light leading-relaxed font-mono">
                      <li><strong>admin:</strong> <code>id (PK) | name | email | password</code></li>
                      <li><strong>doctor:</strong> <code>id (PK) | name | email | password | hospital | availability</code></li>
                      <li><strong>patient:</strong> <code>id (PK) | name | email | password | medical_history (TEXT)</code></li>
                      <li><strong>pharmacy:</strong> <code>id (PK) | name | email | password</code></li>
                      <li><strong>lab:</strong> <code>id (PK) | name | email | password</code></li>
                    </ul>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-bold text-[#14b8a6] flex items-center gap-2">
                      <FiActivity /> Clinical Action Schemas
                    </h4>
                    <ul className="space-y-3 text-white/60 font-light leading-relaxed font-mono">
                      <li>
                        <strong>medication:</strong>{' '}
                        <code>{"id (PK) | patient_id (FK -> patient.id) | name | dosage | quantity"}</code>
                      </li>
                      <li>
                        <strong>lab_report:</strong>{' '}
                        <code>{"id (PK) | patient_id (FK -> patient.id) | report (TEXT) | created_at (TIMESTAMP)"}</code>
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>

              {/* 7. API Endpoints Table */}
              <motion.div variants={itemVariants} className="space-y-8 border-t border-white/[0.05] pt-12">
                <div className="flex flex-col gap-2">
                  <span className="font-mono-label text-[#14b8a6] text-xs">REST API Specifications</span>
                  <h2 className="text-2xl font-bold text-white tracking-tight">Backend Endpoint Map</h2>
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
                        <td className="p-3 font-bold text-teal-400">POST</td>
                        <td className="p-3 font-mono">/&lt;role&gt;/login</td>
                        <td className="p-3">Authenticate admin, doctor, patient, pharmacy, or laboratory users.</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-bold text-blue-400">GET</td>
                        <td className="p-3 font-mono">/admin/users</td>
                        <td className="p-3">Retrieve list of all system user profiles (Admin permission).</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-bold text-teal-400">POST</td>
                        <td className="p-3 font-mono">/admin/user</td>
                        <td className="p-3">Register a new healthcare provider or clinical actor.</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-bold text-blue-400">GET</td>
                        <td className="p-3 font-mono">/doctor/patients</td>
                        <td className="p-3">View patient consult list for logged doctor profile.</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-bold text-teal-400">POST</td>
                        <td className="p-3 font-mono">/doctor/prescription</td>
                        <td className="p-3">Dispatch medication prescription for patient pharmacy pick-up.</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-bold text-blue-400">GET</td>
                        <td className="p-3 font-mono">/patient/medical-history</td>
                        <td className="p-3">Fetch personal historical diagnostics, lab details, and medications.</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-bold text-teal-400">POST</td>
                        <td className="p-3 font-mono">/lab/report</td>
                        <td className="p-3">Upload patient lab reports and result summaries.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </motion.div>

              {/* 8. Recruiter Highlights */}
              <motion.div variants={itemVariants} className="p-8 rounded-2xl bg-[#14b8a6]/5 border border-[#14b8a6]/15 space-y-6">
                <div className="space-y-2">
                  <span className="font-mono-label text-[#14b8a6] text-xs">Security & Design Standards</span>
                  <h3 className="text-xl font-black text-white">Clinical Compliance & Engineering Accomplishments</h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-xs leading-relaxed">
                  <div className="space-y-2">
                    <h5 className="font-bold text-white">🔒 Encrypted Auths</h5>
                    <p className="text-white/50 font-light">
                      Granular authentication mapping passwords safely, ensuring role-isolated clinical scopes.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h5 className="font-bold text-white">🛡️ Prepared SQL</h5>
                    <p className="text-white/50 font-light">
                      Protects medical parameters against SQL Injection threats through parameterization in mysql-connector-python.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h5 className="font-bold text-white">🔌 REST Standards</h5>
                    <p className="text-white/50 font-light">
                      Clean REST endpoints communicating JSON structures with frontend CORS settings and route parameters.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h5 className="font-bold text-white">🏥 Multi-Actor UX</h5>
                    <p className="text-white/50 font-light">
                      Responsive dashboard views custom-fit for busy medical staff, pharmacists, laboratory tech, and patients.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* 9. Final CTAs */}
              <motion.div variants={itemVariants} className="flex flex-col items-center text-center gap-6 border-t border-white/[0.05] pt-12">
                <h3 className="text-xl font-bold text-white">Explore Project Code</h3>
                <p className="text-sm text-white/50 font-light max-w-md leading-relaxed">
                  Review the Flask endpoints and React source structure of this ITPM healthcare network project.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <a
                    href="https://github.com/Viduraz/Medical_History_Tracker.git"
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
