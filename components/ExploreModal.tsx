// components/ExploreModal.tsx
"use client"

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function ExploreModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  const sections = [
    {
      title: "My Story",
      href: "/story",
      description: "Where I come from, what shaped me, and how I’ve become who I am."
    },
    {
      title: "Dreams in Waiting",
      href: "/dreams",
      description: "Visions of the person I hope to become and the lives I haven't yet lived."
    },
    {
      title: "Path in Motion",
      href: "/path",
      description: "My attempt to bridge the gap between who I am and who I want to be."
    },
    {
      title: "Field Notes from the Edge",
      href: "/experiments",
      description: "Experiments in discomfort, curiosity, and becoming."
    },
    {
      title: "Echoes & Guides",
      href: "/echoes",
      description: "The people, books, and voices that whispered something I needed to hear."
    },
    {
      title: "The Research Shelf",
      href: "/research",
      description: "Where understanding becomes personal knowledge."
    },
    {
      title: "Inner Monologue",
      href: "/monologue",
      description: "Letters to myself, truths I’m not ready to say out loud, and thoughts I can’t ignore."
    }
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="bg-white max-w-2xl w-full rounded-xl p-6 shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-xl font-semibold mb-4">🧭 Explore the Archive</h2>
            <ul className="space-y-4">
              {sections.map(({ title, href, description }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="block p-3 rounded-lg hover:bg-gray-50 transition"
                    onClick={onClose}
                  >
                    <div className="font-medium text-black">{title}</div>
                    <div className="text-sm text-gray-500">{description}</div>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}