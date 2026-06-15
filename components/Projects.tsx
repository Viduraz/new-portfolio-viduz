'use client'

import { useState } from 'react'
import { projectsData } from '@/lib/data'
import ProjectCard from './ProjectCard'
import Reveal from './Reveal'
import { motion } from 'framer-motion'
import FocusFoxModal from './FocusFoxModal'
import MajModal from './MajModal'
import GuruGedaraModal from './GuruGedaraModal'
import MedicalHistoryModal from './MedicalHistoryModal'
import AgriLankaModal from './AgriLankaModal'
import VehicleRentalModal from './VehicleRentalModal'
import TodoListModal from './TodoListModal'
import MofInternshipModal from './MofInternshipModal'
import HotelCancellationModal from './HotelCancellationModal'
import JayasingheStorelineModal from './JayasingheStorelineModal'

export default function Projects() {
  const [isFocusFoxOpen, setIsFocusFoxOpen] = useState(false)
  const [isMajOpen, setIsMajOpen] = useState(false)
  const [isGuruGedaraOpen, setIsGuruGedaraOpen] = useState(false)
  const [isMedicalHistoryOpen, setIsMedicalHistoryOpen] = useState(false)
  const [isAgriLankaOpen, setIsAgriLankaOpen] = useState(false)
  const [isVehicleRentalOpen, setIsVehicleRentalOpen] = useState(false)
  const [isTodoListOpen, setIsTodoListOpen] = useState(false)
  const [isMofInternshipOpen, setIsMofInternshipOpen] = useState(false)
  const [isHotelCancellationOpen, setIsHotelCancellationOpen] = useState(false)
  const [isJayasingheStorelineOpen, setIsJayasingheStorelineOpen] = useState(false)

  return (
    <section id="projects" className="section-padding max-w-[1200px] mx-auto px-6">
      <div className="flex flex-col items-center text-center gap-4 mb-12">
        <Reveal delay={0.1}>
          <span className="font-mono-label text-[#ff6b00]">
            {"// SELECTED WORK"}
          </span>
        </Reveal>

        <Reveal delay={0.2}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white">
            Projects <span className="text-gradient-amber">{"I've Built"}</span>
          </h2>
        </Reveal>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
        {projectsData.map((project) => (
          <div key={project.slug}>
            <ProjectCard
              project={project}
              onClick={
                project.slug === 'mof-internship'
                  ? () => setIsMofInternshipOpen(true)
                  : project.slug === 'focusfox'
                    ? () => setIsFocusFoxOpen(true)
                    : project.slug === 'hotel-cancellation'
                      ? () => setIsHotelCancellationOpen(true)
                      : project.slug === 'jayasinghe-storeline'
                        ? () => setIsJayasingheStorelineOpen(true)
                        : project.slug === 'maj-25'
                          ? () => setIsMajOpen(true)
                          : project.slug === 'gurugedara'
                            ? () => setIsGuruGedaraOpen(true)
                            : project.slug === 'medical-history'
                              ? () => setIsMedicalHistoryOpen(true)
                              : project.slug === 'agrilanka'
                                ? () => setIsAgriLankaOpen(true)
                                : project.slug === 'vehicle-rental'
                                  ? () => setIsVehicleRentalOpen(true)
                                  : project.slug === 'todo-list'
                                    ? () => setIsTodoListOpen(true)
                                    : undefined
              }
            />
          </div>
        ))}

        {/* Upcoming Projects Sub-section */}
        <div className="flex flex-col items-center text-center gap-4 mt-24 sm:mt-32 mb-12 col-span-full">
          <Reveal delay={0.1}>
            <span className="font-mono-label text-[#4b8eff]">
              {"// UNDER DEVELOPMENT"}
            </span>
          </Reveal>

          <Reveal delay={0.2}>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-white">
              Upcoming <span className="text-gradient-blue">Projects</span>
            </h3>
          </Reveal>
        </div>

        {/* Upcoming Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 col-span-full">
          {/* Coming Soon Placeholder Card 1 */}
        <Reveal duration={0.6} className="h-full">
          <motion.div
            whileHover={{ y: -4 }}
            className="flex flex-col items-center justify-center p-8 sm:p-12 rounded-3xl border-2 border-dashed border-white/10 bg-white/[0.01] text-center h-full min-h-[350px] relative group overflow-hidden"
          >
            {/* Subtle floating overlay circles inside */}
            <div className="absolute w-40 h-40 bg-[#ff6b00]/2 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700 pointer-events-none" />

            <div className="text-4xl mb-4 opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300">
              🛠️
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-white/60 group-hover:text-white transition-colors duration-300 mb-2">
              Next Big Idea
            </h3>
            <p className="text-white/30 text-xs sm:text-sm font-light max-w-xs leading-relaxed mb-6">
              Currently designing and architecting a new microservices project with Spring Cloud & Next.js.
            </p>
            <span className="px-4 py-1.5 rounded-full border border-white/5 text-[10px] font-mono-label text-white/30 group-hover:text-[#ffb693]/80 group-hover:border-[#ff6b00]/30 transition-all duration-300">
              Under Construction
            </span>
          </motion.div>
        </Reveal>

        {/* Coming Soon Placeholder Card 2 */}
        <Reveal duration={0.6} className="h-full">
          <motion.div
            whileHover={{ y: -4 }}
            className="flex flex-col items-center justify-center p-8 sm:p-12 rounded-3xl border-2 border-dashed border-white/10 bg-white/[0.01] text-center h-full min-h-[350px] relative group overflow-hidden"
          >
            <div className="absolute w-40 h-40 bg-[#4b8eff]/2 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700 pointer-events-none" />

            <div className="text-4xl mb-4 opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300">
              🔬
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-white/60 group-hover:text-white transition-colors duration-300 mb-2">
              AI / ML Experiment
            </h3>
            <p className="text-white/30 text-xs sm:text-sm font-light max-w-xs leading-relaxed mb-6">
              Researching LLM integrations and retrieval-augmented generation pipelines for student portals.
            </p>
            <span className="px-4 py-1.5 rounded-full border border-white/5 text-[10px] font-mono-label text-white/30 group-hover:text-[#adc6ff]/80 group-hover:border-[#4b8eff]/30 transition-all duration-300">
              Research & Development
            </span>
          </motion.div>
        </Reveal>
        </div>
      </div>

      <FocusFoxModal isOpen={isFocusFoxOpen} onClose={() => setIsFocusFoxOpen(false)} />
      <MajModal isOpen={isMajOpen} onClose={() => setIsMajOpen(false)} />
      <GuruGedaraModal isOpen={isGuruGedaraOpen} onClose={() => setIsGuruGedaraOpen(false)} />
      <MedicalHistoryModal isOpen={isMedicalHistoryOpen} onClose={() => setIsMedicalHistoryOpen(false)} />
      <AgriLankaModal isOpen={isAgriLankaOpen} onClose={() => setIsAgriLankaOpen(false)} />
      <VehicleRentalModal isOpen={isVehicleRentalOpen} onClose={() => setIsVehicleRentalOpen(false)} />
      <TodoListModal isOpen={isTodoListOpen} onClose={() => setIsTodoListOpen(false)} />
      <MofInternshipModal isOpen={isMofInternshipOpen} onClose={() => setIsMofInternshipOpen(false)} />
      <HotelCancellationModal isOpen={isHotelCancellationOpen} onClose={() => setIsHotelCancellationOpen(false)} />
      <JayasingheStorelineModal isOpen={isJayasingheStorelineOpen} onClose={() => setIsJayasingheStorelineOpen(false)} />
    </section>
  )
}
