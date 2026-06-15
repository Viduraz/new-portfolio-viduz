'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import { Project } from '@/lib/data'

interface ProjectCardProps {
  project: Project
  onClick?: () => void
}

export default function ProjectCard({ project, onClick }: ProjectCardProps) {
  const handleCardClick = (e: React.MouseEvent) => {
    // Prevent triggering modal when clicking nested links
    if ((e.target as HTMLElement).closest('a')) {
      return
    }
    if (onClick) {
      onClick()
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6, boxShadow: '0 24px 50px rgba(255,107,0,0.14)' }}
      onClick={handleCardClick}
      style={{ isolation: 'isolate' }}
      className={`glass-border-gradient flex flex-col rounded-3xl overflow-hidden group transition-all duration-300 h-full bg-[#09090b] shadow-[0_18px_35px_rgba(0,0,0,0.45)] ${
        onClick ? 'cursor-pointer' : ''
      }`}
    >
      {/* Thumbnail Container */}
      <div className="relative aspect-[16/9] w-full overflow-hidden bg-zinc-900">
        <Image
          src={project.imagePath}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />
        {/* Soft overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-grow p-6 sm:p-8">
        {/* Tech tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, idx) => (
            <span
              key={tag}
              className={`px-3 py-1 rounded-full text-[10px] font-semibold tracking-wider font-mono-label ${
                idx % 2 === 0
                  ? 'border border-[#ff6b00]/40 text-[#ffd5c0] bg-[#ff6b00]/10'
                  : 'border border-[#4b8eff]/40 text-[#dfe8ff] bg-[#4b8eff]/10'
              }`}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Title */}
        <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 tracking-tight group-hover:text-[#ffb693] transition-colors duration-300">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-zinc-300 text-sm leading-relaxed mb-4 flex-grow">
          {project.description}
        </p>

        {/* Click CTA hint for clickable cards */}
        {onClick && (
          <p className="text-[#ff6b00]/70 text-[11px] font-mono-label tracking-widest mb-4 flex items-center gap-1.5 group-hover:text-[#ff6b00] transition-colors duration-300">
            <span className="inline-block w-4 h-px bg-[#ff6b00]/50 group-hover:w-6 transition-all duration-300" />
            Click to explore details
          </p>
        )}

        {/* Action Links */}
        <div className="flex items-center gap-6 mt-auto pt-4 border-t border-white/[0.05]">
          {project.liveUrl && (
            <Link
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider font-mono-label text-zinc-100 hover:text-white group/link transition-colors duration-200"
            >
              <FaExternalLinkAlt size={12} className="text-[#ff6b00]" />
              <span>Live Demo</span>
              <span className="block h-px w-0 bg-white group-hover/link:w-full transition-all duration-300" />
            </Link>
          )}

          {project.githubUrl && (
            <Link
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider font-mono-label text-zinc-100 hover:text-white group/link transition-colors duration-200"
            >
              <FaGithub size={14} className="text-[#4b8eff]" />
              <span>GitHub</span>
              <span className="block h-px w-0 bg-white group-hover/link:w-full transition-all duration-300" />
            </Link>
          )}
        </div>
      </div>
    </motion.div>
  )
}
