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
  FiBell,
  FiClock,
  FiActivity,
  FiGrid,
  FiSmartphone,
} from 'react-icons/fi'

interface TodoListModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function TodoListModal({ isOpen, onClose }: TodoListModalProps) {
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
            <div className="relative pt-16 pb-12 px-6 sm:px-12 md:px-16 border-b border-white/[0.05] bg-gradient-to-b from-[#a855f7]/5 via-transparent to-transparent">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
                <div className="flex items-center gap-5">
                  <div className="w-16 h-16 rounded-2xl bg-[#a855f7]/10 border border-[#a855f7]/30 flex items-center justify-center shadow-[0_0_30px_rgba(168,85,247,0.15)]">
                    <svg viewBox="0 0 100 100" fill="none" className="w-11 h-11">
                      {/* Premium Checkmark Checklist SVG */}
                      <rect x="20" y="20" width="60" height="60" rx="15" stroke="#a855f7" strokeWidth="6" />
                      <path d="M35 50 L45 60 L65 40" stroke="#a855f7" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
                      <circle cx="75" cy="25" r="10" fill="#a855f7" />
                      <path d="M75 20 V25 H80" stroke="#ffffff" strokeWidth="2" />
                    </svg>
                  </div>

                  <div>
                    <span className="font-mono-label text-[#a855f7] text-xs">Kotlin Mobile App</span>
                    <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight mt-1 flex flex-wrap items-center gap-3">
                      To-Do List Android
                      <span className="text-[10px] uppercase font-mono tracking-widest bg-[#a855f7]/15 text-[#a855f7] border border-[#a855f7]/25 px-2.5 py-0.5 rounded-md font-semibold">
                        Android Studio
                      </span>
                    </h1>
                  </div>
                </div>

                {/* External Action Badges */}
                <div className="flex flex-wrap items-center gap-3">
                  <a
                    href="https://github.com/Viduraz/To_Do_list.git"
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
                A clean, modern productivity application for Android devices. Developed in Kotlin, the app consolidates tasks scheduling, local preferences storage, and active timer/stopwatch tools with alarm service background notifications.
              </p>

              {/* Main Banner Screenshot */}
              <div className="mt-10 rounded-2xl overflow-hidden border border-white/10 shadow-2xl relative aspect-[16/9] w-full bg-zinc-900 group">
                <Image
                  src="/images/projects/todo-list.png"
                  alt="To-Do List Android App Mockup Interface"
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
                    <FiInfo className="text-[#a855f7]" /> Project Overview
                  </h2>
                  <p className="text-white/60 font-light leading-relaxed">
                    The To-Do List Android App is a lightweight daily utility designed for Android platforms. It coordinates scheduling and task management, helping users organize tasks, set notifications, and run timers in a unified client layout.
                  </p>
                  <p className="text-white/60 font-light leading-relaxed">
                    By leveraging Kotlin, the application manages lifecycle states smoothly across onboarding interfaces, date/time picker dialogs, and stopwatch tasks. The persistent scheduling data is stored locally in Android SharedPreferences, while background timers dispatch notifications using the Android Notification Service when count-downs conclude.
                  </p>
                </div>

                {/* Quick Info Card */}
                <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 space-y-4">
                  <span className="font-mono-label text-white/30 text-xs">Project Metadata</span>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center text-xs pb-2.5 border-b border-white/[0.05]">
                      <span className="text-white/40 flex items-center gap-1.5"><FiCalendar /> Platform</span>
                      <span className="text-white font-medium">Android (API 34 Support)</span>
                    </div>
                    <div className="flex justify-between items-center text-xs pb-2.5 border-b border-white/[0.05]">
                      <span className="text-white/40 flex items-center gap-1.5"><FiCpu /> Language</span>
                      <span className="text-white font-medium">Kotlin 1.9+</span>
                    </div>
                    <div className="flex justify-between items-center text-xs pb-2.5 border-b border-white/[0.05]">
                      <span className="text-white/40 flex items-center gap-1.5"><FiLayers /> Stack</span>
                      <span className="text-[#c084fc] font-medium font-mono text-[10px]">Android SDK / Material Components</span>
                    </div>
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-white/40 flex items-center gap-1.5"><FiDatabase className="text-[#c084fc]" /> Persistence</span>
                      <span className="text-white font-medium text-xs">SharedPreferences</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* 3. Key Modules */}
              <motion.div variants={itemVariants} className="space-y-8 border-t border-white/[0.05] pt-12">
                <div className="flex flex-col gap-2">
                  <span className="font-mono-label text-[#a855f7] text-xs">Technical Modules</span>
                  <h2 className="text-2xl font-bold text-white tracking-tight">Core Application Features</h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {/* Home */}
                  <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-[#a855f7]/30 transition-all duration-300 group space-y-4">
                    <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 group-hover:scale-110 transition-transform">
                      <FiGrid size={20} />
                    </div>
                    <h4 className="font-semibold text-white">Smart Home Dashboard</h4>
                    <p className="text-xs text-white/55 font-light leading-relaxed">
                      Unified launcher UI built with ConstraintLayout and Material Design, providing navigation shortcuts to core functions.
                    </p>
                  </div>

                  {/* Reminder */}
                  <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-[#a855f7]/30 transition-all duration-300 group space-y-4">
                    <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
                      <FiBell size={20} />
                    </div>
                    <h4 className="font-semibold text-white">Reminder Manager</h4>
                    <p className="text-xs text-white/55 font-light leading-relaxed">
                      Date and Time pickers allow users to specify alerts. Details are written dynamically to XML files using SharedPreferences.
                    </p>
                  </div>

                  {/* Timer */}
                  <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-[#a855f7]/30 transition-all duration-300 group space-y-4">
                    <div className="w-10 h-10 rounded-xl bg-pink-500/10 border border-pink-500/20 flex items-center justify-center text-pink-400 group-hover:scale-110 transition-transform">
                      <FiClock size={20} />
                    </div>
                    <h4 className="font-semibold text-white">Timer & Stopwatch</h4>
                    <p className="text-xs text-white/55 font-light leading-relaxed">
                      Time tracking tool backed by `CountDownTimer` classes, supporting start, stop, pause, and reset options.
                    </p>
                  </div>

                  {/* Notifications */}
                  <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-[#a855f7]/30 transition-all duration-300 group space-y-4">
                    <div className="w-10 h-10 rounded-xl bg-yellow-500/10 border border-yellow-500/20 flex items-center justify-center text-yellow-400 group-hover:scale-110 transition-transform">
                      <FiShield size={20} />
                    </div>
                    <h4 className="font-semibold text-white">Local Alarm Alerts</h4>
                    <p className="text-xs text-white/55 font-light leading-relaxed">
                      Fires background alerts using NotificationCompat libraries, letting users know when tasks conclude even when the app is minimized.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* 4. Project File Structure */}
              <motion.div variants={itemVariants} className="space-y-6 border-t border-white/[0.05] pt-12">
                <div className="flex flex-col gap-2">
                  <span className="font-mono-label text-[#a855f7] text-xs">Kotlin Structure</span>
                  <h2 className="text-2xl font-bold text-white tracking-tight">Project Package Map</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-xs sm:text-sm">
                  <div className="p-6 rounded-2xl bg-[#a855f7]/5 border border-[#a855f7]/15 space-y-4">
                    <h4 className="font-bold text-[#d8b4fe] flex items-center gap-2">
                      <FiSmartphone /> app/src/main/java/com/example/todolist/
                    </h4>
                    <ul className="space-y-3 text-white/60 font-light leading-relaxed font-mono">
                      <li><strong>MainActivity.kt:</strong> Root launcher landing dashboard.</li>
                      <li><strong>ReminderActivity.kt:</strong> Gathers input details and writes preferences.</li>
                      <li><strong>ManageReminderActivity.kt:</strong> Coordinates active alerts.</li>
                      <li><strong>TimerStopwatchActivity.kt:</strong> Controls active timer counters.</li>
                      <li><strong>OnBoarding.kt:</strong> Greets fresh installations.</li>
                      <li><strong>ReminderReceiver.kt:</strong> Responds to scheduled alarms.</li>
                      <li><strong>WidgetService.kt:</strong> Manages widget integration.</li>
                    </ul>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-bold text-[#d8b4fe] flex items-center gap-2">
                      <FiLayers /> Layout Configurations
                    </h4>
                    <p className="text-white/60 font-light leading-relaxed">
                      The application separates frontend views from Kotlin business layers using declarative XML layouts. It utilizes:
                    </p>
                    <ul className="space-y-2 text-white/60 font-light list-disc list-inside">
                      <li><strong>ConstraintLayout</strong> for responsive page layouts.</li>
                      <li><strong>Material Components</strong> for modern inputs, date pickers, and buttons.</li>
                      <li><strong>Notification Channels</strong> for compliance with modern Android OS versions.</li>
                    </ul>
                  </div>
                </div>
              </motion.div>

              {/* 5. Recruiter Highlights */}
              <motion.div variants={itemVariants} className="p-8 rounded-2xl bg-[#a855f7]/5 border border-[#a855f7]/15 space-y-6">
                <div className="space-y-2">
                  <span className="font-mono-label text-[#a855f7] text-xs">Mobile Engineering Standard</span>
                  <h3 className="text-xl font-black text-white">Why Recruiters Care</h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-xs leading-relaxed">
                  <div className="space-y-2">
                    <h5 className="font-bold text-white">📱 Kotlin Competency</h5>
                    <p className="text-white/50 font-light">
                      Familiarity writing clean Kotlin codes, managing variables safely, and handling layout views.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h5 className="font-bold text-white">💾 Local Preferences</h5>
                    <p className="text-white/50 font-light">
                      Saves local configurations, task details, and session preferences using XML SharedPreferences structures.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h5 className="font-bold text-white">⏰ Threading & Services</h5>
                    <p className="text-white/50 font-light">
                      Background thread management for active counters and timers, keeping UI responsiveness smooth.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h5 className="font-bold text-white">🔔 OS Level Integration</h5>
                    <p className="text-white/50 font-light">
                      Uses Android BroadcastReceivers, WidgetServices, and NotificationChannels to integrate with the OS.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* 6. Final CTAs */}
              <motion.div variants={itemVariants} className="flex flex-col items-center text-center gap-6 border-t border-white/[0.05] pt-12">
                <h3 className="text-xl font-bold text-white">Explore Mobile Project</h3>
                <p className="text-sm text-white/50 font-light max-w-md leading-relaxed">
                  Explore the Gradle setup, XML configurations, and Kotlin codebase on GitHub.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <a
                    href="https://github.com/Viduraz/To_Do_list.git"
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
