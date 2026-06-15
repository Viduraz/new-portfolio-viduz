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
  FiUser,
  FiShield,
  FiShoppingCart,
  FiFileText,
  FiUsers,
  FiGrid,
} from 'react-icons/fi'
import { FaCreditCard, FaExternalLinkAlt } from 'react-icons/fa'

interface JayasingheStorelineModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function JayasingheStorelineModal({ isOpen, onClose }: JayasingheStorelineModalProps) {
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
                      {/* Premium Cart + Payment Processing SVG */}
                      <rect x="20" y="25" width="60" height="50" rx="6" stroke="#10b981" strokeWidth="6" />
                      <circle cx="35" cy="40" r="4" fill="#06b6d4" />
                      <circle cx="50" cy="40" r="4" fill="#06b6d4" />
                      <circle cx="65" cy="40" r="4" fill="#06b6d4" />
                      <path d="M25 60 H75" stroke="#10b981" strokeWidth="4" />
                      <path d="M40 75 L50 85 L70 65" stroke="#10b981" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>

                  <div>
                    <span className="font-mono-label text-[#10b981] text-xs">MERN Stack Retail & Inventory</span>
                    <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight mt-1 flex flex-wrap items-center gap-3">
                      JayasingheStoreline
                      <span className="text-[10px] uppercase font-mono tracking-widest bg-[#10b981]/15 text-[#10b981] border border-[#10b981]/25 px-2.5 py-0.5 rounded-md font-semibold">
                        PayHere Gateway
                      </span>
                    </h1>
                  </div>
                </div>

                {/* External Action Badges */}
                <div className="flex flex-wrap items-center gap-3">
                  <a
                    href="https://jayasinghestorelines.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-black font-semibold text-xs transition-transform duration-200 hover:scale-[1.02] cursor-pointer"
                  >
                    <FaExternalLinkAlt className="text-black" size={12} />
                    <span>Live Site</span>
                  </a>
                  <a
                    href="https://github.com/chathuwa-whiz/JayasingheStoreline-MERN.git"
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
                A unified full-stack MERN retail and inventory system. Combines product catalogs, cart-to-checkout flows, role-based administration dashboards, and local supplier & delivery operations.
              </p>

              {/* Main Banner Screenshot */}
              <div className="mt-10 rounded-2xl overflow-hidden border border-white/10 shadow-2xl relative aspect-[16/9] w-full bg-zinc-900 group">
                <Image
                  src="/images/projects/jayasinghe-storeline.png"
                  alt="JayasingheStoreline MERN Dashboard Mockup"
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
              {/* Highlight Contribution Callout (PayHere Sandbox) */}
              <motion.div
                variants={itemVariants}
                className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#10b981]/10 to-[#06b6d4]/10 border border-[#10b981]/30 relative overflow-hidden space-y-3"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#10b981]/5 rounded-full blur-2xl pointer-events-none" />
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-mono font-bold tracking-widest uppercase bg-[#10b981]/20 text-[#34d399] border border-[#10b981]/30">
                  <FaCreditCard size={10} /> Core Contribution
                </span>
                <h3 className="text-xl font-bold text-white tracking-tight">
                  PayHere Gateway Sandbox Integration
                </h3>
                <p className="text-sm text-white/75 font-light leading-relaxed max-w-3xl">
                  My primary contribution to this 8-member MERN project was the end-to-end integration of the <strong>PayHere payment gateway in Sandbox Mode</strong>. This involved building backend APIs to generate signatures, handling asynchronous IPN callbacks, managing webhook verification to update order status tables, and triggering automated SMTP confirmation emails upon successful transactions.
                </p>
              </motion.div>

              {/* 2. Project Overview & Stats Grid */}
              <motion.div variants={itemVariants} className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                <div className="lg:col-span-2 space-y-4">
                  <h2 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
                    <FiInfo className="text-[#10b981]" /> Project Overview
                  </h2>
                  <p className="text-white/60 font-light leading-relaxed">
                    JayasingheStoreline is built to support the complete lifecycle of a retail business. The system is designed to streamline front-of-house customer interactions (shopping, reviews, payment processing) alongside critical back-office operations (supplier inventory restocking, driver delivery scheduling, and employee payroll audits).
                  </p>
                  <p className="text-white/60 font-light leading-relaxed">
                    By dividing the system into modular business units—each backed by specialized Mongoose schemas and dedicated Express routers—our group was able to collaborate concurrently on a MERN repository. This setup ensures that high-volume operations, such as inventory reporting, run smoothly alongside delivery and tracking routes.
                  </p>
                </div>

                {/* Quick Info Card */}
                <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 space-y-4">
                  <span className="font-mono-label text-white/30 text-xs">Project Metadata</span>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center text-xs pb-2.5 border-b border-white/[0.05]">
                      <span className="text-white/40 flex items-center gap-1.5"><FiCalendar /> Academic Timeline</span>
                      <span className="text-white font-medium">3rd Year, MERN Assignment</span>
                    </div>
                    <div className="flex justify-between items-center text-xs pb-2.5 border-b border-white/[0.05]">
                      <span className="text-white/40 flex items-center gap-1.5"><FiUsers /> Team Size</span>
                      <span className="text-white font-medium">8 Group Members</span>
                    </div>
                    <div className="flex justify-between items-center text-xs pb-2.5 border-b border-white/[0.05]">
                      <span className="text-white/40 flex items-center gap-1.5"><FiLayers /> Stack</span>
                      <span className="text-[#10b981] font-medium font-mono">React / Node.js / MongoDB</span>
                    </div>
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-white/40 flex items-center gap-1.5"><FiShield className="text-emerald-400" /> Payment Sandbox</span>
                      <span className="text-white font-medium text-right text-xs">PayHere Sandbox SDK</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* 3. Core Modules Breakdown */}
              <motion.div variants={itemVariants} className="space-y-6 border-t border-white/[0.05] pt-12">
                <div className="flex flex-col gap-2">
                  <span className="font-mono-label text-[#10b981] text-xs">System Capabilities</span>
                  <h2 className="text-2xl font-bold text-white tracking-tight">Key Business Modules</h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {/* Shopping */}
                  <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-[#10b981]/30 transition-all duration-300 group space-y-4">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
                      <FiShoppingCart size={20} />
                    </div>
                    <h4 className="font-semibold text-white">Customer Shopping Portal</h4>
                    <p className="text-xs text-white/55 font-light leading-relaxed">
                      Features a responsive storefront for product catalogs, real-time cart edits, checkout pipelines, and purchase history.
                    </p>
                  </div>

                  {/* Payment */}
                  <div className="p-6 rounded-2xl bg-[#10b981]/5 border border-[#10b981]/25 hover:border-[#10b981]/40 transition-all duration-300 group space-y-4">
                    <div className="w-10 h-10 rounded-xl bg-[#10b981]/15 border border-[#10b981]/30 flex items-center justify-center text-[#10b981] group-hover:scale-110 transition-transform">
                      <FaCreditCard size={18} />
                    </div>
                    <h4 className="font-semibold text-white">PayHere Sandbox Integration</h4>
                    <p className="text-xs text-white/55 font-light leading-relaxed">
                      Handles payment signature generation, instant payment notifications (IPN) webhooks, and sandbox checkouts.
                    </p>
                  </div>

                  {/* Inventory */}
                  <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-[#10b981]/30 transition-all duration-300 group space-y-4">
                    <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
                      <FiLayers size={20} />
                    </div>
                    <h4 className="font-semibold text-white">Inventory & Product Control</h4>
                    <p className="text-xs text-white/55 font-light leading-relaxed">
                      Enables stock replenishment, category mapping, low-stock updates, and automated CSV inventory reports.
                    </p>
                  </div>

                  {/* Suppliers */}
                  <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-[#10b981]/30 transition-all duration-300 group space-y-4">
                    <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 group-hover:scale-110 transition-transform">
                      <FiUsers size={20} />
                    </div>
                    <h4 className="font-semibold text-white">Supplier Operations</h4>
                    <p className="text-xs text-white/55 font-light leading-relaxed">
                      Coordinates supplier profiles, tracks wholesale orders, files payment requests, and creates supplier audit files.
                    </p>
                  </div>

                  {/* Delivery */}
                  <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-[#10b981]/30 transition-all duration-300 group space-y-4">
                    <div className="w-10 h-10 rounded-xl bg-yellow-500/10 border border-yellow-500/20 flex items-center justify-center text-yellow-400 group-hover:scale-110 transition-transform">
                      <FiGrid size={20} />
                    </div>
                    <h4 className="font-semibold text-white">Delivery Management</h4>
                    <p className="text-xs text-white/55 font-light leading-relaxed">
                      Schedules deliveries, assigns driver routes, stores vehicle registration numbers, and handles dispatch alerts.
                    </p>
                  </div>

                  {/* Administration */}
                  <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-[#10b981]/30 transition-all duration-300 group space-y-4">
                    <div className="w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400 group-hover:scale-110 transition-transform">
                      <FiShield size={20} />
                    </div>
                    <h4 className="font-semibold text-white">Role-Based Admin Panels</h4>
                    <p className="text-xs text-white/55 font-light leading-relaxed">
                      Secures administration sections with JWT cookies and permission rules for managers and employee accounts.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* 4. Technical Architecture Visual */}
              <motion.div variants={itemVariants} className="space-y-6 border-t border-white/[0.05] pt-12">
                <div className="flex flex-col gap-2">
                  <span className="font-mono-label text-[#10b981] text-xs">MERN Architecture</span>
                  <h2 className="text-2xl font-bold text-white tracking-tight">Full-Stack Project Layout</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                  <div className="p-6 rounded-2xl bg-[#06b6d4]/5 border border-[#06b6d4]/15 space-y-2">
                    <div className="w-10 h-10 rounded-xl bg-[#06b6d4]/10 border border-[#06b6d4]/20 flex items-center justify-center text-[#06b6d4] mx-auto">
                      <FiCpu size={20} />
                    </div>
                    <h4 className="font-bold text-white">Frontend (Vite + React)</h4>
                    <p className="text-xs text-white/50 leading-relaxed font-light">
                      Uses Redux Toolkit for state, Tailwind CSS, Flowbite components, and Chart.js dashboards. Communicates with API via Axios.
                    </p>
                  </div>

                  <div className="p-6 rounded-2xl bg-[#10b981]/5 border border-[#10b981]/15 space-y-2 relative">
                    <div className="hidden md:block absolute top-1/2 -right-3 -translate-y-1/2 text-white/10 z-10 text-xl font-bold">→</div>
                    <div className="hidden md:block absolute top-1/2 -left-3 -translate-y-1/2 text-white/10 z-10 text-xl font-bold">→</div>
                    <div className="w-10 h-10 rounded-xl bg-[#10b981]/10 border border-[#10b981]/20 flex items-center justify-center text-[#10b981] mx-auto">
                      <FiLayers size={20} />
                    </div>
                    <h4 className="font-bold text-white">Backend (Express & Node)</h4>
                    <p className="text-xs text-white/50 leading-relaxed font-light">
                      Modular routers for users, products, orders, payments, suppliers, and drivers. Secures routes via JWT session cookies.
                    </p>
                  </div>

                  <div className="p-6 rounded-2xl bg-purple-500/5 border border-purple-500/15 space-y-2">
                    <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 mx-auto">
                      <FiDatabase size={20} />
                    </div>
                    <h4 className="font-bold text-white">Database (MongoDB Atlas)</h4>
                    <p className="text-xs text-white/55 leading-relaxed font-light">
                      NoSQL document store containing collections for Users, Products, Categories, Orders, Deliveries, and Suppliers.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* 5. API Definitions */}
              <motion.div variants={itemVariants} className="space-y-6 border-t border-white/[0.05] pt-12">
                <div className="flex flex-col gap-2">
                  <span className="font-mono-label text-[#10b981] text-xs">Backend Routes</span>
                  <h2 className="text-2xl font-bold text-white tracking-tight">Main API Subsystems</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-xs sm:text-sm font-mono">
                  <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 space-y-3">
                    <h4 className="font-bold text-[#34d399] flex items-center gap-2">
                      <FiShoppingCart /> Customer & Order API
                    </h4>
                    <ul className="space-y-2 text-white/60 font-light">
                      <li>• <code>/api/users</code> — Login, Registration, Profiles</li>
                      <li>• <code>/api/products</code> — Merchandising, Stock CRUD</li>
                      <li>• <code>/api/orders</code> — Cart checkouts & Order histories</li>
                      <li>• <code>/api/payment</code> — Sandbox payment creation</li>
                      <li>• <code>/api/payhere</code> — PayHere webhook IPN routing</li>
                    </ul>
                  </div>

                  <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 space-y-3">
                    <h4 className="font-bold text-[#34d399] flex items-center gap-2">
                      <FiFileText /> Operations & Logistics API
                    </h4>
                    <ul className="space-y-2 text-white/60 font-light">
                      <li>• <code>/api/deliveries</code> — Schedule dispatches</li>
                      <li>• <code>/api/drivers</code> — Manage courier vehicles</li>
                      <li>• <code>/api/supplier</code> — Track supplier restock orders</li>
                      <li>• <code>/api/employee</code> — Admin staff registers & payroll</li>
                      <li>• <code>/api/authEmployee</code> — Employee logins</li>
                    </ul>
                  </div>
                </div>
              </motion.div>

              {/* 6. Recruiter Highlights */}
              <motion.div variants={itemVariants} className="p-8 rounded-2xl bg-[#10b981]/5 border border-[#10b981]/15 space-y-6">
                <div className="space-y-2">
                  <span className="font-mono-label text-[#10b981] text-xs">Recruiting Highlights</span>
                  <h3 className="text-xl font-black text-white">Engineering Accomplishments</h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-xs leading-relaxed">
                  <div className="space-y-2">
                    <h5 className="font-bold text-white">💳 PayHere Integration</h5>
                    <p className="text-white/50 font-light">
                      Successfully coordinated checkout calls, verified signature parameters, and processed sandbox payment webhooks.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h5 className="font-bold text-white">👥 8-Member Teamwork</h5>
                    <p className="text-white/50 font-light">
                      Collaborated closely under Git branch models, maintaining modularized API scopes to avoid merge conflicts.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h5 className="font-bold text-white">🔒 Session Cookies</h5>
                    <p className="text-white/50 font-light">
                      Secured authorization requests using HTTP-only cookies containing signed JWT tokens.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h5 className="font-bold text-white">📈 Recharts Visuals</h5>
                    <p className="text-white/50 font-light">
                      Rendered business dashboards with visual analysis for product stocks, delivery dispatches, and sales.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* 7. Final CTAs */}
              <motion.div variants={itemVariants} className="flex flex-col items-center text-center gap-6 border-t border-white/[0.05] pt-12">
                <h3 className="text-xl font-bold text-white">See the Source Code</h3>
                <p className="text-sm text-white/50 font-light max-w-md leading-relaxed">
                  Explore the full repository on GitHub to view both the backend API and frontend Vite application code.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <a
                    href="https://jayasinghestorelines.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                  >
                    <FaExternalLinkAlt size={14} />
                    <span>View Live Site</span>
                  </a>
                  <a
                    href="https://github.com/chathuwa-whiz/JayasingheStoreline-MERN.git"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary"
                  >
                    <FiGithub size={18} />
                    <span>Explore Code Repository</span>
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
