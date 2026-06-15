'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { skillsData, Skill } from '@/lib/data'
import Reveal from './Reveal'

export default function Skills() {
  const [activeTab, setActiveTab] = useState(0)

  // Staggered list container variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 15, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: 'spring' as const,
        stiffness: 100,
        damping: 15,
      },
    },
  }

  return (
    <section id="skills" className="section-padding max-w-[1200px] mx-auto px-6">
      <div className="flex flex-col items-center text-center gap-4 mb-12">
        <Reveal delay={0.1}>
          <span className="font-mono-label text-[#ff6b00]">
            {"// TECH STACK"}
          </span>
        </Reveal>

        <Reveal delay={0.2}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white">
            Tools & <span className="text-gradient-amber">Technologies</span> I Work With
          </h2>
        </Reveal>
      </div>

      {/* Tab Selectors */}
      <div className="flex justify-center flex-wrap gap-2 mb-10 max-w-2xl mx-auto">
        {skillsData.map((category, idx) => (
          <button
            key={category.title}
            onClick={() => setActiveTab(idx)}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 relative ${
              activeTab === idx
                ? 'text-white'
                : 'text-white/50 hover:text-white/80'
            }`}
          >
            {activeTab === idx && (
              <motion.div
                layoutId="activeTabGlow"
                className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#ff6b00]/20 to-[#ffb693]/20 border border-[#ff6b00]/30 shadow-amber-glow-sm"
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              />
            )}
            <span className="relative z-10">{category.title}</span>
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <div className="min-h-[200px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, transition: { duration: 0.15 } }}
            className="flex flex-wrap items-center justify-center gap-4 max-w-4xl mx-auto"
          >
            {skillsData[activeTab].skills.map((skill: Skill) => {
              const Icon = skill.icon
              return (
                <motion.div
                  key={skill.name}
                  variants={itemVariants}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: `0 0 20px ${skill.brandColor}22`,
                  }}
                  className="glass-card flex items-center gap-3 px-5 py-3 rounded-2xl border border-white/5 cursor-default group transition-all duration-300"
                  style={{
                    // Dynamic hover styles defined inline/CSS properties
                    ['--brand-color' as any]: skill.brandColor,
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget
                    el.style.backgroundColor = `${skill.brandColor}10`
                    el.style.borderColor = `${skill.brandColor}25`
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget
                    el.style.backgroundColor = ''
                    el.style.borderColor = ''
                  }}
                >
                  <motion.div
                    whileHover={{ scale: 1.15 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                  >
                    <Icon
                      size={20}
                      className="transition-colors duration-300"
                      style={{ color: skill.brandColor }}
                    />
                  </motion.div>
                  <span
                    className="font-mono text-xs font-semibold tracking-wide text-white/80 group-hover:text-white transition-colors duration-200"
                    style={{ fontFamily: 'var(--font-jetbrains-mono)' }}
                  >
                    {skill.name}
                  </span>
                </motion.div>
              )
            })}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
