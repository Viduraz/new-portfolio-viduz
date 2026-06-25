'use client'

import { motion } from 'framer-motion'
import Reveal from './Reveal'
import { FiCpu, FiLayers, FiDatabase, FiAward, FiBookOpen } from 'react-icons/fi'

interface StatCardProps {
  number: string
  label: string
  description: string
  delay?: number
}

function StatCard({ number, label, description, delay = 0 }: StatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6, boxShadow: '0 12px 30px rgba(255,107,0,0.1)' }}
      className="glass-card p-6 rounded-2xl border border-white/5 transition-all duration-300 relative group overflow-hidden flex flex-col justify-between"
    >
      {/* Background soft glow on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#ff6b00]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Accent indicator line */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#ff6b00] to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

      <div>
        <h3 className="text-3xl sm:text-4xl font-black text-gradient-amber tracking-tight mb-1">
          {number}
        </h3>
        <h4 className="text-white text-sm font-bold tracking-wide mb-2">
          {label}
        </h4>
      </div>
      <p className="text-white/45 text-xs font-light leading-relaxed">
        {description}
      </p>
    </motion.div>
  )
}

interface PillarCardProps {
  icon: React.ElementType
  title: string
  description: string
  techs: string[]
  delay?: number
}

function PillarCard({ icon: Icon, title, description, techs, delay = 0 }: PillarCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className="p-6 rounded-2xl border border-white/5 bg-white/[0.01] hover:bg-white/[0.02] hover:border-[#ff6b00]/20 transition-all duration-300 group space-y-4 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#ff6b00]/2 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="w-10 h-10 rounded-xl bg-[#ff6b00]/10 border border-[#ff6b00]/20 flex items-center justify-center text-[#ff6b00] group-hover:scale-110 transition-all duration-300">
        <Icon size={20} />
      </div>

      <div className="space-y-2 relative z-10">
        <h4 className="font-bold text-white text-base">{title}</h4>
        <p className="text-xs text-white/50 leading-relaxed font-light">{description}</p>
      </div>

      <div className="flex flex-wrap gap-1.5 pt-2 relative z-10">
        {techs.map((t) => (
          <span
            key={t}
            className="px-2 py-0.5 rounded-md bg-white/5 border border-white/5 text-[9px] font-mono-label text-white/40 group-hover:text-white/60 group-hover:border-white/10 transition-colors"
          >
            {t}
          </span>
        ))}
      </div>
    </motion.div>
  )
}

export default function About() {
  return (
    <section id="about" className="section-padding max-w-[1200px] mx-auto px-6 relative">
      {/* Ambient background soft glow behind cards */}
      <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-[#ff6b00]/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-blue-500/[0.02] rounded-full blur-[120px] pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column: Title, Narrative Story & Technical Pillars */}
        <div className="lg:col-span-7 space-y-10">
          <div className="flex flex-col items-start text-left gap-4">
            <Reveal delay={0.1}>
              <span className="font-mono-label text-[#ff6b00]">
                {"// ABOUT ME"}
              </span>
            </Reveal>

            <Reveal delay={0.2}>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white leading-tight">
                Architecting Solutions <span className="text-gradient-amber">Line by Line</span>
              </h2>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="mt-2 space-y-5 text-white/70 text-base sm:text-lg font-light leading-relaxed">
                <p>
                  I am a passionate final-year IT undergraduate specializing in Information Technology and machine learning. My engineering philosophy centers on translating complex operational requirements into clean, modular, and high-performance software.
                </p>
                <p>
                  My hands-on experience as a Trainee Full-stack Software Developer at the <strong className="text-white font-medium">Ministry of Finance (ITMD)</strong> allowed me to deploy and maintain government-scale platforms. I design scalable backends using <strong className="text-white font-medium">Java Spring Boot</strong> alongside responsive, state-driven user interfaces leveraging the <strong className="text-white font-medium">MERN stack</strong>.
                </p>
              </div>
            </Reveal>
          </div>

          {/* Software Pillars Grid */}
          <div className="space-y-4">
            <Reveal delay={0.4}>
              <h3 className="text-lg font-bold text-white/90 tracking-tight">Core Competencies</h3>
            </Reveal>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <PillarCard
                icon={FiCpu}
                title="Backend Systems"
                description="Developing secure RESTful APIs, MVC controller engines, and scalable microservices architectures."
                techs={['Spring Boot', 'Node.js', 'Express', 'JWT']}
                delay={0.1}
              />
              <PillarCard
                icon={FiLayers}
                title="Full-Stack Web"
                description="Designing modular user dashboards, interactive shopping carts, and third-party integrations."
                techs={['React', 'Next.js', 'Redux', 'Tailwind']}
                delay={0.2}
              />
              <PillarCard
                icon={FiDatabase}
                title="Data Science & ML"
                description="Training supervised classifiers, engineering features, and plotting ROC evaluation curves."
                techs={['Python', 'Pandas', 'Scikit-Learn', 'MySQL']}
                delay={0.3}
              />
            </div>
          </div>
        </div>

        {/* Right Column: Stat Cards Grid */}
        <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:mt-12">
          <StatCard
            number="15+"
            label="Applications Built"
            description="POS platforms, ML notebooks, extensions, and Java web apps."
            delay={0.1}
          />
          <StatCard
            number="ITMD Intern"
            label="Ministry of Finance"
            description="Maintained government audit engines and accounting platforms."
            delay={0.2}
          />
          <StatCard
            number="BSc (Hons)"
            label="Undergraduate SLIIT"
            description="Final-year student specializing in Information Technology."
            delay={0.3}
          />
          <StatCard
            number="AI / ML"
            label="Research Initiatives"
            description="Studying student burnout patterns and booking cancellation trends."
            delay={0.4}
          />
        </div>
      </div>
    </section>
  )
}
