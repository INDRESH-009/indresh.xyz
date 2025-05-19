'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import ExploreModal from '@/components/ExploreModal'

export default function Home() {
  const [show, setShow] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => setShow(true), 300)
    return () => clearTimeout(timeout)
  }, [])

  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-white text-black px-6 py-10">
      {/* Top Block: Profile */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center space-y-4"
      >
        <Image
          src="/profile.jpeg" // <-- Replace with your image
          alt="Your Name"
          width={80}
          height={80}
          className="rounded-full border"
        />
        <div className="text-center">
          <h2 className="text-xl font-semibold">Indresh</h2>
          <p className="text-gray-500 text-sm mt-1">
            'Tech Visionary , Founder of Trishul Robotics ,Curator of this archive. Dreamer, builder, and wanderer.
          </p>
        </div>
      </motion.div>

      {/* Intro Section */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="max-w-2xl text-center text-base sm:text-lg text-gray-700 leading-relaxed mt-6"
      >
        <p>
          This is my sanctuary for reflection — a living archive of stories,
          visions, experiments, and inner monologues. It holds the echoes of who I’ve been,
          the blueprints of who I wish to become, and the small steps in between.
        </p>
      </motion.div>

      {/* Hero Line */}
      <motion.h1
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="text-3xl sm:text-4xl font-semibold text-center mt-8"
      >
        A Living Archive of <br />
        <span className="text-gray-500">Who I Was, Am, and Becoming</span>
      </motion.h1>

      {/* Now Section */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="mt-10 text-center text-sm sm:text-base text-gray-700"
      >
        <h3 className="text-md font-medium text-black mb-2">📌 Now</h3>
        <ul className="space-y-1 text-left pl-26 ">
          <li>– Writing my personal site in public</li>
          <li>– Learning TypeScript deeply</li>
          <li>– Doing weekly experiments on attention & silence</li>
          <li>– Reading “The Almanack of Naval Ravikant”</li>
          <li>– Preparing for my next solo trip</li>
        </ul>
      </motion.div>

      {/* Explore Button and Modal */}
      {show && (
        <>
          <motion.button
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            onClick={() => {
              setIsModalOpen(true)
            }}
            className="mt-8 px-6 py-3 rounded-full border border-gray-300 text-sm hover:bg-gray-100 transition-all"
          >
             Explore Archive
          </motion.button>
          <ExploreModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </>
      )}
    </main>
  )
}