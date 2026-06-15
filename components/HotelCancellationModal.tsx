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
  FiVideo,
  FiList,
  FiTrendingDown,
  FiBarChart2,
} from 'react-icons/fi'
import { FaYoutube } from 'react-icons/fa'

interface HotelCancellationModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function HotelCancellationModal({ isOpen, onClose }: HotelCancellationModalProps) {
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
            <div className="relative pt-16 pb-12 px-6 sm:px-12 md:px-16 border-b border-white/[0.05] bg-gradient-to-b from-[#c084fc]/5 via-transparent to-transparent">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
                <div className="flex items-center gap-5">
                  <div className="w-16 h-16 rounded-2xl bg-[#c084fc]/10 border border-[#c084fc]/30 flex items-center justify-center shadow-[0_0_30px_rgba(192,132,252,0.15)]">
                    <svg viewBox="0 0 100 100" fill="none" className="w-11 h-11">
                      {/* Premium Analytics SVG */}
                      <rect x="15" y="15" width="70" height="70" rx="10" stroke="#a855f7" strokeWidth="6" />
                      <path d="M30 70 V50 M50 70 V35 M70 70 V25" stroke="#a855f7" strokeWidth="8" strokeLinecap="round" />
                      <path d="M25 45 L45 30 L65 20" stroke="#ec4899" strokeWidth="4" strokeLinecap="round" />
                      <circle cx="45" cy="30" r="4" fill="#ec4899" />
                    </svg>
                  </div>

                  <div>
                    <span className="font-mono-label text-[#c084fc] text-xs">Machine Learning Journey</span>
                    <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight mt-1 flex flex-wrap items-center gap-3">
                      Hotel Cancellation Prediction
                      <span className="text-[10px] uppercase font-mono tracking-widest bg-[#c084fc]/15 text-[#c084fc] border border-[#c084fc]/25 px-2.5 py-0.5 rounded-md font-semibold">
                        Jupyter Notebook
                      </span>
                    </h1>
                  </div>
                </div>

                {/* External Action Badges */}
                <div className="flex flex-wrap items-center gap-3">
                  <a
                    href="https://youtu.be/EJaPym_MzWQ?si=q8FGYd4__OqoWF6p"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-black font-semibold text-xs transition-transform duration-200 hover:scale-[1.02] cursor-pointer"
                  >
                    <FaYoutube className="text-red-600" size={16} />
                    <span>Watch Video</span>
                  </a>
                  <a
                    href="https://github.com/Eranga999/Ml-Assigment.git"
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
                Predictive classification modeling using historical booking data to mitigate booking losses in the Sri Lankan hotel industry. Compares performance metrics of multiple supervised classifiers.
              </p>

              {/* Main Banner Screenshot */}
              <div className="mt-10 rounded-2xl overflow-hidden border border-white/10 shadow-2xl relative aspect-[16/9] w-full bg-zinc-900 group">
                <Image
                  src="/images/projects/hotel-cancellation.png"
                  alt="Hotel Booking Cancellation Prediction Mockup Interface"
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
                    <FiInfo className="text-[#c084fc]" /> Project Overview
                  </h2>
                  <p className="text-white/60 font-light leading-relaxed">
                    This project addresses a critical commercial challenge in the hospitality and tourism sector: anticipating cancellation behavior to optimize room allocations, staff rosters, and overall financial planning.
                  </p>
                  <p className="text-white/60 font-light leading-relaxed">
                    Working on a dataset comprising 119,390 historical booking records across 32 features, we cleaned, encoded, and parsed the data to train four classification algorithms. We tuned hyper-parameters, plotted ROC-AUC validation lines, and identified the optimal model for this decision-making scenario.
                  </p>
                </div>

                {/* Quick Info Card */}
                <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 space-y-4">
                  <span className="font-mono-label text-white/30 text-xs">Project Metadata</span>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center text-xs pb-2.5 border-b border-white/[0.05]">
                      <span className="text-white/40 flex items-center gap-1.5"><FiCalendar /> Target Domain</span>
                      <span className="text-white font-medium text-right text-xs">Hotel Revenue Management</span>
                    </div>
                    <div className="flex justify-between items-center text-xs pb-2.5 border-b border-white/[0.05]">
                      <span className="text-white/40 flex items-center gap-1.5"><FiCpu /> Runtime</span>
                      <span className="text-white font-medium">Jupyter / Python 3</span>
                    </div>
                    <div className="flex justify-between items-center text-xs pb-2.5 border-b border-white/[0.05]">
                      <span className="text-white/40 flex items-center gap-1.5"><FiLayers /> Stack</span>
                      <span className="text-[#c084fc] font-medium font-mono text-[9px] text-right">Pandas / NumPy / Scikit-Learn</span>
                    </div>
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-white/40 flex items-center gap-1.5"><FiUser className="text-[#c084fc]" /> Team Size</span>
                      <span className="text-white font-medium">4 Members</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* 3. Pipeline Stages */}
              <motion.div variants={itemVariants} className="space-y-6 border-t border-white/[0.05] pt-12">
                <div className="flex flex-col gap-2">
                  <span className="font-mono-label text-[#c084fc] text-xs">Workflow Pipeline</span>
                  <h2 className="text-2xl font-bold text-white tracking-tight">Machine Learning Steps</h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {[
                    { step: '1. Ingest & Clean', desc: 'Loads 119,390 records, handles missing inputs, and formats outliers.' },
                    { step: '2. Preprocess & Encode', desc: 'Encodes categorical features like deposit type and splits data 80/20.' },
                    { step: '3. Train Classifiers', desc: 'Trains Logistic Regression, KNN, Decision Tree, and Random Forest.' },
                    { step: '4. Metric Evaluation', desc: 'Evaluates using Accuracy, Precision, Recall, F1-score, and ROC-AUC curves.' },
                  ].map((item) => (
                    <div key={item.step} className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-2">
                      <h4 className="font-bold text-white text-sm">{item.step}</h4>
                      <p className="text-[11px] text-white/50 leading-relaxed font-light">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* 4. Model Comparison */}
              <motion.div variants={itemVariants} className="space-y-8 border-t border-white/[0.05] pt-12">
                <div className="flex flex-col gap-2">
                  <span className="font-mono-label text-[#c084fc] text-xs">Classifiers Comparison</span>
                  <h2 className="text-2xl font-bold text-white tracking-tight">Supervised Machine Learning Algorithms</h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {/* Logistic */}
                  <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-[#c084fc]/30 transition-all duration-300 group space-y-4">
                    <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
                      <FiTrendingUp size={20} />
                    </div>
                    <h4 className="font-semibold text-white">Logistic Regression</h4>
                    <p className="text-xs text-white/55 font-light leading-relaxed">
                      Baseline classifier. Provided clear insights on feature impact, lead times, and deposit policies.
                    </p>
                  </div>

                  {/* KNN */}
                  <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-[#c084fc]/30 transition-all duration-300 group space-y-4">
                    <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 group-hover:scale-110 transition-transform">
                      <FiLayers size={20} />
                    </div>
                    <h4 className="font-semibold text-white">K-Nearest Neighbors</h4>
                    <p className="text-xs text-white/55 font-light leading-relaxed">
                      Distance-based learner. Classified patterns by analyzing closest historical customer booking behavior.
                    </p>
                  </div>

                  {/* Decision Tree */}
                  <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-[#c084fc]/30 transition-all duration-300 group space-y-4">
                    <div className="w-10 h-10 rounded-xl bg-pink-500/10 border border-pink-500/20 flex items-center justify-center text-pink-400 group-hover:scale-110 transition-transform">
                      <FiList size={20} />
                    </div>
                    <h4 className="font-semibold text-white">Decision Tree</h4>
                    <p className="text-xs text-white/55 font-light leading-relaxed">
                      Rule-based classifier. Provided an interpretable visual breakdown of decisions (Gini index splits).
                    </p>
                  </div>

                  {/* Random Forest */}
                  <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-[#c084fc]/30 transition-all duration-300 group space-y-4">
                    <div className="w-10 h-10 rounded-xl bg-yellow-500/10 border border-yellow-500/20 flex items-center justify-center text-yellow-400 group-hover:scale-110 transition-transform">
                      <FiCpu size={20} />
                    </div>
                    <h4 className="font-semibold text-white">Random Forest</h4>
                    <p className="text-xs text-white/55 font-light leading-relaxed">
                      Ensemble classifier. Delivered the highest accuracy and generalized best by averaging multiple decision trees.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* 5. Team Details & Structure */}
              <motion.div variants={itemVariants} className="space-y-6 border-t border-white/[0.05] pt-12">
                <div className="flex flex-col gap-2">
                  <span className="font-mono-label text-[#c084fc] text-xs">Collaborators</span>
                  <h2 className="text-2xl font-bold text-white tracking-tight">Project Team & Files Structure</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-xs sm:text-sm">
                  <div className="p-6 rounded-2xl bg-[#c084fc]/5 border border-[#c084fc]/15 space-y-4">
                    <h4 className="font-bold text-[#e9d5ff] flex items-center gap-2">
                      <FiUser /> Team Members
                    </h4>
                    <ul className="space-y-2.5 text-white/60 font-light">
                      <li>• **R M V R Rathnayaka** (IT22075208)</li>
                      <li>• **Jayah N.S.B** (IT22194244)</li>
                      <li>• **Perera P.A.Y.S** (IT22198686)</li>
                      <li>• **G.e.i.e.h.kumara** (IT22253644)</li>
                    </ul>
                  </div>

                  <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 space-y-4">
                    <h4 className="font-bold text-[#e9d5ff] flex items-center gap-2">
                      <FiDatabase /> Notebook Deliverables
                    </h4>
                    <ul className="space-y-2.5 text-white/60 font-mono text-xs">
                      <li>• `Logistic_Regression_IT22253644.ipynb`</li>
                      <li>• `KNN-IT22075208.ipynb`</li>
                      <li>• `Decision_Tree_IT22194244.ipynb`</li>
                      <li>• `Random_Forest_IT22198686.ipynb`</li>
                    </ul>
                  </div>
                </div>
              </motion.div>

              {/* 6. Recruiter Highlights */}
              <motion.div variants={itemVariants} className="p-8 rounded-2xl bg-[#c084fc]/5 border border-[#c084fc]/15 space-y-6">
                <div className="space-y-2">
                  <span className="font-mono-label text-[#c084fc] text-xs">Engineering Summary</span>
                  <h3 className="text-xl font-black text-white">Why Recruiters Care</h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-xs leading-relaxed">
                  <div className="space-y-2">
                    <h5 className="font-bold text-white">📈 Data Engineering</h5>
                    <p className="text-white/50 font-light">
                      Cleaned over 119k records, handled missing values, encoded categories, and performed scaling.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h5 className="font-bold text-white">🧠 Classifier Comparisons</h5>
                    <p className="text-white/50 font-light">
                      Implemented multiple supervised classifiers using Scikit-Learn to find the best fit.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h5 className="font-bold text-white">📊 Performance Metrics</h5>
                    <p className="text-white/50 font-light">
                      Evaluated models using precision-recall, F1-scores, and ROC-AUC classification curves.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h5 className="font-bold text-white">🏨 Business Application</h5>
                    <p className="text-white/50 font-light">
                      Focused on real hospitality data to support smart booking management and resource planning.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* 7. Final CTAs */}
              <motion.div variants={itemVariants} className="flex flex-col items-center text-center gap-6 border-t border-white/[0.05] pt-12">
                <h3 className="text-xl font-bold text-white">See the Models in Action</h3>
                <p className="text-sm text-white/50 font-light max-w-md leading-relaxed">
                  Watch the project presentation video on YouTube or explore the Jupyter Notebook experiments on GitHub.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <a
                    href="https://youtu.be/EJaPym_MzWQ?si=q8FGYd4__OqoWF6p"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                  >
                    <FaYoutube size={18} />
                    <span>Watch Explanation Video</span>
                  </a>
                  <a
                    href="https://github.com/Eranga999/Ml-Assigment.git"
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
