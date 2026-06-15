'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { IconType } from 'react-icons'

interface FloatingIconProps {
  icon?: IconType
  component?: React.ComponentType<{ size?: number; isHovered?: boolean }>
  label: string
  brandColor: string
  /** Position around the orbit circle (CSS top/left as %) */
  top: string
  left: string
  /** Size of the icon in px */
  size?: number
  /** Floating animation duration (seconds) */
  floatDuration?: number
  /** Float amplitude in px */
  floatAmplitude?: number
  /** Animation delay (seconds) */
  delay?: number
}

export default function FloatingIcon({
  icon: Icon,
  component: Component,
  label,
  brandColor,
  top,
  left,
  size = 36,
  floatDuration = 4,
  floatAmplitude = 14,
  delay = 0,
}: FloatingIconProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="absolute z-10 select-none flex flex-col items-center justify-center"
      style={{
        top,
        left,
        width: `${size + 20}px`,
        height: `${size + 20}px`,
        marginTop: `-${(size + 20) / 2}px`,
        marginLeft: `-${(size + 20) / 2}px`,
      }}
    >
      <motion.div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        animate={
          isHovered
            ? { y: -2, x: 0, rotate: 0, scale: 1.15 }
            : {
                y: [0, -floatAmplitude, 0],
                x: [0, floatAmplitude * 0.35, 0],
                rotate: [0, 4, -4, 0],
                scale: 1,
              }
        }
        transition={
          isHovered
            ? { type: 'spring', stiffness: 260, damping: 20 }
            : {
                y: {
                  duration: floatDuration,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay,
                },
                x: {
                  duration: floatDuration,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay,
                },
                rotate: {
                  duration: floatDuration + 1,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay,
                },
                scale: { duration: 0.2 },
              }
        }
        className="cursor-pointer flex items-center justify-center relative"
      >
        {/* Glow Filter on Hover */}
        {Component ? (
          <div
            className="transition-all duration-300 flex items-center justify-center"
            style={{
              filter: isHovered
                ? `drop-shadow(0 0 10px ${brandColor}88)`
                : `drop-shadow(0 0 2px ${brandColor}10)`,
            }}
          >
            <Component size={size} isHovered={isHovered} />
          </div>
        ) : Icon ? (
          <Icon
            size={size}
            className="transition-all duration-300"
            style={{
              color: brandColor,
              filter: isHovered
                ? `drop-shadow(0 0 10px ${brandColor}88)`
                : `drop-shadow(0 0 2px ${brandColor}10)`,
            }}
          />
        ) : null}

        {/* Minimalist Tooltip */}
        <AnimatePresence>
          {isHovered && (
            <motion.span
              initial={{ opacity: 0, y: 6, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 6, scale: 0.9 }}
              transition={{ duration: 0.15, ease: 'easeOut' }}
              className="absolute bottom-full mb-3 px-2 py-1 rounded-lg bg-[#0A0A0B]/95 border border-white/10 text-white font-mono text-[9px] tracking-widest whitespace-nowrap pointer-events-none shadow-2xl z-50 uppercase"
              style={{
                fontFamily: 'var(--font-jetbrains-mono)',
                boxShadow: `0 8px 20px rgba(0, 0, 0, 0.8), 0 0 8px ${brandColor}22`,
              }}
            >
              {label}
            </motion.span>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  )
}
