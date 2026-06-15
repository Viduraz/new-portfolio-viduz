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
  FiShoppingCart,
  FiFileText,
  FiUsers,
  FiGrid,
  FiBookOpen,
} from 'react-icons/fi'
import { FaExternalLinkAlt } from 'react-icons/fa'

interface GuruGedaraModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function GuruGedaraModal({ isOpen, onClose }: GuruGedaraModalProps) {
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
            <div className="relative pt-16 pb-12 px-6 sm:px-12 md:px-16 border-b border-white/[0.05] bg-gradient-to-b from-[#0ea5e9]/5 via-transparent to-transparent">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
                <div className="flex items-center gap-5">
                  <div className="w-16 h-16 rounded-2xl bg-[#0ea5e9]/10 border border-[#0ea5e9]/30 flex items-center justify-center shadow-[0_0_30px_rgba(14,165,233,0.15)]">
                    <svg viewBox="0 0 100 100" fill="none" className="w-11 h-11">
                      {/* Premium Origami Book + POS Symbol */}
                      <path d="M25 20 L50 35 L75 20 L75 70 L50 85 L25 70 Z" fill="#0284c7" />
                      <path d="M50 35 L75 20 L75 70 L50 85 Z" fill="#0369a1" />
                      <path d="M25 20 L50 35 L50 85 L25 70 Z" fill="#0ea5e9" />
                      <polygon points="50,45 60,50 50,55 40,50" fill="#ffffff" opacity="0.9" />
                    </svg>
                  </div>

                  <div>
                    <span className="font-mono-label text-[#0ea5e9] text-xs">Sales & Inventory Platform</span>
                    <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight mt-1 flex flex-wrap items-center gap-3">
                      GuruGedara
                      <span className="text-[10px] uppercase font-mono tracking-widest bg-[#0ea5e9]/15 text-[#0ea5e9] border border-[#0ea5e9]/25 px-2.5 py-0.5 rounded-md font-semibold">
                        Dual Instance
                      </span>
                    </h1>
                  </div>
                </div>

                {/* External Action Badges */}
                <div className="flex flex-wrap items-center gap-3">
                  <a
                    href="http://gurugedara.duckdns.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-black font-semibold text-xs transition-transform duration-200 hover:scale-[1.02] cursor-pointer"
                  >
                    <FaExternalLinkAlt className="text-black" size={12} />
                    <span>Live Platform</span>
                  </a>
                  <a
                    href="https://github.com/Viduraz/gurugedara.duckdns.org.git"
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
                A custom-built, professional-grade PHP Model-View-Controller (MVC) Sales & Inventory Management System. Initially designed for GuruGedara Publications, it was subsequently mirrored to manage operations for the Kurunegala District Scout Headquarters Shop.
              </p>

              {/* Main Banner Screenshot */}
              <div className="mt-10 rounded-2xl overflow-hidden border border-white/10 shadow-2xl relative aspect-[16/9] w-full bg-zinc-900 group">
                <Image
                  src="/images/projects/gurugedara.png"
                  alt="GuruGedara POS System Mockup Dashboard"
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
                    <FiInfo className="text-[#0ea5e9]" /> Project Overview
                  </h2>
                  <p className="text-white/60 font-light leading-relaxed">
                    GuruGedara is a full-featured Point-of-Sale (POS) and inventory platform architected during our first year, second semester of university. Built after completing our initial PHP studies, the system addresses transaction delays, inventory shrinkage, and lack of comprehensive reports.
                  </p>
                  <p className="text-white/60 font-light leading-relaxed">
                    Originally built for GuruGedara Publications to coordinate book sales, stock updates, and invoice printing, the system's modular architecture allowed us to deploy a second mirror instance (S2) to support the Kurunegala District Scout Headquarters Shop, proving its versatility and multi-client capabilities.
                  </p>
                </div>

                {/* Quick Info Card */}
                <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 space-y-4">
                  <span className="font-mono-label text-white/30 text-xs">Project Metadata</span>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center text-xs pb-2.5 border-b border-white/[0.05]">
                      <span className="text-white/40 flex items-center gap-1.5"><FiCalendar /> Academic Timeline</span>
                      <span className="text-white font-medium">1st Year, 2nd Sem</span>
                    </div>
                    <div className="flex justify-between items-center text-xs pb-2.5 border-b border-white/[0.05]">
                      <span className="text-white/40 flex items-center gap-1.5"><FiUser /> Team & Peer</span>
                      <span className="text-white font-medium">Chathushka (Badgemate) & Me</span>
                    </div>
                    <div className="flex justify-between items-center text-xs pb-2.5 border-b border-white/[0.05]">
                      <span className="text-white/40 flex items-center gap-1.5"><FiLayers /> Stack</span>
                      <span className="text-[#0ea5e9] font-medium font-mono">PHP / MySQL / AJAX / TCPDF</span>
                    </div>
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-white/40 flex items-center gap-1.5"><FiCheckCircle className="text-emerald-400" /> Deployments</span>
                      <span className="text-white font-medium text-right text-xs">2 Independent Instances</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* 3. Problem & Solution */}
              <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-white/[0.05] pt-12">
                <div className="p-6 sm:p-8 rounded-2xl bg-red-500/[0.02] border border-red-500/10 space-y-4">
                  <h3 className="text-lg font-bold text-red-400 tracking-tight flex items-center gap-2">
                    ⚠️ Operational Inefficiencies
                  </h3>
                  <ul className="space-y-3 text-sm text-white/60 font-light list-disc list-inside">
                    <li><strong>Manual Invoicing:</strong> Book publishing invoices were written by hand, resulting in slow checkout queues and mathematical errors.</li>
                    <li><strong>Stock Inaccuracies:</strong> Discrepancies between actual store inventory and paper ledgers caused lost sales and unfulfilled requests.</li>
                    <li><strong>Scattered Records:</strong> Customer details, historical purchases, and agent credits were tracked in separate physical notebooks.</li>
                    <li><strong>Reporting Delays:</strong> Monthly sales audits required manual data consolidation, taking hours or days to prepare.</li>
                  </ul>
                </div>

                <div className="p-6 sm:p-8 rounded-2xl bg-emerald-500/[0.02] border border-emerald-500/10 space-y-4">
                  <h3 className="text-lg font-bold text-emerald-400 tracking-tight flex items-center gap-2">
                    ✅ Digitalized Solution
                  </h3>
                  <ul className="space-y-3 text-sm text-white/60 font-light list-disc list-inside">
                    <li><strong>Automatic PDF Invoicing:</strong> Integrated TCPDF library for direct thermal invoice printing and transaction receipts on purchase.</li>
                    <li><strong>Real-time AJAX Checking:</strong> Direct, asynchronous database audits alert salespeople when product quantities are running low.</li>
                    <li><strong>Unified Directories:</strong> Centralized databases securely store customer profiles, pricing rules, and sales records.</li>
                    <li><strong>Dynamic Report Suite:</strong> Instant PDF exports summarize earnings, top-performing product titles, and stock summaries.</li>
                  </ul>
                </div>
              </motion.div>

              {/* 4. Technical Architecture Visual */}
              <motion.div variants={itemVariants} className="space-y-6 border-t border-white/[0.05] pt-12">
                <div className="flex flex-col gap-2">
                  <span className="font-mono-label text-[#0ea5e9] text-xs">System Architecture</span>
                  <h2 className="text-2xl font-bold text-white tracking-tight">MVC Data Flow & AJAX Integration</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                  <div className="p-6 rounded-2xl bg-[#0ea5e9]/5 border border-[#0ea5e9]/15 space-y-2">
                    <div className="w-10 h-10 rounded-xl bg-[#0ea5e9]/10 border border-[#0ea5e9]/20 flex items-center justify-center text-[#0ea5e9] mx-auto">
                      <FiGrid size={20} />
                    </div>
                    <h4 className="font-bold text-white">Views (HTML5 / JS / CSS3)</h4>
                    <p className="text-xs text-white/50 leading-relaxed font-light">
                      Uses Bootstrap-based AdminLTE responsive panels and SweetAlert2 notifications. Captures inputs and triggers AJAX requests synchronously.
                    </p>
                  </div>

                  <div className="p-6 rounded-2xl bg-amber-500/5 border border-amber-500/15 space-y-2 relative">
                    <div className="hidden md:block absolute top-1/2 -right-3 -translate-y-1/2 text-white/10 z-10 text-xl font-bold">→</div>
                    <div className="hidden md:block absolute top-1/2 -left-3 -translate-y-1/2 text-white/10 z-10 text-xl font-bold">→</div>
                    <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 mx-auto">
                      <FiCpu size={20} />
                    </div>
                    <h4 className="font-bold text-white">Controllers & AJAX Layer</h4>
                    <p className="text-xs text-white/50 leading-relaxed font-light">
                      PHP backend controllers process requests, validate user roles, calculate discounts, and format JSON payloads for dynamic client rendering.
                    </p>
                  </div>

                  <div className="p-6 rounded-2xl bg-purple-500/5 border border-purple-500/15 space-y-2">
                    <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 mx-auto">
                      <FiDatabase size={20} />
                    </div>
                    <h4 className="font-bold text-white">Models (PDO / MySQL)</h4>
                    <p className="text-xs text-white/50 leading-relaxed font-light">
                      Abstracts database queries using PHP Data Objects (PDO) and prepared statements, ensuring transaction safety and database abstraction.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* 5. Feature Breakdown */}
              <motion.div variants={itemVariants} className="space-y-8 border-t border-white/[0.05] pt-12">
                <div className="flex flex-col gap-2">
                  <span className="font-mono-label text-[#0ea5e9] text-xs">Technical Details</span>
                  <h2 className="text-2xl font-bold text-white tracking-tight">Key Contributions & Modules</h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {/* Sales workflow */}
                  <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-[#0ea5e9]/30 transition-all duration-300 group space-y-4">
                    <div className="w-10 h-10 rounded-xl bg-[#0ea5e9]/10 border border-[#0ea5e9]/20 flex items-center justify-center text-[#0ea5e9] group-hover:scale-110 transition-transform">
                      <FiShoppingCart size={20} />
                    </div>
                    <h4 className="font-semibold text-white">Interactive Point of Sale</h4>
                    <p className="text-xs text-white/55 font-light leading-relaxed">
                      Salespersons add products dynamically using AJAX-populated search bars. Calculations update subtotals, tax margins, and total values instantly.
                    </p>
                  </div>

                  {/* Stock tracking */}
                  <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-[#0ea5e9]/30 transition-all duration-300 group space-y-4">
                    <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 group-hover:scale-110 transition-transform">
                      <FiLayers size={20} />
                    </div>
                    <h4 className="font-semibold text-white">Dynamic Inventory Tracking</h4>
                    <p className="text-xs text-white/55 font-light leading-relaxed">
                      As sales complete, the system automatically subtracts quantity numbers from corresponding product database tables and raises active low-stock alerts.
                    </p>
                  </div>

                  {/* Users */}
                  <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-[#0ea5e9]/30 transition-all duration-300 group space-y-4">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
                      <FiUsers size={20} />
                    </div>
                    <h4 className="font-semibold text-white">Role-Based Access (RBAC)</h4>
                    <p className="text-xs text-white/55 font-light leading-relaxed">
                      Enforces profile permissions (Administrator, Manager, Salesperson, and Viewer). Restricts module creation, sales updates, or report downloads.
                    </p>
                  </div>

                  {/* PDF invoicing */}
                  <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-[#0ea5e9]/30 transition-all duration-300 group space-y-4">
                    <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 group-hover:scale-110 transition-transform">
                      <FiFileText size={20} />
                    </div>
                    <h4 className="font-semibold text-white">Professional Invoice Generation</h4>
                    <p className="text-xs text-white/55 font-light leading-relaxed">
                      TCPDF library integration parses cart records to print customer bills and receipts with dynamic product lists, store logos, and barcodes.
                    </p>
                  </div>

                  {/* Multi-Client Mirroring */}
                  <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-[#0ea5e9]/30 transition-all duration-300 group space-y-4">
                    <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
                      <FiCheckCircle size={20} />
                    </div>
                    <h4 className="font-semibold text-white">Multi-Client Deployments</h4>
                    <p className="text-xs text-white/55 font-light leading-relaxed">
                      Configured as a dual-instance architecture. Production instances S1 (GuruGedara) and S2 (Scout Shop) operate separately with custom database parameters.
                    </p>
                  </div>

                  {/* Security sanitization */}
                  <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-[#0ea5e9]/30 transition-all duration-300 group space-y-4">
                    <div className="w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400 group-hover:scale-110 transition-transform">
                      <FiShield size={20} />
                    </div>
                    <h4 className="font-semibold text-white">SQL Injection Protection</h4>
                    <p className="text-xs text-white/55 font-light leading-relaxed">
                      Wrote custom input sanitizers alongside strict PDO parameterized statements, locking database entries against script injections.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* 6. Engineering Summary & Impact */}
              <motion.div variants={itemVariants} className="p-8 rounded-2xl bg-[#0ea5e9]/5 border border-[#0ea5e9]/15 space-y-6">
                <div className="space-y-2">
                  <span className="font-mono-label text-[#0ea5e9] text-xs">Collaborative Project Milestone</span>
                  <h3 className="text-xl font-black text-white">Impact & Teamwork</h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-xs leading-relaxed">
                  <div className="space-y-2">
                    <h5 className="font-bold text-white">🤝 Peer Collaboration</h5>
                    <p className="text-white/50 font-light">
                      Built in collaboration with friend and badgemate, Chathushka, coordinating tasks through git versioning.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h5 className="font-bold text-white">⚡ Operational Speed</h5>
                    <p className="text-white/50 font-light">
                      Reduced checkout times significantly for GuruGedara publications and the scout headquarters store.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h5 className="font-bold text-white">📈 Database Performance</h5>
                    <p className="text-white/50 font-light">
                      Optimized SQL searches and database indices (e.g. idx_customer_id, idx_sale_date) for smooth rendering under 50ms.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h5 className="font-bold text-white">🎓 Academic Solidification</h5>
                    <p className="text-white/50 font-light">
                      Practical implementation of MVC architecture, data encapsulation, OOP principles, and asynchronous AJAX workflows in PHP.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* 7. Database Architecture */}
              <motion.div variants={itemVariants} className="space-y-8 border-t border-white/[0.05] pt-12">
                <div className="flex flex-col gap-2">
                  <span className="font-mono-label text-[#0ea5e9] text-xs">Database Schema</span>
                  <h2 className="text-2xl font-bold text-white tracking-tight">MySQL Table Layout</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-xs sm:text-sm">
                  <div className="space-y-4">
                    <h4 className="font-bold text-[#93c5fd] flex items-center gap-2">
                      <FiDatabase /> Core Inventory Tables
                    </h4>
                    <ul className="space-y-3 text-white/60 font-light leading-relaxed">
                      <li><strong>users:</strong> <code>id | name | user | password | profile | photo | status | lastLogin</code> (Keeps password hashes secure)</li>
                      <li><strong>categories:</strong> <code>id | name | description | status | createdAt</code> (Organizes publications)</li>
                      <li><strong>products:</strong> <code>id | name | category_id (FK) | price | stock | image | status | createdAt</code></li>
                    </ul>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-bold text-[#93c5fd] flex items-center gap-2">
                      <FiShoppingCart /> Sales & Transaction Tables
                    </h4>
                    <ul className="space-y-3 text-white/60 font-light leading-relaxed">
                      <li><strong>customers:</strong> <code>id | name | email | phone | address | city | country | status | createdAt</code></li>
                      <li><strong>sales:</strong> <code>id | customer_id (FK) | totalPrice | salesperson_id (FK) | saledate | status</code></li>
                      <li><strong>sales_details:</strong> <code>id | sale_id (FK) | product_id (FK) | quantity | price | subtotal</code></li>
                    </ul>
                  </div>
                </div>
              </motion.div>

              {/* 8. Results & Final CTAs */}
              <motion.div variants={itemVariants} className="flex flex-col items-center text-center gap-6 border-t border-white/[0.05] pt-12">
                <h3 className="text-xl font-bold text-white">Explore GuruGedara POS</h3>
                <p className="text-sm text-white/50 font-light max-w-md leading-relaxed">
                  Review the source code of the project or explore the dual production setups.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <a
                    href="http://gurugedara.duckdns.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                  >
                    <FaExternalLinkAlt size={14} />
                    <span>View Live Site</span>
                  </a>
                  <a
                    href="https://github.com/Viduraz/gurugedara.duckdns.org.git"
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
