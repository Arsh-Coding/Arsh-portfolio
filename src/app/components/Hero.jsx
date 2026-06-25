'use client';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react';
import Link from 'next/link';

export default function Hero() {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-center min-h-[85vh] gap-12 py-10">
      {/* Left Section */}
      <motion.div
        className="w-full lg:w-1/2 flex flex-col gap-8 text-left"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Availability Badge */}
        <div className="flex items-center gap-2 w-max px-4 py-2 rounded-full border border-green-500/30 bg-green-500/10 text-green-500 text-sm font-medium">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
          Available for new opportunities
        </div>

        {/* Heading */}
        <h1 className="text-5xl md:text-6xl font-bold leading-tight text-white">
          Hi, I'm <span className="text-[#7477FF]">Arshpreet</span><br />
          <span className="text-[#7477FF]">Singh</span><br />
          Backend Engineer
        </h1>

        {/* Subheading */}
        <p className="text-gray-400 text-lg max-w-[500px] leading-relaxed">
          Building <span className="text-white font-medium">Node.js microservices</span> at JungleWorks.
          <br />
          MERN stack · REST APIs · Real-time systems
        </p>

        {/* Stats */}
        <div className="flex flex-wrap gap-8 my-2 items-center">
          <div className="flex flex-col">
            <span className="text-[#7477FF] text-3xl font-medium">~30%</span>
            <span className="text-gray-500 text-sm">API latency<br />reduced</span>
          </div>
          <div className="w-[1px] h-12 bg-gray-800"></div>
          <div className="flex flex-col">
            <span className="text-[#7477FF] text-3xl font-medium">10K+</span>
            <span className="text-gray-500 text-sm">monthly<br />transactions</span>
          </div>
          <div className="w-[1px] h-12 bg-gray-800"></div>
          <div className="flex flex-col">
            <span className="text-[#7477FF] text-3xl font-medium">1yr+</span>
            <span className="text-gray-500 text-sm">professional<br />exp.</span>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap items-center gap-6 mt-2">
          <Link href="/projects">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-[#7477FF] text-white font-medium rounded-md hover:bg-[#5b5de5] transition"
            >
              View projects
            </motion.button>
          </Link>
          <Link href="/resume">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-8 py-3 bg-transparent border border-gray-700 text-gray-300 font-medium rounded-md hover:bg-gray-800 transition"
            >
              Resume <ExternalLink size={16} />
            </motion.button>
          </Link>
        </div>

        {/* Social Links */}
        <div className="flex flex-wrap items-center gap-8 mt-6">
          <a href="https://github.com/Arsh-Coding" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-gray-500 hover:text-gray-300 transition">
            <Github size={20} /> <span className="text-sm">arshpreet-singh-mern</span>
          </a>
          <a href="https://www.linkedin.com/in/arshpreet-singh-mern/" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-gray-500 hover:text-gray-300 transition">
            <Linkedin size={20} /> <span className="text-sm">LinkedIn</span>
          </a>
          <a href="mailto:arshpreet.singh.dev@gmail.com" className="flex items-center gap-2 text-gray-500 hover:text-gray-300 transition">
            <Mail size={20} /> <span className="text-sm">Email</span>
          </a>
        </div>
      </motion.div>

      {/* Right Section (Code Editor Mockup) */}
      <motion.div
        className="w-full lg:w-[450px]"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="bg-[#171B26] border border-[#272B36] rounded-xl overflow-hidden shadow-2xl">
          {/* Editor Header */}
          <div className="flex items-center gap-2 px-4 py-3 border-b border-[#272B36]">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-[#FF5F56]"></div>
              <div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
              <div className="w-3 h-3 rounded-full bg-[#27C93F]"></div>
            </div>
            <div className="mx-auto text-xs text-gray-500 font-mono">arshpreet.json</div>
          </div>

          {/* Editor Content */}
          <div className="p-6 font-mono text-sm leading-relaxed overflow-x-auto">
            <div className="text-gray-500 mb-4">// Arshpreet Singh Esher</div>
            <div className="text-white">{"{"}</div>
            <div className="pl-6">
              <span className="text-[#89b4fa]">"role"</span><span className="text-white">: </span><span className="text-[#a6e3a1]">"Backend Engineer"</span><span className="text-white">,</span><br />
              <span className="text-[#89b4fa]">"company"</span><span className="text-white">: </span><span className="text-[#a6e3a1]">"JungleWorks"</span><span className="text-white">,</span><br />
              <span className="text-[#89b4fa]">"experience"</span><span className="text-white">: </span><span className="text-[#a6e3a1]">"1+ year"</span><span className="text-white">,</span><br />
              <span className="text-[#89b4fa]">"promoted"</span><span className="text-white">: </span><span className="text-[#a6e3a1]">true</span><span className="text-white">,</span><br />
              <span className="text-[#89b4fa]">"stack"</span><span className="text-white">: [</span><br />
              <div className="pl-6">
                <span className="text-[#a6e3a1]">"Node.js"</span><span className="text-white">, </span><span className="text-[#a6e3a1]">"Express"</span><span className="text-white">,</span><br />
                <span className="text-[#a6e3a1]">"MongoDB"</span><span className="text-white">, </span><span className="text-[#a6e3a1]">"React"</span>
              </div>
              <span className="text-white">],</span><br />
              <span className="text-[#89b4fa]">"openToWork"</span><span className="text-white">: </span><span className="text-[#a6e3a1]">true</span>
            </div>
            <div className="text-white">{"}"}</div>
          </div>

          {/* Skill Tags */}
          <div className="flex flex-wrap gap-3 px-6 pb-8 mt-2">
            {['Node.js', 'Express', 'MongoDB', 'Socket.io', 'Docker', 'Stripe', 'React', 'Next.js'].map(skill => (
              <span key={skill} className="px-3 py-1.5 rounded-md border border-[#272B36] text-gray-400 text-xs font-medium hover:bg-[#272B36] transition-colors cursor-default">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
