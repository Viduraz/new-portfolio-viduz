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
  FiServer,
  FiGrid,
  FiSettings,
  FiChevronRight,
  FiLock,
} from 'react-icons/fi'
import { FaKey } from 'react-icons/fa'

interface VehicleRentalModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function VehicleRentalModal({ isOpen, onClose }: VehicleRentalModalProps) {
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
            <div className="relative pt-16 pb-12 px-6 sm:px-12 md:px-16 border-b border-white/[0.05] bg-gradient-to-b from-[#f97316]/5 via-transparent to-transparent">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
                <div className="flex items-center gap-5">
                  <div className="w-16 h-16 rounded-2xl bg-[#f97316]/10 border border-[#f97316]/30 flex items-center justify-center shadow-[0_0_30px_rgba(249,115,22,0.15)]">
                    <svg viewBox="0 0 100 100" fill="none" className="w-11 h-11">
                      {/* Premium Speedometer SVG */}
                      <circle cx="50" cy="50" r="40" stroke="#f97316" strokeWidth="6" strokeDasharray="180 70" strokeLinecap="round" />
                      <circle cx="50" cy="50" r="10" fill="#f97316" />
                      <polygon points="50,45 80,50 50,55" fill="#f97316" transform="rotate(-45 50 50)" />
                      <path d="M25 80 Q50 65 75 80" stroke="#f97316" strokeWidth="4" strokeLinecap="round" />
                    </svg>
                  </div>

                  <div>
                    <span className="font-mono-label text-[#f97316] text-xs">Java EE Web Stack</span>
                    <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight mt-1 flex flex-wrap items-center gap-3">
                      Vehicle Rental System
                      <span className="text-[10px] uppercase font-mono tracking-widest bg-[#f97316]/15 text-[#f97316] border border-[#f97316]/25 px-2.5 py-0.5 rounded-md font-semibold">
                        Java MVC
                      </span>
                    </h1>
                  </div>
                </div>

                {/* External Action Badges */}
                <div className="flex flex-wrap items-center gap-3">
                  <a
                    href="https://github.com/Viduraz/Vehical_Renatal_system-.git"
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
                A full-stack Java web application demonstrating standard enterprise design patterns. Built with Jakarta Servlets, JSP (Java Server Pages), JDBC, and MySQL for comprehensive customer profile operations.
              </p>

              {/* Main Banner Screenshot */}
              <div className="mt-10 rounded-2xl overflow-hidden border border-white/10 shadow-2xl relative aspect-[16/9] w-full bg-zinc-900 group">
                <Image
                  src="/images/projects/vehicle-rental.png"
                  alt="Vehicle Rental System Mockup Interface"
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
                    <FiInfo className="text-[#f97316]" /> Project Overview
                  </h2>
                  <p className="text-white/60 font-light leading-relaxed">
                    This project is a customer-facing Java Web platform constructed to model backend data management workflows for a vehicle rental business. It leverages Jakarta Servlets to process client inputs and JSP to compile layouts dynamically.
                  </p>
                  <p className="text-white/60 font-light leading-relaxed">
                    The architecture emphasizes core object-oriented structures, decoupling database connection tasks via utility packages, validating fields, and tracking logins using HTTP Sessions. It provides a scalable baseline for hosting listing registries, search grids, and vehicle booking workflows.
                  </p>
                </div>

                {/* Quick Info Card */}
                <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 space-y-4">
                  <span className="font-mono-label text-white/30 text-xs">Project Metadata</span>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center text-xs pb-2.5 border-b border-white/[0.05]">
                      <span className="text-white/40 flex items-center gap-1.5"><FiCalendar /> Purpose</span>
                      <span className="text-white font-medium text-right">Academic Study</span>
                    </div>
                    <div className="flex justify-between items-center text-xs pb-2.5 border-b border-white/[0.05]">
                      <span className="text-white/40 flex items-center gap-1.5"><FiCpu /> Runtime</span>
                      <span className="text-white font-medium">Apache Tomcat / Java 11</span>
                    </div>
                    <div className="flex justify-between items-center text-xs pb-2.5 border-b border-white/[0.05]">
                      <span className="text-white/40 flex items-center gap-1.5"><FiLayers /> Stack</span>
                      <span className="text-[#f97316] font-medium font-mono text-[10px]">Java / JSP & Servlets / MySQL</span>
                    </div>
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-white/40 flex items-center gap-1.5"><FiDatabase className="text-orange-400" /> Database Helper</span>
                      <span className="text-white font-medium text-xs">JDBC Driver</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* 3. Problem & Solution */}
              <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-white/[0.05] pt-12">
                <div className="p-6 sm:p-8 rounded-2xl bg-red-500/[0.02] border border-red-500/10 space-y-4">
                  <h3 className="text-lg font-bold text-red-400 tracking-tight flex items-center gap-2">
                    ⚠️ Traditional Web Hurdles
                  </h3>
                  <ul className="space-y-3 text-sm text-white/60 font-light list-disc list-inside">
                    <li><strong>Stateless Friction:</strong> Standard HTTP is stateless, meaning login configurations drop out as users browse routes.</li>
                    <li><strong>Convoluted Codebases:</strong> Embedding SQL connections directly in presentation pages makes edits tedious and prone to leaks.</li>
                    <li><strong>Rigid Deployments:</strong> Lack of automated package configuration managers makes moving projects between servers difficult.</li>
                  </ul>
                </div>

                <div className="p-6 sm:p-8 rounded-2xl bg-orange-500/[0.02] border border-orange-500/10 space-y-4">
                  <h3 className="text-lg font-bold text-orange-400 tracking-tight flex items-center gap-2">
                    ✅ Enterprise MVC Solutions
                  </h3>
                  <ul className="space-y-3 text-sm text-white/60 font-light list-disc list-inside">
                    <li><strong>HTTP Session Guards:</strong> Uses Java servlet sessions to preserve authenticated customer sessions dynamically.</li>
                    <li><strong>Decoupled Layers:</strong> Decouples operations into model entities, database connection utilities, service layers, and servlets.</li>
                    <li><strong>Maven Build Tools:</strong> Uses Maven directories and `pom.xml` configurations to coordinate package updates.</li>
                  </ul>
                </div>
              </motion.div>

              {/* 4. Customer Workflows */}
              <motion.div variants={itemVariants} className="space-y-6 border-t border-white/[0.05] pt-12">
                <div className="flex flex-col gap-2">
                  <span className="font-mono-label text-[#f97316] text-xs">Operational Flows</span>
                  <h2 className="text-2xl font-bold text-white tracking-tight">Personal Account Operations</h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {[
                    { step: '1. Register', desc: 'Saves names, email, and password in the customers table.' },
                    { step: '2. Authenticate', desc: 'Validates email/password against MySQL to establish a session.' },
                    { step: '3. Update Profile', desc: 'Allows customers to edit details and save updates to the database.' },
                    { step: '4. Account Deletion', desc: 'Removes the record from the database and terminates session cookies.' },
                  ].map((item) => (
                    <div key={item.step} className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-2">
                      <h4 className="font-bold text-white text-sm">{item.step}</h4>
                      <p className="text-[11px] text-white/50 leading-relaxed font-light">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* 5. MVC Layout */}
              <motion.div variants={itemVariants} className="space-y-6 border-t border-white/[0.05] pt-12">
                <div className="flex flex-col gap-2">
                  <span className="font-mono-label text-[#f97316] text-xs">Architectural Decoupling</span>
                  <h2 className="text-2xl font-bold text-white tracking-tight">Decoupled Codebase Structure</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                  <div className="p-6 rounded-2xl bg-[#f97316]/5 border border-[#f97316]/15 space-y-2">
                    <div className="w-10 h-10 rounded-xl bg-[#f97316]/10 border border-[#f97316]/20 flex items-center justify-center text-[#f97316] mx-auto">
                      <FiGrid size={20} />
                    </div>
                    <h4 className="font-bold text-white">Views (JSP & CSS)</h4>
                    <p className="text-xs text-white/50 leading-relaxed font-light">
                      JSP pages (index.jsp, customerHome.jsp, customerUpdate.jsp) render interfaces, capturing actions and forwarding them to the controller servlets.
                    </p>
                  </div>

                  <div className="p-6 rounded-2xl bg-amber-500/5 border border-amber-500/15 space-y-2 relative">
                    <div className="hidden md:block absolute top-1/2 -right-3 -translate-y-1/2 text-white/10 z-10 text-xl font-bold">→</div>
                    <div className="hidden md:block absolute top-1/2 -left-3 -translate-y-1/2 text-white/10 z-10 text-xl font-bold">→</div>
                    <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 mx-auto">
                      <FiCpu size={20} />
                    </div>
                    <h4 className="font-bold text-white">Controllers (Servlets)</h4>
                    <p className="text-xs text-white/50 leading-relaxed font-light">
                      Java Servlets (LoginServlet, RegisterServlet, UpdateCustomerServlet, DeleteCustomerServlet) parse requests and execute matching database tasks.
                    </p>
                  </div>

                  <div className="p-6 rounded-2xl bg-purple-500/5 border border-purple-500/15 space-y-2">
                    <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 mx-auto">
                      <FiDatabase size={20} />
                    </div>
                    <h4 className="font-bold text-white">Models & JDBC (MySQL)</h4>
                    <p className="text-xs text-white/50 leading-relaxed font-light">
                      `Customer.java` model encapsulates fields. `CustomerService.java` manages connections and statements.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* 6. Database Schema */}
              <motion.div variants={itemVariants} className="space-y-8 border-t border-white/[0.05] pt-12">
                <div className="flex flex-col gap-2">
                  <span className="font-mono-label text-[#f97316] text-xs">Data Schema</span>
                  <h2 className="text-2xl font-bold text-white tracking-tight">MySQL Database Table Layout</h2>
                </div>

                <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 space-y-4">
                  <h4 className="font-bold text-[#fed7aa] flex items-center gap-2">
                    <FiDatabase /> table: <code>customers</code>
                  </h4>
                  <p className="text-xs text-white/50 leading-relaxed font-light">
                    The schema houses user profile parameters and credentials. Unique constraints prevent duplicate username and email registrations.
                  </p>
                  <pre className="p-4 rounded-xl bg-black/40 text-[11px] text-[#fed7aa] font-mono overflow-x-auto leading-relaxed border border-white/5">
                    {`CREATE TABLE customers (
    id INT AUTO_INCREMENT PRIMARY KEY,
    firstName VARCHAR(100) NOT NULL,
    lastName VARCHAR(100) NOT NULL,
    userName VARCHAR(100) NOT NULL UNIQUE,
    phone VARCHAR(20),
    email VARCHAR(150) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL
);`}
                  </pre>
                </div>
              </motion.div>

              {/* 7. Recruiter Highlights */}
              <motion.div variants={itemVariants} className="p-8 rounded-2xl bg-[#f97316]/5 border border-[#f97316]/15 space-y-6">
                <div className="space-y-2">
                  <span className="font-mono-label text-[#f97316] text-xs">Engineering Summary</span>
                  <h3 className="text-xl font-black text-white">Why Recruiters Care</h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-xs leading-relaxed">
                  <div className="space-y-2">
                    <h5 className="font-bold text-white">⚙️ Java EE & Servlets</h5>
                    <p className="text-white/50 font-light">
                      Solid understanding of classic Java EE, Tomcat server architecture, request lifecycles, and web XML routing setups.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h5 className="font-bold text-white">💾 JDBC Persistence</h5>
                    <p className="text-white/50 font-light">
                      Familiarity writing custom database connection managers and structured SQL transactions using JDBC drivers.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h5 className="font-bold text-white">🛠️ Dependency Management</h5>
                    <p className="text-white/50 font-light">
                      Experience organizing large multi-package Java structures using Maven configuration manifests (`pom.xml`).
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h5 className="font-bold text-white">🔐 Sessions & Auth</h5>
                    <p className="text-white/50 font-light">
                      Knowledge of session tracking, user validation rules, and redirect layouts for authenticated users.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* 8. Final CTAs */}
              <motion.div variants={itemVariants} className="flex flex-col items-center text-center gap-6 border-t border-white/[0.05] pt-12">
                <h3 className="text-xl font-bold text-white">Explore Project Code</h3>
                <p className="text-sm text-white/50 font-light max-w-md leading-relaxed">
                  Review the servlet mappings, JSP view templates, and JDBC database access layers on GitHub.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <a
                    href="https://github.com/Viduraz/Vehical_Renatal_system-.git"
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
