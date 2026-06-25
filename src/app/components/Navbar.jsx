'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

const links = [
  { name: 'About', href: '/about' },
  { name: 'Project', href: '/projects' },
  { name: 'Contact', href: '/contact' },
  { name: 'Resume', href: '/resume' },
];

const navListVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const navItemVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0 },
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mt-1">
      <div className="flex justify-between items-center py-2">
        <motion.div
          className="text-2xl font-bold text-blue-500"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link href="/">Arshpreet</Link>
        </motion.div>

        {/* Desktop Nav */}
        <motion.ul
          className="hidden md:flex space-x-10 gap-6 text-white font-medium"
          initial="hidden"
          animate="visible"
          variants={navListVariants}
        >
          {links.map(({ name, href }) => (
            <motion.li key={name} variants={navItemVariants}>
              <Link href={href} className="hover:text-blue-500 duration-200">
                {name}
              </Link>
            </motion.li>
          ))}
        </motion.ul>

        {/* Mobile Toggle Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-3xl text-white"
          >
            {isOpen ? '✖' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden flex flex-col gap-4 items-center bg-white py-8 mt-4"
          >
            {links.map(({ name, href }) => (
              <li key={name}>
                <Link
                  href={href}
                  className="text-gray-700 hover:text-blue-500"
                  onClick={() => setIsOpen(false)}
                >
                  {name}
                </Link>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}
