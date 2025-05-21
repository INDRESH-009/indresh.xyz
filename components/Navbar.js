"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { sections } from '@/lib/sections';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(prev => !prev);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Placeholder for symmetry on desktop */}
        <div className="hidden md:block w-6" />

        {/* Centered Desktop Links */}
        <div className="flex-1 hidden md:flex justify-center gap-4">
          {/* Home Link */}
          <Link
            href="/"
            className="whitespace-nowrap text-gray-700 hover:text-blue-600"
          >
            Home
          </Link>
          {/* Section Links */}
          {sections.map(({ slug, label }) => (
            <Link
              key={slug}
              href={`/${slug}`}
              className="whitespace-nowrap text-gray-700 hover:text-blue-600"
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Mobile Hamburger Button */}
        <button
          className="md:hidden focus:outline-none ml-auto "
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Animated Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden bg-white shadow-md overflow-hidden"
          >
            <div className="flex flex-col items-center py-2">
              <Link
                href="/"
                className="w-full text-center py-2 text-gray-700 hover:text-blue-600"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              {sections.map(({ slug, label }) => (
                <Link
                  key={slug}
                  href={`/${slug}`}
                  className="w-full text-center py-2 text-gray-700 hover:text-blue-600"
                  onClick={() => setIsOpen(false)}
                >
                  {label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}